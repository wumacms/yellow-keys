# GitHub Pages 部署与 SPA 路由优化记录

本文档记录了在将 Vue 3 项目部署至 GitHub Pages 过程中遇到的常见问题及其解决方案。

## 1. 自动部署权限限制 (Create Pages site failed)

### 问题描述
在使用 GitHub Actions 的 `actions/configure-pages` 插件时，即便设置了 `enablement: true`，流水线仍报错 `Create Pages site failed`。

### 原因分析
GitHub 为了安全起见，禁止 Actions 脚本在未经用户显式授权的情况下，将一个从未开启过 Pages 的仓库自动公开。

### 解决方案
必须手动在 GitHub 仓库中进行一次性初始化：
1. 进入 **Settings > Pages**。
2. 在 **Build and deployment > Source** 中，手动选择 **"GitHub Actions"**。

---

## 2. 静态资源 404 与基准路径 (Base Path)

### 问题描述
部署后页面白屏，控制台提示找不到 `/assets/index-xxx.js` 等资源。

### 原因分析
GitHub Pages 的地址通常是 `https://<user>.github.io/<repo>/`。默认情况下 Vite 会以根目录 `/` 寻找资源，导致寻找的是 `https://<user>.github.io/assets/...`。

### 解决方案
在 `vite.config.ts` 中配置 `base`：
```typescript
export default defineConfig({
  base: '/yellow-keys/', // 必须与仓库名一致
})
```

---

## 3. 刷新页面 404 问题 (SPA 路由局限性)

### 问题描述
使用 `History` 模式导航正常，但一旦在子页面（如 `/courses`）刷新浏览器，则会出现 GitHub 官方的 404 页面。

### 原因分析
GitHub Pages 是一个静态网站托管服务。当刷新 `/courses` 时，服务器会寻找名为 `courses` 的文件或目录，找不到则返回 404。它并不理解 Vue 构建的单页应用（SPA）路由逻辑。

### 解决方案
我们将路由模式切换为 **Hash 模式**：
1. 修改 `src/router/index.ts`：
   - 将 `createWebHistory` 替换为 `createWebHashHistory`。
2. 优势：URL 会变成 `.../#/courses`。刷新时，浏览器只向服务器请求根目录的 `index.html`，剩下的路由解析完全由前端脚本处理，彻底消除了控制台 404 报错。

---

## 4. 内部链接跳转 404 问题

### 问题描述
切换到 Hash 模式后，点击导航栏以外的部分链接（如新闻列表中的“阅读全文”）会导致浏览器跳转到 `域名/news-detail` 产生 404。

### 原因分析
代码中部分组件使用了原生的 `<a>` 标签配合绝对路径（如 `<a href="/news-detail">`）。在生产环境下，原生标签无法识别 Vue 的 Hash 模式，会直接尝试跳转到服务器真实存在的路径。

### 解决方案
1. **替换原生标签**：将项目中跳转内部路由的 `<a>` 标签全部替换为 `<RouterLink>`。
2. **编写智能检测函数**：在组件中添加 `isInternal` 工具函数，自动判断链接是内部路由还是外部 URL：
```typescript
const isInternal = (href?: string) => 
    href && href.startsWith('/') && !href.startsWith('//')
```
3. **动态渲染**：
```html
<RouterLink v-if="isInternal(link)" :to="link">阅读</RouterLink>
<a v-else :href="link">外部链接</a>
```

---

## 5. 跨环境构建配置 (CI/CD 技巧)

### 问题描述
在 `public/` 目录下放置静态的 `404.html` 往往因为无法被 Vite 编译（脚本路径错误）而失效。

### 解决方案
在 `.github/workflows/deploy.yml` 中使用动态复制策略：
```yaml
- name: Build
  run: pnpm build

- name: Create 404 page
  # 复制 Vite 编译后正确的 index.html 确保资源路径完全正确
  run: cp dist/index.html dist/404.html
```
*注：虽然切换到 Hash 模式后不再强制需要 404.html，但保留此步骤可以增强项目的兼容性防御。*
