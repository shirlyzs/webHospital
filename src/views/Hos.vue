<template>
  <div class="home">
    <menuNav></menuNav>
    <div class="backTo">
      <span v-on:click="back">>>返回上一页</span>
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
import menuNav from "@/components/menuNav.vue";
export default {
  data() {
    return {
      artList: [
        {
          name: "医院简介",
          eng: "intro",
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
          eng: "leader",

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
          eng: "culture",
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
    menuNav
  },
  methods: {
    showArt(id) {
      console.log(id);
      this.artList.forEach(i => {
        i.isShow = false;
      });
      this.artList[id - 1].isShow = !this.artList[id - 1].isShow;
    },
    back() {
      this.$router.go(-1); //返回上一层
    }
  },
  watch: {
    $route() {
      this.artList.forEach(i => {
        i.isShow = false;
        if (i.eng == this.$route.params.name) {
          i.isShow = true;
        }
      });
    }
  },
  created() {
    // 接口初始化数据
    this.artList[0].isShow = true;
    // this.healtList[0].isShow = true;
  }
};
</script>
<style scoped lang="less">
.backTo {
  position: absolute;
  top: 120px;
  left: 180px;
  font-size: 13px;
  color: #0087cd;
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