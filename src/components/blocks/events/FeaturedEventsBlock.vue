<script setup lang="ts">
import type { FeaturedEvent, SecondaryEvent } from '@/types'

withDefaults(defineProps<{
  /** 主推活动配置 */
  mainEvent: FeaturedEvent
  /** 次要活动数组配置 */
  secondaryEvents: SecondaryEvent[]
}>(), {
  secondaryEvents: () => []
})
</script>

<template>
  <!-- 3. 热门活动 (置顶推荐) 使用左图右文大卡片，强调时效性 -->
  <section class="bg-gray-50 dark:bg-black pt-16 pb-8 transition-colors duration-500">
    <div class="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
      <div class="flex justify-between items-end mb-10">
        <h2 class="text-3xl md:text-4xl font-black text-yellow-600 dark:text-yellow-300 transition-colors duration-500">🔥 热门推荐 · 即将开启</h2>
        <a href="#" class="text-yellow-600 dark:text-yellow-300 border-b border-yellow-500/30 dark:border-yellow-300/30 pb-0.5 text-sm font-bold hover:text-yellow-700 dark:hover:text-white transition-colors duration-300">
          查看全部活动 →
        </a>
      </div>
      <!-- 第一个大卡片: 春季音乐节 -->
      <div
        class="bg-white dark:bg-zinc-900 rounded-3xl border-2 border-gray-100 dark:border-yellow-300/30 overflow-hidden mb-8 hover:border-yellow-500 dark:hover:border-yellow-300 shadow-sm transition-all duration-500">
        <div class="grid md:grid-cols-2">
          <div class="h-80 md:h-auto overflow-hidden">
            <img :src="mainEvent.image" :alt="mainEvent.title" class="w-full h-full object-cover">
          </div>
          <div class="p-8 flex flex-col justify-center">
            <span
              class="text-yellow-600 dark:text-yellow-300 bg-white dark:bg-black border border-yellow-500 dark:border-yellow-300 px-3 py-1 rounded-full text-xs font-bold inline-block w-fit mb-4 transition-colors duration-500">
              {{ mainEvent.badge }}
            </span>
            <h3 class="text-3xl font-black text-gray-900 dark:text-white mb-3">{{ mainEvent.title }}</h3>
            <p class="text-gray-600 dark:text-gray-300 mb-4">{{ mainEvent.description }}</p>
            <div class="flex gap-4 text-sm text-gray-500 dark:text-gray-400 mb-5">
              <span v-for="(stat, index) in mainEvent.stats" :key="index">{{ stat }}</span>
            </div>
            <div class="flex gap-3">
              <template v-for="(cta, index) in mainEvent.ctas" :key="index">
                <a :href="cta.href" v-if="cta.primary"
                  class="bg-yellow-400 dark:bg-yellow-300 text-black px-6 py-3 rounded-full font-bold text-sm hover:bg-yellow-500 dark:hover:bg-yellow-200 transition-all duration-300 shadow-sm">
                  {{ cta.text }}
                </a>
                <a :href="cta.href" v-else
                  class="border border-yellow-500 dark:border-yellow-300 text-yellow-600 dark:text-yellow-300 px-6 py-3 rounded-full font-bold text-sm hover:bg-yellow-500 dark:hover:bg-yellow-300 hover:text-white dark:hover:text-black transition-all duration-300">
                  {{ cta.text }}
                </a>
              </template>
            </div>
          </div>
        </div>
      </div>
      <!-- 第二热门双卡片 (并排) 用网格 -->
      <div class="grid md:grid-cols-2 gap-6">
        <div v-for="(event, index) in secondaryEvents" :key="index"
          class="bg-white dark:bg-zinc-900 rounded-2xl border border-gray-100 dark:border-yellow-300/20 shadow-sm overflow-hidden flex flex-col md:flex-row hover:border-yellow-500 dark:hover:border-yellow-300 transition-all duration-500">
          <div class="md:w-2/5 h-40 overflow-hidden">
            <img :src="event.image" :alt="event.title" class="w-full h-full object-cover">
          </div>
          <div class="p-5 md:w-3/5">
            <span class="bg-yellow-500/10 dark:bg-yellow-300/20 text-yellow-600 dark:text-yellow-300 text-xs px-2 py-1 rounded-full border border-yellow-500/20 dark:border-yellow-300/30 font-semibold">{{ event.badge }}</span>
            <h4 class="font-bold text-gray-900 dark:text-white text-lg mt-2">{{ event.title }}</h4>
            <p class="text-gray-600 dark:text-gray-400 text-sm mt-1">{{ event.description }}</p>
            <a :href="event.href" class="inline-block mt-3 text-yellow-600 dark:text-yellow-300 text-sm font-bold border-b border-yellow-500/30 dark:border-yellow-300/30 hover:text-yellow-700 dark:hover:text-yellow-200 transition-colors duration-300">
              {{ event.ctaText }}
            </a>
          </div>
        </div>
      </div>
    </div>
  </section>

</template>
