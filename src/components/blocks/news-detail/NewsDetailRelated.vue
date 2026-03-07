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
    <section class="bg-black py-16">
        <div class="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
            <h2 class="text-2xl md:text-3xl font-black text-yellow-300 mb-8">📌 相关推荐</h2>
            <div class="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
                <!-- 推荐卡片 -->
                <div v-for="news in relatedNews" :key="news.id"
                    class="bg-zinc-900 p-5 rounded-2xl border border-yellow-300/20 hover:border-yellow-300 transition flex flex-col">
                    <span
                        class="bg-yellow-300/20 text-yellow-300 text-xs px-2 py-1 rounded-full inline-block mb-3 w-fit">
                        {{ news.category }}
                    </span>
                    <h3 class="font-bold text-white text-lg mb-2 line-clamp-2">{{ news.title }}</h3>
                    <p class="text-sm text-gray-400 mb-4 line-clamp-2 flex-grow">{{ news.summary }}</p>
                    <div class="flex justify-between items-center mt-auto">
                        <span class="text-gray-500 text-xs">{{ news.date }}</span>
                        <router-link :to="news.link"
                            class="text-yellow-300 text-sm font-bold border-b border-yellow-300/30 hover:border-yellow-300 transition">
                            阅读
                        </router-link>
                    </div>
                </div>
            </div>
        </div>
    </section>
</template>
