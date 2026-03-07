import { ViteSSG } from 'vite-ssg'
import './style.css'
import App from './App.vue'
import { routes } from './router'

export const createApp = ViteSSG(
    App,
    {
        routes,
        scrollBehavior() {
            // 保持之前的跳转至顶部逻辑
            return { top: 0 }
        }
    },
    ({ app, router, isClient, initialState }) => {
        // 可以在这里安装插件
    }
)
