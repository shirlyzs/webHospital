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
        text-align="center"
      >
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
          <img v-bind:src="img.url">
        </el-carousel-item>
      </el-carousel>
    </div>
    <div class="xinwen">
      <div class="leftnews">
        <div class="tt1">
          <h4 class="pic">图片新闻</h4>
          <span class="right">
            <a href="https://www.ele.me">更多</a>
          </span>
        </div>
        <div class="kongbai "></div>
        <el-carousel height="150px">
          <el-carousel-item class="imga" v-for="(imga,index) in imgaList" :key="index">
            <img :src="imga.url">
          </el-carousel-item>
        </el-carousel>
      </div>
      <div class="rightnews">
        <div class="tt2">
          <h4 class="word">医院新闻</h4>
          <span class="right2">
            <a href="https://www.ele.me">更多</a>
          </span>
        </div>
        <div height="15px"></div>
      </div>
      <div class="navi">
        <div>
          <h2 class="daohang">科室导航</h2>
        </div>
        <!-- <el-menu
          :default-active="activeIndex"
          class="el-menu-demo3"
          mode="vertical"
          @select="handleSelect"
          text-align="center"
        >-->
        <div v-for="item in roomList" :key="item.id" :index="item.id">
          <div class="room-name" @click="showSub(item.id)" slot="title">{{item.name}}</div>
          <div class="room-sub">
            <div class="sub-name" v-for="itam in item.subList" :key="itam.id" v-show="item.isShow">
              <div>{{itam.name}}</div>
            </div>
          </div>
        </div>
        <!-- </el-menu> -->
      </div>

      <!-- <Map></Map> -->
    </div>
  </div>
</template>

<script>
import Map from "@/components/Map.vue";
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
      ],
      imgaList: [
        {
          url: require("../assets/a5.jpg")
        },
        {
          url: require("../assets/a6.jpg")
        },
        {
          url: require("../assets/a7.jpg")
        },
        {
          url: require("../assets/a8.jpg")
        }
      ],
      roomList: [
        {
          name: "内科系统",
          id: "1",
          isShow: true,
          subList: [
            {
              name: "消化内科",
              id: "11"
            },
            {
              name: "血液内科",
              id: "12"
            },
            {
              name: "内分泌科",
              id: "13"
            },
            {
              name: "心内科",
              id: "14"
            }
          ]
        },
        {
          name: "外科系统",
          id: "2",
          isShow: false,
          subList: [
            {
              name: "骨科",
              id: "21"
            },
            {
              name: "脊柱外科",
              id: "22"
            },
            {
              name: "胃肠外科",
              id: "23"
            },
            {
              name: "整形美容外科",
              id: "24"
            }
          ]
        },
        {
          name: "妇产五官系统",
          id: "3",
          isShow: false,
          subList: [
            {
              name: "产科",
              id: "31"
            },
            {
              name: "妇科",
              id: "32"
            },
            {
              name: "口腔科",
              id: "33"
            },
            {
              name: "特诊科",
              id: "34"
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
    showSub(id) {
      console.log(id);
      this.roomList[id - 1].isShow = !this.roomList[id - 1].isShow;
    }
  },
  created() {
    // 接口初始化数据
  }
};
</script>
<style scoped>
.el-container {
  height: 20px;
}
.nav {
  position: relative;
  display: block;
  height: 400px;
}
.el-header {
  background-color: #1874cd;
  color: #333;
  text-align: left;
  height: 20px !important;
}
.el-menu-demo2 {
  display: flex;
  justify-content: center;
  z-index: 3;
  border: none !important;
}
.el-carousel__item img {
  height: 400px;
  width: 100%;
}
.el-carousel__item.imga {
  position: absolute;
  width: 100%;
  height: 200px;
}
.el-menu--horizontal > .el-menu {
  line-height: 80px;
}
.xinwen {
  display: inline;
  /* width: 90%; */
}
.leftnews {
  border-radius: 3px;
  width: 300px;
  margin: 50px 0 30px 50px;
  height: fit-content;
  padding: 10px;
  float: left;
  display: flex;
  flex-direction: column;
  min-height: 300px;
  box-shadow: 0 2px 12px 0 rgba(0, 0, 0, 0.3);
}
.kongbai{
  height: 25px;
}
.rightnews {
  border-radius: 3px;
  width: 850px;
  margin: 50px 50px 30px 0;
  height: fit-content;
  padding: 10px;
  min-height: 300px;
  float: right;
  box-shadow: 0 2px 12px 0 rgba(0, 0, 0, 0.3);
}
.navi {
  border-radius: 3px;
  width: 1230px;
  margin: 50px;
  min-height: 200px;
  height: fit-content;
  padding: 10px;
  float: right;
  display: flex;
  position: relative;
  flex-direction: column;
  box-shadow: 0 2px 12px 0 rgba(0, 0, 0, 0.3);
}
.el-menu-demo3 {
  float: left;
  text-align: left !important;
}
.el-submenu__title {
  font-size: 20px;
}
.daohang {
  margin-bottom: 30px;
}
/* .tt1{
  border-bottom: 1px solid #dcdcdc;
} */
.pic {
  float: left;
}
.right {
  float: right;
}
.word {
  float: left;
}
.right2 {
  float: right;
}
.daohang {
  float: left;
}
/* .roomname{
  border-right: #ddebf6;
} */
.room-name {
  width: 140px;
  height: 30px;
  line-height: 30px;
  color: #ffffff;
  padding: 8px 10px;
  margin: 10px 0;
  border-radius: 10px;
  background: #0087cd;
}
.room-sub {
  position: absolute;
  top: 50px;
  left: 200px;
  display: flex;
  flex-direction: row;
}
.sub-name{
  background: #ddebf6;
  width: 220px;
  height: 48px;
  float: left;
  margin-right: 30px;
  line-height: 48px;
  margin-bottom: 22px;
  box-sizing: border-box;
  border-radius: 5px;
  position: relative;
}
.el-row {
  padding: 30px 20px;
}
.el-col {
  border-radius: 4px;
}
.grid-content {
  border-radius: 2px;
  min-height: 36px;
}
</style>