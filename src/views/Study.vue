<template>
  <div class="home">
    <menuNav></menuNav>
    <div class="backTo">
      <span v-on:click="back">>>返回上一页</span>
    </div>
    <div class="navi">
      <div class="daohang">健康科普</div>
      <div v-for="item in healtList" :key="item.id" :index="item.id">
        <div class="health-name" @click="showHealth(item.id)" slot="title">{{item.name}}</div>
        <div class="hea-name">
          <div class="vid" v-for="vide in item.videoList" :key="vide.id" v-show="item.isShow">
            <video id="myvideo" width="250px" height="250px" controls="controls">
              <source :src="vide.src" type="video/mp4">
            </video>
            <div class="vid-name">{{vide.name}}</div>
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
import { video } from "@/api/api";


export default {
  data() {
    return {
      healtList: [
      ]
    };
  },
  components: {
    menuNav,Footer
  },
  methods: {
    getVideo() {
      video().then(
        res => {
          this.healtList = res.data.healtList;
          this.healtList[0].isShow = true;
        },
        rej => {
          console.log(rej);
        }
      );
    },
    showHealth(id) {
      console.log(id);
      this.healtList.forEach(i => {
        i.isShow = false;
      });
      this.healtList[id - 1].isShow = !this.healtList[id - 1].isShow;
    },
    back() {
      this.$router.go(-1); //返回上一层
    }
  },
  created() {
    // 接口初始化数据
        this.getVideo();
  }
};
</script>
<style scoped lang="less">
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
  height: 800px;
  padding: 10px;
  position: relative;
  box-shadow: 0 2px 12px 0 rgba(0, 0, 0, 0.3);
  .daohang {
    margin-left: 30px;
    font-size: 28px;
    margin-bottom: 50px;
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
.hea-name {
  position: absolute;
  top: 50px;
  left: 230px;
  display: flex;
  flex-wrap: wrap;
  .vid {
    margin: 10px 25px;
    padding:0 30px;
    border: 1px solid #e6e6e6;
  }
  .vid-name {
    margin: 10px 0;
    width: 250px;
    display: flex;
    flex-wrap: wrap;
  }
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