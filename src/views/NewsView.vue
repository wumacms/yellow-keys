<script setup lang="ts">
import { ref } from 'vue'
import type { 
  TitlePart, 
  ActionLink, 
  ImageData, 
  TagItem, 
  FeaturedNews, 
  HotNewsItem, 
  NewsItem, 
  PaginationItem 
} from '@/types'
import HeroBlock from '@/components/blocks/common/HeroBlock.vue'
import FilterTagsBlock from '@/components/blocks/common/FilterTagsBlock.vue'
import FeaturedNewsBlock from '@/components/blocks/news/FeaturedNewsBlock.vue'
import NewsListBlock from '@/components/blocks/news/NewsListBlock.vue'
import ImageTextSplitBlock from '@/components/blocks/common/ImageTextSplitBlock.vue'
import NewsletterSubscribeBlock from '@/components/blocks/news/NewsletterSubscribeBlock.vue'
import ContributeBlock from '@/components/blocks/news/ContributeBlock.vue'

interface HeroData {
  badge: string
  title: TitlePart[]
  description: string
  buttons: ActionLink[]
  image: ImageData
}

const heroData = ref<HeroData>({
  badge: '📰 黄黑键动态 · 音乐大小事',
  title: [
    { text: '新闻', highlight: true },
    { text: ' 与', highlight: false },
    { text: '故事', highlight: true }
  ],
  description: '学校最新动态、学员佳绩、行业资讯、音乐教育趋势……在这里，读懂黄黑键。',
  buttons: [
    { text: '订阅新闻通讯', href: '#', primary: true },
    { text: '往期回顾', href: '#', primary: false }
  ],
  image: {
    src: 'https://images.unsplash.com/photo-1456513080510-7bf3a84b82f8?q=80&w=1973&auto=format&fit=crop',
    alt: '音乐新闻与阅读'
  }
})

interface FilterData {
  label: string
  tags: TagItem[]
}

const filterData = ref<FilterData>({
  label: '新闻分类 :',
  tags: [
    { label: '全部', active: true },
    { label: '学校动态', active: false },
    { label: '学员佳绩', active: false },
    { label: '教师风采', active: false },
    { label: '音乐资讯', active: false },
    { label: '考级/比赛', active: false }
  ]
})

interface FeaturedNewsData {
  header: {
    title: string
    moreLink: string
  }
  featuredNews: FeaturedNews
  hotNews: HotNewsItem[]
}

const featuredNewsData = ref<FeaturedNewsData>({
  header: {
    title: '🔥 热点 · 聚焦',
    moreLink: '#'
  },
  featuredNews: {
    badge: '🏆 学员佳绩',
    date: '2025.03.28',
    title: '黄黑键学员包揽"珠江·恺撒堡"国际钢琴大赛少儿组金银奖',
    description: '在刚刚结束的2025珠江·恺撒堡国际青少年钢琴大赛中，我校选送的6名学员全部获奖，其中张奕老师指导的周雨桐获少儿A组金奖，陈曦老师指导的李明泽获银奖。展现了黄黑键的教学实力。',
    image: 'https://images.unsplash.com/photo-1520523839897-bd0b52f945a0?q=80&w=2070&auto=format&fit=crop',
    buttons: [
      { text: '阅读全文', href: '/news-detail', primary: true },
      { text: '获奖名单', href: '#', primary: false }
    ]
  },
  hotNews: [
    {
      category: '🏫 学校动态',
      title: '成都锦江校区正式开工，预计夏季开放',
      summary: '2025.03.25 · 西南首家旗舰店落户太古里商圈',
      image: 'https://images.unsplash.com/photo-1580537659466-0a9bfa916a54?q=80&w=1974&auto=format&fit=crop',
      link: '#'
    },
    {
      category: '🎻 教师风采',
      title: '"春之弦语"教师室内乐音乐会圆满落幕',
      summary: '2025.03.20 · 陈曦、李舒等老师奏响施坦威音乐厅',
      image: 'https://images.unsplash.com/photo-1507838153414-b4b713384a76?q=80&w=2070&auto=format&fit=crop',
      link: '#'
    }
  ]
})

interface NewsListData {
  title: string
  newsItems: NewsItem[]
  pagination: PaginationItem[]
}

const newsListData = ref<NewsListData>({
  title: '📰 最新新闻 · 一览',
  newsItems: [
    {
      category: '音乐资讯',
      title: '2025年英皇考级新纲解析讲座报名',
      summary: '4月9日，资深考官现场解读钢琴、弦乐新考纲变化，免费预约开放。',
      date: '2025.03.30',
      link: '/news-detail'
    },
    {
      category: '学员佳绩',
      title: '13名学员通过英皇八级，优良率85%',
      summary: '2025年第一期英皇演奏考级成绩公布，黄黑键学员再创佳绩，优秀良好率达85%。',
      date: '2025.03.28',
      link: '/news-detail'
    },
    {
      category: '学校动态',
      title: '黄黑键与施坦威续约战略合作',
      summary: '双方将继续在钢琴教育、教师培训、学员音乐会等方面深度合作。',
      date: '2025.03.25',
      link: '/news-detail'
    },
    {
      category: '教师风采',
      title: '张奕老师受邀担任金钟奖钢琴评委',
      summary: '我校艺术总监张奕老师连续第三届获邀担任中国音乐金钟奖钢琴比赛评委。',
      date: '2025.03.22',
      link: '/news-detail'
    },
    {
      category: '考级/比赛',
      title: '2025夏季国际青少年音乐比赛启动',
      summary: '由黄黑键协办的第五届青少年音乐比赛开始报名，分钢琴、弦乐、管乐等组别。',
      date: '2025.03.20',
      link: '/news-detail'
    },
    {
      category: '音乐资讯',
      title: 'Music China 2025 黄黑键展位预告',
      summary: '10月上海国际乐器展，黄黑键将携新课程体系与教师团队亮相E3馆。',
      date: '2025.03.18',
      link: '/news-detail'
    }
  ],
  pagination: [
    { page: 1, active: true },
    { page: 2, active: false },
    { page: 3, active: false },
    { page: 4, active: false },
    { page: 12, active: false }
  ]
})

interface NewsletterData {
  badge: string
  title: string
  description: string
  placeholder: string
  buttonText: string
  footerNote: string
}

const newsletterData = ref<NewsletterData>({
  badge: '📬 新闻通讯',
  title: '订阅黄黑键动态',
  description: '每周精选新闻、活动预告、学员故事直达你的邮箱',
  placeholder: '你的邮箱地址',
  buttonText: '立即订阅',
  footerNote: '随时退订，我们承诺不滥用你的信息'
})

interface ContributeData {
  title: string
  description: string
  buttonText: string
  link: string
}

const contributeData = ref<ContributeData>({
  title: '📝 新闻/故事投稿',
  description: '如果你是学员家长、教师或音乐爱好者，欢迎投稿分享你与黄黑键的故事。入选将获得定制礼品。',
  buttonText: '投稿须知 & 联系编辑',
  link: '#'
})
</script>

<template>
  <main>
    <!-- 新闻首屏 -->
    <HeroBlock v-bind="heroData" />
    
    <!-- 分类筛选 -->
    <FilterTagsBlock v-bind="filterData" />
    
    <!-- 热点聚焦 -->
    <FeaturedNewsBlock v-bind="featuredNewsData" />
    
    <!-- 新闻列表 -->
    <NewsListBlock v-bind="newsListData" />
    
    <!-- 专题报道 (左图右文) -->
    <ImageTextSplitBlock 
      badge="📖 人物专访 · 学员故事"
      title="从零基础到英皇八级，他只用了三年"
      description="12岁学员李明泽的学琴之路：如何平衡学业与练琴？黄黑键的智能陪练系统给了他什么帮助？来听听他的故事。"
      :image="{ src: 'https://images.unsplash.com/photo-1511379938547-c1f69419868d?q=80&w=2070&auto=format&fit=crop', alt: '学员专访' }"
      :cta="[{ text: '阅读完整专访', href: '/news-detail', primary: true }]"
    />
    
    <!-- 订阅通讯 -->
    <NewsletterSubscribeBlock v-bind="newsletterData" />
    
    <!-- 投稿合作 -->
    <ContributeBlock v-bind="contributeData" />
  </main>
</template>

<style scoped>
</style>
