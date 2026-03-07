<script setup lang="ts">
// 这里可以添加订阅逻辑的处理函数
const handleSubscribe = () => {
    // 处理订阅逻辑
    console.log('Subscribe clicked')
}
</script>

<template>
    <!-- 6. 返回列表按钮 + 订阅 (版心统一) -->
    <section class="bg-zinc-950 py-12">
        <div
            class="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 flex flex-col sm:flex-row gap-6 items-center justify-between">
            <router-link to="/news"
                class="border-2 border-yellow-300 text-yellow-300 px-6 py-3 rounded-full font-bold hover:bg-yellow-300 hover:text-black transition inline-flex items-center gap-2">
                ← 返回新闻列表
            </router-link>
            <div class="flex flex-col sm:flex-row items-center gap-3 w-full sm:w-auto">
                <span class="text-gray-400 text-sm">订阅新闻：</span>
                <div class="flex items-center gap-2 w-full sm:w-auto">
                    <input type="email" placeholder="你的邮箱"
                        class="bg-black border border-yellow-300/30 rounded-full px-4 py-2 text-sm text-white placeholder-gray-500 focus:outline-none focus:border-yellow-300 flex-grow sm:w-48">
                    <button @click="handleSubscribe"
                        class="bg-yellow-300 text-black px-5 py-2 rounded-full text-sm font-bold hover:bg-yellow-200 transition whitespace-nowrap">
                        订阅
                    </button>
                </div>
            </div>
        </div>
    </section>
</template>
