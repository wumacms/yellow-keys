<script setup>
/**
 * 教师展示网格组件属性
 * @property {string} title - 栏目主标题
 * @property {string} subtitle - 栏目副标题
 * @property {object[]} teachers - 教师列表数据
 * @property {object} cta - 底部行动项配置
 */
const props = defineProps({
  title: {
    type: String,
    default: '首席导师 · 艺术领路人'
  },
  subtitle: {
    type: String,
    default: '舞台上的演奏家，讲台上的引路人'
  },
  teachers: {
    type: Array,
    required: true,
    default: () => []
  },
  cta: {
    type: Object,
    default: () => ({
      text: '查看全部52位教师 →',
      href: '#'
    })
  }
})
</script>

<template>
  <!-- 3. 名师展示网格 (采用类似案例区块卡片风格 + 特性区块的边框) 强调个人 -->
  <section class="bg-black py-20">
    <div class="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
      <div class="text-center mb-12">
        <h2 class="text-3xl md:text-4xl font-black text-yellow-300">{{ title }}</h2>
        <p class="text-gray-400 text-lg mt-2">{{ subtitle }}</p>
      </div>
      <div class="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
        <div v-for="(teacher, index) in teachers" :key="index"
          class="bg-zinc-900 rounded-3xl border border-yellow-300/20 overflow-hidden hover:border-yellow-300 transition group">
          <div class="h-80 overflow-hidden">
            <img :src="teacher.image" :alt="teacher.subject + ' ' + teacher.name"
              class="w-full h-full object-cover group-hover:scale-105 transition duration-500" loading="lazy">
          </div>
          <div class="p-6">
            <div class="flex justify-between items-start">
              <div>
                <h3 class="text-2xl font-bold text-white">{{ teacher.name }}</h3>
                <p class="text-yellow-300 text-sm">{{ teacher.subject }}</p>
              </div>
              <span class="bg-yellow-300/20 text-yellow-300 text-xs px-3 py-1 rounded-full border border-yellow-300/40">
                {{ teacher.honor }}
              </span>
            </div>
            <p class="text-gray-400 text-sm mt-4">{{ teacher.description }}</p>
            <div class="flex gap-4 mt-4 text-sm text-gray-500">
              <span v-for="(stat, sIndex) in teacher.stats" :key="sIndex">{{ stat }}</span>
            </div>
          </div>
        </div>
      </div>
      <div class="text-center mt-12">
        <a :href="cta.href"
          class="border-2 border-yellow-300 text-yellow-300 px-10 py-4 rounded-full font-bold text-lg hover:bg-yellow-300 hover:text-black transition inline-flex items-center gap-2">
          📋 {{ cta.text }}
        </a>
      </div>
    </div>
  </section>
</template>
