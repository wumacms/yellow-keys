<script setup lang="ts">
import type { Testimonial } from '@/types'

withDefaults(defineProps<{
  /** 区块主标题 */
  title?: string
  /** 区块描述文本 */
  description?: string
  /** 评价列表配置 */
  testimonials: Testimonial[]
}>(), {
  title: '他们的音乐蜕变',
  description: '来自真实学员和家长的声音',
  testimonials: () => []
})
</script>

<template>
  <!-- 客户案例区块 (学员故事) 使用案例JSON结构 -->
  <section class="bg-zinc-950 py-20">
    <div class="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
      <div class="text-center mb-12">
        <h2 class="text-3xl md:text-4xl font-black text-yellow-300">{{ title }}</h2>
        <p class="text-gray-400">{{ description }}</p>
      </div>
      <div class="grid md:grid-cols-3 gap-6">
        <div v-for="(item, index) in testimonials" :key="index"
          class="bg-black p-6 rounded-3xl border border-yellow-300/20">
          <div class="flex items-center gap-3 mb-4">
            <img :src="item.avatar" class="w-12 h-12 rounded-full" :alt="item.name">
            <div>
              <h3 class="font-bold text-white">{{ item.name }}</h3>
              <p class="text-xs text-yellow-300">{{ item.role }}</p>
            </div>
          </div>
          <p class="text-gray-300 italic">{{ item.content }}</p>
        </div>
      </div>
    </div>
  </section>
</template>
