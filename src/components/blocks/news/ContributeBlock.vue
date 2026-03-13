<script setup lang="ts">
withDefaults(defineProps<{
  /** 区块主标题 */
  title?: string
  /** 区块描述文本 */
  description?: string
  /** 按钮文本 */
  buttonText?: string
  /** 按钮链接 */
  link?: string
}>(), {
  title: '📝 新闻/故事投稿',
  description: '如果你是学员家长、教师 or 音乐爱好者，欢迎投稿分享你与黄黑键的故事。入选将获得定制礼品。',
  buttonText: '投稿须知 & 联系编辑',
  link: '#'
})
</script>

<template>
  <!-- 7. 新闻合作/投稿邀请 (采用特性区块风格) -->
  <section class="bg-white dark:bg-black py-16 border-y border-gray-100 dark:border-yellow-300/20 transition-colors duration-500">
    <div class="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
      <div class="grid md:grid-cols-2 gap-8 items-center text-gray-900 dark:text-white">
        <div>
          <h3 class="text-2xl font-bold text-yellow-600 dark:text-yellow-300 transition-colors duration-500">{{ title }}</h3>
          <p class="text-gray-600 dark:text-gray-400 mt-2">{{ description }}</p>
        </div>
        <div class="md:text-right">
          <a :href="link"
            class="border-2 border-yellow-500 dark:border-yellow-300 text-yellow-600 dark:text-yellow-300 px-8 py-3 rounded-full font-bold hover:bg-yellow-500 dark:hover:bg-yellow-300 hover:text-white dark:hover:text-black transition-all duration-300 inline-block text-center shadow-sm hover:shadow-lg">
            {{ buttonText }}
          </a>
        </div>
      </div>
    </div>
  </section>

</template>
