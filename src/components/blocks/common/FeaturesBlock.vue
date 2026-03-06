<script setup>
/**
 * 特色功能区块组件属性
 * @property {object} header - 头部配置，包含 title 和 subtitle
 * @property {object[]} features - 功能列表，包含 icon, title, description
 * @property {number} columns - 网格列数
 */
defineProps({
  header: Object,
  features: {
    type: Array,
    required: true
  },
  columns: {
    type: Number,
    default: 4
  }
})
</script>

<template>
  <section class="bg-zinc-950 py-20">
    <div class="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
      <div v-if="header" class="text-center mb-12">
        <h2 class="text-3xl md:text-4xl font-black text-yellow-300">{{ header.title }}</h2>
        <p class="text-gray-400 text-lg mt-2">{{ header.subtitle }}</p>
      </div>
      <div :class="[
        'grid gap-6',
        columns === 4 ? 'md:grid-cols-2 lg:grid-cols-4' : 'md:grid-cols-3'
      ]">
        <div v-for="(feat, index) in features" :key="index" class="bg-black p-6 rounded-3xl border border-yellow-300/20">
          <div class="text-5xl mb-3">{{ feat.icon }}</div>
          <h3 class="text-xl font-bold text-yellow-300">{{ feat.title }}</h3>
          <p class="text-gray-400 text-sm mt-2">{{ feat.description }}</p>
        </div>
      </div>
    </div>
  </section>
</template>
