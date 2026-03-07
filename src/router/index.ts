import { createRouter, createWebHistory, type RouteRecordRaw } from 'vue-router'

const IndexView = () => import('../views/IndexView.vue')
const CoursesView = () => import('../views/CoursesView.vue')
const TeachersView = () => import('../views/TeachersView.vue')
const EventsView = () => import('../views/EventsView.vue')
const CampusesView = () => import('../views/CampusesView.vue')
const NewsView = () => import('../views/NewsView.vue')
const NewsDetailView = () => import('../views/NewsDetailView.vue')

const routes: RouteRecordRaw[] = [
    {
        path: '/',
        name: 'home',
        component: IndexView
    },
    {
        path: '/courses',
        name: 'courses',
        component: CoursesView
    },
    {
        path: '/teachers',
        name: 'teachers',
        component: TeachersView
    },
    {
        path: '/events',
        name: 'events',
        component: EventsView
    },
    {
        path: '/campuses',
        name: 'campuses',
        component: CampusesView
    },
    {
        path: '/news',
        name: 'news',
        component: NewsView
    },
    {
        path: '/news-detail',
        name: 'news-detail',
        component: NewsDetailView
    }
]

const router = createRouter({
    history: createWebHistory(),
    routes,
    scrollBehavior() {
        // 每次跳转页面回到顶部
        return { top: 0 }
    }
})

export default router
