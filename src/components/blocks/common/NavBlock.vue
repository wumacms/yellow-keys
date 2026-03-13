<script setup lang="ts">
import { RouterLink, useRoute } from 'vue-router'
import type { ActionLink, MenuItem, NavLogo } from '@/types'
import { useTheme } from '@/composables/useTheme'

const route = useRoute()
const { isDark, toggleTheme } = useTheme()

withDefaults(defineProps<{

  /** Logo配置 */
  logo?: NavLogo
  /** 菜单项数组 */
  menuItems: MenuItem[]
  /** 右侧 CTA 按钮配置 */
  cta?: ActionLink
}>(), {
  logo: () => ({
    emoji: '🎵',
    text1: 'YELLOW',
    text2: 'KEYS',
    href: '/'
  }),
  cta: () => ({
    text: '免费试听课',
    href: '/courses'
  })
})

const isActive = (path: string) => {
  if (path === '/' && route.path === '/') return true
  if (path !== '/' && route.path.startsWith(path)) return true
  return false
}
</script>

<template>
  <nav class="bg-white/80 dark:bg-black/80 backdrop-blur-md border-b border-gray-100 dark:border-yellow-300/20 sticky top-0 z-50 transition-all duration-500 shadow-sm">
    <div class="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
      <div class="flex justify-between items-center h-20">
        <!-- logo + 标题 -->
        <div class="flex items-center gap-2">
          <RouterLink :to="logo.href" class="flex items-center gap-2">
            <div class="text-4xl filter drop-shadow-lg">{{ logo.emoji }}</div>
            <span class="text-2xl font-black tracking-tight text-yellow-600 dark:text-yellow-300 transition-colors duration-500">
              {{ logo.text1 }}<span class="text-gray-900 dark:text-white transition-colors duration-500">{{ logo.text2 }}</span>
            </span>
          </RouterLink>
        </div>
        <!-- 导航菜单 (桌面) -->
        <div class="hidden md:flex space-x-8 text-sm font-medium">
          <RouterLink v-for="item in menuItems" :key="item.name" :to="item.href"
            :class="[
              isActive(item.href) ? 'text-yellow-600 dark:text-yellow-300' : 'text-gray-600 dark:text-gray-300 hover:text-yellow-600 dark:hover:text-yellow-300',
              'transition font-bold'
            ]">
            {{ item.name }}
          </RouterLink>
        </div>

        <!-- 右侧操作区 -->
        <div class="flex items-center gap-4">
          <!-- 主题切换按钮 -->
          <button @click="toggleTheme" 
            class="p-2 rounded-full hover:bg-gray-100 dark:hover:bg-white/10 transition-all duration-300 group"
            :title="isDark ? '切换到浅色模式' : '切换到深色模式'">

            <!-- 太阳图标 (深色模式显示) -->
            <svg v-if="isDark" xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="text-yellow-300 group-hover:scale-110 transition-transform">
              <circle cx="12" cy="12" r="4"/><path d="M12 2v2"/><path d="M12 20v2"/><path d="M4.93 4.93l1.41 1.41"/><path d="M17.66 17.66l1.41 1.41"/><path d="M2 12h2"/><path d="M20 12h2"/><path d="M4.93 19.07l1.41-1.41"/><path d="M17.66 6.34l1.41-1.41"/>
            </svg>
            <!-- 月亮图标 (浅色模式显示) -->
            <svg v-else xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="text-gray-600 group-hover:scale-110 transition-transform">
              <path d="M12 3a6 6 0 0 0 9 9 9 9 0 1 1-9-9Z"/>
            </svg>
          </button>

          <!-- CTA 按钮 -->
          <RouterLink :to="cta.href"
            class="bg-yellow-400 dark:bg-yellow-300 text-black px-6 py-2.5 rounded-full font-bold text-sm hover:bg-yellow-500 dark:hover:bg-yellow-200 transition-all duration-300 shadow-lg shadow-yellow-500/20 dark:shadow-yellow-300/30 whitespace-nowrap">
            {{ cta.text }}
          </RouterLink>
        </div>

      </div>
    </div>
  </nav>

</template>
