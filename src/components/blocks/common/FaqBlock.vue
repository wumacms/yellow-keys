<script setup lang="ts">
import type { FaqItem } from '@/types'

defineProps<{
  /** 区块标题 */
  title?: string
  /** 常见问题列表 */
  faqs: FaqItem[]
}>()
</script>

<template>
  <section class="bg-zinc-950 py-16">
    <div class="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
      <h2 v-if="title" class="text-3xl font-black text-center text-yellow-300 mb-10">{{ title }}</h2>
      <div class="space-y-4">
        <div v-for="(faq, index) in faqs" :key="index" class="border border-yellow-300/30 rounded-2xl p-5">
          <h3 class="font-bold text-white text-lg">{{ faq.question }}</h3>
          <p class="text-gray-400 mt-1">{{ faq.answer }}</p>
        </div>
      </div>
    </div>
  </section>
</template>
