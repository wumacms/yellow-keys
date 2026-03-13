<script setup lang="ts">
import type { StatItem } from '@/types'

defineProps<{
  /** 统计数据列表配置 */
  stats: StatItem[]
}>()
</script>

<template>
  <!-- 统计区块 及 CTA 融合 -->
  <section class="bg-gray-50 dark:bg-black py-16 border-y border-gray-100 dark:border-yellow-300/20 transition-colors duration-500">
    <div class="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
      <div class="grid grid-cols-2 md:grid-cols-4 gap-6 text-center">
        <div v-for="(stat, index) in stats" :key="index">
          <div class="text-5xl font-black text-yellow-600 dark:text-yellow-300">{{ stat.value }}</div>
          <div class="text-gray-600 dark:text-gray-400 font-medium">{{ stat.label }}</div>
        </div>
      </div>
    </div>
  </section>
</template>
