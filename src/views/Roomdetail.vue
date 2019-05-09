<template>
  <div>
    <menuNav></menuNav>
    <div class="backTo">
      <span v-on:click="back">>>返回上一页</span>
    </div>
    <div class="navi">
      <div class="title">{{roomList.keShiName}}</div>
      <div class="image">
        <img :src="roomList.image">
      </div>
      <div class="content">{{roomList.info}}</div>
    </div>
    <Footer></Footer>
  </div>
</template>

<script>
import menuNav from "@/components/menuNav.vue";
import Footer from "@/components/Footer.vue";
import { room, roomdetail } from "@/api/api";

export default {
  data() {
    return {
      roomList: []
    };
  },
  components: {
    menuNav,
    Footer
  },
  methods: {
    getId(keShiId) {
      let roomInfo = {
        // keShiName:"",
        // department: "",
        keShiId: keShiId
        // info: ""
      };
      roomdetail(roomInfo).then(res => {
        this.roomList = res.result;
      });
    },
    back() {
      // this.$router.go(-1); //返回上一层
      window.history.back();
    }
  },
  created() {
    this.getId(this.$route.query.newId);
  }
};
</script>

<style scoped lang="less">
.navi {
  border-radius: 3px;
  width: 1000px;
  margin: 50px auto;
  text-align: left;
  height: fit-content;
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
  img {
    height: 300px;
    width: 800px;
    margin: 10px;
  }
}
.content {
  font-size: 18px;
  text-indent: 2em;
}
</style>

