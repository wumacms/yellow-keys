<script setup lang="ts">
import type { CalendarEvent } from '@/types'

withDefaults(defineProps<{
  /** 栏目主标题 */
  title?: string
  /** 活动数据列表 */
  events: CalendarEvent[]
  /** 底部行动项配置 */
  cta?: {
    text: string
    href: string
    icon?: string
  }
}>(), {
  title: '📅 四月活动日历',
  events: () => [],
  cta: () => ({
    text: '下载四月活动日历',
    href: '#',
    icon: '📆'
  })
})
</script>

<template>
  <!-- 4. 活动日历/时间轴 (用网格展示近期所有活动, 沿用课程一览卡片风格) -->
  <section class="bg-white dark:bg-zinc-950 py-20 transition-colors duration-500">
    <div class="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
      <h2 class="text-3xl md:text-4xl font-black text-center text-yellow-600 dark:text-yellow-300 mb-14 transition-colors duration-500">{{ title }}</h2>
      <div class="grid sm:grid-cols-2 lg:grid-cols-3 gap-5">
        <div v-for="(event, index) in events" :key="index"
          class="bg-gray-50 dark:bg-black p-5 rounded-2xl border border-gray-100 dark:border-yellow-300/20 hover:border-yellow-500 dark:hover:border-yellow-300 transition-all duration-500 text-gray-900 dark:text-white shadow-sm">
          <div class="flex justify-between items-start">
            <span class="bg-yellow-500 dark:bg-yellow-300 text-white dark:text-black text-xs font-bold px-3 py-1 rounded-full transition-colors duration-500">{{ event.date }}</span>
            <span class="text-yellow-600 dark:text-yellow-300 text-sm transition-colors duration-500">{{ event.time }}</span>
          </div>
          <h3 class="font-bold text-gray-900 dark:text-white text-lg mt-3">{{ event.title }}</h3>
          <p class="text-sm text-gray-600 dark:text-gray-400">{{ event.description }}</p>
          <p class="text-xs text-gray-400 dark:text-gray-500 mt-2">{{ event.location }}</p>
          <a :href="event.href" class="inline-block mt-3 text-yellow-600 dark:text-yellow-300 text-sm font-bold border-b border-yellow-500/30 dark:border-yellow-300/30 hover:text-yellow-700 dark:hover:text-yellow-200 transition-colors duration-300">
            {{ event.tag }}
          </a>
        </div>
      </div>
      <div class="text-center mt-12">
        <a :href="cta.href"
          class="bg-transparent border-2 border-yellow-500 dark:border-yellow-300 text-yellow-600 dark:text-yellow-300 px-10 py-4 rounded-full font-bold text-lg hover:bg-yellow-500 dark:hover:bg-yellow-300 hover:text-white dark:hover:text-black transition-all duration-300 inline-flex items-center gap-2 shadow-sm">
          {{ cta.icon }} {{ cta.text }}
        </a>
      </div>
    </div>
  </section>

</template>
