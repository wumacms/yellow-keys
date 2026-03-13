<script setup lang="ts">
import type { TagItem } from '@/types'

defineProps<{
  /** 过滤标签的前缀文本 */
  label?: string
  /** 标签数组 */
  tags: TagItem[]
}>()
</script>

<template>
  <section class="bg-white dark:bg-black py-12 border-y border-gray-100 dark:border-yellow-300/20 transition-colors duration-500">
    <div class="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
      <div class="flex flex-wrap items-center justify-center gap-3 text-sm">
        <span v-if="label" class="text-yellow-600 dark:text-yellow-300 font-bold mr-2">{{ label }}</span>
        <a v-for="tag in tags" :key="tag.label" href="#" :class="[
          tag.active ? 'text-yellow-600 dark:text-yellow-300 bg-yellow-50 dark:bg-yellow-300/10' : 'text-gray-600 dark:text-gray-300 bg-gray-50 dark:bg-zinc-900',
          'border border-gray-200 dark:border-yellow-300/30 px-4 py-2 rounded-full hover:bg-yellow-500 dark:hover:bg-yellow-300 hover:text-white dark:hover:text-black transition-all duration-300'
        ]">
          {{ tag.label }}
        </a>
      </div>
    </div>
  </section>

</template>
