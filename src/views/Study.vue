<template>
  <div class="home">
    <div class="container">
      <div class="wel">欢迎来到山东省立医院</div>
      <div class="login">
        <router-link to="/Login">登录 / 注册</router-link>
      </div>
    </div>
    <div class="nav">
      <el-menu
        :default-active="activeIndex"
        class="el-menu-demo2"
        mode="horizontal"
        @select="handleSelect"
        background-color="rgba(24, 116, 205)"
        text-color="#fff"
        text-align="center"
      >
        <el-menu-item index="1">
          <router-link to="/">网站首页</router-link>
        </el-menu-item>
        <el-submenu index="2">
          <template slot="title">医院概况</template>
          <el-menu-item index="2-1">
            <router-link to="/intro">医院简介</router-link>
          </el-menu-item>
          <el-menu-item index="2-2">
            <router-link to="/leader">历任领导</router-link>
          </el-menu-item>
          <el-menu-item index="2-3">
            <router-link to="/culture">医院文化</router-link>
          </el-menu-item>
        </el-submenu>
        <el-submenu index="3">
          <template slot="title">新闻动态</template>
          <el-menu-item index="3-1">
            <router-link to="/news">医院要闻</router-link>
          </el-menu-item>
          <el-menu-item index="3-2">
            <router-link to="/room">科室动态</router-link>
          </el-menu-item>
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
    </div>
    <div class="navi">
      <div class="daohang">健康科普</div>
      <div v-for="item in healtList" :key="item.id" :index="item.id">
        <div class="health-name" @click="showHealth(item.id)" slot="title">{{item.name}}</div>
        <div class="hea-name">
          <div class="vid" v-for="vide in item.videoList" :key="vide.id" v-show="item.isShow">
            <video id="myvideo" width="250px" height="250px" controls="controls">
              <source :src="vide.src" type="video/mp4">
            </video>
            <div class="vid-name">{{vide.name}}</div>
          </div>
        </div>
      </div>
    </div>
    <div class="footer">
      <div class="footer-R">
        <p>ICP备案：鲁ICP备11021200号</p>
        <p>
          工信部连接：
          <a
            href="http://www.miitbeian.gov.cn/state/outPortal/loginPortal.action"
          >http://www.miitbeian.gov.cn</a>
        </p>
        <p>山东省立医院地址：山东财经大学燕山校区 邮编地址：250014</p>
        <p>
          山东省立医院版权所有
          <span>Copyrights © 2009 sph.com.cn All Rights Reserved</span>
        </p>
      </div>
    </div>
  </div>
</template>

<script>
// import Map from "@/components/Map.vue";
import { Menu, Submenu, MenuItem } from "element-ui";
export default {
  data() {
    return {
      activeIndex: "1",
      healtList: [
        {
          name: "健康讲堂",
          id: "1",
          isShow: false,
          videoList: [
            {
              id: "1",
              name: "《名医话健康》 左常婷：如何科学备孕二胎",
              src: "https://media.w3.org/2010/05/sintel/trailer.mp4"
            },
            {
              id: "2",
              name: "山东农科频道《名医话健康》：辨体质 谈养生",
              src: "https://media.w3.org/2010/05/sintel/trailer.mp4"
            },
            {
              id: "3",
              name: "山东农科频道《名医话健康》：高血压的常见误区",
              src: "https://media.w3.org/2010/05/sintel/trailer.mp4"
            }
          ]
        },
        {
          name: "科普文章",
          id: "2",
          isShow: false,
          videoList: [
            {
              id: "1",
              name: "《名医话健康》 左常婷：如何科学备孕二胎",
              src: "https://media.w3.org/2010/05/sintel/trailer.mp4"
            },
            {
              id: "2",
              name: "山东农科频道《名医话健康》：辨体质 谈养生",
              src: "https://media.w3.org/2010/05/sintel/trailer.mp4"
            },
            {
              id: "3",
              name: "山东农科频道《名医话健康》：高血压的常见误区",
              src: "https://media.w3.org/2010/05/sintel/trailer.mp4"
            }
          ]
        },
        {
          name: "相关疾病",
          id: "3",
          isShow: false,
          videoList: [
            {
              id: "1",
              name: "《名医话健康》 左常婷：如何科学备孕二胎",
              src: "https://media.w3.org/2010/05/sintel/trailer.mp4"
            },
            {
              id: "2",
              name: "山东农科频道《名医话健康》：辨体质 谈养生",
              src: "https://media.w3.org/2010/05/sintel/trailer.mp4"
            },
            {
              id: "3",
              name: "山东农科频道《名医话健康》：高血压的常见误区",
              src: "https://media.w3.org/2010/05/sintel/trailer.mp4"
            }
          ]
        }
      ]
    };
  },
  components: {
    Map
  },
  methods: {
    handleSelect(key, keyPath) {
      console.log(key, keyPath);
    },
    showHealth(id) {
      console.log(id);
      this.healtList.forEach(i => {
        i.isShow = false;
      });
      this.healtList[id - 1].isShow = !this.healtList[id - 1].isShow;
    }
    // showHealth(id) {
    //   console.log(id);
    //   this.healtList.forEach(i => {
    //     i.isShow = false;
    //   });
    //   this.healtList[id - 1].isShow = !this.healtList[id - 1].isShow;
    // }
  },
  created() {
    // 接口初始化数据
    this.healtList[0].isShow = true;
  }
};
</script>
<style scoped lang="less">
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
.el-menu-demo3 {
  float: left;
  text-align: left !important;
}
.el-submenu__title {
  font-size: 20px;
}
.navi {
  border-radius: 3px;
  width: 1000px;
  margin: 50px auto;
  text-align: left;
  height: 1000px;
  padding: 10px;
  position: relative;
  box-shadow: 0 2px 12px 0 rgba(0, 0, 0, 0.3);
  .daohang {
    margin-left: 30px;
    font-size: 28px;
    margin-bottom: 50px;
  }
}
.health-name {
  width: 140px;
  height: 30px;
  line-height: 30px;
  color: #ffffff;
  padding: 8px 10px;
  margin: 10px 20px;
  border-radius: 10px;
  background: #0087cd;
}
.hea-name {
  position: absolute;
  top: 50px;
  left: 230px;
  display: flex;
  flex-wrap: wrap;
  .vid {
    margin: 10px 25px;
    padding:0 30px;
    border: 1px solid #e6e6e6;
  }
  .vid-name {
    margin: 10px 0;
    width: 250px;
    display: flex;
    flex-wrap: wrap;
  }
}
.footer {
  padding: 60px 0px;
  display: flex;
  height: 150px;
  line-height: 28px;
  width: 100%;
  color: #ffffff;
  justify-content: center;
  margin-top: 20px;
  background: url(../assets/a1.jpg);
  // no-repeat center
}
</style>