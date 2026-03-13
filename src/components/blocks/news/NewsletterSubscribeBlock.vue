<script setup lang="ts">
withDefaults(defineProps<{
  /** 小标签文本 */
  badge?: string
  /** 区块主标题 */
  title?: string
  /** 区块描述文本 */
  description?: string
  /** 邮箱输入框占位符 */
  placeholder?: string
  /** 订阅按钮文本 */
  buttonText?: string
  /** 底部说明文本 */
  footerNote?: string
}>(), {
  badge: '📬 新闻通讯',
  title: '订阅黄黑键动态',
  description: '每周精选新闻、活动预告、学员故事直达你的邮箱',
  placeholder: '你的邮箱地址',
  buttonText: '立即订阅',
  footerNote: '随时退订，我们承诺不滥用你的信息'
})
</script>

<template>
  <!-- 6. 新闻订阅/社交媒体 (与CTA结合) 类似之前的预约区块 -->
  <section class="bg-gray-50 dark:bg-zinc-950 py-16 transition-colors duration-500">
    <div class="max-w-3xl mx-auto text-center px-4">
      <span
        class="text-yellow-600 dark:text-yellow-300 bg-white dark:bg-black border border-yellow-500 dark:border-yellow-300 px-3 py-1 rounded-full text-sm font-bold inline-block mb-4 transition-colors duration-500">
        {{ badge }}
      </span>
      <h2 class="text-4xl font-black text-yellow-600 dark:text-yellow-300 mb-4 transition-colors duration-500">{{ title }}</h2>
      <p class="text-gray-600 dark:text-gray-400 text-lg mb-8">{{ description }}</p>
      <div class="flex flex-col sm:flex-row gap-3 max-w-md mx-auto">
        <input type="email" :placeholder="placeholder"
          class="bg-white dark:bg-black border border-gray-200 dark:border-yellow-300/30 rounded-full px-6 py-4 flex-1 text-gray-900 dark:text-white placeholder-gray-400 dark:placeholder-gray-500 focus:outline-none focus:border-yellow-500 dark:focus:border-yellow-300 transition-all duration-300 shadow-sm">
        <a href="#"
          class="bg-yellow-400 dark:bg-yellow-300 text-black px-8 py-4 rounded-full font-bold text-lg hover:bg-yellow-500 dark:hover:bg-yellow-200 transition-all duration-300 whitespace-nowrap text-center shadow-lg shadow-yellow-500/20 dark:shadow-yellow-300/30">
          {{ buttonText }}
        </a>
      </div>
      <p class="text-xs text-gray-400 dark:text-gray-500 mt-4">{{ footerNote }}</p>
    </div>
  </section>

</template>
