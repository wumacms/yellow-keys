<script setup>
/**
 * 课程列表组件属性
 * @property {string} title - 栏目主标题
 * @property {string} subtitle - 栏目副标题
 * @property {object[]} courses - 课程列表数据
 * @property {object} cta - 底部行动项配置
 */
const props = defineProps({
  title: {
    type: String,
    default: '全课程一览'
  },
  subtitle: {
    type: String,
    default: '每个孩子/成人都能找到自己的音乐方向'
  },
  courses: {
    type: Array,
    required: true,
    default: () => []
  },
  cta: {
    type: Object,
    default: () => ({
      text: '下载详细课程手册',
      href: '#',
      icon: '📥'
    })
  }
})
</script>

<template>
  <!-- 4. 所有课程一览表 (卡片式网格，显示更多课程) -->
  <section class="bg-zinc-950 py-20">
    <div class="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
      <div class="text-center mb-12">
        <h2 class="text-3xl md:text-4xl font-black text-yellow-300">{{ title }}</h2>
        <p class="text-gray-400 text-lg mt-2">{{ subtitle }}</p>
      </div>
      <div class="grid sm:grid-cols-2 lg:grid-cols-3 gap-5">
        <!-- 课程条目 -->
        <div v-for="(course, index) in courses" :key="index"
          class="bg-black p-5 rounded-2xl border border-yellow-300/20 flex items-start gap-4">
          <span class="text-3xl bg-yellow-300/10 w-12 h-12 flex items-center justify-center rounded-xl">{{ course.icon
            }}</span>
          <div>
            <h3 class="font-bold text-white text-lg">{{ course.title }}</h3>
            <p class="text-sm text-gray-400">{{ course.description }}</p>
          </div>
        </div>
      </div>
      <div class="text-center mt-12">
        <a :href="cta.href"
          class="bg-transparent border-2 border-yellow-300 text-yellow-300 px-10 py-4 rounded-full font-bold text-lg hover:bg-yellow-300 hover:text-black transition inline-flex items-center gap-2">
          {{ cta.icon }} {{ cta.text }}
        </a>
      </div>
    </div>
  </section>
</template>
