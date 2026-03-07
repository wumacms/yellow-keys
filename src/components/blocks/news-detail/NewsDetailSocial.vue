<script setup lang="ts">
withDefaults(defineProps<{
  /** 文章相关标签列表 */
  tags: string[]
}>(), {
  tags: () => []
})
</script>

<template>
    <!-- 3. 文章底部信息 (标签、分享) 版心统一 -->
    <section class="bg-black py-10 border-y border-yellow-300/20">
        <div class="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
            <div class="flex flex-wrap items-center justify-between gap-4">
                <!-- 标签 -->
                <div class="flex flex-wrap gap-2">
                    <span class="text-yellow-300 font-bold text-sm">相关标签：</span>
                    <a v-for="tag in tags" :key="tag" href="#"
                        class="bg-zinc-900 border border-yellow-300/30 text-gray-300 px-3 py-1.5 rounded-full text-sm hover:bg-yellow-300 hover:text-black transition">
                        {{ tag }}
                    </a>
                </div>
                <!-- 分享 -->
                <div class="flex items-center gap-3">
                    <span class="text-gray-400 text-sm">分享：</span>
                    <a href="#"
                        class="bg-zinc-800 w-8 h-8 rounded-full flex items-center justify-center hover:bg-yellow-300 hover:text-black transition">📤</a>
                    <a href="#"
                        class="bg-zinc-800 w-8 h-8 rounded-full flex items-center justify-center hover:bg-yellow-300 hover:text-black transition">🐦</a>
                    <a href="#"
                        class="bg-zinc-800 w-8 h-8 rounded-full flex items-center justify-center hover:bg-yellow-300 hover:text-black transition">🔗</a>
                </div>
            </div>
        </div>
    </section>
</template>
