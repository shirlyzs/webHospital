<template>
  <div class="home">
    <menuNav></menuNav>
    <div class="backTo">
      <span v-on:click="back">>>返回上一页</span>
    </div>
    <div class="navi">
      <div>
        <h2 class="daohang">科室导航</h2>
      </div>
      <div v-for="item in roomList" :key="item.id">
        <div class="room-name" @mouseenter="showSub(item.id)" slot="title">{{item.name}}</div>
        <div class="room-sub">
          <div
            class="sub-name"
            v-for="(itam,index) in subList"
            :key="index"
            @click="toRoomdetail(itam)"
            v-show="item.isShow && itam.department === item.name"
          >{{itam.keShiName}}</div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import menuNav from "@/components/menuNav.vue";
import { room } from "@/api/api";

export default {
  data() {
    return {
      roomList: [
        {
          name: "内科",
          id: 1,
          isShow: false
        },
        {
          name: "外科",
          isShow: false,
          id: 2
        },
        {
          name: "医技",
          isShow: false,
          id: 3
        },
        {
          name: "其他",
          isShow: false,
          id: 4
        }
      ],
      subList: []
    };
  },
  components: {
    menuNav
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
        this.roomList[0].isShow = true;
      });
    },
    showSub(id) {
      console.log(id);
      this.roomList.forEach(i => {
        i.isShow = false;
      });
      this.roomList[id - 1].isShow = !this.roomList[id - 1].isShow;
    },
    toRoomdetail(keshi){
      this.$router.push({ path: "/roomdetail", query: { newId: keshi.keShiId } });
    },
    back() {
      this.$router.go(-1); //返回上一层
    }
  },
  created() {
    // 接口初始化数据
    this.getRoom();
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
  height: 500px;
  padding: 10px;
  position: relative;
  box-shadow: 0 2px 12px 0 rgba(0, 0, 0, 0.3);
}
.daohang {
  margin-bottom: 50px;
}
.room-name {
  width: 140px;
  height: 30px;
  line-height: 30px;
  color: #ffffff;
  padding: 8px 10px;
  margin: 10px 20px;
  border-radius: 10px;
  background: #0087cd;
}
.room-sub {
  position: absolute;
  top: 80px;
  left: 250px;
  // display: flex;
  flex-direction: row;
}
.sub-name {
  background: #ddebf6;
  width: 250px;
  height: 48px;
  float: left;
  margin-right: 30px;
  line-height: 48px;
  text-align: center;
  margin-bottom: 22px;
  box-sizing: border-box;
  border-radius: 5px;
  position: relative;
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