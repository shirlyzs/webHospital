import Vue from 'vue'
import Router from 'vue-router'
import Home from './views/Home.vue'
import Login from './views/Login.vue'
import Hos from './views/Hos.vue'
import News from './views/News.vue'
import Know from './views/Know.vue'
import Reserve from './views/Reserve.vue'
import Hmessage from './views/Hmessage.vue'
import Hundred from './views/Hundred.vue'
import Show from './views/Show.vue'
import Study from './views/Study.vue'

Vue.use(Router)

export default new Router({
  mode: 'history',
  base: process.env.BASE_URL,
  routes: [
    {
      path: '/',
      name: 'home',
      component: Home
    },
    {
      path: '/login',
      name: 'login',
      component: Login
    },
    {
      path: '/hos/:name',
      name: 'Hos',
      component: Hos
    },

    {
      path: '/news/:name',
      name: 'News',
      component: News
    },
    {
      path: '/guide/:name',
      name: 'know',
      component: Know
    },
    {
      path: '/reserve',
      name: 'reserve',
      component: Reserve
    },
    {
      path: '/hmessage',
      name: 'hmessage',
      component: Hmessage
    },
    {
      path: '/hundred',
      name: 'hundred',
      component: Hundred
    },
    {
      path: '/show',
      name: 'show',
      component: Show
    },
    {
      path: '/study',
      name: 'study',
      component: Study
    },
    // 管理员系列
    {
      path: '/admin',
      name: 'admin',
      component: () => import('@/views/admin/admin.vue')
    }
  ]
})
