<template>
  <div>
    <menuNav></menuNav>
    <div class="backTo">
      <span v-on:click="back">>>返回上一页</span>
    </div>
    <div class="navi">
      <div class="title">{{newsList.title}}</div>
      <div class="author">{{newsList.type}}</div>
      <!-- <div class="image">
        <img  v-for="(item,index) in newsList.image" :key="index" :src="item">
      </div> -->
      <div class="content">{{newsList.content}}</div>
    </div>
    <Footer></Footer>
  </div>
</template>

<script>
import menuNav from "@/components/menuNav.vue";
import Footer from "@/components/Footer.vue";
import { artdetail } from "@/api/api";

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
    getId(newsId) {
      let articleInfo = {
        articleId: newsId
      };
      artdetail(articleInfo).then(res => {
        // res.result.image = res.result.image.split("||");
        this.newsList = res.result;
      });
    },
    back() {
      this.$router.go(-1); //返回上一层
    }
  },
  created() {
    this.getId(this.$route.query.newId);  }
};
</script>

<style scoped lang="less">
.navi {
  border-radius: 3px;
  width: 800px;
  margin: 50px auto;
  text-align: left;
  height: fit-content;
  min-height: 1000px;
  padding: 50px;
  position: relative;
  box-shadow: 0 2px 12px 0 rgba(0, 0, 0, 0.3);
}
.backTo {
  position: absolute;
  top: 120px;
  left: 180px;
  font-size: 13px;
  color: #0087cd;
}
.title {
  text-align: center;
  font-size: 24px;
  padding-bottom: 50px;
}
.author {
  text-align: right;
  font-size: 17px;
  margin-bottom: 40px;
  margin-right: 200px;
}
.image {
  justify-content: center;
  display: flex;
  flex-wrap: wrap;
  img{
    height: 400px;
    width: 400px;
    margin: 10px;
  }
}
.content {
  font-size: 18px;
  text-indent: 2em;
}
</style>

