<template>
  <div>
    <div class="container">
      <div class="wel">欢迎来到山东医院</div>
      <div class="login" v-if="!loginName">
        <router-link to="/Login">登录 / 注册</router-link>
        <router-link :to="{name:'login',query:{type:'admin'}}" style="margin-left:20px;">员工版</router-link>
        <router-link :to="{name:'login',query:{type:'doctor'}}" style="margin-left:20px;">医生</router-link>
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
        active-text-color="#00a1e9"
        text-align="center"
      >
        <!-- background-color="rgba(24, 116, 205)" -->
        <el-menu-item index="1">
          <router-link to="/">网站首页</router-link>
        </el-menu-item>
        <el-submenu index="2">
          <template slot="title" style="font-size:16px">医院概况</template>
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
        <el-submenu index="3">
          <template slot="title">新闻动态</template>
          <router-link to="/more">
            <el-menu-item index="3-1">医院要闻</el-menu-item>
          </router-link>
          <router-link to="/study">
            <el-menu-item index="3-2">健康讲堂</el-menu-item>
          </router-link>
        </el-submenu>
        <el-submenu index="4">
          <template slot="title">就诊指南</template>
          <router-link to="/reserve">
            <el-menu-item index="4-1">预约挂号</el-menu-item>
          </router-link>
          <router-link to="/guide/know">
            <el-menu-item index="4-2">就诊须知</el-menu-item>
          </router-link>
          <router-link to="/guide/process">
            <el-menu-item index="4-3">就医流程</el-menu-item>
          </router-link>
          <router-link to="/guide/location">
            <el-menu-item index="4-4">医院布局</el-menu-item>
          </router-link>
          <router-link to="/guide/transport">
            <el-menu-item index="4-5">交通指南</el-menu-item>
          </router-link>
        </el-submenu>
        <el-menu-item index="5">
          <router-link to="/roomintro">科室介绍</router-link>
        </el-menu-item>
        <el-menu-item index="6">
          <router-link to="/master">专家介绍</router-link>
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
      logoIMG: require("../assets/logo.png")
    };
  },
  methods: {
    handleSelect(key, keyPath) {
      console.log(key, keyPath);
    },
    shanchu() {
      window.sessionStorage.clear();
      this.loginName = "";
    }
  },
  created() {
    if (window.sessionStorage["loginKey"]) {
      this.loginName = window.sessionStorage["loginKey"];
    }
    console.log(window.sessionStorage["loginKey"], 666);
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
    left: 255px;
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
</style>
