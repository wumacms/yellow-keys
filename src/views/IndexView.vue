<script setup lang="ts">
import { ref } from 'vue'
import type { 
  TitlePart, 
  ActionLink, 
  ImageData, 
  FeatureItem, 
  FaqItem, 
  StatItem, 
  Partner, 
  Testimonial 
} from '@/types'
import HeroBlock from '@/components/blocks/common/HeroBlock.vue'
import StatsBlock from '@/components/blocks/index/StatsBlock.vue'
import PartnersBlock from '@/components/blocks/index/PartnersBlock.vue'
import ImageTextSplitBlock from '@/components/blocks/common/ImageTextSplitBlock.vue'
import FeaturesBlock from '@/components/blocks/common/FeaturesBlock.vue'
import TestimonialsBlock from '@/components/blocks/index/TestimonialsBlock.vue'
import FaqBlock from '@/components/blocks/common/FaqBlock.vue'
import CtaBlock from '@/components/blocks/common/CtaBlock.vue'

interface HeroData {
  title: TitlePart[]
  description: string
  buttons: ActionLink[]
  image: ImageData
}

const heroData = ref<HeroData>({
  title: [
    { text: '即兴', highlight: true },
    { text: ' 你的第一首钢琴曲', highlight: false }
  ],
  description: '从零到即兴伴奏，现代音乐学校为儿童、成人提供爵士/流行/古典乐器培训。让音乐成为习惯。',
  buttons: [
    { text: '预约体验课', href: '/courses', primary: true },
    { text: '课程顾问', href: '/courses', primary: false }
  ],
  image: {
    src: 'https://images.unsplash.com/photo-1560010954-0ea652c47dff?q=80&w=2070&auto=format&fit=crop',
    alt: '钢琴老师指导学生'
  }
})

const features = ref<FeatureItem[]>([
  { icon: '🎼', title: '体系化课程', description: '从启蒙到专业，覆盖英皇/国内考级，乐理+演奏+视唱练耳融合。' },
  { icon: '📀', title: '智能陪练系统', description: '课后APP实时纠错，练习数据同步老师，家长随时掌握进度。' },
  { icon: '🎤', title: '年度音乐节', description: '所有学员登上Livehouse舞台，专业录制个人演出视频。' },
  { icon: '🎹', title: '演奏级琴房', description: '全施坦威/雅马哈三角琴教室，顶级声学装修，免费练琴。' }
])

const faqs = ref<FaqItem[]>([
  { question: '零基础可以学吗？几岁开始？', answer: '设有3-6岁音乐启蒙、7-12岁少儿课程以及成人零基础班。从第一节课就能弹出小曲子。' },
  { question: '需要自己带乐器吗？', answer: '教室提供顶级乐器，练习区可免费预约。买乐器可享合作品牌内部折扣。' },
  { question: '有考级培训吗？通过率如何？', answer: '英皇/音协/上音考级指定报名点，通过率100%，良好率超70%。' },
  { question: '可以试听吗？', answer: '当然，免费预约一对一体验课或乐队公开课。文末点击预约。' }
])

interface CtaData {
  title: string
  description: string
  buttons: ActionLink[]
}

const ctaData = ref<CtaData>({
  title: '让音乐成为你的第二语言',
  description: '免费试听30分钟，解锁你的音乐潜能',
  buttons: [
    { text: '领取体验课', href: '/courses', primary: true },
    { text: '课程咨询', href: '/courses', primary: false }
  ]
})
const stats = ref<StatItem[]>([
  { value: '3000+', label: '在读学员' },
  { value: '98%', label: '续课率' },
  { value: '15+', label: '校区(沪/京/深)' },
  { value: '🏆 82', label: '年度奖项' }
])

const partners = ref<Partner[]>([
  {
    name: '施坦威',
    logo: 'https://images.unsplash.com/photo-1599305445671-ac291c95aaa9?w=128&h=128&fit=crop',
    role: '战略合作伙伴'
  },
  {
    name: '雅马哈',
    logo: 'https://images.unsplash.com/photo-1599305445671-ac291c95aaa9?w=128&h=128&fit=crop',
    role: '教学合作伙伴'
  },
  {
    name: '罗兰',
    logo: 'https://images.unsplash.com/photo-1599305445671-ac291c95aaa9?w=128&h=128&fit=crop',
    role: '数字化伙伴'
  },
  {
    name: '芬达',
    logo: 'https://images.unsplash.com/photo-1599305445671-ac291c95aaa9?w=128&h=128&fit=crop',
    role: '乐队课伙伴'
  },
  {
    name: '英皇考级',
    logo: 'https://images.unsplash.com/photo-1599305445671-ac291c95aaa9?w=128&h=128&fit=crop',
    role: '考级点'
  },
  {
    name: '舒尔',
    logo: 'https://images.unsplash.com/photo-1599305445671-ac291c95aaa9?w=128&h=128&fit=crop',
    role: '声学设备伙伴'
  }
])

const testimonials = ref<Testimonial[]>([
  {
    name: '周雨桐',
    role: '钢琴学员 · 8岁',
    avatar: 'https://images.unsplash.com/photo-1599305445671-ac291c95aaa9?w=96&h=96&fit=crop',
    content: '"在黄黑键学了两年，从讨厌练琴到主动弹爵士即兴，还拿到了英皇六级优秀。"'
  },
  {
    name: '赵一鸣',
    role: '18岁 乐队队长',
    avatar: 'https://images.unsplash.com/photo-1599305445671-ac291c95aaa9?w=96&h=96&fit=crop',
    content: '"跟老师学会了即兴solo，现在我们乐队已经写了三首原创，去年登上草莓音乐节新血舞台。"'
  },
  {
    name: '李女士',
    role: '成人学员·零基础 一年',
    avatar: 'https://images.unsplash.com/photo-1599305445671-ac291c95aaa9?w=96&h=96&fit=crop',
    content: '"从没想过40岁还能学会钢琴，老师很有耐心，现在能在家庭聚会上弹《卡农》了。"'
  }
])
</script>

<template>
  <main>
    <!-- 首屏 -->
    <HeroBlock v-bind="heroData" />

    <!-- 合作伙伴 -->
    <PartnersBlock :partners="partners" />

    <!-- 特色 1 (左图右文) -->
    <ImageTextSplitBlock
      title="玩转乐队课"
      description="打破一对一枯燥，组建少儿摇滚/爵士小乐队。从第一次合奏开始爱上音乐。键盘、吉他、鼓、贝斯同步训练。"
      :image="{ src: 'https://images.unsplash.com/photo-1512053459797-38c3a066cabd?q=80&w=2070&auto=format&fit=crop', alt: '小组音乐课' }"
      :stats="['🎸 合奏意识', '🥁 节奏感强化', '🎤 舞台实践']"
    />

    <!-- 特色 2 (左文右图) -->
    <ImageTextSplitBlock
      reversed
      title="演奏家导师团"
      description="来自爱乐乐团、上海音乐学院等背景的导师亲自授课。每季度开设大师课，一对一指点演奏细节与音乐表现力。"
      :image="{ src: 'https://images.unsplash.com/photo-1474692295473-66ba4d54e0d3?q=80&w=2070&auto=format&fit=crop', alt: '音乐大师课' }"
      :stats="['旅美钢琴家', '爵士吉他手']"
    />

    <!-- 核心功能/优势 -->
    <FeaturesBlock :features="features" :header="{ title: '黄黑键的独特之处', subtitle: '不只教乐器，更塑造音乐素养' }" />

    <!-- 学员评价 -->
    <TestimonialsBlock :testimonials="testimonials" />

    <!-- 统计 -->
    <StatsBlock :stats="stats" />

    <!-- 常见问题 -->
    <FaqBlock title="常见问题" :faqs="faqs" />

    <!-- 呼吁行动 (CTA) -->
    <CtaBlock v-bind="ctaData" />
  </main>
</template>

<style scoped>
</style>
