<template>
  <div>
    <div class="container">
      <div class="wel">欢迎来到山东省立医院</div>
      <div class="login">
        <router-link to="/Login">登录 / 注册</router-link>
        <router-link :to="{name:'login',query:{type:'admin'}}" style="margin-left:20px;">管理员</router-link>
      </div>
    </div>
    <div class="nav">
      <el-menu :default-active="activeIndex" class="el-menu-demo2" mode="horizontal" @select.capture="handleSelect" background-color="rgba(24, 116, 205)" text-color="#fff" text-align="center">
        <el-menu-item index="1">
          <router-link to="/">网站首页</router-link>
        </el-menu-item>
        <el-submenu index="2">
          <template slot="title">医院概况</template>
          <el-menu-item index="2-1">
            <router-link to="/hos/intro">医院简介</router-link>
          </el-menu-item>
          <el-menu-item index="2-2">
            <router-link to="/hos/leader">历任领导</router-link>
          </el-menu-item>
          <el-menu-item index="2-3">
            <router-link to="/hos/culture">医院文化</router-link>
          </el-menu-item>
        </el-submenu>
        <el-submenu index="3">
          <template slot="title">新闻动态</template>
          <el-menu-item index="3-1">
            <router-link to="/news/hos">医院要闻</router-link>
          </el-menu-item>
          <el-menu-item index="3-2">
            <router-link to="/news/room">科室动态</router-link>
          </el-menu-item>
          <el-menu-item index="3-3">
            <router-link to="/news/notice">医院公告</router-link>
          </el-menu-item>
        </el-submenu>
        <el-submenu index="4">
          <template slot="title">就诊指南</template>
          <el-menu-item index="4-1">
            <router-link to="/guide/know">就诊须知</router-link>
          </el-menu-item>
          <el-menu-item index="4-2">
            <router-link to="/guide/process">就医流程</router-link>
          </el-menu-item>
          <el-menu-item index="4-3">
            <router-link to="/guide/professor">专家门诊</router-link>
          </el-menu-item>
          <el-menu-item index="4-4">
            <router-link to="/guide/location">医院布局</router-link>
          </el-menu-item>
          <el-menu-item index="4-5">
            <router-link to="/guide/transport">交通指南</router-link>
          </el-menu-item>
        </el-submenu>
        <el-menu-item index="5">
          <a href="https://www.ele.me" target="_blank">科室介绍</a>
        </el-menu-item>
        <el-menu-item index="6">
          <a href="https://www.ele.me" target="_blank">专家介绍</a>
        </el-menu-item>
      </el-menu>
    </div>
  </div>
</template>

<script>
export default {
  data() {
    return {
      activeIndex: '1'
    }
  },
  methods: {
    handleSelect(key, keyPath) {
      console.log(key, keyPath)
    }
  }
}
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
  }
}
.nav {
  display: block;
  margin-top: 50px;
  height: fit-content;
}
.el-header {
  background-color: #1874cd;
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
