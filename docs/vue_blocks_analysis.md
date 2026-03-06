# Vue 区块设计分析与优化方案

本文档对 `src/components/blocks` 目录下的 Vue 区块设计进行了深度分析，并提出了针对性的优化建议。

## 1. 现状评估 (Current State)

### 优点
- **模块化架构**：按业务模块分类，职责清晰。
- **配置驱动**：大部分区块通过 `props` 传递数据，实现了内容与样式的隔离。
- **视觉一致性**：严格执行了品牌色彩规范（黄/黑/锌），Tailwind 类名运用熟练。
- **基础优化**：图片已添加 `loading="lazy"`，部分地方考虑了响应式布局。

### 不足
- **样式重复**：按钮、Badge 等基础元素的 Tailwind 类名在不同区块中大量重复。
- **灵活性受限**：内容展示过于依赖 `props`，缺乏 `slots` 机制，导致复杂内容的嵌套和排版不够便利。
- **类型安全弱**：`props` 定义较为通用（仅 Object/Array），缺乏深层结构定义和验证。
- **组件耦合**：区块配置项（如按钮结构）不统一，增加了父组件的数据适配成本。

---

## 2. 核心优化方向 (Optimization Strategy)

### A. 建立原子级组件库 (Atomic Components)
将常用的 UI 元素提取为基础组件。

```javascript
// src/components/ui/BaseButton.vue (示例)
<template>
  <component 
    :is="isLink ? 'a' : 'button'"
    :href="href"
    :class="[
      'inline-flex items-center justify-center font-bold transition duration-300',
      variant === 'primary' ? 'bg-yellow-300 text-black hover:bg-yellow-200' : 'border-2 border-yellow-300 text-yellow-300 hover:bg-yellow-300 hover:text-black',
      size === 'lg' ? 'px-8 py-4 rounded-full text-lg' : 'px-6 py-2.5 rounded-full text-sm'
    ]"
  >
    <slot />
  </component>
</template>
```

### B. 引入插槽机制 (Slots for Flexibility)
允许父组件自定义关键内容的 HTML 结构。

```vue
<!-- HeroBlock.vue 改进 -->
<h1 class="text-5xl md:text-6xl font-black leading-tight">
  <slot name="title">
    <!-- 默认渲染逻辑 -->
    <template v-for="(part, index) in title" :key="index">
      <span v-if="part.highlight" class="text-yellow-300">{{ part.text }}</span>
      <template v-else>{{ part.text }}</template>
    </template>
  </slot>
</h1>
```

### C. 统一数据模型 (Schema Unification)
定义通用的前端数据契约。

| 概念 | 推荐结构 |
| :--- | :--- |
| **Action/Button** | `{ text: string, href: string, variant: 'primary' | 'secondary' }` |
| **Image** | `{ src: string, alt: string, loading?: 'lazy' | 'eager' }` |
| **Link** | `{ label: string, href: string, active?: boolean }` |

---

## 3. 具体改进清单 (Refinement Checklist)

### 🛠️ 结构改进
- [ ] **创建 `/src/components/ui/` 文件夹**，迁移 `Button`, `Badge`, `Logo`, `SectionContainer`。
- [ ] **优化 `NavBlock`**：增加移动端菜单触发器和侧边栏逻辑。
- [ ] **优化 `HeroBlock`**：将 `image` 修改为支持 `slot` 或 `responsive-image` 组件。

### 🎨 视觉与体验
- [ ] **添加 Hover 动效**：通过 Tailwind 的 `hover:` 类增强卡片的悬浮反馈（如 `hover:scale-105` 或 `hover:shadow-yellow-300/20`）。
- [ ] **骨架屏支持**：为列表类区块（如 `NewsListBlock`）提供 `loading` 状态。
- [ ] **暗色模式增强**：虽然目前是暗色调，但可以提供更细腻的灰度阶梯。

### 🧪 开发规范
- [ ] **完善 Props Validator**：
  ```javascript
  backgroundColor: {
    type: String,
    validator: (v) => ['bg-yellow-300', 'bg-black', 'bg-zinc-900'].includes(v)
  }
  ```

---

## 4. 示例代码重构

以 `CtaBlock.vue` 为例，优化后的代码结构如下：

```vue
<script setup>
import BaseButton from '@/components/ui/BaseButton.vue'
import BaseBadge from '@/components/ui/BaseBadge.vue'

defineProps({
  badge: String,
  title: String,
  description: String,
  buttons: Array,
  variant: {
    type: String,
    default: 'yellow' // yellow | dark
  }
})
</script>

<template>
  <section :class="[variant === 'yellow' ? 'bg-yellow-300' : 'bg-zinc-900', 'py-16']">
    <div class="max-w-3xl mx-auto text-center px-4">
      <BaseBadge v-if="badge" variant="white">{{ badge }}</BaseBadge>
      
      <h2 :class="['text-4xl md:text-5xl font-black mt-6 mb-4', variant === 'yellow' ? 'text-black' : 'text-white']">
        <slot name="title">{{ title }}</slot>
      </h2>
      
      <p :class="['text-lg mb-8', variant === 'yellow' ? 'text-black/80' : 'text-gray-300']">
        <slot name="description">{{ description }}</slot>
      </p>
      
      <div class="flex flex-wrap gap-4 justify-center">
        <BaseButton 
          v-for="(btn, index) in buttons" 
          :key="index"
          v-bind="btn"
        >
          {{ btn.text }}
        </BaseButton>
      </div>
    </div>
  </section>
</template>
```
