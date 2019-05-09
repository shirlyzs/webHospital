<template>
  <div>
    <div class="container">
      <div class="wel">欢迎来到山东医院</div>
      <div class="login" v-if="!loginName">
        <router-link to="/Login">登录 / 注册</router-link>
        <!-- <router-link to="/poster" style="margin-left:20px;">员工版</router-link> -->
        <router-link :to="{name:'login',query:{type:'staff'}}" style="margin-left:20px;">员工版</router-link>
        <!-- <router-link :to="{name:'login',query:{type:'doctor'}}" style="margin-left:20px;">医生</router-link> -->
      </div>
      <div class="login" v-else>
        <router-link to="/personal" style="color:#ffffff;margin-right:20px;">欢迎您，{{loginName}}</router-link>
        <div @click="shanchu">退出登录</div>
      </div>
    </div>
    <div class="nav">
      <img :src="logoIMG" alt>
      <el-menu
        :default-active="activeIndex"
        class="el-menu-demo2"
        mode="horizontal"
        @select.capture="handleSelect"
        text-color="#333"
        text-align="center"
      >
        <el-menu-item index="1">
          <router-link to="/" :class="mainpath=='/'?'ison':''">网站首页</router-link>
        </el-menu-item>
        <el-submenu index="2">
          <template slot="title" style="border: none;">
            <span :class="mainpath.indexOf('/hos')>-1?'ison':''">医院概况</span>
          </template>
          <router-link to="/hos/intro">
            <el-menu-item index="2-1">医院简介</el-menu-item>
          </router-link>
          <router-link to="/hos/leader">
            <el-menu-item index="2-2">历任领导</el-menu-item>
          </router-link>
          <router-link to="/hos/culture">
            <el-menu-item index="2-3">医院文化</el-menu-item>
          </router-link>
        </el-submenu>
        <el-menu-item index="3">
          <router-link to="/more" :class="mainpath=='/more'?'ison':''">医院要闻</router-link>
        </el-menu-item>
        <el-submenu index="4">
          <template slot="title" style="border:none">
            <span :class="mainpath.indexOf('/guide')>-1?'ison':''">就诊指南</span>
          </template>
          <router-link to="/guide/know">
            <el-menu-item index="4-1">就诊须知</el-menu-item>
          </router-link>
          <router-link to="/guide/process">
            <el-menu-item index="4-2">就医流程</el-menu-item>
          </router-link>
          <router-link to="/guide/location">
            <el-menu-item index="4-3">医院布局</el-menu-item>
          </router-link>
          <router-link to="/guide/transport">
            <el-menu-item index="4-4">交通指南</el-menu-item>
          </router-link>
        </el-submenu>
        <el-menu-item index="5" :class="mainpath=='/reserve'?'ison':''">
          <router-link to="/reserve">预约挂号</router-link>
        </el-menu-item>
        <el-menu-item index="6" :class="mainpath=='/roomintro'?'ison':''">
          <router-link to="/roomintro">科室介绍</router-link>
        </el-menu-item>
        <el-menu-item index="7" :class="mainpath=='/master'?'ison':''">
          <router-link to="/master">专家介绍</router-link>
        </el-menu-item>
        <el-menu-item index="8" :class="mainpath=='/study'?'ison':''">
          <router-link to="/study">健康讲堂</router-link>
        </el-menu-item>
      </el-menu>
    </div>
  </div>
</template>

<script>
export default {
  data() {
    return {
      activeIndex: "1",
      loginName: "",
      logoIMG: require("../assets/logo.png"),
      mainpath: ""
    };
  },
  methods: {
    shanchu() {
      window.sessionStorage.clear();
      this.loginName = "";
    }
  },
  created() {
    if (window.sessionStorage["loginKey"]) {
      this.loginName = window.sessionStorage["loginKey"];
    }
    console.log(window.sessionStorage["loginKey"], "loginkey");
    this.mainpath = this.$route.path;
  }
};
</script>

<style lang="less" scoped>
.container {
  height: 42px;
  line-height: 42px;
  background-color: rgba(24, 116, 205);
  padding: 0 220px;
  // TODO: 首页左右120
  .wel {
    float: left;
    font-size: 15px;
    color: #ffffff;
    font-weight: 600;
  }
  .login {
    float: right;
    font-weight: 300;
    display: -webkit-box;
  }
  .login a {
    font-family: "Microsoft YaHei", "微软雅黑", STXihei;
    color: #ffffff;
    font-size: 14px;
  }
}
.nav {
  position: relative;
  img {
    position: absolute;
    left: 205px;
    top: 5px;
    z-index: 4;
    width: 70px;
    height: 68px;
  }
}
.el-menu-demo2 {
  display: flex;
  justify-content: center;
  z-index: 3;
  height: 80px;
  align-items: center;
  li {
    border: none !important;
  }
}
.el-submenu__title {
  border: none !important;
}
.ison {
  color: #00a1e9 !important;
}
</style>
