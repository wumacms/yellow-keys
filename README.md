# Hello, Tailwind CSS! 🚀

一个基于 **Vue 3** + **Vite 7** + **Tailwind CSS 4** 构建的极简响应式 Web 项目。

## ✨ 特性

- ⚡ **Vite 7** - 极速的开发与构建工具。
- 🎨 **Tailwind CSS 4** - 使用最新的配置方式和现代化的 CSS 工具。
- 📦 **Vue 3** - 渐进式 JavaScript 框架，采用 Script Setup 语法。
- 🛣️ **Vue Router 4** - 实现前端组件路由，支持多页面导航（如首页、校区、课程、名师、新闻、活动等）。
- 🔥 **响应式设计** - 移动端优先，多终端适配，使用 Tailwind 响应式工具类构建漂亮的 UI。

## 🛠️ 技术栈

- [Vue 3](https://vuejs.org/) - 前端生态核心框架
- [Vue Router 4](https://router.vuejs.org/) - 路由管理
- [Vite 7](https://vitejs.dev/) - 构建工具
- [Tailwind CSS 4](https://tailwindcss.com/) - CSS 框架
- [PNPM](https://pnpm.io/) - 包管理器

## 📂 项目结构

```text
├── src/
│   ├── assets/       # 静态资源（图片、字体等）
│   ├── components/   # 可复用组件（按业务线划分的各个区块 widgets/blocks）
│   ├── data/         # 页面展示依赖的数据源库
│   ├── router/       # Vue Router 路由配置
│   ├── views/        # 页面视图组件（Index, Campuses, Courses 等）
│   ├── App.vue       # 主应用组件
│   ├── main.js       # 入口文件
│   └── style.css     # 全局样式（引入 Tailwind）
├── public/           # 静态资源目录（原封不动复制到 dist，存放项目图片块等）
├── index.html        # HTML 模版
├── vite.config.js    # Vite 配置文件
└── package.json      # 项目配置文件
```

## 🚀 快速开始

### 1. 克隆项目

```bash
git clone https://gitee.com/xuebusi/yellow-keys.git
cd yellow-keys
```

### 2. 安装依赖

```bash
pnpm install
```

### 3. 运行开发服务器

```bash
pnpm run dev
```

### 4. 构建生产版本

```bash
pnpm run build
```

## 📄 开源协议

本项目遵循 [MIT License](LICENSE) 协议。