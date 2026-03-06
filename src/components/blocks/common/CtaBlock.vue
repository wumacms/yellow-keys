<script setup>
/**
 * CTA区块组件属性
 * @property {string} badge - 小标签文本
 * @property {string} title - 主标题文本
 * @property {string} description - 描述文本
 * @property {object[]} buttons - 按钮配置数组
 * @property {string} footerNote - 底部说明文本
 * @property {string} backgroundColor - 背景颜色 class
 */
import { RouterLink } from 'vue-router'
defineProps({
  badge: String,
  title: String,
  description: String,
  buttons: {
    type: Array,
    default: () => []
  },
  footerNote: String,
  backgroundColor: {
    type: String,
    default: 'bg-yellow-300'
  }
})

const isInternal = (href) => href && href.startsWith('/')
</script>

<template>
  <section :class="[backgroundColor, 'py-16']">
    <div class="max-w-3xl mx-auto text-center px-4">
      <span v-if="badge" class="text-black bg-white/30 px-3 py-1 rounded-full text-sm font-bold">{{ badge }}</span>
      <h2 class="text-4xl md:text-5xl font-black text-black mt-6 mb-4">{{ title }}</h2>
      <p class="text-lg text-black/80 mb-8">{{ description }}</p>
      <div class="flex flex-wrap gap-4 justify-center">
        <template v-for="(btn, index) in buttons" :key="index">
          <template v-if="btn.primary">
            <RouterLink v-if="isInternal(btn.href)" :to="btn.href"
              class="bg-black text-yellow-300 px-10 py-4 rounded-full font-bold text-xl shadow-2xl hover:bg-zinc-900 transition">
              {{ btn.text }}
            </RouterLink>
            <a v-else :href="btn.href"
              class="bg-black text-yellow-300 px-10 py-4 rounded-full font-bold text-xl shadow-2xl hover:bg-zinc-900 transition">
              {{ btn.text }}
            </a>
          </template>
          <template v-else>
            <RouterLink v-if="isInternal(btn.href)" :to="btn.href"
              class="bg-transparent border-4 border-black text-black px-10 py-4 rounded-full font-bold text-xl hover:bg-black hover:text-yellow-300 transition">
              {{ btn.text }}
            </RouterLink>
            <a v-else :href="btn.href"
              class="bg-transparent border-4 border-black text-black px-10 py-4 rounded-full font-bold text-xl hover:bg-black hover:text-yellow-300 transition">
              {{ btn.text }}
            </a>
          </template>
        </template>
      </div>
      <p v-if="footerNote" class="text-sm text-black/60 mt-6">{{ footerNote }}</p>
    </div>
  </section>
</template>
