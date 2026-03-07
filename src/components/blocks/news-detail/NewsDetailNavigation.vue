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
    <section class="bg-zinc-950 py-12">
        <div class="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
            <div class="grid md:grid-cols-2 gap-6">
                <!-- 上一篇 -->
                <router-link v-if="prevArticle" :to="prevArticle.link"
                    class="bg-black border border-yellow-300/20 rounded-2xl p-5 hover:border-yellow-300 transition group">
                    <span class="text-gray-500 text-sm flex items-center gap-1 mb-2">← 上一篇</span>
                    <h4 class="font-bold text-white text-lg group-hover:text-yellow-300">{{ prevArticle.title }}</h4>
                    <p class="text-gray-400 text-sm">{{ prevArticle.date }}</p>
                </router-link>
                <div v-else></div>

                <!-- 下一篇 -->
                <router-link v-if="nextArticle" :to="nextArticle.link"
                    class="bg-black border border-yellow-300/20 rounded-2xl p-5 hover:border-yellow-300 transition group text-right">
                    <span class="text-gray-500 text-sm flex items-center justify-end gap-1 mb-2">下一篇 →</span>
                    <h4 class="font-bold text-white text-lg group-hover:text-yellow-300">{{ nextArticle.title }}</h4>
                    <p class="text-gray-400 text-sm">{{ nextArticle.date }}</p>
                </router-link>
                <div v-else></div>
            </div>
        </div>
    </section>
</template>
