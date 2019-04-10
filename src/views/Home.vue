<template>
  <div class="home">
    <menuNav></menuNav>
    <div class="xinwen">
      <div class="leftnews">
        <div class="tt1">
          <h4 class="pic">图片新闻</h4>
          <span class="right">
            <a href="https://www.ele.me">更多</a>
          </span>
        </div>
        <el-carousel class="imga-all" height="250px">
          <el-carousel-item class="imga" v-for="(imga,index) in imgaList" :key="index">
            <img :src="imga.url">
            <div class="imga-name">{{imga.name}}</div>
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
        <div class="new" v-for="news in newsList" :key="news.id">
          <div class="news-name">{{news.name}}</div>
        </div>
      </div>
      <div class="navi">
        <div>
          <h2 class="daohang">科室导航</h2>
        </div>
        <div v-for="item in roomList" :key="item.id" :index="item.id">
          <div class="room-name" @mouseenter="showSub(item.id)" slot="title">{{item.name}}</div>
          <div class="room-sub">
            <div class="sub-name" v-for="itam in item.subList" :key="itam.id" v-show="item.isShow">
              <div>{{itam.name}}</div>
            </div>
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
              <router-link :to="ming.url">{{ming.name}}</router-link>
            </div>
          </div>
        </div>
      </div>
      <div class="jiuyi">
        <div>
          <h2 class="zhinan">专家介绍</h2>
        </div>
        <div class="flex-row">
          <div class="zhuanjia" v-for="item in roomList" :key="item.id">
            <div slot="title">{{item.name}}</div>
          </div>
        </div>
        <div class="zhuanjia-content">
          <div class="zhuanjia-item" v-for="item in docList" :key="item.id">
            <div class="flex-row">
              <img :src="item.pic" alt>
              <div style="text-align:left">
                <span>{{item.name}}</span>
                <br>
                <span>职称：</span>
                {{item.level}}
                <br>
                <span>科室：</span>
                {{item.room}}
              </div>
            </div>
            <div>
              <span>简介：</span>
              <p>{{item.desc}}</p>
            </div>
          </div>
        </div>
      </div>
    </div>
    <div class="clearfloat">
      <div class="jiuyi">
        <div>
          <h2 class="zhinan">健康科普</h2>
        </div>
        <div v-for="item in healtList" :key="item.id" :index="item.id">
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
import menuNav from "@/components/menuNav.vue";

export default {
  data() {
    return {
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
          url: require("../assets/a5.jpg"),
          name:
            "第一医学中心普通外科成功举办第三届3D腹腔镜胃肠癌手术演示会暨腹腔镜手术前沿技术高级研讨会"
        },
        {
          url: require("../assets/a6.jpg"),
          name: "第五届“301论健”隆重召开"
        },
        {
          url: require("../assets/a7.jpg"),
          name: "为治愈肾病，她追梦四十年"
        }
      ],
      newsList: [
        {
          name:
            "又快又稳柳叶刀 江湖留名“闪电王”||心内科专家王勇心里装着家人，所以随时准备冲上手术台",
          id: "1",
          content: "内容"
        },
        {
          name: "山东省立医院泌尿外科： 攻克疑难杂症，以精湛医术解患者病痛",
          id: "2",
          content: "内容"
        },
        {
          name:
            "山东青年报：防治泌尿系结石 从日常习惯做起——访山东省立医院泌尿外科副主任医师陈修德",
          id: "3",
          content: "内容"
        },
        {
          name: "省立医院青光眼周活动，早筛查刻不容缓",
          id: "4",
          content: "内容"
        }
      ],
      roomList: [
        {
          name: "内科系统",
          id: "1",
          isShow: false,
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
      ],
      mingList: [
        {
          name: "预约挂号",
          id: "1",
          url: "/reserve"
        },
        {
          name: "出诊信息",
          id: "2",
          url: "/hmessage"
        },
        {
          name: "患者服务",
          id: "3",
          url:"/guide/know"
        },
        {
          name: "百年省医",
          id: "4",
          url:"/hundred"
        },
        {
          name: "引领",
          id: "5",
          url:"/show"
        },
        {
          name: "健康讲堂",
          id: "6",
          url:"/study"
        }
      ],
      docList: [
        {
          pic:
            "http://www.sph.com.cn/Sites/Uploaded/UserUpLoad/20160704/20160704093321.jpg",
          name: "王大大",
          level: "主任医师",
          room: "专科",

          desc:
            "医学博士，山东大学教授、博士研究生导师，副主任。主要从事临床免疫学和疾病相关基因研究，近年来作为项目(课题)负责人承担和完成国家“ 863 ”计划1项目、“973”计划子课题2项、国家科技支撑计划1项"
        },
        {
          pic:
            "http://www.sph.com.cn/Sites/Uploaded/UserUpLoad/20160704/20160704093321.jpg",
          name: "王大大",
          level: "主任医师",
          room: "专科",
          desc:
            "医学博士，山东大学教授、博士研究生导师，副主任。主要从事临床免疫学和疾病相关基因研究，近年来作为项目(课题)负责人承担和完成国家“ 863 ”计划1项目、“973”计划子课题2项、国家科技支撑计划1项"
        },
        {
          pic:
            "http://www.sph.com.cn/Sites/Uploaded/UserUpLoad/20160704/20160704093321.jpg",
          name: "王大大",
          level: "主任医师",
          room: "专科",
          desc:
            "医学博士，山东大学教授、博士研究生导师，副主任。主要从事临床免疫学和疾病相关基因研究，近年来作为项目(课题)负责人承担和完成国家“ 863 ”计划1项目、“973”计划子课题2项、国家科技支撑计划1项"
        },
        {
          pic:
            "http://www.sph.com.cn/Sites/Uploaded/UserUpLoad/20160704/20160704093321.jpg",
          name: "王大大",
          level: "主任医师",
          room: "专科",
          desc:
            "医学博士，山东大学教授、博士研究生导师，副主任。主要从事临床免疫学和疾病相关基因研究，近年来作为项目(课题)负责人承担和完成国家“ 863 ”计划1项目、“973”计划子课题2项、国家科技支撑计划1项"
        },
        {
          pic:
            "http://www.sph.com.cn/Sites/Uploaded/UserUpLoad/20160704/20160704093321.jpg",
          name: "王大大",
          level: "主任医师",
          room: "专科",
          desc:
            "医学博士，山东大学教授、博士研究生导师，副主任。主要从事临床免疫学和疾病相关基因研究，近年来作为项目(课题)负责人承担和完成国家“ 863 ”计划1项目、“973”计划子课题2项、国家科技支撑计划1项"
        }
      ],
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
    menuNav
  },
  methods: {
    showSub(id) {
      console.log(id);
      this.roomList.forEach(i => {
        i.isShow = false;
      });
      this.roomList[id - 1].isShow = !this.roomList[id - 1].isShow;
    },
    showHealth(id) {
      console.log(id);
      this.healtList.forEach(i => {
        i.isShow = false;
      });
      this.healtList[id - 1].isShow = !this.healtList[id - 1].isShow;
    }
  },
  created() {
    // 接口初始化数据
    this.roomList[0].isShow = true;
    this.healtList[0].isShow = true;
  }
};
</script>
<style scoped lang="less">
.el-carousel__item img {
  height: 400px;
  width: 100%;
}
a{
  text-decoration: none;
  color:#ffffff;
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
  // overflow: hidden;
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
  margin-top: 50px;
  height: 10px;
  margin-left: 30px;
  text-align: left;
  line-height: 20px;
}
.news-name {
  border-bottom: #ded6d685 0.8px solid;
  padding-bottom: 5px;
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
.jiuyii{
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
}
.daohang {
  float: left;
}
.room-name {
  width: 140px;
  height: 30px;
  line-height: 30px;
  color: #ffffff;
  padding: 8px 10px;
  margin: 10px 20px;
  border-radius: 10px;
  background: #0087cd;
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
  left: 200px;
  display: flex;
  flex-direction: row;
}
.sub-name {
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
  height: 160px;
  width: 170px;
  // background: url(../assets/a2.jpg);
  background-color:#0087cd;
  line-height: 170px;
  font-size: 25px;
  margin-right: 5px;
  margin-bottom: 3px;
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
  margin: 100px 0;
  width: 100%;
  white-space: nowrap;
  overflow: scroll;
}
.zhuanjia-item {
  width: 350px;
  padding: 10px;
  display: block;
  padding: 20px 20px;
  box-sizing: border-box;
  margin: 0 20px;
  border: 1px solid #ddd;
  background: #fff;
  display: inline-block;
  span {
    color: #0087cd;
    font-size: 12px;
    margin-left: 10px;
  }
  p {
    white-space: normal;
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