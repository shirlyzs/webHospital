<template>
  <div class="home">
    <menuNav></menuNav>
    <div class="backTo">
      <span v-on:click="back">>>返回上一页</span>
    </div>
    <div class="navi">
      <div class="daohang">引领</div>
      <div class="new" v-for="(news,index) in newsList" :key="index">
        <div class="news-name" @click="toshowdetail(news)">
          <span>【引领】</span>
          {{news.title}}
        </div>
      </div>
    </div>
    <Footer></Footer>
  </div>
</template>

<script>
import menuNav from "@/components/menuNav.vue";
import Footer from "@/components/Footer.vue";
import { article } from "@/api/api";

export default {
  data() {
    return {
      newsList: []
    };
  },
  components: {
    menuNav,
    Footer
  },
  methods: {
    getArticle() {
      let articleInfo = {
        articleId: "",
        title: "",
        author: "",
        type: ""
      };
      article(articleInfo).then(res => {
        this.newsList = res.result[0].content;
      });
    },
    back() {
      this.$router.go(-1); //返回上一层
    },
    toshowdetail(neirong) {
      this.$router.push({
        path: "/showdetail",
        query: { newId: neirong.articleId }
      });
    }
  },
  created() {
    // 接口初始化数据
    this.getArticle();
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
</style>