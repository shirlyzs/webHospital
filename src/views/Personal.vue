<template>
  <div>
    <menuNav></menuNav>
    <div class="navi">
      <div>
        <span>用户名：</span>
        {{userList.userName}}
      </div>
      <div>
        <span>个人信息：</span>
        {{userList.info}}
      </div>
      <div>
        <span>联系方式：</span>
        {{userList.tel}}
      </div>
      <el-table :data="orderList" style="width: 100%">
        <el-table-column prop="createTime" label="日期" width="180"></el-table-column>
        <el-table-column prop="doctorName" label="医生" width="180"></el-table-column>
        <el-table-column prop="price" label="价格"></el-table-column>
      </el-table>
    </div>
    <Footer></Footer>
  </div>
</template>

<script>
import menuNav from "@/components/menuNav.vue";
import Footer from "@/components/Footer.vue";
import { person, record } from "@/api/api";

export default {
  data() {
    return {
      userList: [],
      orderList: []
    };
  },
  components: {
    menuNav,
    Footer
  },
  methods: {
    getUser() {
      let info = {
        userId: this.userId,
        userName: ""
      };
      person(info).then(res => {
        this.userList = res.result;
        this.userName = res.result.userName;
        this.getOrder(this.userName);
      });
    },
    getOrder(name) {
      let info = {
        userName: name,
        createTime:"",
        doctorName:"",
        price:""
      };
      record(info).then(res => {
        this.orderList = res.result;
      });
    }
  },
  created() {
    if (window.sessionStorage["loginKey1"]) {
      this.userId = window.sessionStorage["loginKey1"];
    }
    this.getUser();
  }
};
</script>
<style lang="less" scoped>
.navi {
  border-radius: 3px;
  width: 1000px;
  margin: 50px auto;
  text-align: left;
  height: 1000px;
  padding: 10px;
  position: relative;
  box-shadow: 0 2px 12px 0 rgba(0, 0, 0, 0.3);
}
</style>

