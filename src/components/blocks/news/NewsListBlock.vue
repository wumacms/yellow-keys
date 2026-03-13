<script setup lang="ts">
import { RouterLink } from 'vue-router'
import type { NewsItem, PaginationItem } from '@/types'

withDefaults(defineProps<{
  /** 区块主标题 */
  title?: string
  /** 新闻列表配置 */
  newsItems: NewsItem[]
  /** 分页配置 */
  pagination?: PaginationItem[]
}>(), {
  title: '📰 最新新闻 · 一览',
  newsItems: () => [],
  pagination: () => [
    { page: 1, active: true },
    { page: 2, active: false },
    { page: 3, active: false },
    { page: 4, active: false },
    { page: 12, active: false }
  ]
})

const isInternal = (href?: string) => href && href.startsWith('/') && !href.startsWith('//')
</script>

<template>
  <!-- 4. 新闻列表 (网格形式，类似课程一览，但带日期和摘要) -->
  <section class="bg-white dark:bg-zinc-950 py-20 transition-colors duration-500">
    <div class="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
      <h2 class="text-3xl md:text-4xl font-black text-center text-yellow-600 dark:text-yellow-300 mb-14 transition-colors duration-500">{{ title }}</h2>
      <div class="grid sm:grid-cols-2 lg:grid-cols-3 gap-6 text-gray-900 dark:text-white">
        <div v-for="(news, index) in newsItems" :key="index"
          class="bg-gray-50 dark:bg-black p-5 rounded-2xl border border-gray-100 dark:border-yellow-300/20 hover:border-yellow-500 dark:hover:border-yellow-300 shadow-sm transition-all duration-500">
          <span class="bg-yellow-500/10 dark:bg-yellow-300/20 text-yellow-600 dark:text-yellow-300 text-xs px-2 py-1 rounded-full inline-block mb-3 border border-yellow-500/20 dark:border-yellow-300/30">
            {{ news.category }}
          </span>
          <h3 class="font-bold text-gray-900 dark:text-white text-lg mb-2">{{ news.title }}</h3>
          <p class="text-sm text-gray-600 dark:text-gray-400 mb-3">{{ news.summary }}</p>
          <div class="flex justify-between items-center">
            <span class="text-gray-500 dark:text-gray-500 text-xs">{{ news.date }}</span>
            <RouterLink v-if="isInternal(news.link)" :to="news.link" class="text-yellow-600 dark:text-yellow-300 text-sm font-bold border-b border-yellow-500/30 dark:border-yellow-300/30 hover:text-yellow-700 dark:hover:text-yellow-200 transition-colors duration-300">阅读</RouterLink>
            <a v-else :href="news.link" class="text-yellow-600 dark:text-yellow-300 text-sm font-bold border-b border-yellow-500/30 dark:border-yellow-300/30 hover:text-yellow-700 dark:hover:text-yellow-200 transition-colors duration-300">阅读</a>
          </div>
        </div>
      </div>
      <!-- 加载更多 / 页码 -->
      <div class="flex justify-center mt-12 gap-2">
        <template v-for="(p, index) in pagination" :key="index">
          <a href="#" v-if="p.page !== 12"
            :class="[
              p.active ? 'bg-yellow-500 dark:bg-yellow-300 text-white dark:text-black' : 'bg-gray-100 dark:bg-zinc-800 text-gray-600 dark:text-gray-300 hover:bg-yellow-500 dark:hover:bg-yellow-300 hover:text-white dark:hover:text-black',
              'w-10 h-10 rounded-full flex items-center justify-center font-bold transition-all duration-300 text-center shadow-sm'
            ]">
            {{ p.page }}
          </a>
          <template v-else>
            <span class="text-gray-400 dark:text-gray-600 self-end px-2">...</span>
            <a href="#"
              class="bg-gray-100 dark:bg-zinc-800 text-gray-600 dark:text-gray-300 w-10 h-10 rounded-full flex items-center justify-center font-bold hover:bg-yellow-500 dark:hover:bg-yellow-300 hover:text-white dark:hover:text-black transition-all duration-300 shadow-sm">
              {{ p.page }}
            </a>
          </template>
        </template>
      </div>
    </div>
  </section>

</template>
