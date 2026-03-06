<script setup>
/**
 * 新闻订阅区块组件属性
 * @property {string} badge - 小标签文本
 * @property {string} title - 区块主标题
 * @property {string} description - 区块描述文本
 * @property {string} placeholder - 邮箱输入框占位符
 * @property {string} buttonText - 订阅按钮文本
 * @property {string} footerNote - 底部说明文本
 */
const props = defineProps({
  badge: {
    type: String,
    default: '📬 新闻通讯'
  },
  title: {
    type: String,
    default: '订阅黄黑键动态'
  },
  description: {
    type: String,
    default: '每周精选新闻、活动预告、学员故事直达你的邮箱'
  },
  placeholder: {
    type: String,
    default: '你的邮箱地址'
  },
  buttonText: {
    type: String,
    default: '立即订阅'
  },
  footerNote: {
    type: String,
    default: '随时退订，我们承诺不滥用你的信息'
  }
})
</script>

<template>
  <!-- 6. 新闻订阅/社交媒体 (与CTA结合) 类似之前的预约区块 -->
  <section class="bg-zinc-950 py-16">
    <div class="max-w-3xl mx-auto text-center px-4">
      <span
        class="text-yellow-300 bg-black border border-yellow-300 px-3 py-1 rounded-full text-sm font-bold inline-block mb-4">
        {{ badge }}
      </span>
      <h2 class="text-4xl font-black text-yellow-300 mb-4">{{ title }}</h2>
      <p class="text-gray-400 text-lg mb-8">{{ description }}</p>
      <div class="flex flex-col sm:flex-row gap-3 max-w-md mx-auto">
        <input type="email" :placeholder="placeholder"
          class="bg-black border border-yellow-300/30 rounded-full px-6 py-4 flex-1 text-white placeholder-gray-500 focus:outline-none focus:border-yellow-300">
        <a href="#"
          class="bg-yellow-300 text-black px-8 py-4 rounded-full font-bold text-lg hover:bg-yellow-200 transition whitespace-nowrap text-center">
          {{ buttonText }}
        </a>
      </div>
      <p class="text-xs text-gray-500 mt-4">{{ footerNote }}</p>
    </div>
  </section>
</template>
