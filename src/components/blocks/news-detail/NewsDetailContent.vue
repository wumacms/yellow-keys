<script setup lang="ts">
withDefaults(defineProps<{
  /** 文章段落列表 */
  paragraphs: string[]
  /** 引用文本 */
  quote?: string
  /** 引用作者 */
  quoteAuthor?: string
  /** 获奖名单标题 */
  awardListTitle?: string
  /** 获奖名单列表 */
  awards?: string[]
}>(), {
  paragraphs: () => [],
  awards: () => []
})
</script>

<template>
    <section class="bg-black py-12">
        <div class="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-gray-200 text-lg leading-relaxed space-y-6">
            <template v-for="(p, index) in paragraphs" :key="index">
                <!-- 第一段特殊样式：首字母大写 -->
                <p v-if="index === 0"
                    class="first-letter:text-5xl first-letter:text-yellow-300 first-letter:font-black first-letter:mr-2 first-letter:float-left">
                    {{ p }}
                </p>
                <!-- 普通段落 -->
                <p v-else-if="!p.startsWith('##')">{{ p }}</p>
                <!-- 二级标题 -->
                <h2 v-else class="text-2xl font-bold text-yellow-300 mt-8 mb-4">{{ p.replace('## ', '') }}</h2>
            </template>

            <!-- 嵌入一个小 Quote 或 数据 -->
            <div v-if="quote" class="bg-zinc-900 border-l-4 border-yellow-300 p-5 my-8 rounded-r-2xl">
                <p class="text-gray-300 italic text-lg">{{ quote }}</p>
                <p v-if="quoteAuthor" class="text-yellow-300 mt-2 font-bold">—— {{ quoteAuthor }}</p>
            </div>

            <!-- 简单列表展示获奖详情 -->
            <div v-if="awards.length > 0" class="bg-black border border-yellow-300/30 rounded-3xl p-6 my-8">
                <h3 class="text-xl font-bold text-yellow-300 mb-4">{{ awardListTitle || '📋 获奖名单' }}</h3>
                <ul class="space-y-2 text-gray-300">
                    <li v-for="(award, idx) in awards" :key="idx">{{ award }}</li>
                </ul>
            </div>
        </div>
    </section>
</template>
