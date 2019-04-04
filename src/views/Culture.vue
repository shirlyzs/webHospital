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
      <div class="daohang">医院概况</div>
      <div v-for="item in artList" :key="item.id">
        <div class="art-name" @click="showArt(item.id)" slot="title">{{item.name}}</div>
        <div class="art-sub">
          <div class="sub-con" v-for="itam in item.subList" :key="itam.id" v-show="item.isShow">
            <div class="align">{{itam.name}}</div>
            <div>{{itam.content}}</div>
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
import Map from "@/components/Map.vue";
export default {
  data() {
    return {
      // activeIndex: "1",
      artList: [
        {
          name: "医院简介",
          id: "1",
          isShow: false,
          subList: [
            {
              name: "骨科",
              id: "11",
              content:
                "百廿省医，丰厚积累，威名远扬。医院现已发展成为集医疗、科研、教学、预防保健、指导基层为一体的大型综合性三级甲等公立医院，同时挂牌山东省立医院集团、山东大学附属省立医院、山东省红十字会医院、山东省临床医学研究院。有中心院区和东院两个院区，开放床位3500余张，年门急诊量350余万人次，年出院患者14万人次，手术6.9万台次，医疗综合服务能力全省第一。复旦大学中国医院排行榜位列第42，华东区综合实力位列第16; “中国顶级医院100强”位列第34，已成为山东省内首屈一指、全国知名的历史名院。百廿省医，精诚仁和，医术领先。一代代省医人胸怀仁心大爱，以精湛医术服务百姓健康。医院多项技术国内领先，作为全省唯一一个具备所有种类器官移植资质的医疗机构，医院活体肝移植技术国内领先; 在治疗Ⅰ型主动脉夹层、经胸微创室间隔缺损封堵术等技术方面居国内领先; 磨痂术在烧伤深∥度的应用被国内医院广泛推广;听力重建、耳神经与侧颅底外科手术及耳性眩晕综合治疗国内先进;辅助生殖技术达国际先进水平。  百廿省医，坚守公益，大爱无疆。医院以“济世救人，尊重生命”为宗旨，全心全意为人民健康保驾护航。“全预约”诊疗模式省内第一，便民惠民措施层出不穷;优质护理实现全覆盖，优质医疗服务让患者就医感受持续提升;援青、援藏、援非、卫生支农，各级医师400余人次，对口帮扶的足迹行至边疆、远达坦桑尼亚、塞舍尔、赞比亚;中石化青岛输油管线爆炸、江苏昆山特大爆炸事故等历次突发事件，第十届中国艺术节、第22届国际历史科学大会等重大社会活动，山东省立医院应急救援勇挑重担。"
            }
          ]
        },
        {
          name: "历任领导",
          id: "2",
          isShow: false,
          subList: [
            {
              name: "骨科",
              id: "21",
              content:
                "沧桑岁月筚路蓝缕，百廿基业砥砺前行。2017年，山东省立医院迎来了建院120周年华诞。1897年，因胶济铁路需要，德国天主教会在济南经二路纬二路东兴里创办了“万国缔盟博爱恤兵会医院”，这是山东省立医院的雏形。1915年，日本占领山东后，医院先后改名为“青岛守备军民政部铁道部济南医院”，“同仁会济南医院”。1945年，医院由国民党山东省政府接管，始称“山东省立医院”。1948年，济南解放之时医院回归人民的怀抱。120年风雨历程，一代代省医人披荆斩棘、夙兴夜寐，在解放后的岁月里艰苦创业、开拓进取，在改革开放的大潮中把握机遇、乘势而上，在新世纪科学发展、创建辉煌，在山东省医疗卫生事业的历史上书写了浓墨重彩的篇章，一步步迈出了跨越式发展的坚定步伐。"
            }
          ]
        },
        {
          name: "医院文化",
          id: "3",
          isShow: false,
          subList: [
            {
              name: "骨科",
              id: "31",
              content:
                "百廿省医，精诚仁和，医术领先。一代代省医人胸怀仁心大爱，以精湛医术服务百姓健康。医院多项技术国内领先，作为全省唯一一个具备所有种类器官移植资质的医疗机构，医院活体肝移植技术国内领先; 在治疗Ⅰ型主动脉夹层、经胸微创室间隔缺损封堵术等技术方面居国内领先; 磨痂术在烧伤深∥度的应用被国内医院广泛推广;听力重建、耳神经与侧颅底外科手术及耳性眩晕综合治疗国内先进;辅助生殖技术达国际先进水平。  百廿省医，坚守公益，大爱无疆。医院以“济世救人，尊重生命”为宗旨，全心全意为人民健康保驾护航。“全预约”诊疗模式省内第一，便民惠民措施层出不穷;优质护理实现全覆盖，优质医疗服务让患者就医感受持续提升;援青、援藏、援非、卫生支农，各级医师400余人次，对口帮扶的足迹行至边疆、远达坦桑尼亚、塞舍尔、赞比亚;中石化青岛输油管线爆炸、江苏昆山特大爆炸事故等历次突发事件，第十届中国艺术节、第22届国际历史科学大会等重大社会活动，山东省立医院应急救援勇挑重担。"
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
    showArt(id) {
      console.log(id);
      this.roomList.forEach(i => {
        i.isShow = false;
      });
      this.roomList[id - 1].isShow = !this.roomList[id - 1].isShow;
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
    this.artList[0].isShow = true;
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
.art-name {
  width: 140px;
  height: 30px;
  line-height: 30px;
  color: #ffffff;
  padding: 8px 10px;
  margin: 10px 20px;
  border-radius: 10px;
  background: #0087cd;
}
.art-sub {
  position: absolute;
  top: 100px;
  right: 100px;
  display: flex;
  flex-direction: row;
}
.sub-con {
  // background: #ddebf6;
  height: fit-content;
  width: 600px;
  // margin-right: 30px;
  margin-bottom: 22px;
  box-sizing: border-box;
  border-radius: 5px;
  position: relative;
}
.align {
  font-size: 25px;
  text-align: center;
  margin-bottom: 10px;
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