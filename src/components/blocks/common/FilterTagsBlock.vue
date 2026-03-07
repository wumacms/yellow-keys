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
  <section class="bg-black py-12 border-y border-yellow-300/20">
    <div class="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
      <div class="flex flex-wrap items-center justify-center gap-3 text-sm">
        <span v-if="label" class="text-yellow-300 font-bold mr-2">{{ label }}</span>
        <a v-for="tag in tags" :key="tag.label" href="#" :class="[
          tag.active ? 'text-yellow-300' : 'text-gray-300',
          'bg-zinc-900 border border-yellow-300/30 px-4 py-2 rounded-full hover:bg-yellow-300 hover:text-black transition'
        ]">
          {{ tag.label }}
        </a>
      </div>
    </div>
  </section>
</template>
