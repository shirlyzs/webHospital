<template>
  <div>
    <menuNav></menuNav>
    <div class="backTo">
      <span v-on:click="back">>>返回上一页</span>
    </div>
    <div class="navi">
      <div class="title">hahha</div>
      <div class="author">王一一</div>
      <div class="content">dhsbvhuyhdsvhkuysbvgysgkvsyuvyyyyyyggssssssssssssssssssssss</div>
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
    };
  },
  components: {
    menuNav,Footer
  },
  methods: {
    back() {
      this.$router.go(-1); //返回上一层
    }
  },
  created() {
    console.log(this.$route.query.newId);
    this.newsId = this.$route.query.newId;
  }
};
</script>

<style scoped>
.navi {
  border-radius: 3px;
  width: 1000px;
  margin: 50px auto;
  text-align: left;
  height: 1000px;
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
.title{
  text-align: center;
  font-size: 28px;
  padding-bottom: 50px;
}
.author{
  text-align: right;
  font-size: 14px;
  margin-right: 50px;
}
.content{
  font-size: 18px;
}
</style>

