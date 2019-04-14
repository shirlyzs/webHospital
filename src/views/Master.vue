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
          <div class="sub-name" v-for="itam in item.subList" :key="itam.id" v-show="item.isShow">
            <div>{{itam.name}}</div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import menuNav from "@/components/menuNav.vue";

export default {
  data() {
    return {
      roomList: [
        {
          name: "内科系统",
          id: "1",
          isShow: false,
          subList: [
            {
              name: "消化内科",
              id: "11"
            },
            {
              name: "肾脏病科",
              id: "12"
            },
            {
              name: "肿瘤科",
              id: "13"
            },
            {
              name: "呼吸内科",
              id: "14"
            },
            {
              name: "内分泌科",
              id: "15"
            },
            {
              name: "神经内科",
              id: "16"
            }
          ]
        },
        {
          name: "外科系统",
          id: "2",
          isShow: false,
          subList: [
            {
              name: "肝胆病科",
              id: "21"
            },
            {
              name: "耳鼻喉科",
              id: "22"
            },
            {
              name: "胃肠病科",
              id: "23"
            },
            {
              name: "皮肤科",
              id: "24"
            },
            {
              name: "骨科",
              id: "25"
            },
            {
              name: "泌尿外科",
              id: "26"
            },
            {
              name: "神经外科",
              id: "27"
            }
          ]
        },
        {
          name: "医技系统",
          id: "3",
          isShow: false,
          subList: [
            {
              name: "麻醉科",
              id: "31"
            },
            {
              name: "核医学科",
              id: "32"
            }
          ]
        },
        {
          name: "其他系统",
          id: "4",
          isShow: false,
          subList: [
            {
              name: "急诊科",
              id: "41"
            },
            {
              name: "病理科",
              id: "42"
            }
          ]
        }
      ]
    };
  },
  components: {
    menuNav
  },
  methods: {
    showSub(id) {
      console.log(id);
      this.roomList.forEach(i => {
        i.isShow = false;
      });
      this.roomList[id - 1].isShow = !this.roomList[id - 1].isShow;
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
    this.artList[0].isShow = true;
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
  height: 600px;
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