<template>
  <div class="home">
    <menuNav></menuNav>
    <div class="backTo">
      <span v-on:click="back">>>返回上一页</span>
    </div>
    <div class="navi">
      <div class="daohang">医院新闻</div>
      <div class="new" v-for="(news,index) in newsList.slice((currentPage-1)*pagesize,currentPage*pagesize)" :key="index">
        <div class="news-name" @click="toNewsDetail(news)">{{news.title}}</div>
      </div>
      <el-pagination
        @current-change="handleCurrentChange"
        :current-page="currentPage"
        :page-size="pagesize"
        layout="total, prev, pager, next, jumper"
        :total="newsList.length"
      ></el-pagination>
    </div>
    <Footer></Footer>
  </div>
</template>

<script>
import menuNav from "@/components/menuNav.vue";
import Footer from "@/components/Footer.vue";
import { xinwen } from "@/api/api";

export default {
  data() {
    return {
      newsList: [],
      currentPage: 1 ,//初始页
      pagesize:10
    };
  },
  components: {
    menuNav,
    Footer
  },
  methods: {
    getNews() {
      let newInfo = {
        newsId: "",
        title: "",
        author: "",
        content: ""
      };
      xinwen(newInfo).then(res => {
        this.newsList = res.result[0].content;
      });
    },
    toNewsDetail(item) {
      this.$router.push({ path: "/detail", query: { newId: item.newsId } });
    },
    back() {
      this.$router.go(-1); //返回上一层
    },
    handleCurrentChange: function(currentPage) {
      // this.newsList.slice((currentPage - 1) * pageSize, currentPage * pageSize);
      this.currentPage = currentPage;
      console.log(this.currentPage); //点击第几页
    }
  },
  created() {
    // 接口初始化数据
    this.getNews();
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
  height: fit-content;
  padding: 10px 10px 50px 10px;
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