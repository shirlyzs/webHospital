<template>
  <div class="home">
    <menuNav></menuNav>
    <div class="backTo">
      <span v-on:click="back">>>返回上一页</span>
    </div>
    <div class="navi">
      <div class="daohang">新闻动态</div>
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
    <Footer></Footer>
  </div>
</template>

<script>
import menuNav from "@/components/menuNav.vue";
import Footer from "@/components/Footer.vue";
import { notice } from "@/api/api";


export default {
  data() {
    return {
      artList: []
    };
  },
  components: {
    menuNav,Footer
  },
  methods: {
    getNotice(){
      notice().then(
        res => {
          this.artList = res.data.artList;
          this.artList[0].isShow = true;
        }
      );
    },
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
    this.getNotice();
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
  height: fit-content;
  width: 600px;
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