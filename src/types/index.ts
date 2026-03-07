/**
 * 通用图片数据接口
 */
export interface ImageData {
    src: string;
    alt: string;
}

/**
 * 通用链接/按钮接口
 */
export interface ActionLink {
    text: string;
    href: string;
    primary?: boolean;
}

/**
 * 标题片段接口，支持高亮显示
 */
export interface TitlePart {
    text: string;
    highlight?: boolean;
}

/**
 * FAQ 条目接口
 */
export interface FaqItem {
    question: string;
    answer: string;
}

/**
 * 特色功能条目接口
 */
export interface FeatureItem {
    icon: string;
    title: string;
    description: string;
}

/**
 * 标签条目接口
 */
export interface TagItem {
    label: string;
    active: boolean;
}

/**
 * 导航栏 Logo 配置
 */
export interface NavLogo {
    emoji: string;
    text1: string;
    text2: string;
    href: string;
}

/**
 * 课程分类和条目
 */
export interface CourseCategory {
    icon: string;
    title: string;
    description: string;
    tag: string;
}

export interface CourseItem {
    icon: string;
    title: string;
    description: string;
}

/**
 * 活动相关
 */
export interface CalendarEvent {
    date: string;
    time: string;
    title: string;
    description: string;
    location: string;
    href: string;
    tag: string;
}

export interface FeaturedEvent {
    image: string;
    title: string;
    badge: string;
    description: string;
    stats: string[];
    ctas: ActionLink[];
}

export interface SecondaryEvent {
    image: string;
    title: string;
    badge: string;
    description: string;
    href: string;
    ctaText: string;
}

export interface PastEvent {
    image: string;
    title: string;
    date: string;
    description: string;
}

/**
 * 首页其他区块
 */
export interface Partner {
    logo: string;
    name: string;
    role: string;
}

export interface StatItem {
    value: string;
    label: string;
}

export interface Testimonial {
    avatar: string;
    name: string;
    role: string;
    content: string;
}

/**
 * 新闻相关
 */
export interface FeaturedNews {
    image: string;
    title: string;
    badge: string;
    date: string;
    description: string;
    buttons: ActionLink[];
}

export interface HotNewsItem {
    image: string;
    title: string;
    category: string;
    summary: string;
    link: string;
}

export interface NewsItem {
    category: string;
    title: string;
    summary: string;
    date: string;
    link: string;
}

export interface RelatedNewsItem extends NewsItem {
    id: string | number;
}

export interface PaginationItem {
    page: number;
    active: boolean;
}

export interface LinkedArticle {
    title: string;
    date: string;
    link: string;
}

/**
 * 教师相关
 */
export interface TeacherItem {
    image: string;
    name: string;
    subject: string;
    honor: string;
    description: string;
    stats: string[];
}

export interface TeacherStory {
    avatar: string;
    name: string;
    subject: string;
    quote: string;
    content: string;
}

/**
 * 校区相关
 */
export interface CampusItem {
    image: string;
    name: string;
    location: string;
    address: string;
    badge: string;
    tags: string[];
    isUpcoming?: boolean;
}

/**
 * 导航栏菜单项
 */
export interface MenuItem {
    name: string;
    href: string;
}

/**
 * 页脚数据结构
 */
export interface FooterData {
    brand: {
        emoji: string;
        name: string;
        description: string;
        copyright: string;
    };
    campusInfo: {
        title: string;
        addresses: string[];
    };
    contactInfo: {
        title: string;
        details: {
            label: string;
            value: string;
        }[];
    };
    qrCode: {
        title: string;
        image: string;
        description: string;
    };
    footerNote: string;
}
