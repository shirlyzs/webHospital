<template>
  <div class="home">
    <menuNav></menuNav>
    <div class="backTo">
      <span v-on:click="back">>>返回上一页</span>
    </div>
    <div class="navi">
      <div class="daohang">医院概况</div>
      <div v-for="item in artList" :key="item.id">
        <div
          class="art-name"
          @click="showArt(item.id)"
          :class="{active : item.isShow}"
          slot="title"
        >{{item.name}}</div>
        <div class="art-sub">
          <div class="sub-con" v-for="itam in item.subList" :key="itam.id" v-show="item.isShow">
            <div class="align">{{itam.name}}</div>
            <img
              v-if="item.name=='历任领导'"
              style="width:500px;height:800px;"
              :src="itam.content"
              alt="历任领导"
            >
            <div class="content" v-else v-html="itam.content"></div>
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
import { hos } from "@/api/api";

export default {
  data() {
    return {
      artList: []
    };
  },
  components: {
    menuNav,
    Footer
  },
  methods: {
    getHos() {
      hos().then(res => {
        this.artList = res.data.artList;
        this.artList[0].isShow = true;
      });
    },
    showArt(id) {
      console.log(id);
      this.artList.forEach(i => {
        i.isShow = false;
        this.active = id;
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
    this.getHos();
    // this.artList[0].isShow = true;
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
  padding: 8px 10px;
  margin: 10px 20px;
  border-radius: 10px;
  color: black;
  border: solid 1px #ece9e9;
  background: #ffffff;
}
.active {
  background: #0087cd;
  color: #ffffff;
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
  margin-bottom: 30px;
}
</style>