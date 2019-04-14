<template>
  <div class="home">
    <menuNav></menuNav>
    <div class="backTo">
      <span v-on:click="back">>>返回上一页</span>
    </div>
    <div class="navi">
      <div class="daohang">百年省医</div>
      <div class="new" v-for="news in newsList" :key="news.id">
        <div class="news-name"><span>【医院专栏】</span>{{news.name}}</div>
      </div>
    </div>
    <Footer></Footer>
  </div>
</template>

<script>
import menuNav from "@/components/menuNav.vue";
import Footer from "@/components/Footer.vue";

export default {
  data() {
    return {
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
    };
  },
  components: {
    menuNav,Footer
  },
  methods: {
    showArt(id) {
      console.log(id);
      this.newsList.forEach(i => {
        i.isShow = false;
      });
      this.newsList[id - 1].isShow = !this.newsList[id - 1].isShow;
    },
    back() {
      this.$router.go(-1); //返回上一层
    }
  },
  created() {
    // 接口初始化数据
    this.newsList[0].isShow = true;
  }
};
</script>
<style scoped lang="less">
.new {
  margin-top: 50px;
  height: 10px;
  margin-left: 30px;
  text-align: left;
  line-height: 20px;
}
.news-name {
  border-bottom: #ded6d685 1px dashed;
  padding-bottom: 15px;
}
.backTo {
  position: absolute;
  top: 120px;
  left:180px;
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
</style>