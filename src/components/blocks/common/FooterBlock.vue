<script setup lang="ts">
import type { FooterData } from '@/types'

withDefaults(defineProps<FooterData>(), {
  brand: () => ({
    emoji: '🎵',
    name: 'YELLOWKEYS',
    description: '创意乐器培训 brand · 黄黑键音乐学校 · 激发每个孩子的音乐本能',
    copyright: '© 2025 黄黑键音乐教育集团 保留一切权利'
  }),
  campusInfo: () => ({
    title: '总部校区',
    addresses: [
      '上海市徐汇区创意音乐谷B座',
      '北京市朝阳区艺术大街108号',
      '深圳市南山区后海汇L3'
    ]
  }),
  contactInfo: () => ({
    title: '联系我们',
    details: [
      { label: '课程咨询', value: '400-6688-muse' },
      { label: '合作', value: 'partner@yellowkeys.cn' },
      { label: '投诉建议', value: 'support@yellowkeys.cn' }
    ]
  }),
  qrCode: () => ({
    title: '公众号',
    image: 'https://images.unsplash.com/photo-1599305445671-ac291c95aaa9?w=120&h=120&fit=crop',
    description: '扫一扫 领体验课'
  }),
  footerNote: '用明亮黄与黑，弹奏你的故事。'
})
</script>

<template>
  <footer class="bg-black border-t border-yellow-300/30 pt-16 pb-8">
    <div class="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
      <div class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-8">
        <!-- brand + logo -->
        <div class="lg:col-span-2">
          <div class="flex items-center gap-2 mb-4">
            <span class="text-4xl">{{ brand.emoji }}</span>
            <span class="text-2xl font-black text-yellow-300">{{ brand.name }}</span>
          </div>
          <p class="text-gray-400 text-sm max-w-xs">{{ brand.description }}</p>
          <p class="text-gray-500 text-xs mt-4">{{ brand.copyright }}</p>
        </div>
        <!-- 公司地址 -->
        <div>
          <h4 class="text-yellow-300 font-bold mb-4">{{ campusInfo.title }}</h4>
          <p class="text-gray-400 text-sm">
            <template v-for="(addr, index) in campusInfo.addresses" :key="index">
              {{ addr }}<br v-if="index !== campusInfo.addresses.length - 1">
            </template>
          </p>
        </div>
        <!-- 联系方式 -->
        <div>
          <h4 class="text-yellow-300 font-bold mb-4">{{ contactInfo.title }}</h4>
          <p class="text-gray-400 text-sm">
            <template v-for="(item, index) in contactInfo.details" :key="index">
              {{ item.label }}：{{ item.value }}<br v-if="index !== contactInfo.details.length - 1">
            </template>
          </p>
        </div>
        <!-- 微信公众号二维码 -->
        <div>
          <h4 class="text-yellow-300 font-bold mb-4">{{ qrCode.title }}</h4>
          <div class="bg-zinc-900 p-3 rounded-xl inline-block border border-yellow-300/40">
            <img :src="qrCode.image" class="w-24 h-24 rounded-lg grayscale" :alt="qrCode.title">
          </div>
          <p class="text-gray-500 text-xs mt-2">{{ qrCode.description }}</p>
        </div>
      </div>
      <div class="text-center text-gray-600 text-sm border-t border-yellow-300/20 mt-12 pt-6">
        {{ footerNote }}
      </div>
    </div>
  </footer>
</template>
