<script setup lang="ts">
import type { PastEvent } from '@/types'

withDefaults(defineProps<{
  /** 栏目主标题 */
  title?: string
  /** 栏目副标题 */
  subtitle?: string
  /** 往期活动列表 */
  pastEvents: PastEvent[]
  /** 底部行动项配置 */
  cta?: {
    text: string
    href: string
  }
}>(), {
  title: '📸 往期精彩回顾',
  subtitle: '每一次登台，都是成长的见证',
  pastEvents: () => [],
  cta: () => ({
    text: '观看更多活动视频',
    href: '#'
  })
})
</script>

<template>
  <!-- 5. 往期活动回顾 (左文右图+案例风格, 展示精彩瞬间) 鼓励用户参与未来活动 -->
  <section class="bg-black py-20">
    <div class="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
      <div class="text-center mb-12">
        <h2 class="text-3xl md:text-4xl font-black text-yellow-300">{{ title }}</h2>
        <p class="text-gray-400 text-lg mt-2">{{ subtitle }}</p>
      </div>
      <div class="grid md:grid-cols-3 gap-6">
        <div v-for="(event, index) in pastEvents" :key="index"
          class="bg-zinc-900 rounded-3xl overflow-hidden border border-yellow-300/20">
          <img :src="event.image" :alt="event.title" class="h-56 w-full object-cover">
          <div class="p-4 text-white">
            <span class="text-yellow-300 text-sm font-bold">{{ event.date }}</span>
            <h4 class="font-bold text-white">{{ event.title }}</h4>
            <p class="text-xs text-gray-400 mt-1">{{ event.description }}</p>
          </div>
        </div>
      </div>
      <div class="text-center mt-10">
        <a :href="cta.href"
          class="border-2 border-yellow-300 text-yellow-300 px-8 py-3 rounded-full font-bold inline-block hover:bg-yellow-300 hover:text-black transition">
          📺 {{ cta.text }}
        </a>
      </div>
    </div>
  </section>
</template>
