<script setup>
/**
 * 新闻列表区块组件属性
 * @property {string} title - 区块主标题
 * @property {object[]} newsItems - 新闻列表配置
 * @property {object[]} pagination - 分页配置
 */
const props = defineProps({
  title: {
    type: String,
    default: '📰 最新新闻 · 一览'
  },
  newsItems: {
    type: Array,
    required: true,
    default: () => []
  },
  pagination: {
    type: Array,
    default: () => [
      { page: 1, active: true },
      { page: 2, active: false },
      { page: 3, active: false },
      { page: 4, active: false },
      { page: 12, active: false }
    ]
  }
})
</script>

<template>
  <!-- 4. 新闻列表 (网格形式，类似课程一览，但带日期和摘要) -->
  <section class="bg-zinc-950 py-20">
    <div class="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
      <h2 class="text-3xl md:text-4xl font-black text-center text-yellow-300 mb-14">{{ title }}</h2>
      <div class="grid sm:grid-cols-2 lg:grid-cols-3 gap-6 text-white">
        <div v-for="(news, index) in newsItems" :key="index"
          class="bg-black p-5 rounded-2xl border border-yellow-300/20 hover:border-yellow-300 transition">
          <span class="bg-yellow-300/20 text-yellow-300 text-xs px-2 py-1 rounded-full inline-block mb-3">
            {{ news.category }}
          </span>
          <h3 class="font-bold text-white text-lg mb-2">{{ news.title }}</h3>
          <p class="text-sm text-gray-400 mb-3">{{ news.summary }}</p>
          <div class="flex justify-between items-center">
            <span class="text-gray-500 text-xs">{{ news.date }}</span>
            <a :href="news.link" class="text-yellow-300 text-sm font-bold border-b border-yellow-300/30">阅读</a>
          </div>
        </div>
      </div>
      <!-- 加载更多 / 页码 -->
      <div class="flex justify-center mt-12 gap-2">
        <template v-for="(p, index) in pagination" :key="index">
          <a href="#" v-if="p.page !== 12"
            :class="[
              p.active ? 'bg-yellow-300 text-black' : 'bg-zinc-800 text-gray-300 hover:bg-yellow-300 hover:text-black',
              'w-10 h-10 rounded-full flex items-center justify-center font-bold transition text-center'
            ]">
            {{ p.page }}
          </a>
          <template v-else>
            <span class="text-gray-600 self-end px-2">...</span>
            <a href="#"
              class="bg-zinc-800 text-gray-300 w-10 h-10 rounded-full flex items-center justify-center font-bold hover:bg-yellow-300 hover:text-black transition">
              {{ p.page }}
            </a>
          </template>
        </template>
      </div>
    </div>
  </section>
</template>
