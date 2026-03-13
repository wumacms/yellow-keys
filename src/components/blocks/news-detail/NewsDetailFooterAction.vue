<script setup lang="ts">
// 这里可以添加订阅逻辑的处理函数
const handleSubscribe = () => {
    // 处理订阅逻辑
    console.log('Subscribe clicked')
}
</script>

<template>
    <!-- 6. 返回列表按钮 + 订阅 (版心统一) -->
    <section class="bg-white dark:bg-zinc-950 py-12 transition-colors duration-500">
        <div
            class="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 flex flex-col sm:flex-row gap-6 items-center justify-between">
            <router-link to="/news"
                class="border-2 border-yellow-500 dark:border-yellow-300 text-yellow-600 dark:text-yellow-300 px-6 py-3 rounded-full font-bold hover:bg-yellow-500 dark:hover:bg-yellow-300 hover:text-white dark:hover:text-black transition-all duration-300 inline-flex items-center gap-2 shadow-sm">
                ← 返回新闻列表
            </router-link>
            <div class="flex flex-col sm:flex-row items-center gap-3 w-full sm:w-auto">
                <span class="text-gray-500 dark:text-gray-400 text-sm transition-colors duration-500">订阅新闻：</span>
                <div class="flex items-center gap-2 w-full sm:w-auto">
                    <input type="email" placeholder="你的邮箱"
                        class="bg-gray-50 dark:bg-black border border-gray-200 dark:border-yellow-300/30 rounded-full px-4 py-2 text-sm text-gray-900 dark:text-white placeholder-gray-400 dark:placeholder-gray-500 focus:outline-none focus:border-yellow-500 dark:focus:border-yellow-300 flex-grow sm:w-48 transition-all duration-300 shadow-sm">
                    <button @click="handleSubscribe"
                        class="bg-yellow-400 dark:bg-yellow-300 text-black px-5 py-2 rounded-full text-sm font-bold hover:bg-yellow-500 dark:hover:bg-yellow-200 transition-all duration-300 whitespace-nowrap shadow-sm shadow-yellow-500/10 active:scale-95">
                        订阅
                    </button>
                </div>
            </div>
        </div>
    </section>

</template>
