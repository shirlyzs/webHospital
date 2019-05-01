<template>
  <div class="home">
    <menuNav></menuNav>
    <el-carousel :interval="5000" arrow="always" class="lunbotu">
      <el-carousel-item v-for="(item,index) in imgList" :key="index" style="height:400px">
        <img :src="item.url">
      </el-carousel-item>
    </el-carousel>
    <div class="xinwen">
      <div class="leftnews">
        <div class="tt1">
          <h4 class="pic">图片新闻</h4>
        </div>
        <el-carousel class="imga-all" height="250px">
          <el-carousel-item class="imga" v-for="(imga,index) in imgaList" :key="index">
            <img :src="imga.image">
            <div class="imga-name" @click="toImgdetail(imga)">{{imga.title}}</div>
          </el-carousel-item>
        </el-carousel>
      </div>
      <div class="rightnews">
        <div class="tt2">
          <h4 class="word">医院新闻</h4>
          <span class="right2">
            <router-link to="/more">更多</router-link>
          </span>
        </div>
        <div class="new" v-for="(news, index) in newsList" :key="index">
          <div class="news-left"></div>
          <div class="news-name" @click="toNewsDetail(news)">{{news.title}}</div>
        </div>
      </div>
    </div>
    <div class="navi">
      <div>
        <h2 class="daohang">科室导航</h2>
      </div>
      <div v-for="item in roomList" :key="item.id">
        <div class="room-name" @mouseenter="showSub(item.id)" slot="title">{{item.name}}</div>
        <div class="room-sub">
          <div class="sub-name" v-for="(itam,index) in subList" :key="index" @click="toRoomdetail(itam)" v-show="item.isShow && itam.department === item.name">{{itam.keShiName}}</div>
        </div>
      </div>
    </div>
    <div class="clearfloat">
      <div class="jiuyii">
        <div>
          <h2 class="zhinann">就医指南</h2>
        </div>
        <div class="neirong">
          <div class="ming" v-for="ming in mingList" :key="ming.id">
            <img class="mingbg" :src="ming.bg">
            <router-link :to="ming.url">{{ming.name}}</router-link>
          </div>
        </div>
      </div>
    </div>
    <div class="jiuyi">
      <div>
        <h2 class="zhinann">专家介绍</h2>
      </div>
      <div class="zhuanjia-content">
        <div class="zhuanjia-item" @click="toProdetail(item)" v-for="(item,index) in docList" :key="index">
          <div class="flex-row">
            <img :src="item.image">
            <div style="text-align:left">
              <span>{{item.doctorName}}</span>
              <br>
              <span>职称：</span>
              {{item.ranks}}
              <br>
              <span>科室：</span>
              {{item.keShi}}
            </div>
          </div>
          <div style="text-align:left;margin-top:15px;">
            <span>简介：</span>
            <p>{{item.resume}}</p>
          </div>
        </div>
      </div>
    </div>
    <div class="clearfloat">
      <div class="jiuyi">
        <div>
          <h2 class="zhinan">健康科普</h2>
        </div>
        <div v-for="item in healtList" :key="item.id">
          <div class="health-name" @mouseenter="showHealth(item.id)" slot="title">{{item.name}}</div>
          <div class="hea-name">
            <div class="vid" v-for="vide in item.videoList" :key="vide.id" v-show="item.isShow">
              <video id="myvideo" width="300px" height="250px" controls="controls">
                <source :src="vide.src" type="video/mp4">
              </video>
              <div class="vid-name">{{vide.name}}</div>
            </div>
          </div>
        </div>
      </div>
    </div>
    <Footer></Footer>
  </div>
</template>

<script>
import menuNav from '@/components/menuNav.vue'
import Footer from '@/components/Footer.vue'

import { video, news, ming, room, doctor } from '@/api/api'

export default {
  data() {
    return {
      imgList: [
        {
          url: require('../assets/a9.jpg')
        },
        {
          url: require('../assets/12.jpg')
        },
        {
          url: require('../assets/121.jpg')
        }
      ],
      imgaList: [],
      newsList: [],
      roomList: [
        {
          name: '内科',
          id: 1,
          isShow: false
        },
        {
          name: '外科',
          isShow: false,
          id: 2
        },
        {
          name: '医技',
          isShow: false,
          id: 3
        },
        {
          name: '其他',
          isShow: false,
          id: 4
        }
      ],
      subList: [],
      mingList: [],
      docList: [],
      healtList: []
    }
  },
  components: {
    menuNav,
    Footer
  },
  methods: {
    getImage() {
      let newInfo = {
        newsId: '',
        title: '',
        author: '',
        content: ''
      }
      news(newInfo).then(res => {
        res.result[0].content.forEach(ele => {
          ele.image = ele.image.split('||')[0]
        })
        this.imgaList = res.result[0].content
      })
    },
    getDoctor() {
      let doctorInfo = {
        doctorName: '',
        department: '',
        keShi: '',
        ranks: ''
      }
      doctor(doctorInfo).then(res => {
        this.docList = res.result[0].content
      })
    },
    getRoom() {
      let roomInfo = {
        keShiName: '',
        department: '',
        keShiId: '',
        info: ''
      }
      room(roomInfo).then(res => {
        this.subList = res.result[0].content
        this.roomList[0].isShow = true
      })
    },
    getMing() {
      ming().then(res => {
        this.mingList = res.data.mingList
        this.mingList[0].isShow = true
      })
    },
    getNews() {
      let newInfo = {
        newsId: '',
        title: '',
        author: '',
        content: ''
      }
      news(newInfo).then(res => {
        this.newsList = res.result[0].content
      })
    },
    getVideo() {
      video().then(
        res => {
          this.healtList = res.data.healtList
          this.healtList[0].isShow = true
        },
        rej => {
          console.log(rej)
        }
      )
    },
    toNewsDetail(item) {
      this.$router.push({ path: '/detail', query: { newId: item.newsId } })
    },
    toImgdetail(item) {
      this.$router.push({ path: '/detail', query: { newId: item.newsId } })
    },
    toRoomdetail(keshi) {
      this.$router.push({
        path: '/roomdetail',
        query: { newId: keshi.keShiId }
      })
    },
    toProdetail(zhuanjia) {
      this.$router.push({
        path: '/prodetail',
        query: { newId: zhuanjia.doctorId }
      })
    },
    showSub(id) {
      // console.log(id);
      this.roomList.forEach(i => {
        i.isShow = false
      })
      this.roomList[id - 1].isShow = !this.roomList[id - 1].isShow
    },
    showHealth(id) {
      console.log(id)
      this.healtList.forEach(i => {
        i.isShow = false
      })
      this.healtList[id - 1].isShow = !this.healtList[id - 1].isShow
    }
  },
  created() {
    // 接口初始化数据
    this.getVideo()
    this.getNews()
    this.getMing()
    this.getRoom()
    this.getDoctor()
    this.getImage()

    // this.roomList[0].isShow = true;
  }
}
</script>
<style scoped lang="less">
.lunbotu {
  margin-top: -10x;
  height: 400px;
  img {
    height: 400px;
    width: 100%;
  }
}
a {
  text-decoration: none;
  color: #495155;
}
.img-all {
  position: relative;
}
.imga {
  position: absolute;
  width: 100%;
  height: 250px;
}
.imga-name {
  position: absolute;
  bottom: 0;
  height: 36px;
  width: 100%;
  font-size: 15px;
  color: black;
  background: #beb8b8;
  opacity: 0.8;
}
.el-menu--horizontal > .el-menu {
  line-height: 80px;
}
.xinwen {
  display: inline;
}
.leftnews {
  border-radius: 3px;
  width: 400px;
  margin: 50px 0 30px 50px;
  height: 300px;
  padding: 10px;
  float: left;
  display: flex;
  flex-direction: column;
  box-shadow: 0 2px 12px 0 rgba(0, 0, 0, 0.3);
}
.rightnews {
  border-radius: 3px;
  width: 750px;
  margin: 50px 50px 30px 0;
  height: 300px;
  padding: 10px;
  float: right;
  box-shadow: 0 2px 12px 0 rgba(0, 0, 0, 0.3);
}
.new {
  margin-top: 40px;
  height: 10px;
  margin-left: 30px;
  text-align: left;
  line-height: 20px;
  display: flex;
}
.news-name {
  // border-bottom: #ded6d685 0.8px solid;
  padding-bottom: 5px;
}
.news-left {
  border-left: 10px solid rgba(0, 0, 0, 0.3);
  border-top: 7px solid transparent;
  border-bottom: 7px solid transparent;
  width: 0px;
  height: 0px;
  position: relative;
  display: inline-block;
}
.news-left:before {
  border-left: 10px solid #fff;
  border-top: 7px solid transparent;
  border-bottom: 7px solid transparent;
  width: 0px;
  height: 0px;
  content: ' ';
  position: absolute;
  left: -11px;
  top: -7px;
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
.jiuyi {
  border-radius: 3px;
  width: 1230px;
  margin: 50px;
  min-height: 400px;
  padding: 10px;
  float: right;
  display: flex;
  position: relative;
  flex-direction: column;
  box-shadow: 0 2px 12px 0 rgba(0, 0, 0, 0.3);
}
.jiuyii {
  border-radius: 3px;
  width: 1230px;
  margin: 50px;
  min-height: 300px;
  padding: 10px;
  float: right;
  display: flex;
  position: relative;
  flex-direction: column;
  box-shadow: 0 2px 12px 0 rgba(0, 0, 0, 0.3);
}
.zhinan {
  float: left;
  margin-bottom: 50px;
}
.zhinann {
  float: left;
  margin-bottom: 40px;
}
.zhuanjia {
  background-color: #0087cd;
  height: 80px;
  width: 200px;
  line-height: 80px;
  text-align: center;
  color: #ffffff;
  margin: 5px 15px;
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
.tt1 {
  margin-bottom: 15px;
  padding-bottom: 10px;
  border-bottom: 1px solid #dcdcdc;
}
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
  color: black !important;
}
.daohang {
  float: left;
}
.room-name {
  width: 140px;
  height: 30px;
  line-height: 30px;
  color: black;
  border:solid 1px #ece9e9;
  padding: 8px 10px;
  margin: 10px 20px;
  border-radius: 10px;
  background: #ffffff;
}
.room-name:hover{
  background:#0087cd;
  color: #ffffff
}
.health-sub {
  position: absolute;
  top: 50px;
  left: 200px;
  display: flex;
  flex-direction: row;
}
.room-sub {
  position: absolute;
  top: 50px;
  left: 250px;
  // display: flex;
  flex-direction: row;
}
.sub-name {
  background: #ddebf6;
  width: 250px;
  height: 48px;
  float: left;
  margin-right: 30px;
  line-height: 48px;
  margin-bottom: 22px;
  box-sizing: border-box;
  border-radius: 5px;
  position: relative;
}
.hea-name {
  position: absolute;
  top: 50px;
  left: 200px;
  display: flex;
  .vid {
    margin: 20px;
  }
  .vid-name {
    margin: 20px;
  }
}
.neirong {
  margin: 10px auto 30px auto;
  display: flex;
  flex-wrap: wrap;
}
.ming {
  height: 180px;
  width: 200px;
  position: relative;
  z-index: 4;
  color: black;
  background: #e2ebe8;
  line-height: 180px;
  font-size: 25px;
  margin-right: 5px;
  margin-bottom: 3px;
  .mingbg {
    position: absolute;
    height: 180px;
    width: 200px;
    top: 0;
    left: 0;
    background: #e2ebe8;
    z-index: -5;
    filter: alpha;
    opacity: 0.3;
  }
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
.zhuanjia-content {
  // margin: 50px 0;
  padding-bottom: 15px;
  width: 100%;
  white-space: nowrap;
  overflow-y: hidden;
  overflow-x: auto;
}
.zhuanjia-item {
  width: 350px;
  height: 325px;
  padding: 10px;
  display: block;
  padding: 20px 20px;
  box-sizing: border-box;
  margin: 0 20px;
  overflow: hidden;
  border: 1px solid #ddd;
  background: #fff;
  display: inline-block;
  span {
    color: #0087cd;
    font-size: 14px;
    margin-left: 10px;
    line-height: 21px;
  }
  p {
    white-space: normal;
  }
  img {
    width: 120px;
    height: 160px;
    margin-right: 10px;
  }
}
.zhuanjia-content::-webkit-scrollbar-track-piece {
  //滚动条凹槽的颜色，还可以设置边框属性
  background-color: #f8f8f8;
}
.zhuanjia-content::-webkit-scrollbar {
  //滚动条的宽度
  width: 9px;
  height: 9px;
}
.zhuanjia-content::-webkit-scrollbar-thumb {
  //滚动条的设置
  background-color: #dddddd;
  background-clip: padding-box;
  border-radius: 20px;
  min-height: 28px;
}
.zhuanjia-content::-webkit-scrollbar-thumb:hover {
  background-color: #bbb;
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
.footer {
  display: flex;
  height: 50px;
  line-height: 50px;
  width: 100%;
  color: #ffffff;
  justify-content: center;
  margin-top: 20px;
  background-color: #0087cd;
}
</style>