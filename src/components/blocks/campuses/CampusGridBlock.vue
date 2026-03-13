<script setup lang="ts">
import type { CampusItem } from '@/types'

withDefaults(defineProps<{
  /** 栏目主标题 */
  title?: string
  /** 栏目副标题 */
  subtitle?: string
  /** 校区列表数据 */
  campuses: CampusItem[]
}>(), {
  title: '全国校区 · 音乐地标',
  subtitle: '每个校区都是精心打造的音乐空间',
  campuses: () => []
})
</script>

<template>
  <!-- 3. 校区网格展示 (核心: 每个校区卡片带图片、地址、特色标签) 沿用名师卡片风格 -->
  <section class="bg-white dark:bg-black py-20 transition-colors duration-500">
    <div class="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
      <div class="text-center mb-12">
        <h2 class="text-3xl md:text-4xl font-black text-yellow-600 dark:text-yellow-300">{{ title }}</h2>
        <p class="text-gray-600 dark:text-gray-400 text-lg mt-2">{{ subtitle }}</p>
      </div>
      <div class="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
        <div v-for="(campus, index) in campuses" :key="index"
          :class="[
            'rounded-3xl border transition-all duration-500 group relative overflow-hidden shadow-sm',
            campus.isUpcoming 
              ? 'bg-gray-50 dark:bg-zinc-900 opacity-80 border-gray-100 dark:border-yellow-300/20' 
              : 'bg-gray-50 dark:bg-zinc-900 border-gray-100 dark:border-yellow-300/20 hover:border-yellow-500 dark:hover:border-yellow-300'
          ]">
          <div :class="['h-60 overflow-hidden', campus.isUpcoming ? 'grayscale' : '']">
            <img :src="campus.image" :alt="campus.name"
              :class="['w-full h-full object-cover transition duration-500', !campus.isUpcoming ? 'group-hover:scale-105' : '']" loading="lazy">
          </div>
          <div v-if="campus.isUpcoming"
            class="absolute top-4 right-4 bg-yellow-400 dark:bg-yellow-300 text-black text-xs font-bold px-3 py-1 rounded-full">
            {{ campus.badge }}
          </div>
          <div class="p-6">
            <div class="flex justify-between items-start">
              <div>
                <h3 class="text-2xl font-bold text-gray-900 dark:text-white">{{ campus.name }}</h3>
                <p class="text-yellow-600 dark:text-yellow-300 text-sm font-semibold">{{ campus.location }}</p>
              </div>
              <span v-if="!campus.isUpcoming"
                class="bg-yellow-500/10 dark:bg-yellow-300/20 text-yellow-600 dark:text-yellow-300 text-xs px-3 py-1 rounded-full border border-yellow-500/30 dark:border-yellow-300/40">
                {{ campus.badge }}
              </span>
            </div>
            <p class="text-gray-600 dark:text-gray-400 text-sm mt-3">{{ campus.address }}</p>
            <div class="flex flex-wrap gap-2 mt-4">
              <span v-for="(tag, tIndex) in campus.tags" :key="tIndex"
                class="bg-white dark:bg-black border border-gray-200 dark:border-yellow-300/30 text-gray-600 dark:text-gray-300 text-xs px-2 py-1 rounded-full">
                {{ tag }}
              </span>
            </div>
            <div class="flex gap-3 mt-5">
              <template v-if="!campus.isUpcoming">
                <a href="#"
                  class="bg-yellow-400 dark:bg-yellow-300 text-black px-4 py-2 rounded-full text-sm font-bold hover:bg-yellow-500 dark:hover:bg-yellow-200 transition">预约参观</a>
                <a href="#"
                  class="border border-yellow-500 dark:border-yellow-300 text-yellow-600 dark:text-yellow-300 px-4 py-2 rounded-full text-sm font-bold hover:bg-yellow-500 dark:hover:bg-yellow-300 hover:text-white dark:hover:text-black transition">路线</a>
              </template>
              <template v-else>
                <a href="#"
                  class="bg-yellow-400 dark:bg-yellow-300 text-black px-4 py-2 rounded-full text-sm font-bold hover:bg-yellow-500 dark:hover:bg-yellow-200 transition">抢先登记</a>
                <a href="#"
                  class="border border-yellow-500 dark:border-yellow-300 text-yellow-600 dark:text-yellow-300 px-4 py-2 rounded-full text-sm font-bold hover:bg-yellow-500 dark:hover:bg-yellow-300 hover:text-white dark:hover:text-black transition">通知我</a>
              </template>
            </div>
          </div>
        </div>
      </div>
    </div>
  </section>

</template>
