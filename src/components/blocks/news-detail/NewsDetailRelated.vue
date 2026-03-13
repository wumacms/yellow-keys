<script setup lang="ts">
import type { RelatedNewsItem } from '@/types'

withDefaults(defineProps<{
  /** 相关推荐新闻列表配置 */
  relatedNews: RelatedNewsItem[]
}>(), {
  relatedNews: () => []
})
</script>

<template>
    <!-- 5. 相关新闻推荐 (版心统一为 max-w-4xl) -->
    <section class="bg-gray-50 dark:bg-black py-16 transition-colors duration-500">
        <div class="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
            <h2 class="text-2xl md:text-3xl font-black text-yellow-600 dark:text-yellow-300 mb-8 transition-colors duration-500">📌 相关推荐</h2>
            <div class="grid sm:grid-cols-2 lg:grid-cols-3 gap-6 text-gray-900 dark:text-white">
                <!-- 推荐卡片 -->
                <div v-for="news in relatedNews" :key="news.id"
                    class="bg-white dark:bg-zinc-900 p-5 rounded-2xl border border-gray-100 dark:border-yellow-300/20 shadow-sm hover:border-yellow-500 dark:hover:border-yellow-300 transition-all duration-500 flex flex-col">
                    <span
                        class="bg-yellow-500/10 dark:bg-yellow-300/20 text-yellow-600 dark:text-yellow-300 text-xs px-2 py-1 rounded-full inline-block mb-3 w-fit border border-yellow-500/20 dark:border-yellow-300/30 transition-colors duration-500">
                        {{ news.category }}
                    </span>
                    <h3 class="font-bold text-gray-900 dark:text-white text-lg mb-2 line-clamp-2 transition-colors duration-500">{{ news.title }}</h3>
                    <p class="text-sm text-gray-600 dark:text-gray-400 mb-4 line-clamp-2 flex-grow transition-colors duration-500">{{ news.summary }}</p>
                    <div class="flex justify-between items-center mt-auto">
                        <span class="text-gray-500 dark:text-gray-500 text-xs">{{ news.date }}</span>
                        <router-link :to="news.link"
                            class="text-yellow-600 dark:text-yellow-300 text-sm font-bold border-b border-yellow-500/30 dark:border-yellow-300/30 hover:text-yellow-700 dark:hover:text-yellow-200 transition-colors duration-300">
                            阅读
                        </router-link>
                    </div>
                </div>
            </div>
        </div>
    </section>

</template>
