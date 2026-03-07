# Yellow Keys (黄黑键) 🚀

一个基于 **Vue 3** + **Vite 7** + **Tailwind CSS 4** + **TypeScript** 构建的响应式现代音乐教育 Web 项目。

本项目为“黄黑键”音乐学校量身打造，采用模块化区块设计，支持快速构建丰富的页面展示。

## ✨ 特性

- ⚡ **Vite 7** - 极速的开发与构建工具，利用原生 ESM 优势。
- 🎨 **Tailwind CSS 4** - 使用最新的配置方式（Vite 插件集成）和现代化 CSS 工具。
- 📦 **Vue 3 (Composition API)** - 采用 `<script setup lang="ts">` 语法，逻辑更清晰。
- 🛡️ **TypeScript** - 全程类型守护，显著提升代码健壮性与开发体验。
- 🧩 **组件化区块设计** - 页面由可复用的 `Blocks` 组成（如 Hero, Features, Testimonials 等），易于扩展和维护。
- 🛣️ **Vue Router 4** - 实现单页面路由，支持首页、课程、名师、新闻、校区等多个视图。
- 🔥 **响应式设计** - 移动端优先，多终端适配，提供极致的视觉体验。

## 🛠️ 技术栈

- [Vue 3](https://vuejs.org/) - 前端生态核心框架
- [Vite 7](https://vitejs.dev/) - 下一代前端构建工具
- [Tailwind CSS 4](https://tailwindcss.com/) - 原子化 CSS 框架
- [TypeScript](https://www.typescriptlang.org/) - 类型安全的 JavaScript 超集
- [Vue Router 4](https://router.vuejs.org/) - 路由管理
- [PNPM](https://pnpm.io/) - 高效的包管理器

## 📂 项目结构

```text
├── src/
│   ├── assets/       # 静态资源（图片、字体等）
│   ├── components/   # 组件库
│   │   └── blocks/     # 业务功能块（按页面/功能划分子目录）
│   ├── data/         # 静态数据源（JSON/TS 格式）
│   ├── router/       # Vue Router 路由配置 (index.ts)
│   ├── types/        # TypeScript 类型声明定义
│   ├── views/        # 页面视图组件（Index, Campuses, Courses 等）
│   ├── App.vue       # 主应用容器
│   ├── main.ts       # 应用入口文件
│   └── style.css     # 全局样式（集成 Tailwind CSS）
├── public/           # 公共静态资源（存放项目引用的固定图片等）
├── docs/             # 项目开发与部署文档
├── index.html        # HTML 模版
├── vite.config.ts    # Vite 配置文件
├── tsconfig.json     # TypeScript 配置文件
└── package.json      # 项目元数据与脚本管理
```

## 📚 文档中心

在开发和维护过程中，可以参考以下详细文档：

- [GitHub Pages 部署指南](docs/github_pages_deploy_notes.md) - 关于如何将项目发布到 GitHub Pages。
- [TypeScript 迁移手册](docs/ts_migration_guide.md) - 记录了从 JS 迁移到 TS 的过程及规范。
- [Vue Blocks 架构分析](docs/vue_blocks_analysis.md) - 深入探讨了本项目采用的区块化组件开发模式。

## 🚀 快速开始

### 1. 克隆项目

```bash
git clone https://github.com/wumacms/yellow-keys.git
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