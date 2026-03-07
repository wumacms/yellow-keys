<script setup lang="ts">
import { ref } from 'vue'
import type { 
  TitlePart, 
  ActionLink, 
  ImageData, 
  TagItem, 
  FaqItem, 
  FeaturedEvent, 
  SecondaryEvent, 
  CalendarEvent, 
  PastEvent 
} from '@/types'
import HeroBlock from '@/components/blocks/common/HeroBlock.vue'
import FilterTagsBlock from '@/components/blocks/common/FilterTagsBlock.vue'
import FeaturedEventsBlock from '@/components/blocks/events/FeaturedEventsBlock.vue'
import EventCalendarBlock from '@/components/blocks/events/EventCalendarBlock.vue'
import PastEventsBlock from '@/components/blocks/events/PastEventsBlock.vue'
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
  badge: ' 全年音乐活动 · 不止于课堂',
  title: [
    { text: '舞台已就绪，', highlight: false },
    { text: '等你发光', highlight: true }
  ],
  description: '从学员音乐会到国际大师课，从音乐节到公益演出。在黄黑键，每个学员都能找到属于自己的舞台。',
  buttons: [
    { text: '近期活动预约', href: '#', primary: true },
    { text: '活动日历', href: '#', primary: false }
  ],
  image: {
    src: 'https://images.unsplash.com/photo-1470229722913-7c0e2dbbafd3?q=80&w=2070&auto=format&fit=crop',
    alt: '音乐节现场'
  }
})

interface FilterData {
  label: string
  tags: TagItem[]
}

const filterData = ref<FilterData>({
  label: '活动类型 :',
  tags: [
    { label: '全部', active: true },
    { label: '学员音乐会', active: false },
    { label: '大师课/工作坊', active: false },
    { label: '音乐节/夏令营', active: false },
    { label: '考级/比赛', active: false },
    { label: '公益演出', active: false }
  ]
})

const faqs = ref<FaqItem[]>([
  { question: '学员如何报名参加演出？', answer: '任课老师会提前1-2个月在班级群发布招募通知，填写报名表并提交演奏视频进行审核即可。' },
  { question: '非学员可以观摩活动吗？', answer: '绝大部分活动对外开放，但部分大师课旁听席位有限，需提前预约。公益演出免预约入场。' },
  { question: '活动会收取费用吗？', answer: '学员汇报音乐会、开放日等免费；大师课、音乐节等视情况收取少量成本费或划扣课时，具体见活动详情。' },
  { question: '如何获取最新活动提醒？', answer: '关注公众号“黄黑键音乐学校”或添加校区教务微信，每周推送活动日历。' }
])

interface CtaData {
  badge: string
  title: string
  description: string
  buttons: ActionLink[]
  footerNote: string
}

const ctaData = ref<CtaData>({
  badge: '🎟️ 第一时间获取活动名额',
  title: '不错过任何精彩',
  description: '订阅活动通知，优先预约大师课/音乐会席位',
  buttons: [
    { text: '订阅活动日历', href: '#', primary: true },
    { text: '咨询活动顾问', href: '#', primary: false }
  ],
  footerNote: '或添加校区微信，备注“活动”'
})

interface FeaturedEventsData {
  mainEvent: FeaturedEvent
  secondaryEvents: SecondaryEvent[]
}

const featuredEventsData = ref<FeaturedEventsData>({
  mainEvent: {
    badge: '🎪 年度盛事 · 4月30日-5月2日',
    title: '黄黑键 · 首届春季原音乐节',
    description: '三天户外音乐派对，学员乐队、教师乐团、特邀嘉宾轮番登场。现场设乐器体验区、亲子工坊、创意市集。',
    image: 'https://images.unsplash.com/photo-1459749411175-04bf5292ceea?q=80&w=2070&auto=format&fit=crop',
    stats: ['📍 上海 · 浦江音乐公园', '👥 预计2000+观众'],
    ctas: [
      { text: '免费预约观摩', href: '#', primary: true },
      { text: '演出报名(学员)', href: '#', primary: false }
    ]
  },
  secondaryEvents: [
    {
      badge: '👑 大师课 · 少量余位',
      title: '张奕钢琴大师班',
      description: '4月15日 14:00 · 上海总部 · 公开指导+旁听',
      image: 'https://images.unsplash.com/photo-1520523839897-bd0b52f945a0?q=80&w=2070&auto=format&fit=crop',
      ctaText: '立即预约旁听 →',
      href: '#'
    },
    {
      badge: '🎹 学员专场 · 免费观演',
      title: '"指尖星光"钢琴汇报音乐会',
      description: '4月20日 19:00 · 施坦威音乐厅',
      image: 'https://images.unsplash.com/photo-1511379938547-c1f69419868d?q=80&w=2070&auto=format&fit=crop',
      ctaText: '获取电子节目单 →',
      href: '#'
    }
  ]
})

interface EventCalendarData {
  title: string
  events: CalendarEvent[]
  cta: {
    text: string
    href: string
    icon: string
  }
}

const eventCalendarData = ref<EventCalendarData>({
  title: '📅 四月活动日历',
  events: [
    {
      date: '4月5日 周六',
      time: '14:00-15:30',
      tag: '免费预约',
      title: '爵士即兴工作坊',
      description: '黄骏(吉他) + 王雷(鼓) · 适合3级以上',
      location: '📍 深圳校区 · 演奏厅',
      href: '#'
    },
    {
      date: '4月9日 周三',
      time: '19:00-20:30',
      tag: '预约席位',
      title: '英皇考级说明会',
      description: '英皇官方代表+资深考官解读新考纲',
      location: '📍 上海总部 · 线上同步直播',
      href: '#'
    },
    {
      date: '4月13日 周日',
      time: '10:00-17:00',
      tag: '报名体验',
      title: '乐器开放日 · 亲子体验',
      description: '钢琴/小提琴/鼓/吉他免费试奏，老师现场指导',
      location: '📍 北京校区 · 全部教室',
      href: '#'
    },
    {
      date: '4月18日 周五',
      time: '19:30-21:00',
      tag: '购票(学员免费)',
      title: '教师室内乐音乐会',
      description: '陈曦(小提琴) / 李舒(大提琴) / 张奕(钢琴)',
      location: '📍 上海 · 施坦威音乐厅',
      href: '#'
    },
    {
      date: '4月22日 周二',
      time: '18:00-19:30',
      tag: '预约(限家长)',
      title: '儿童音乐启蒙讲座',
      description: '针对2-6岁家长，如何在家做音乐游戏',
      location: '📍 深圳校区 · 家长课堂',
      href: '#'
    },
    {
      date: '4月28日 周一',
      time: '全天',
      tag: '预约时段',
      title: '春季考级模拟测试',
      description: '考官一对一模拟，视频录制+点评',
      location: '📍 三校区同时进行',
      href: '#'
    }
  ],
  cta: {
    text: '下载四月活动日历',
    href: '#',
    icon: '📆'
  }
})

interface PastEventsData {
  title: string
  subtitle: string
  pastEvents: PastEvent[]
  cta: {
    text: string
    href: string
  }
}

const pastEventsData = ref<PastEventsData>({
  title: '📸 往期精彩回顾',
  subtitle: '每一次登台，都是成长的见证',
  pastEvents: [
    {
      date: '2025.01.01',
      title: '新年音乐会 · 上海东方艺术中心',
      description: '120名学员登台，全场座无虚席',
      image: 'https://images.unsplash.com/photo-1514525253161-7a46d19cd819?q=80&w=1974&auto=format&fit=crop'
    },
    {
      date: '2024.12.10',
      title: '格莱美吉他手Andy大师课',
      description: '学员即兴合奏，获大师称赞',
      image: 'https://images.unsplash.com/photo-1598488035139-bdbb2231ce04?q=80&w=2070&auto=format&fit=crop'
    },
    {
      date: '2024.09.21',
      title: '首届黄黑键草坪音乐节',
      description: '30+学员乐队、2000+观众',
      image: 'https://images.unsplash.com/photo-1470229722913-7c0e2dbbafd3?q=80&w=2070&auto=format&fit=crop'
    }
  ],
  cta: {
    text: '观看更多活动视频',
    href: '#'
  }
})
</script>

<template>
  <main>
    <!-- 活动首屏 -->
    <HeroBlock v-bind="heroData" />
    
    <!-- 活动筛选 -->
    <FilterTagsBlock v-bind="filterData" />
    
    <!-- 热门推荐 -->
    <FeaturedEventsBlock v-bind="featuredEventsData" />
    
    <!-- 活动日历 -->
    <EventCalendarBlock v-bind="eventCalendarData" />
    
    <!-- 往期回顾 -->
    <PastEventsBlock v-bind="pastEventsData" />
    
    <!-- 关于活动 · 常见问题 -->
    <FaqBlock title="关于活动 · 常见问题" :faqs="faqs" />
    
    <!-- 活动预约CTA -->
    <CtaBlock v-bind="ctaData" />
  </main>
</template>

<style scoped>
</style>
