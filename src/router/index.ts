import type { RouteRecordRaw } from 'vue-router'

const IndexView = () => import('../views/IndexView.vue')
const CoursesView = () => import('../views/CoursesView.vue')
const TeachersView = () => import('../views/TeachersView.vue')
const EventsView = () => import('../views/EventsView.vue')
const CampusesView = () => import('../views/CampusesView.vue')
const NewsView = () => import('../views/NewsView.vue')
const NewsDetailView = () => import('../views/NewsDetailView.vue')

export const routes: RouteRecordRaw[] = [
    {
        path: '/',
        name: 'home',
        alias: '/index.html',
        component: IndexView
    },
    {
        path: '/courses',
        name: 'courses',
        alias: '/courses.html',
        component: CoursesView
    },
    {
        path: '/teachers',
        name: 'teachers',
        alias: '/teachers.html',
        component: TeachersView
    },
    {
        path: '/events',
        name: 'events',
        alias: '/events.html',
        component: EventsView
    },
    {
        path: '/campuses',
        name: 'campuses',
        alias: '/campuses.html',
        component: CampusesView
    },
    {
        path: '/news',
        name: 'news',
        alias: '/news.html',
        component: NewsView
    },
    {
        path: '/news-detail',
        name: 'news-detail',
        alias: '/news-detail.html',
        component: NewsDetailView
    }
]
