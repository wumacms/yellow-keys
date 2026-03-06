<script setup>
import { ref } from 'vue'
import HeroBlock from '@/components/blocks/common/HeroBlock.vue'
import FilterTagsBlock from '@/components/blocks/common/FilterTagsBlock.vue'
import CampusGridBlock from '@/components/blocks/campuses/CampusGridBlock.vue'
import FeaturesBlock from '@/components/blocks/common/FeaturesBlock.vue'
import ImageTextSplitBlock from '@/components/blocks/common/ImageTextSplitBlock.vue'
import FaqBlock from '@/components/blocks/common/FaqBlock.vue'
import CtaBlock from '@/components/blocks/common/CtaBlock.vue'

const heroData = ref({
  badge: '📍 全国15+校区 · 持续扩展中',
  title: [
    { text: '在', highlight: false },
    { text: '你身边', highlight: true },
    { text: '的专业音乐教室', highlight: false }
  ],
  description: '所有校区均配备演奏级琴房、声学装修教室和音乐厅。让优质的音乐教育触手可及。',
  buttons: [
    { text: '查找附近校区', href: '#', primary: true },
    { text: '预约校区参观', href: '#', primary: false }
  ],
  image: {
    src: 'https://images.unsplash.com/photo-1519389950473-47ba0277781c?q=80&w=2070&auto=format&fit=crop',
    alt: '黄黑键校区环境'
  }
})

const filterData = ref({
  label: '选择城市 :',
  tags: [
    { label: '全部', active: true },
    { label: '上海', active: false },
    { label: '北京', active: false },
    { label: '深圳', active: false },
    { label: '广州', active: false },
    { label: '杭州', active: false },
    { label: '成都', active: false },
    { label: '更多筹建中', active: false }
  ]
})

const features = ref([
  { icon: '🎹', title: '演奏级钢琴', description: '全施坦威/雅马哈CFX/Boston三角琴，每月调律' },
  { icon: '🔇', title: '专业声学装修', description: '隔音琴房、可变混响音乐厅，录音棚级标准' },
  { icon: '📹', title: '智能教室系统', description: '每间教室配备摄像头，可回看练琴/上课视频' },
  { icon: '☕', title: '家长休息区', description: '免费咖啡、图书、琴童交流区，实时观看上课' }
])

const faqs = ref([
  { question: '不同校区的课程和收费一样吗？', answer: '课程体系、师资标准、收费全国统一。但部分校校区因场地成本可能有微小浮动，具体以校区报价为准。' },
  { question: '可以跨校区上课吗？', answer: '可以。学员可在全国任意校区预约练琴或补课（需提前联系教务协调）。长期跨城可办理校区转移。' },
  { question: '校区附近有停车场吗？', answer: '每个校区均临近地铁站，并配有停车位/合作停车场，详情可查看具体校区路线说明。' },
  { question: '新校区筹备期间可以报名吗？', answer: '可以。提前报名可享早鸟优惠，且可选择就近已开放校区上课，新校区开放后转回。' }
])

const campusesData = ref({
  title: '全国校区 · 音乐地标',
  subtitle: '每个校区都是精心打造的音乐空间',
  campuses: [
    {
      name: '上海 · 徐汇校区',
      location: '总部 · 旗舰店',
      badge: '🎓 施坦威音乐厅',
      address: '徐汇区创意音乐谷B座 · 地铁1/7号线常熟路站',
      tags: ['三角琴房12间', '录音棚', '容纳200人音乐厅'],
      image: 'https://images.unsplash.com/photo-1580537659466-0a9bfa916a54?q=80&w=1974&auto=format&fit=crop',
      isUpcoming: false
    },
    {
      name: '北京 · 朝阳校区',
      location: '望京 · 艺术区',
      badge: '🎸 乐队排练厅',
      address: '朝阳区艺术大街108号 · 14号线望京南站',
      tags: ['电声教室x4', '鼓隔音间x6', '黑胶休息区'],
      image: 'https://images.unsplash.com/photo-1504384308090-c894fdcc538d?q=80&w=2070&auto=format&fit=crop',
      isUpcoming: false
    },
    {
      name: '深圳 · 南山校区',
      location: '后海 · 海岸城',
      badge: '🌊 海景琴房',
      address: '南山区后海汇L3 · 2号线后海站',
      tags: ['雅马哈CFX琴房', '多媒体教室', '学员休息露台'],
      image: 'https://images.unsplash.com/photo-1523381294911-8d3cead13475?q=80&w=2070&auto=format&fit=crop',
      isUpcoming: false
    },
    {
      name: '广州 · 天河校区',
      location: '珠江新城 · 高德置地',
      badge: '🎹 双钢琴教室',
      address: '天河区珠江新城高德置地夏广场 · 3/5号线珠江新城站',
      tags: ['双钢琴教学', '乐理多媒体', '家长休息区'],
      image: 'https://images.unsplash.com/photo-1588196749597-9ff075ee6b5b?q=80&w=1974&auto=format&fit=crop',
      isUpcoming: false
    },
    {
      name: '杭州 · 西湖校区',
      location: '黄龙 · 音乐厅旁',
      badge: '🍃 景区校区',
      address: '西湖区黄龙路3号 · 3号线黄龙洞站',
      tags: ['三角琴房x8', '室内乐厅', '景观落地窗'],
      image: 'https://images.unsplash.com/photo-1524758631624-e2822e304c36?q=80&w=1974&auto=format&fit=crop',
      isUpcoming: false
    },
    {
      name: '成都 · 锦江校区',
      location: '太古里 · 2025夏季开业',
      badge: '🔥 筹备中 · 敬请期待',
      address: '锦江区中纱帽街 · 地铁2/3号线春熙路站',
      tags: ['规划中', '接受课程预定'],
      image: 'https://images.unsplash.com/photo-1497366216548-37526070297c?q=80&w=1974&auto=format&fit=crop',
      isUpcoming: true
    }
  ]
})

const ctaData = ref({
  badge: '🏫 新校区开放中',
  title: '期待在你城市相见',
  description: '填写意向城市，新校区第一时间通知，并享创始学员优惠',
  buttons: [
    { text: '登记意向校区', href: '#', primary: true },
    { text: '加盟合作', href: '#', primary: false }
  ]
})
</script>

<template>
  <main>
    <!-- 校区首屏 -->
    <HeroBlock v-bind="heroData" />
    
    <!-- 城市筛选 -->
    <FilterTagsBlock v-bind="filterData" />
    
    <!-- 校区展示 -->
    <CampusGridBlock v-bind="campusesData" />
    
    <!-- 统一标准/设施 -->
    <FeaturesBlock :features="features" :header="{ title: '所有校区 · 统一高配标准', subtitle: '我们相信，环境也是音乐教育的一部分' }" />
    
    <!-- 预约参观 -->
    <ImageTextSplitBlock 
      badge="👋 欢迎实地参观"
      title="预约校区开放日"
      description="每周六/日为固定开放日，可参观教学环境、体验乐器、与课程顾问一对一交流。现场报名享额外福利。"
      :image="{ src: 'https://images.unsplash.com/photo-1562774053-701939374585?q=80&w=1986&auto=format&fit=crop', alt: '校区接待厅' }"
      :stats="['⏰ 10:00-17:00 (每整点导览)']"
      :cta="[{ text: '立即预约开放日', href: '#', primary: true }, { text: 'VR云探校', href: '#', primary: false }]"
    />
    
    <!-- 校区 FAQ -->
    <FaqBlock title="校区 · 常见问题" :faqs="faqs" />
    
    <!-- 意向登记 CTA -->
    <CtaBlock v-bind="ctaData" />
  </main>
</template>

<style scoped>
</style>
