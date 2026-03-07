<script setup lang="ts">
import type { TeacherStory } from '@/types'

withDefaults(defineProps<{
  /** 栏目主标题 */
  title?: string
  /** 栏目副标题 */
  subtitle?: string
  /** 故事列表配置 */
  stories: TeacherStory[]
}>(), {
  title: '名师 · 育人故事',
  subtitle: '听听导师们的教学理念与学员成长',
  stories: () => []
})
</script>

<template>
  <!-- 6. 名师专访/故事 (采用案例区块风格，展示老师与学生的互动) -->
  <section class="bg-zinc-950 py-20">
    <div class="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
      <div class="text-center mb-12">
        <h2 class="text-3xl md:text-4xl font-black text-yellow-300">{{ title }}</h2>
        <p class="text-gray-400 text-lg mt-2">{{ subtitle }}</p>
      </div>
      <div class="grid md:grid-cols-3 gap-6">
        <div v-for="(story, index) in stories" :key="index" class="bg-black p-6 rounded-3xl border border-yellow-300/20">
          <div class="flex items-center gap-3 mb-4">
            <img :src="story.avatar" class="w-12 h-12 rounded-full object-cover" :alt="story.name">
            <div>
              <h3 class="font-bold text-white">{{ story.name }} · {{ story.subject }}</h3>
              <p class="text-xs text-yellow-300">"{{ story.quote }}"</p>
            </div>
          </div>
          <p class="text-gray-300 italic text-sm">"{{ story.content }}"</p>
        </div>
      </div>
    </div>
  </section>
</template>
