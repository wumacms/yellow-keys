<script setup lang="ts">
import type { LinkedArticle } from '@/types'

defineProps<{
  /** 上一篇文章信息配置 */
  prevArticle?: LinkedArticle
  /** 下一篇文章信息配置 */
  nextArticle?: LinkedArticle
}>()
</script>

<template>
    <!-- 4. 上下篇文章导航 (版心统一) -->
    <section class="bg-gray-50 dark:bg-zinc-950 py-12 transition-colors duration-500">
        <div class="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
            <div class="grid md:grid-cols-2 gap-6">
                <!-- 上一篇 -->
                <router-link v-if="prevArticle" :to="prevArticle.link"
                    class="bg-white dark:bg-black border border-gray-100 dark:border-yellow-300/20 rounded-2xl p-5 hover:border-yellow-500 dark:hover:border-yellow-300 shadow-sm transition-all duration-300 group">
                    <span class="text-gray-500 dark:text-gray-500 text-sm flex items-center gap-1 mb-2">← 上一篇</span>
                    <h4 class="font-bold text-gray-900 dark:text-white text-lg group-hover:text-yellow-600 dark:group-hover:text-yellow-300 transition-colors duration-300">{{ prevArticle.title }}</h4>
                    <p class="text-gray-600 dark:text-gray-400 text-sm mt-1">{{ prevArticle.date }}</p>
                </router-link>
                <div v-else></div>

                <!-- 下一篇 -->
                <router-link v-if="nextArticle" :to="nextArticle.link"
                    class="bg-white dark:bg-black border border-gray-100 dark:border-yellow-300/20 rounded-2xl p-5 hover:border-yellow-500 dark:hover:border-yellow-300 shadow-sm transition-all duration-300 group text-right">
                    <span class="text-gray-500 dark:text-gray-500 text-sm flex items-center justify-end gap-1 mb-2">下一篇 →</span>
                    <h4 class="font-bold text-gray-900 dark:text-white text-lg group-hover:text-yellow-600 dark:group-hover:text-yellow-300 transition-colors duration-300">{{ nextArticle.title }}</h4>
                    <p class="text-gray-600 dark:text-gray-400 text-sm mt-1">{{ nextArticle.date }}</p>
                </router-link>
                <div v-else></div>
            </div>
        </div>
    </section>

</template>
