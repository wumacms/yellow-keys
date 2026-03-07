<script setup lang="ts">
import type { FeaturedNews, HotNewsItem } from '@/types'

withDefaults(defineProps<{
  /** 头部配置 */
  header?: {
    title: string
    moreLink: string
  }
  /** 焦点新闻配置 */
  featuredNews: FeaturedNews
  /** 热点新闻列表配置 */
  hotNews: HotNewsItem[]
}>(), {
  header: () => ({
    title: '🔥 热点 · 聚焦',
    moreLink: '#'
  }),
  hotNews: () => []
})
</script>

<template>
  <!-- 3. 置顶/热点新闻 (大卡片突出显示) 类似活动页面的热门推荐 -->
  <section class="bg-black pt-16 pb-8">
    <div class="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
      <div class="flex justify-between items-end mb-10 text-white">
        <h2 class="text-3xl md:text-4xl font-black text-yellow-300">{{ header.title }}</h2>
        <a :href="header.moreLink"
          class="text-yellow-300 border-b border-yellow-300/30 pb-0.5 text-sm font-bold hover:text-white transition">更多热点
          →</a>
      </div>
      <!-- 置顶大新闻: 学员国际比赛获奖 -->
      <div
        class="bg-zinc-900 rounded-3xl border-2 border-yellow-300/30 overflow-hidden mb-8 hover:border-yellow-300 transition">
        <div class="grid md:grid-cols-2">
          <div class="h-80 md:h-auto overflow-hidden">
            <img :src="featuredNews.image" :alt="featuredNews.title" class="w-full h-full object-cover">
          </div>
          <div class="p-8 flex flex-col justify-center">
            <div class="flex gap-2 items-center mb-3">
              <span class="bg-yellow-300 text-black text-xs font-bold px-3 py-1 rounded-full">
                {{ featuredNews.badge }}
              </span>
              <span class="text-gray-400 text-sm">{{ featuredNews.date }}</span>
            </div>
            <h3 class="text-3xl font-black text-white mb-3">{{ featuredNews.title }}</h3>
            <p class="text-gray-300 mb-4">{{ featuredNews.description }}</p>
            <div class="flex gap-3">
              <template v-for="(btn, index) in featuredNews.buttons" :key="index">
                <a :href="btn.href" v-if="btn.primary"
                  class="bg-yellow-300 text-black px-6 py-3 rounded-full font-bold text-sm hover:bg-yellow-200 transition">
                  {{ btn.text }}
                </a>
                <a :href="btn.href" v-else
                  class="border border-yellow-300 text-yellow-300 px-6 py-3 rounded-full font-bold text-sm hover:bg-yellow-300 hover:text-black transition">
                  {{ btn.text }}
                </a>
              </template>
            </div>
          </div>
        </div>
      </div>
      <!-- 两个次要热点并排 -->
      <div class="grid md:grid-cols-2 gap-6">
        <div v-for="(item, index) in hotNews" :key="index"
          class="bg-zinc-900 rounded-2xl border border-yellow-300/20 overflow-hidden flex flex-col md:flex-row hover:border-yellow-300 transition">
          <div class="md:w-2/5 h-40 shrink-0 overflow-hidden">
            <img :src="item.image" :alt="item.title" class="w-full h-full object-cover">
          </div>
          <div class="p-5 md:w-3/5">
            <span class="bg-yellow-300/20 text-yellow-300 text-xs px-2 py-1 rounded-full">{{ item.category }}</span>
            <h4 class="font-bold text-white text-lg mt-2">{{ item.title }}</h4>
            <p class="text-gray-400 text-sm">{{ item.summary }}</p>
            <a :href="item.link" class="inline-block mt-3 text-yellow-300 text-sm font-bold border-b border-yellow-300/30">
              查看详情 →
            </a>
          </div>
        </div>
      </div>
    </div>
  </section>
</template>
