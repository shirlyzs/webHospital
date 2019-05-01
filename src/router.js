import Vue from "vue";
import Router from "vue-router";
import Home from "./views/Home.vue";
import Login from "./views/Login.vue";
import Hos from "./views/Hos.vue";
import News from "./views/News.vue";
import Know from "./views/Know.vue";
import Reserve from "./views/Reserve.vue";
import Hmessage from "./views/Hmessage.vue";
import Hundred from "./views/Hundred.vue";
import Show from "./views/Show.vue";
import Study from "./views/Study.vue";
import Roomintro from "./views/Roomintro.vue";
import Detail from "./views/Detail.vue";
import Master from "./views/Master.vue";
import Roomdetail from "./views/Roomdetail.vue";
import Personal from "./views/Personal.vue";
import More from "./views/More.vue";
import Prodetail from "./views/Prodetail.vue";
import Showdetail from "./views/Showdetail.vue";
import Doctor from "./views/Doctor.vue";





Vue.use(Router);

export default new Router({
  mode: "history",
  base: process.env.BASE_URL,
  routes: [
    {
      path: "/",
      name: "home",
      component: Home
    },
    {
      path: "/login",
      name: "login",
      component: Login
    },
    {
      path: "/hos/:name",
      name: "Hos",
      component: Hos
    },

    {
      path: "/news/:name",
      name: "News",
      component: News
    },
    {
      path: "/guide/:name",
      name: "know",
      component: Know
    },
    {
      path: "/reserve",
      name: "reserve",
      component: Reserve
    },
    {
      path: "/hmessage",
      name: "hmessage",
      component: Hmessage
    },
    {
      path: "/hundred",
      name: "hundred",
      component: Hundred
    },
    {
      path: "/show",
      name: "show",
      component: Show
    },
    {
      path: "/study",
      name: "study",
      component: Study
    },
    {
      path: "/roomintro",
      name: "roomintro",
      component: Roomintro
    },
    {
      path: "/master",
      name: "master",
      component: Master
    },
    {
      path: "/detail",
      name: "detail",
      component: Detail
    },
    {
      path: "/roomdetail",
      name: "roomdetail",
      component: Roomdetail
    },
    {
      path: "/personal",
      name: "personal",
      component: Personal
    },
    {
      path: "/more",
      name: "more",
      component: More
    },
    {
      path: "/prodetail",
      name: "prodetail",
      component: Prodetail
    },
    {
      path: "/showdetail",
      name: "showdetail",
      component: Showdetail
    },
    {
      path: "/doctor",
      name: "doctor",
      component: Doctor
    },
    // 管理员系列
    {
      path: '/admin',
      name: 'admin',
      component: () => import('@/views/admin/admin.vue')
    }
  ]
});
