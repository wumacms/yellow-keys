# Vite SSG 全站静态化实施方案

本方案旨在将当前的 Vite + Vue 3 项目通过 `vite-ssg` 插件实现全站静态化（Static Site Generation），以提升 SEO 友好度并优化首屏加载性能。

## 1. 核心目标
- **SEO 优化**：预渲染所有页面为静态 HTML，使搜索引擎爬虫能够直接抓取内容。
- **性能提升**：减少客户端渲染时间，用户访问时直接展示已生成的页面。
- **零成本部署**：生成纯静态文件，可无缝部署至 GitHub Pages、Nginx 或 S3。

## 2. 实施步骤

### 2.1 安装依赖
在项目根目录执行以下命令：
```bash
pnpm add -D vite-ssg
```

### 2.2 重构入口文件 `src/main.ts`
由于 `vite-ssg` 接管了应用的生命周期，需要更改导出方式。

```typescript
import { ViteSSG } from 'vite-ssg'
import './style.css'
import App from './App.vue'
import { routes } from './router'

// 导出 createApp 供 vite-ssg 在构建时使用
export const createApp = ViteSSG(
  App,
  { routes },
  ({ app, router, isClient, initialState }) => {
    // 可以在此处安装插件
    // app.use(pinia)
  }
)
```

### 2.3 调整路由配置 `src/router/index.ts`
将 `routes` 独立导出，并确保路径配置兼容 SSG。

```typescript
import type { RouteRecordRaw } from 'vue-router'

// 推荐将 routes 提取为独立导出
export const routes: RouteRecordRaw[] = [
  {
    path: '/',
    name: 'home',
    component: () => import('../views/IndexView.vue')
  },
  {
    path: '/news',
    name: 'news',
    component: () => import('../views/NewsView.vue')
  },
  // 更多路由...
]
```

### 2.4 更新构建脚本 `package.json`
修改 `build` 脚本以触发静态生成。

```json
{
  "scripts": {
    "dev": "vite",
    "build": "vite-ssg build",
    "preview": "vite preview"
  }
}
```

### 2.5 Vite 插件配置 `vite.config.ts`
配置 SSG 相关的选项，如压缩、动态路由预渲染等。

```typescript
export default defineConfig({
  // ... 其他配置
  ssgOptions: {
    script: 'async',
    formatting: 'minify',
    // 如果有动态路由（如 /news/:id），需在此配置或通过逻辑获取
    includedRoutes(paths, routes) {
      return paths // 默认会抓取所有静态路由
    }
  }
})
```

## 3. 注意事项 (Gotchas)

### 3.1 浏览器 API 适配
在渲染阶段没有 `window` 对象。
- **错误方案**：直接在 `setup` 顶层使用 `localStorage`。
- **正确方案**：将相关操作放在 `onMounted` 钩子中，或使用 `isClient` 判断。

### 3.2 动态路由处理
对于无法通过链接自动爬取的路径，必须在 `ssgOptions.includedRoutes` 中显式列出，否则对应的页面将不会生成 HTML。

### 3.3 图片与资源引用
确保所有静态资源使用相对路径或通过 Vite 处理，避免在生成的静态 HTML 中出现路径死链。

## 4. 产物验证
执行 `pnpm run build` 后，检查 `dist/` 目录：
- 应当看到每个路由对应一个文件夹（如 `dist/news/index.html`）。
- 首页对应 `dist/index.html`。
- 所有的 HTML 文件应包含首屏显示的文本内容，而非仅有一个空容器。
