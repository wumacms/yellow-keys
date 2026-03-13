<script setup lang="ts">
import type { CourseItem } from '@/types'

withDefaults(defineProps<{
  /** 栏目主标题 */
  title?: string
  /** 栏目副标题 */
  subtitle?: string
  /** 课程列表数据 */
  courses: CourseItem[]
  /** 底部行动项配置 */
  cta?: {
    text: string
    href: string
    icon?: string
  }
}>(), {
  title: '全课程一览',
  subtitle: '每个孩子/成人都能找到自己的音乐方向',
  courses: () => [],
  cta: () => ({
    text: '下载详细课程手册',
    href: '#',
    icon: '📥'
  })
})
</script>

<template>
  <!-- 4. 所有课程一览表 (卡片式网格，显示更多课程) -->
  <section class="bg-white dark:bg-zinc-950 py-20 transition-colors duration-500">
    <div class="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
      <div class="text-center mb-12">
        <h2 class="text-3xl md:text-4xl font-black text-yellow-600 dark:text-yellow-300 transition-colors duration-500">{{ title }}</h2>
        <p class="text-gray-600 dark:text-gray-400 text-lg mt-2">{{ subtitle }}</p>
      </div>
      <div class="grid sm:grid-cols-2 lg:grid-cols-3 gap-5">
        <!-- 课程条目 -->
        <div v-for="(course, index) in courses" :key="index"
          class="bg-gray-50 dark:bg-black p-5 rounded-2xl border border-gray-100 dark:border-yellow-300/20 shadow-sm flex items-start gap-4 transition-all duration-500">
          <span class="text-3xl bg-yellow-500/10 dark:bg-yellow-300/10 w-12 h-12 flex items-center justify-center rounded-xl transition-colors duration-500">{{ course.icon
            }}</span>
          <div>
            <h3 class="font-bold text-gray-900 dark:text-white text-lg transition-colors duration-500">{{ course.title }}</h3>
            <p class="text-sm text-gray-600 dark:text-gray-400 transition-colors duration-500">{{ course.description }}</p>
          </div>
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
