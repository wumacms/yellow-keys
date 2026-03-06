<script setup>
/**
 * 教师故事案例区块组件属性
 * @property {string} title - 栏目主标题
 * @property {string} subtitle - 栏目副标题
 * @property {object[]} stories - 故事列表配置
 */
const props = defineProps({
  title: {
    type: String,
    default: '名师 · 育人故事'
  },
  subtitle: {
    type: String,
    default: '听听导师们的教学理念与学员成长'
  },
  stories: {
    type: Array,
    required: true,
    default: () => []
  }
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
