<script setup lang="ts">
import { ref } from 'vue'
import type { 
  TitlePart, 
  ActionLink, 
  ImageData, 
  TagItem, 
  CourseCategory, 
  CourseItem, 
  FaqItem 
} from '@/types'
import HeroBlock from '@/components/blocks/common/HeroBlock.vue'
import FilterTagsBlock from '@/components/blocks/common/FilterTagsBlock.vue'
import CourseCategoriesBlock from '@/components/blocks/courses/CourseCategoriesBlock.vue'
import ImageTextSplitBlock from '@/components/blocks/common/ImageTextSplitBlock.vue'
import CourseListBlock from '@/components/blocks/courses/CourseListBlock.vue'
import FaqBlock from '@/components/blocks/common/FaqBlock.vue'
import CtaBlock from '@/components/blocks/common/CtaBlock.vue'

interface HeroData {
  badge: string
  title: TitlePart[]
  description: string
  buttons: ActionLink[]
  image: ImageData
}

const heroData = ref<HeroData>({
  badge: '🎹 全体系 · 从兴趣到专业',
  title: [
    { text: '用', highlight: false },
    { text: '黄黑键', highlight: true },
    { text: '，打开', highlight: false },
    { text: '所有', highlight: true },
    { text: '音乐门类', highlight: false }
  ],
  description: '钢琴、吉他、鼓、声乐、乐队合奏……无论古典或现代，总有一套课程适合你的音乐目标。',
  buttons: [],
  image: {
    src: 'https://images.unsplash.com/photo-1520523839897-bd0b52f945a0?q=80&w=2070&auto=format&fit=crop',
    alt: '钢琴与音乐课堂'
  }
})

const filterTags = ref<TagItem[]>([
  { label: '🎹 钢琴 · 键盘', active: false },
  { label: '🎸 吉他 · 贝斯', active: false },
  { label: '🥁 鼓 · 打击乐', active: false },
  { label: '🎤 声乐 · 合唱', active: false },
  { label: '🎻 弦乐 · 管乐', active: false },
  { label: '🎼 乐理 · 即兴', active: false }
])

interface CourseCategoriesData {
  title: string
  subtitle: string
  categories: CourseCategory[]
}

const courseCategoriesData = ref<CourseCategoriesData>({
  title: '四大课程板块',
  subtitle: '全龄覆盖 · 科学分阶',
  categories: [
    {
      icon: '🎹',
      title: '古典 · 钢琴',
      description: '一对一/小组课，英皇/音协考级，从启蒙到演奏级。施坦威琴房标配。',
      tag: '12个级别 →'
    },
    {
      icon: '🎸',
      title: '流行 · 摇滚',
      description: '电/木吉他、贝斯、流行演唱、键盘即兴。组乐队、玩编曲、写原创。',
      tag: '现代风格 →'
    },
    {
      icon: '🥁',
      title: '打击乐 · 节奏',
      description: '爵士鼓、拉丁/非洲打击乐、小军鼓。手脚协调与律动专项训练。',
      tag: '8间隔音鼓房 →'
    },
    {
      icon: '🎼',
      title: '创作 · 素养课',
      description: '乐理/视唱练耳、即兴伴奏、作曲编曲、音乐制作(Logic/Cubase)。',
      tag: 'MIDI教室 →'
    }
  ]
})

interface CourseListData {
  title: string
  subtitle: string
  courses: CourseItem[]
  cta: {
    text: string
    href: string
    icon: string
  }
}

const courseListData = ref<CourseListData>({
  title: '全课程一览',
  subtitle: '每个孩子/成人都能找到自己的音乐方向',
  courses: [
    { icon: '🎹', title: '钢琴启蒙课', description: '4-6岁 · 音乐绘本+键盘游戏' },
    { icon: '🎸', title: '木吉他弹唱', description: '7岁+ / 成人 · 弹唱/指弹' },
    { icon: '🥁', title: '爵士鼓系统课', description: '5岁+ · 手脚协调/摇滚/放克' },
    { icon: '🎤', title: '现代声乐课', description: '流行/音乐剧演唱 混声技巧' },
    { icon: '🎻', title: '小提琴/大提琴', description: '一对一 · 乐团预备班' },
    { icon: '🎼', title: '音乐制作/编曲', description: 'Logic / Cubase 基础到实战' },
    { icon: '📯', title: '管乐 (萨克斯/小号)', description: '爵士/古典 一对一指导' },
    { icon: '🎹', title: '即兴伴奏/键盘和声', description: '流行/爵士和弦编配' },
    { icon: '👥', title: '亲子音乐课', description: '2-4岁 + 家长 奥尔夫启蒙' }
  ],
  cta: {
    text: '下载详细课程手册',
    href: '#',
    icon: '📥'
  }
})

const faqs = ref<FaqItem[]>([
  { question: '如何选择适合我/孩子的课程？', answer: '入学前提供一对一课程顾问+专业老师测评，根据年龄、音乐基础、兴趣目标推荐最适合的班型。' },
  { question: '课程费用怎么算？有套餐吗？', answer: '季度/年度课包享受优惠，平均单价180-350元/节（一对一）。乐队小组课人均更低。免费体验课现场报价。' },
  { question: '缺课或请假怎么办？', answer: '每月有2次补课机会，可平行班插班或预约一对一补课。乐队课提供教学视频自学+线上指导。' },
  { question: '一定要买乐器才能上课吗？', answer: '所有教室提供上课乐器，练习区可免费预约。如需购买，合作品牌提供学学员员专属折扣。' }
])

interface CtaData {
  badge: string
  title: string
  description: string
  buttons: ActionLink[]
  footerNote: string
}

const ctaData = ref<CtaData>({
  badge: '🎧 所有课程均享免费试听',
  title: '找到你的第一节课',
  description: '30分钟体验课，零基础也可以弹出一首小曲',
  buttons: [
    { text: '立即预约试听', href: '#', primary: true },
    { text: '课程咨询', href: '#', primary: false }
  ],
  footerNote: '或拨打 400-6688-muse 工作日9:00-21:00'
})
</script>

<template>
  <main>
    <!-- 课程首屏 -->
    <HeroBlock v-bind="heroData" />
    
    <!-- 快速筛选标签 (对应原型中的视觉装饰) -->
    <FilterTagsBlock :tags="filterTags" />

    <!-- 课程分类板块 (4大核心方向) -->
    <CourseCategoriesBlock v-bind="courseCategoriesData" />
    
    <!-- 特色课程展现 (热门推荐 · 乐队课) -->
    <ImageTextSplitBlock 
      badge="🔥 热门推荐 · 乐队课"
      title="少儿摇滚乐队课"
      description="8-15岁 · 以乐队为单位授课。每位学员选择一件乐器（吉他/贝斯/鼓/键盘/主唱），学习经典摇滚曲目并创作自己的原创。期末live演出。"
      :image="{ src: 'https://images.unsplash.com/photo-1525201548942-d8732f6617a0?q=80&w=2070&auto=format&fit=crop', alt: '少儿乐队排练' }"
      :stats="['🎸 节奏吉他/主音', '🎤 主唱/和声', '🥁 鼓手律动']"
      :cta="[{ text: '了解乐队课大纲', href: '#', primary: true }]"
    />
    
    <!-- 王牌课程 (施坦威工作室) -->
    <ImageTextSplitBlock 
      reversed
      badge="🎹 王牌课程 · 施坦威工作室"
      title="古典钢琴 · 演奏体系"
      description="从巴赫到拉赫玛尼诺夫。一对一精英教学，可选ABRSM/国内考级或纯演奏提升。每年两次施坦威音乐厅汇报演出。"
      :image="{ src: 'https://images.unsplash.com/photo-1560421683-6856ea585c78?q=80&w=2070&auto=format&fit=crop', alt: '钢琴一对一课程' }"
      :stats="['9级 进阶体系', '100% 考级通过率', '大师班 季度举行']"
      :cta="[{ text: '预约钢琴试听课', href: '#', primary: false }]"
    />
    
    <!-- 全课程一览 -->
    <CourseListBlock v-bind="courseListData" />
    
    <!-- 课程相关 FAQ -->
    <FaqBlock title="课程 · 常见问题" :faqs="faqs" />
    
    <!-- 课程预约 CTA -->
    <CtaBlock v-bind="ctaData" />
  </main>
</template>

<style scoped>
</style>
