<script setup lang="ts">
import { ref } from 'vue'
import type { 
  TitlePart, 
  ActionLink, 
  ImageData, 
  TagItem, 
  TeacherItem, 
  FeatureItem, 
  TeacherStory 
} from '@/types'
import HeroBlock from '@/components/blocks/common/HeroBlock.vue'
import FilterTagsBlock from '@/components/blocks/common/FilterTagsBlock.vue'
import TeacherGridBlock from '@/components/blocks/teachers/TeacherGridBlock.vue'
import FeaturesBlock from '@/components/blocks/common/FeaturesBlock.vue'
import ImageTextSplitBlock from '@/components/blocks/common/ImageTextSplitBlock.vue'
import TeacherStoriesBlock from '@/components/blocks/teachers/TeacherStoriesBlock.vue'
import CtaBlock from '@/components/blocks/common/CtaBlock.vue'

interface HeroData {
  badge: string
  title: TitlePart[]
  description: string
  buttons: ActionLink[]
  image: ImageData
}

const heroData = ref<HeroData>({
  badge: '👑 演奏家导师团',
  title: [
    { text: '与', highlight: false },
    { text: '真正懂音乐的人', highlight: true },
    { text: ' 学音乐', highlight: false }
  ],
  description: '我们的教师不仅是老师，更是活跃在舞台上的演奏家、教育家。平均教龄10年以上，把最纯正的音乐语言传递给你。',
  buttons: [
    { text: '预约名师体验课', href: '#', primary: true },
    { text: '师资介绍手册', href: '#', primary: false }
  ],
  image: {
    src: 'https://images.unsplash.com/photo-1763705310142-6ab868e4ca6c?q=80&w=900&auto=format&fit=crop',
    alt: '室内乐演奏'
  }
})

interface FilterData {
  label: string
  tags: TagItem[]
}

const filterData = ref<FilterData>({
  label: '快速筛选 :',
  tags: [
    { label: '全部', active: true },
    { label: '钢琴', active: false },
    { label: '弦乐', active: false },
    { label: '管乐', active: false },
    { label: '吉他/贝斯', active: false },
    { label: '声乐', active: false },
    { label: '打击乐', active: false },
    { label: '作曲/制作', active: false }
  ]
})

interface TeacherGridData {
  title: string
  subtitle: string
  teachers: TeacherItem[]
  cta: {
    text: string
    href: string
  }
}

const teacherGridData = ref<TeacherGridData>({
  title: '首席导师 · 艺术领路人',
  subtitle: '舞台上的演奏家，讲台上的引路人',
  teachers: [
    {
      name: '张奕',
      subject: '钢琴 · 艺术总监',
      honor: '施坦威荣誉教师',
      image: 'https://images.unsplash.com/photo-1500648767791-00dcc994a43e?q=80&w=1974&auto=format&fit=crop',
      description: '上海音乐学院钢琴系硕士、柏林艺术大学访问学者。曾获中国音乐金钟奖，学员屡获国内外钢琴赛事金奖。',
      stats: ['🎓 教龄18年', '🏅 英皇考官']
    },
    {
      name: '陈曦',
      subject: '小提琴 · 室内乐主任',
      honor: '前爱乐首席',
      image: 'https://images.unsplash.com/photo-1531123897727-8f129e1688ce?q=80&w=1974&auto=format&fit=crop',
      description: '中央音乐学院硕士，原中国爱乐乐团副首席。多次担任国内外弦乐比赛评委，其学生考入柯蒂斯、新英格兰等名校。',
      stats: ['🎓 教龄15年', '🏅 国际比赛评委']
    },
    {
      name: '林清',
      subject: '声乐 · 流行演唱',
      honor: '金曲奖提名',
      image: 'https://images.unsplash.com/photo-1560250097-0b93528c311a?q=80&w=1974&auto=format&fit=crop',
      description: '伯克利音乐学院毕业，活跃于爵士音乐节。擅长SLS唱法教学，指导学员登上《中国好声音》舞台。',
      stats: ['🎓 教龄12年', '🏅 明星导师']
    },
    {
      name: '黄骏',
      subject: '电吉他/指弹吉他',
      honor: '代言人',
      image: 'https://images.unsplash.com/photo-1519085360753-af0119f7cbe7?q=80&w=1974&auto=format&fit=crop',
      description: '知名乐手，Fender品牌合作艺术家。参与录制《我是歌手》现场吉他手，擅长摇滚、Fusion风格教学。',
      stats: ['🎓 教龄14年', '🏅 演唱会乐手']
    },
    {
      name: '李舒',
      subject: '大提琴 · 低音提琴',
      honor: '乐团首席',
      image: 'https://images.unsplash.com/photo-1566492031773-4f4e44671857?q=80&w=1974&auto=format&fit=crop',
      description: '上海音乐学院博士，上海歌剧院大提琴声部首席。多次出访欧洲交流演出，学员考入德国汉斯·艾斯勒音乐学院。',
      stats: ['🎓 教龄16年', '🏅 国际比赛获奖']
    },
    {
      name: '王雷',
      subject: '爵士鼓 · 拉丁打击乐',
      honor: 'IPEA 委员',
      image: 'https://images.unsplash.com/photo-1521119989659-a83eee488004?q=80&w=1974&auto=format&fit=crop',
      description: '上海音乐学院现代器乐系教师，IPEA国际打击乐比赛评委。编写多套爵士鼓考级教材，学生遍布各大音乐学院。',
      stats: ['🎓 教龄20年', '🏅 教材主编']
    }
  ],
  cta: {
    text: '查看全部52位教师 →',
    href: '#'
  }
})

const features = ref<FeatureItem[]>([
  { icon: '🎯', title: '舞台经验', description: '所有导师保持每年至少10场演出，把最新的舞台经验带回课堂。' },
  { icon: '📚', title: '自主研发教材', description: '结合国际体系与本土学员特点，教学法科学且有趣。' },
  { icon: '👥', title: '双师制辅导', description: '主课老师+助教练习课，确保每周练习问题及时解决。' },
  { icon: '🎓', title: '升学/考级规划', description: '导师均为国内外考级评委或音乐学院校友，精准指导升学。' }
])

interface TeacherStoriesData {
  title: string
  subtitle: string
  stories: TeacherStory[]
}

const teacherStoriesData = ref<TeacherStoriesData>({
  title: '名师 · 育人故事',
  subtitle: '听听导师们的教学理念与学员成长',
  stories: [
    {
      name: '张奕',
      subject: '钢琴',
      quote: '音乐是情感的语言',
      avatar: 'https://images.unsplash.com/photo-1500648767791-00dcc994a43e?w=96&h=96&fit=crop',
      content: '我有个学生刚来时特别内向，通过即兴演奏慢慢打开自己，现在能自信地在音乐厅独奏。每个孩子都有自己的音乐密码。'
    },
    {
      name: '林清',
      subject: '声乐',
      quote: '流行演唱不只有技巧',
      avatar: 'https://images.unsplash.com/photo-1560250097-0b93528c311a?w=96&h=96&fit=crop',
      content: '教过最年长的学生62岁，退休后开始学唱歌，现在在社区合唱团担任领唱。唱歌是每个人都拥有的权利。'
    },
    {
      name: '陈曦',
      subject: '小提琴',
      quote: '乐团思维培养合作',
      avatar: 'https://images.unsplash.com/photo-1531123897727-8f129e1688ce?w=96&h=96&fit=crop',
      content: '我的学生组了一个弦乐四重奏，去年获得上海国际青少年室内乐比赛一等奖。看到他们享受合奏，比拿奖更开心。'
    }
  ]
})

interface CtaData {
  badge: string
  title: string
  description: string
  buttons: ActionLink[]
  footerNote: string
}

const ctaData = ref<CtaData>({
  badge: '✨ 免费体验名师一对一',
  title: '选择你的专属导师',
  description: '30分钟体验课，感受演奏级教师的魅力',
  buttons: [
    { text: '预约名师体验', href: '#', primary: true },
    { text: '师资咨询', href: '#', primary: false }
  ],
  footerNote: '或联系课程顾问匹配最适合你的老师'
})
</script>

<template>
  <main>
    <!-- 名师首屏 -->
    <HeroBlock v-bind="heroData" />
    
    <!-- 快速筛选 -->
    <FilterTagsBlock v-bind="filterData" />
    
    <!-- 名师网格展示 -->
    <TeacherGridBlock v-bind="teacherGridData" />
    
    <!-- 师资优势/特点 -->
    <FeaturesBlock :features="features" :header="{ title: '为什么选择我们的导师？', subtitle: '不仅是教音乐，更是传递音乐家的思维' }" />
    
    <!-- 大师班/活动 -->
     <ImageTextSplitBlock 
      badge="🎻 近期活动 · 名额有限"
      title="陈曦小提琴大师班"
      description="4月15日 · 上海总部音乐厅。公开指导+旁听，一对一指点演奏技巧与音乐处理。对外开放10个席位。"
      :image="{ src: 'https://images.unsplash.com/photo-1520523839897-bd0b52f945a0?q=80&w=2070&auto=format&fit=crop', alt: '大师班现场' }"
      :stats="['⏰ 报名截止4月10日', '📍 仅限6级以上学员']"
      :cta="[
        { text: '立即预约旁听', href: '#', primary: true },
        { text: '其他大师课', href: '#', primary: false }
      ]"
    />
    
    <!-- 育人故事 -->
    <TeacherStoriesBlock v-bind="teacherStoriesData" />
    
    <!-- 预约 CTA -->
    <CtaBlock v-bind="ctaData" />
  </main>
</template>

<style scoped>
</style>
