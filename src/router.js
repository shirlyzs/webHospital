import Vue from "vue";
import Router from "vue-router";
import Home from "./views/Home.vue";
import Login from "./views/Login.vue";
import Intro from "./views/Intro.vue";
import Leader from "./views/Leader.vue";
import Culture from "./views/Culture.vue";
import News from "./views/News.vue";
import Room from "./views/Room.vue";
import Notice from "./views/Notice.vue";
import Know from "./views/Know.vue";
import Process from "./views/Process.vue";


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
    // {
    //   path: "/about",
    //   name: "about",
     
    //   component: () =>
    //     import( "./views/About.vue")
    // },
    {
      path:"/login",
      name:"login",
      component: Login
    },
    {
      path:"/intro",
      name:"intro",
      component: Intro
    },
    {
      path:"/leader",
      name:"leader",
      component: Leader
    },
    {
      path:"/culture",
      name:"culture",
      component:Culture
    },
    {
      path:"/news",
      name:"news",
      component:News
    },
    {
      path:"/room",
      name:"room",
      component:Room
    },
    {
      path:"/notice",
      name:"notice",
      component:Notice
    },
    {
      path:"/know",
      name:"know",
      component:Know
    },
    {
      path:"/process",
      name:"process",
      component:Process
    }
  ]
});
