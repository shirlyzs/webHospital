<template>
  <div class="home">
    <menuNav></menuNav>
    <div class="backTo">
      <span v-on:click="back">>>返回上一页</span>
    </div>
    <div class="navi">
      <div>
        <h2 class="daohang">专家介绍</h2>
      </div>
      <div v-for="item in roomList" :key="item.id">
        <div class="room-name" slot="title">{{item.name}}</div>
        <div v-for="(itam,index) in subList" :key="index" v-show="itam.department === item.name">
          <div class="sub-name">{{itam.keShiName}}</div>
          <div
            class="doctor"
            v-for="(itom,index) in docList"
            :key="index"
            v-show="itom.keShi === itam.keShiName"
            @click="toDoctor(itom)"
          >{{itom.doctorName}}</div>
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
import { room, doctor } from "@/api/api";
export default {
  data() {
    return {
      roomList: [
        {
          name: "外科",
          id: 1
        },
        {
          name: "内科",

          id: 2
        },
        {
          name: "医技",
          id: 3
        },
        {
          name: "其他",
          id: 4
        }
      ],
      subList: [],
      docList: []
    };
  },
  components: {
    menuNav,Footer
  },
  methods: {
    getRoom() {
      let roomInfo = {
        keShiName: "",
        department: "",
        keShiId: "",
        info: ""
      };
      room(roomInfo).then(res => {
        this.subList = res.result[0].content;
      });
    },
    getDoctor() {
      let doctorInfo = {
        doctorName: "",
        department: "",
        keShi: "",
        ranks: ""
      };
      doctor(doctorInfo).then(res => {
        this.docList = res.result[0].content;
      });
    },
    back() {
      this.$router.go(-1); //返回上一层
    },
    toDoctor(item) {
      this.$router.push({
        path: "/prodetail",
        query: { newId: item.doctorId }
      });
    }
  },
  created() {
    this.getRoom();
    this.getDoctor();
    // 接口初始化数据
  }
};
</script>

<style lang="less" scoped>
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
  min-height: 600px;
  height: fit-content;
  padding: 10px;
  position: relative;
  box-shadow: 0 2px 12px 0 rgba(0, 0, 0, 0.3);
}
.daohang {
  margin-bottom: 50px;
}
.room-name {
  border-bottom: #ded6d685 0.8px solid;
  line-height: 30px;
  // color: #ffffff;
  padding: 8px 10px;
  margin: 18px 20px;
  font-size: 24px;
  // border-radius: 10px;
  // background: #0087cd;
}
.room-sub {
  width: 80%;
}
.sub-name {
  background: #5da3db;
  width: 250px;
  height: 48px;
  color: #fff;
  margin-right: 30px;
  line-height: 48px;
  text-align: center;
  margin: 22px 0;
  box-sizing: border-box;
  border-radius: 5px;
  position: relative;
}
.doctor {
  color: black;
  display: initial;
  margin-left: 50px;
  // margin-bottom: 20px
}
h3 {
  line-height: 26px;
  color: #00a1e9;
  padding: 35px 0px 25px;
  text-align: left;
  font-weight: 500;
}
.card {
  overflow: hidden;
  height: 250px;
  padding: 50px;
  border: 1px solid #f1f1ff;
}
.block {
  text-align: center;
}
</style>