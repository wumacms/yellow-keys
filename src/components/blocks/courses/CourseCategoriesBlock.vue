<script setup>
/**
 * 课程分类区块组件属性
 * @property {string} title - 栏目主标题
 * @property {string} subtitle - 栏目副标题
 * @property {object[]} categories - 课程分类数据配置
 */
const props = defineProps({
  title: {
    type: String,
    default: '四大课程板块'
  },
  subtitle: {
    type: String,
    default: '全龄覆盖 · 科学分阶'
  },
  categories: {
    type: Array,
    required: true,
    default: () => []
  }
})
</script>

<template>
  <!-- 2. 课程分类卡片 (4大核心方向，沿用特性区块样式) 使用网格展现 -->
  <section class="bg-black py-20">
    <div class="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
      <div class="text-center mb-14">
        <h2 class="text-3xl md:text-4xl font-black text-yellow-300">{{ title }}</h2>
        <p class="text-gray-400 text-lg mt-2">{{ subtitle }}</p>
      </div>
      <div class="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
        <div v-for="(cat, index) in categories" :key="index"
          class="bg-zinc-900 p-6 rounded-3xl border border-yellow-300/20 hover:border-yellow-300 transition group">
          <div class="text-5xl mb-3 group-hover:scale-110 transition-transform">{{ cat.icon }}</div>
          <h3 class="text-xl font-bold text-yellow-300">{{ cat.title }}</h3>
          <p class="text-gray-400 text-sm mt-2">{{ cat.description }}</p>
          <span class="inline-block mt-4 text-yellow-300 text-sm font-bold border-b border-yellow-300/30 pb-0.5">
            {{ cat.tag }}
          </span>
        </div>
      </div>
    </div>
  </section>
</template>
