<template>
  <div>
    <div class="container">
      <div class="wel">欢迎来到山东省立医院</div>
      <div class="login" v-if="!loginName">
        <router-link to="/Login">登录 / 注册</router-link>
        <router-link :to="{name:'login',query:{type:'admin'}}" style="margin-left:20px;">管理员</router-link>
      </div>
      <div class="login" v-else>
        <router-link to="/personal" style="color:#ffffff;margin-right:20px;">欢迎您，{{loginName}}</router-link>
        <div @click="shanchu">退出登录</div>
      </div>
    </div>
    <div class="nav">
      <el-menu
        :default-active="activeIndex"
        class="el-menu-demo2"
        mode="horizontal"
        @select.capture="handleSelect"
        background-color="rgba(24, 116, 205)"
        text-color="#fff"
        active-text-color="#fff"
        text-align="center"
      >
        <el-menu-item index="1">
          <router-link to="/">网站首页</router-link>
        </el-menu-item>
        <el-submenu index="2">
          <template slot="title">医院概况</template>
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
        <router-link to="/roomintro">
          <el-menu-item index="5">科室介绍</el-menu-item>
        </router-link>
        <router-link to="/master">
          <el-menu-item index="6">专家介绍</el-menu-item>
        </router-link>
      </el-menu>
    </div>
  </div>
</template>

<script>
export default {
  data() {
    return {
      activeIndex: "1",
      loginName: ""
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
  height: 50px;
  line-height: 50px;
  background-color: #078ed4;
  .wel {
    margin-left: 50px;
    float: left;
    font-size: 15px;
    color: #ffffff;
    font-weight: 1000;
  }
  .login {
    float: right;
    font-size: 16px;
    margin-right: 50px;
    color: #ffffff;
    font-weight: 300;
    display: flex;
  }
}
.nav {
  display: block;
  margin-top: 50px;
  height: fit-content;
  a {
    color: #fff !important;
  }
}
.el-header {
  background-color: #00a1e9;
  color: #333;
  text-align: left;
  height: 20px !important;
}
.el-menu-demo2 {
  width: 100%;
  position: absolute;
  top: 50px;
  left: 0;
  display: flex;
  justify-content: center;
  z-index: 3;
  border: none !important;
}
.el-menu--horizontal > .el-menu {
  line-height: 80px;
}
</style>
