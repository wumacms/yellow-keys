<script setup>
/**
 * 合作伙伴区块组件属性
 * @property {string} title - 区块主标题
 * @property {string} description - 区块描述文本
 * @property {object[]} partners - 合作伙伴列表配置
 */
const props = defineProps({
  title: {
    type: String,
    default: '我们的音乐伙伴'
  },
  description: {
    type: String,
    default: '全球顶级乐器品牌与教育机构官方合作'
  },
  partners: {
    type: Array,
    required: true,
    default: () => []
  }
})
</script>

<template>
  <!-- 合作伙伴区块 (乐器品牌/生态) 使用伙伴数据结构 -->
  <section class="bg-black py-16 border-y border-yellow-300/20">
    <div class="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
      <div class="text-center mb-12">
        <h2 class="text-3xl md:text-4xl font-bold text-yellow-300">{{ title }}</h2>
        <p class="text-gray-400 mt-3">{{ description }}</p>
      </div>
      <div class="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-6">
        <div v-for="(partner, index) in partners" :key="index"
          class="bg-zinc-900 p-4 rounded-2xl text-center border border-yellow-300/20 hover:border-yellow-300 transition">
          <img :src="partner.logo" class="w-16 h-16 mx-auto rounded-full mb-2" :alt="partner.name">
          <h3 class="font-bold text-white">{{ partner.name }}</h3>
          <p class="text-xs text-yellow-300">{{ partner.role }}</p>
        </div>
      </div>
    </div>
  </section>
</template>
