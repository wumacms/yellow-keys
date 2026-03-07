<script setup lang="ts">
import { RouterLink } from 'vue-router'
import type { ActionLink, ImageData } from '@/types'

withDefaults(defineProps<{
  /** 预留的小标签文本 */
  badge?: string
  /** 主标题文本 */
  title: string
  /** 描述文本 */
  description?: string
  /** 图片对象 */
  image: ImageData
  /** 统计信息或要点列表 */
  stats?: string[]
  /** 按钮配置数组 */
  cta?: ActionLink[]
  /** 是否反向排列（图片在右） */
  reversed?: boolean
}>(), {
  reversed: false
})

const isInternal = (href?: string) => href && href.startsWith('/') && !href.startsWith('//')
</script>

<template>
  <section class="bg-black py-20 text-white">
    <div class="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
      <div :class="['flex flex-col items-center gap-12', reversed ? 'md:flex-row-reverse' : 'md:flex-row']">
        <div class="md:w-1/2">
          <img class="rounded-3xl border-4 border-yellow-300/40 shadow-2xl w-full h-auto object-cover" :src="image.src"
            :alt="image.alt" loading="lazy">
        </div>
        <div class="md:w-1/2 space-y-5">
          <span v-if="badge"
            class="text-yellow-300 font-bold text-sm bg-black border border-yellow-300 px-4 py-1.5 rounded-full inline-block">
            {{ badge }}
          </span>
          <h2 class="text-4xl font-black text-yellow-300">{{ title }}</h2>
          <p class="text-gray-300 text-lg">{{ description }}</p>
          <div v-if="stats" class="flex flex-wrap gap-4 text-gray-400 text-sm">
            <span v-for="(stat, index) in stats" :key="index">{{ stat }}</span>
          </div>
          <div v-if="cta" class="pt-2 flex flex-wrap gap-4">
            <template v-for="(btn, index) in cta" :key="index">
              <template v-if="btn.primary">
                <RouterLink v-if="isInternal(btn.href)" :to="btn.href"
                  class="bg-yellow-300 text-black px-8 py-3 rounded-full font-bold inline-block hover:bg-yellow-200 transition">
                  {{ btn.text }}
                </RouterLink>
                <a v-else :href="btn.href"
                  class="bg-yellow-300 text-black px-8 py-3 rounded-full font-bold inline-block hover:bg-yellow-200 transition">
                  {{ btn.text }}
                </a>
              </template>
              <template v-else>
                <RouterLink v-if="isInternal(btn.href)" :to="btn.href"
                  class="border border-yellow-300 text-yellow-300 px-8 py-3 rounded-full font-bold inline-block hover:bg-yellow-300 hover:text-black transition">
                  {{ btn.text }}
                </RouterLink>
                <a v-else :href="btn.href"
                  class="border border-yellow-300 text-yellow-300 px-8 py-3 rounded-full font-bold inline-block hover:bg-yellow-300 hover:text-black transition">
                  {{ btn.text }}
                </a>
              </template>
            </template>
          </div>
        </div>
      </div>
    </div>
  </section>
</template>
