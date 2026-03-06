<script setup>
/**
 * 校区网格展示组件属性
 * @property {string} title - 栏目主标题
 * @property {string} subtitle - 栏目副标题
 * @property {object[]} campuses - 校区列表数据
 */
const props = defineProps({
  title: {
    type: String,
    default: '全国校区 · 音乐地标'
  },
  subtitle: {
    type: String,
    default: '每个校区都是精心打造的音乐空间'
  },
  campuses: {
    type: Array,
    required: true,
    default: () => []
  }
})
</script>

<template>
  <!-- 3. 校区网格展示 (核心: 每个校区卡片带图片、地址、特色标签) 沿用名师卡片风格 -->
  <section class="bg-black py-20">
    <div class="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
      <div class="text-center mb-12">
        <h2 class="text-3xl md:text-4xl font-black text-yellow-300">{{ title }}</h2>
        <p class="text-gray-400 text-lg mt-2">{{ subtitle }}</p>
      </div>
      <div class="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
        <div v-for="(campus, index) in campuses" :key="index"
          :class="[
            'rounded-3xl border border-yellow-300/20 overflow-hidden transition group relative',
            campus.isUpcoming ? 'bg-zinc-900 opacity-80' : 'bg-zinc-900 hover:border-yellow-300'
          ]">
          <div :class="['h-60 overflow-hidden', campus.isUpcoming ? 'grayscale' : '']">
            <img :src="campus.image" :alt="campus.name"
              :class="['w-full h-full object-cover transition duration-500', !campus.isUpcoming ? 'group-hover:scale-105' : '']" loading="lazy">
          </div>
          <div v-if="campus.isUpcoming"
            class="absolute top-4 right-4 bg-yellow-300 text-black text-xs font-bold px-3 py-1 rounded-full">
            {{ campus.badge }}
          </div>
          <div class="p-6">
            <div class="flex justify-between items-start">
              <div>
                <h3 class="text-2xl font-bold text-white">{{ campus.name }}</h3>
                <p class="text-yellow-300 text-sm">{{ campus.location }}</p>
              </div>
              <span v-if="!campus.isUpcoming"
                class="bg-yellow-300/20 text-yellow-300 text-xs px-3 py-1 rounded-full border border-yellow-300/40">
                {{ campus.badge }}
              </span>
            </div>
            <p class="text-gray-400 text-sm mt-3">{{ campus.address }}</p>
            <div class="flex flex-wrap gap-2 mt-4">
              <span v-for="(tag, tIndex) in campus.tags" :key="tIndex"
                class="bg-black border border-yellow-300/30 text-gray-300 text-xs px-2 py-1 rounded-full">
                {{ tag }}
              </span>
            </div>
            <div class="flex gap-3 mt-5">
              <template v-if="!campus.isUpcoming">
                <a href="#"
                  class="bg-yellow-300 text-black px-4 py-2 rounded-full text-sm font-bold hover:bg-yellow-200 transition">预约参观</a>
                <a href="#"
                  class="border border-yellow-300 text-yellow-300 px-4 py-2 rounded-full text-sm font-bold hover:bg-yellow-300 hover:text-black transition">路线</a>
              </template>
              <template v-else>
                <a href="#"
                  class="bg-yellow-300 text-black px-4 py-2 rounded-full text-sm font-bold hover:bg-yellow-200 transition">抢先登记</a>
                <a href="#"
                  class="border border-yellow-300 text-yellow-300 px-4 py-2 rounded-full text-sm font-bold hover:bg-yellow-300 hover:text-black transition">通知我</a>
              </template>
            </div>
          </div>
        </div>
      </div>
    </div>
  </section>
</template>
