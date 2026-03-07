<script setup lang="ts">
import { reactive } from 'vue'
import type { 
  LinkedArticle, 
  RelatedNewsItem 
} from '@/types'
import NewsDetailHero from '@/components/blocks/news-detail/NewsDetailHero.vue'
import NewsDetailContent from '@/components/blocks/news-detail/NewsDetailContent.vue'
import NewsDetailSocial from '@/components/blocks/news-detail/NewsDetailSocial.vue'
import NewsDetailNavigation from '@/components/blocks/news-detail/NewsDetailNavigation.vue'
import NewsDetailRelated from '@/components/blocks/news-detail/NewsDetailRelated.vue'
import NewsDetailFooterAction from '@/components/blocks/news-detail/NewsDetailFooterAction.vue'

interface ArticleHero {
  category: string
  date: string
  views: string
  title: string
  author: string
  location: string
  bgImage: string
}

interface ArticleContent {
  paragraphs: string[]
  quote: string
  quoteAuthor: string
  awardListTitle: string
  awards: string[]
}

interface ArticleNavigation {
  prevArticle: LinkedArticle
  nextArticle: LinkedArticle
}

interface ArticleData {
  hero: ArticleHero
  content: ArticleContent
  social: {
    tags: string[]
  }
  navigation: ArticleNavigation
  relatedNews: RelatedNewsItem[]
}

// 新闻详情数据
const articleData = reactive<ArticleData>({
  hero: {
    category: '🏆 学员佳绩',
    date: '2025.03.28',
    views: '2.3k',
    title: '黄黑键学员包揽“珠江·恺撒堡”国际钢琴大赛少儿组金银奖',
    author: '品牌部',
    location: '上海 · 施坦威音乐厅',
    bgImage: 'https://images.unsplash.com/photo-1520523839897-bd0b52f945a0?q=80&w=2070&auto=format&fit=crop'
  },
  content: {
    paragraphs: [
      '在刚刚落幕的2025“珠江·恺撒堡”国际青少年钢琴大赛中，黄黑键音乐学校选派的6名学员全部获奖，共斩获1项金奖、2项银奖及3项优秀表演奖。其中，张奕老师指导的周雨桐（8岁）以出色的发挥夺得少儿A组金奖，陈曦老师指导的李明泽（10岁）获得银奖。这是黄黑键连续第三年在该赛事中取得优异成绩。',
      '本次比赛吸引了全国近千名选手参与，评审团由中央音乐学院、上海音乐学院等权威专家组成。周雨桐在决赛中演奏了斯卡拉蒂奏鸣曲和肖邦圆舞曲，其细腻的音乐表现力和稳定的技术发挥获得评委一致好评。“孩子学琴三年，每天坚持练琴1.5小时，黄黑键的智能陪练系统帮助她高效纠错。”周雨桐妈妈在赛后分享道。',
      '## 教学成果的集中体现',
      '黄黑键艺术总监张奕表示：“这次获奖不仅是对学员努力的肯定，也印证了我们‘技术+音乐素养’并重的教学理念。周雨桐和李明泽都是从启蒙阶段就在黄黑键学习，我们为他们量身定制了包含乐理、视唱、即兴在内的综合课程。”据悉，两位获奖学员的指导老师均为我校资深教师，拥有丰富的比赛指导经验。',
      '此外，黄黑键在本次比赛中还获得了“优秀组织奖”。所有参赛学员都经过了校内三轮选拔和为期两个月的大师班集训。未来，学校将继续为学员提供更多高规格舞台和实践机会。',
      '接下来，周雨桐和李明泽将受邀参加5月在上海音乐厅举行的获奖选手音乐会。黄黑键也将继续为学员搭建更多展示平台，敬请期待后续报道。'
    ],
    quote: '“音乐教育不是培养演奏机器，而是激发孩子内心的音乐。看到他们在舞台上享受音乐，是最欣慰的时刻。”',
    quoteAuthor: '张奕 · 艺术总监',
    awardListTitle: '📋 黄黑键学员获奖名单',
    awards: [
      '🏅 金奖：周雨桐（少儿A组，指导老师：张奕）',
      '🥈 银奖：李明泽（少儿B组，指导老师：陈曦）',
      '🥈 银奖：王思睿（少年A组，指导老师：李舒）',
      '🎹 优秀表演奖：赵一鸣、陈果儿、刘子涵'
    ]
  },
  social: {
    tags: ['#学员获奖', '#钢琴比赛', '#恺撒堡', '#张奕']
  },
  navigation: {
    prevArticle: {
      title: '成都锦江校区正式开工，夏季开放',
      date: '2025.03.25',
      link: '/news/detail/prev'
    },
    nextArticle: {
      title: '13名学员通过英皇八级，优良率85%',
      date: '2025.03.30',
      link: '/news/detail/next'
    }
  },
  relatedNews: [
    {
      id: 1,
      category: '学员佳绩',
      title: '13名学员通过英皇八级，优良率85%',
      summary: '2025年第一期英皇演奏考级成绩公布...',
      date: '2025.03.28',
      link: '/news/detail/1'
    },
    {
      id: 2,
      category: '教师风采',
      title: '张奕老师受邀担任金钟奖钢琴评委',
      summary: '我校艺术总监连续第三届获邀...',
      date: '2025.03.22',
      link: '/news/detail/2'
    },
    {
      id: 3,
      category: '考级/比赛',
      title: '2025夏季国际青少年音乐比赛启动',
      summary: '由黄黑键协办，设钢琴、弦乐等组别...',
      date: '2025.03.20',
      link: '/news/detail/3'
    }
  ]
})
</script>

<template>
  <main>
    <NewsDetailHero v-bind="articleData.hero" />
    <NewsDetailContent v-bind="articleData.content" />
    <NewsDetailSocial v-bind="articleData.social" />
    <NewsDetailNavigation v-bind="articleData.navigation" />
    <NewsDetailRelated :relatedNews="articleData.relatedNews" />
    <NewsDetailFooterAction />
  </main>
</template>
