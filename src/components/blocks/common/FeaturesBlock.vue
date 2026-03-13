<script setup lang="ts">
import type { FeatureItem } from '@/types'

withDefaults(defineProps<{
  /** 头部配置 */
  header?: {
    title: string
    subtitle?: string
  }
  /** 功能列表 */
  features: FeatureItem[]
  /** 网格列数 */
  columns?: number
}>(), {
  columns: 4
})
</script>

<template>
  <section class="bg-gray-50 dark:bg-zinc-950 py-20 transition-colors duration-500">
    <div class="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
      <div v-if="header" class="text-center mb-12">
        <h2 class="text-3xl md:text-4xl font-black text-yellow-600 dark:text-yellow-300">{{ header.title }}</h2>
        <p class="text-gray-600 dark:text-gray-400 text-lg mt-2">{{ header.subtitle }}</p>
      </div>
      <div :class="[
        'grid gap-6',
        columns === 4 ? 'md:grid-cols-2 lg:grid-cols-4' : 'md:grid-cols-3'
      ]">
        <div v-for="(feat, index) in features" :key="index" class="bg-white dark:bg-zinc-900 p-6 rounded-3xl border border-gray-200 dark:border-yellow-300/20 shadow-sm transition-all duration-500">
          <div class="text-5xl mb-3">{{ feat.icon }}</div>
          <h3 class="text-xl font-bold text-yellow-600 dark:text-yellow-300">{{ feat.title }}</h3>
          <p class="text-gray-600 dark:text-gray-400 text-sm mt-2">{{ feat.description }}</p>
        </div>
      </div>
    </div>
  </section>
</template>
