<script setup>
/**
 * 导航栏区块组件属性
 * @property {object} logo - Logo配置，包含 emoji, text1, text2, href
 * @property {object[]} menuItems - 菜单项数组，包含 name 和 href
 * @property {object} cta - 右侧 CTA 按钮配置，包含 text 和 href
 */
import { RouterLink, useRoute } from 'vue-router'

const route = useRoute()

defineProps({
  logo: {
    type: Object,
    default: () => ({
      emoji: '🎵',
      text1: 'YELLOW',
      text2: 'KEYS',
      href: '/'
    })
  },
  menuItems: {
    type: Array,
    required: true
  },
  cta: {
    type: Object,
    default: () => ({
      text: '免费试听课',
      href: '/courses'
    })
  }
})

const isActive = (path) => {
  if (path === '/' && route.path === '/') return true
  if (path !== '/' && route.path.startsWith(path)) return true
  return false
}
</script>

<template>
  <nav class="bg-black border-b border-yellow-300/20 sticky top-0 z-50">
    <div class="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
      <div class="flex justify-between items-center h-20">
        <!-- logo + 标题 -->
        <div class="flex items-center gap-2">
          <RouterLink :to="logo.href" class="flex items-center gap-2">
            <div class="text-4xl filter drop-shadow-lg">{{ logo.emoji }}</div>
            <span class="text-2xl font-black tracking-tight text-yellow-300">
              {{ logo.text1 }}<span class="text-white">{{ logo.text2 }}</span>
            </span>
          </RouterLink>
        </div>
        <!-- 导航菜单 (桌面) -->
        <div class="hidden md:flex space-x-8 text-sm font-medium">
          <RouterLink v-for="item in menuItems" :key="item.name" :to="item.href"
            :class="[
              isActive(item.href) ? 'text-yellow-300' : 'text-gray-300 hover:text-yellow-300',
              'transition font-bold'
            ]">
            {{ item.name }}
          </RouterLink>
        </div>
        <!-- CTA 按钮 -->
        <div>
          <RouterLink :to="cta.href"
            class="bg-yellow-300 text-black px-6 py-2.5 rounded-full font-bold text-sm hover:bg-yellow-200 transition shadow-lg shadow-yellow-300/30">
            {{ cta.text }}
          </RouterLink>
        </div>
      </div>
    </div>
  </nav>
</template>
