<script setup lang="ts">
import { RouterLink } from 'vue-router'
import type { TitlePart, ActionLink, ImageData } from '@/types'

defineProps<{
  /** 小标签文本 */
  badge?: string
  /** 分段标题数组，包含 text 和 highlight 标记 */
  title: TitlePart[]
  /** 描述文本 */
  description?: string
  /** 按钮配置数组 */
  buttons?: ActionLink[]
  /** 图片对象，包含 src 和 alt */
  image: ImageData
}>()

const isInternal = (href?: string) => href && href.startsWith('/')
</script>

<template>
  <section class="relative bg-gradient-to-b from-gray-50 to-white dark:from-black dark:to-zinc-900 pt-20 pb-24 md:py-28 overflow-hidden text-gray-900 dark:text-white transition-colors duration-500">
    <div class="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
      <div class="grid md:grid-cols-2 gap-12 items-center">
        <div class="space-y-6">

          <span v-if="badge"
            class="inline-block bg-yellow-300/10 text-yellow-300 border border-yellow-300/30 px-4 py-1.5 rounded-full text-sm font-bold">
            {{ badge }}
          </span>
          <h1 class="text-5xl md:text-6xl font-black leading-tight">
            <template v-for="(part, index) in title" :key="index">
              <span v-if="part.highlight" class="text-yellow-300">{{ part.text }}</span>
              <template v-else>{{ part.text }}</template>
            </template>
          </h1>
          <p class="text-xl text-gray-600 dark:text-gray-300 max-w-lg">{{ description }}</p>
          <div class="flex flex-wrap gap-4 pt-4">
            <template v-for="(btn, index) in buttons" :key="index">
              <!-- Primary Button -->
              <template v-if="btn.primary">
                <RouterLink v-if="isInternal(btn.href)" :to="btn.href"
                  class="bg-yellow-300 text-black px-8 py-4 rounded-full font-bold text-lg shadow-xl shadow-yellow-300/40 hover:bg-yellow-200 transition text-center">
                  {{ btn.text }}
                </RouterLink>
                <a v-else :href="btn.href"
                  class="bg-yellow-300 text-black px-8 py-4 rounded-full font-bold text-lg shadow-xl shadow-yellow-300/40 hover:bg-yellow-200 transition text-center">
                  {{ btn.text }}
                </a>
              </template>
              <!-- Secondary Button -->
              <template v-else>
                <RouterLink v-if="isInternal(btn.href)" :to="btn.href"
                  class="border-2 border-yellow-500 dark:border-yellow-300 text-yellow-600 dark:text-yellow-300 px-8 py-4 rounded-full font-bold text-lg hover:bg-yellow-500 dark:hover:bg-yellow-300 hover:text-white dark:hover:text-black transition text-center">
                  {{ btn.text }}
                </RouterLink>
                <a v-else :href="btn.href"
                  class="border-2 border-yellow-500 dark:border-yellow-300 text-yellow-600 dark:text-yellow-300 px-8 py-4 rounded-full font-bold text-lg hover:bg-yellow-500 dark:hover:bg-yellow-300 hover:text-white dark:hover:text-black transition text-center">
                  {{ btn.text }}
                </a>
              </template>
            </template>
          </div>
        </div>
        <div class="relative h-72 sm:h-80 md:h-96">
          <img class="w-full h-full object-cover rounded-3xl border-4 border-yellow-300/30 shadow-2xl" :src="image.src"
            :alt="image.alt">
        </div>
      </div>
    </div>
  </section>
</template>
