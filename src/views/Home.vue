<template>
  <div class="home">
    <el-container>
      <el-header>欢迎来到山东省立医院</el-header>
    </el-container>
    <div class="nav">
    <el-menu
      :default-active="activeIndex"
      class="el-menu-demo2"
      mode="horizontal"
      @select="handleSelect"
      background-color="rgba(24, 116, 205,0.3)"
      text-color="#fff"
      text-align="center">
      <el-menu-item index="1">网站首页</el-menu-item>
      <el-submenu index="2">
        <template slot="title">医院概况</template>
        <el-menu-item index="2-1">医院简介</el-menu-item>
        <el-menu-item index="2-2">历任领导</el-menu-item>
        <el-menu-item index="2-3">医院文化</el-menu-item>
      </el-submenu>
      <el-submenu index="3">
        <template slot="title">新闻动态</template>
        <el-menu-item index="3-1">医院要闻</el-menu-item>
        <el-menu-item index="3-2">科室动态</el-menu-item>
        <el-menu-item index="3-3">医院公告</el-menu-item>
      </el-submenu>
      <el-submenu index="4">
        <template slot="title">就诊指南</template>
        <el-menu-item index="4-1">就诊须知</el-menu-item>
        <el-menu-item index="4-2">就医流程</el-menu-item>
        <el-menu-item index="4-3">专家门诊</el-menu-item>
        <el-menu-item index="4-4">医院布局</el-menu-item>
        <el-menu-item index="4-5">交通指南</el-menu-item>
      </el-submenu>
      <el-menu-item index="5">
        <a href="https://www.ele.me" target="_blank">科室介绍</a>
      </el-menu-item>
      <el-menu-item index="6">
        <a href="https://www.ele.me" target="_blank">专家介绍</a>
      </el-menu-item>
    </el-menu>
    <el-carousel :interval="4000" indicator-position="none" height="400px">
      <el-carousel-item v-for="(img,index) in imgList" :key="index">
        <h3>
          <img v-bind:src="img.url">
        </h3>
      </el-carousel-item>
    </el-carousel>
    </div>
    <div>
      <el-row :gutter="20">
        <el-col :span="8"><div class="grid-content bg-purple"></div></el-col>
        <el-col :span="16"><div class="grid-content bg-purple"></div></el-col>
      </el-row>
  </div>

  </div>
</template>

<script>
// import HelloWorld from "@/components/HelloWorld.vue";

export default {
  data() {
    return {
      activeIndex: "1",
      imgList: [
        {
          url: require("../assets/a1.jpg")
        },
        {
          url: require("../assets/a2.jpg")
        },
        {
          url: require("../assets/a3.jpg")
        },
        {
          url: require("../assets/a4.jpg")
        }
      ]
    };
  },
  methods: {
    handleSelect(key, keyPath) {
      console.log(key, keyPath);
    }
  }
};
</script>
<style scoped>
.el-container {
  height: 20px;
}
.nav{
  position: relative;
  display: block;
}
.el-header {
  background-color: #1874CD;
  color: #333;
  text-align: left;
  height: 20px!important;
}
.el-menu-demo2{
  display: flex;
  justify-content:center; 
}
.el-carousel__item h3 {
  font-size: 16px;
  line-height: 400px;
  margin: 0;
}
.el-carousel__item img {
  height: 400px;
  width: 100%;
}
.el-menu--horizontal > .el-menu {
  line-height: 80px;
}
.el-row {
    margin-bottom: 20px;
  }
.el-col {
    border-radius: 4px;  
  }
 .grid-content {
    border-radius: 4px;
    min-height: 36px;
  }
.bg-purple {
    background: #d3dce6;
  }

</style>