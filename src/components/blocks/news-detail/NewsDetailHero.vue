<script setup lang="ts">
defineProps<{
  /** 文章分类 */
  category?: string
  /** 发布日期 */
  date?: string
  /** 阅读数量 */
  views?: string
  /** 文章大标题 */
  title: string
  /** 采编作者 */
  author?: string
  /** 地点或校区 */
  location?: string
  /** 背景图片 URL */
  bgImage?: string
}>()
</script>

<template>
    <!-- 1. Hero区域：配图作为背景 + 颜色蒙版，版心内容统一 -->
    <section class="relative py-24 md:py-32 overflow-hidden">
        <!-- 背景图片 (原文章主图) 带深色蒙版 -->
        <div class="absolute inset-0 z-0">
            <img class="w-full h-full object-cover"
                :src="bgImage"
                alt="学员获奖现场" loading="lazy">
            <!-- 深色蒙版 (黑黄渐变/纯黑透明) 确保文字清晰 -->
            <div class="absolute inset-0 bg-gradient-to-t from-black via-black/80 to-black/60"></div>
        </div>

        <!-- 版心内容 (与页面其他区块版心一致: max-w-4xl) -->
        <div class="relative z-10 max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
            <!-- 面包屑 (在深色背景上依然清晰) -->
            <div class="text-sm text-gray-300 mb-4">
                <router-link to="/news" class="hover:text-yellow-300 transition">新闻</router-link> <span
                    class="mx-2 text-gray-400">/</span>
                <router-link to="/news" class="hover:text-yellow-300 transition">更多热点</router-link> <span
                    class="mx-2 text-gray-400">/</span>
                <span class="text-yellow-300">正文</span>
            </div>
            <!-- 文章分类标签 -->
            <div class="flex gap-3 items-center mb-4">
                <span v-if="category" class="bg-yellow-300 text-black text-xs px-3 py-1 rounded-full font-bold">{{ category }}</span>
                <span v-if="date" class="text-gray-200 text-sm">{{ date }}</span>
                <span v-if="views" class="text-gray-200 text-sm">🔥 阅读 {{ views }}</span>
            </div>
            <!-- 主标题 (更大更突出) -->
            <h1 class="text-4xl md:text-5xl lg:text-6xl font-black text-yellow-300 leading-tight drop-shadow-lg">
                {{ title }}</h1>
            <!-- 副标题/作者 -->
            <div class="flex items-center gap-4 mt-6 text-gray-200">
                <span v-if="author">📝 采编：{{ author }}</span>
                <span v-if="location">📍 {{ location }}</span>
            </div>
        </div>
    </section>
</template>
