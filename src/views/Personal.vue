<template>
  <div>
    <menuNav></menuNav>
    <div class="navi">
      <h2 class="daohang">个人信息</h2>
      <div style="margin:15px auto;">
        <div>
          <span style="color:blue;">用 户 名：</span>
          {{userList.userName}}
        </div>
        <div style="magrin-left:25px;">
          <span style="color:blue">联系方式：</span>
          {{userList.tel}}
        </div>
      </div>
      <div style="margin:15px auto;">
        <span style="color:blue;">病情描述：</span>
        {{userList.info}}
        <i class="el-icon-edit" @click="isShow = true"></i>
      </div>
      <el-dialog title="修改信息" :visible.sync="isShow">
        <el-form :model="userList">
          <el-form-item label="用户名" :label-width="formLabelWidth">
            <el-input v-model="userList.userName" auto-complete="off"></el-input>
          </el-form-item>
          <el-form-item label="联系方式" :label-width="formLabelWidth">
            <el-input v-model="userList.tel" auto-complete="off"></el-input>
            <!-- <el-select v-model="form.region" placeholder="请选择活动区域">
              <el-option label="区域一" value="shanghai"></el-option>
              <el-option label="区域二" value="beijing"></el-option>
            </el-select>-->
          </el-form-item>
          <el-form-item label="病情描述" :label-width="formLabelWidth">
            <el-input v-model="userList.info" auto-complete="off"></el-input>
          </el-form-item>
        </el-form>
        <div slot="footer" class="dialog-footer">
          <el-button @click="isShow = false">取 消</el-button>
          <el-button type="primary" @click="changeInfo">确 定</el-button>
        </div>
      </el-dialog>
      <span style="color:blue">预约记录：</span>
      <el-table :data="orderList" style="width: 80%" border>
        <el-table-column prop="createTime" label="预约时间" width="180"></el-table-column>
        <el-table-column prop="createTime" label="预约日期" width="180"></el-table-column>
        <el-table-column prop="doctorName" label="医生" width="180"></el-table-column>
        <el-table-column prop="price" label="价格"></el-table-column>
        <!-- <el-table-column label="操作">
          <template slot-scope="scope">
            <el-button size="mini" type="danger" @click="delArticle(scope.$index, scope.row)">取消预约</el-button>
          </template>
        </el-table-column>-->
      </el-table>
    </div>
    <Footer></Footer>
  </div>
</template>

<script>
import menuNav from "@/components/menuNav.vue";
import Footer from "@/components/Footer.vue";
import { person, record } from "@/api/api";
import { updateUser } from "@/api/reserve";

export default {
  data() {
    return {
      userList: [],
      orderList: [],
      formLabelWidth: "120px",
      isShow: false
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
      let userinfo = {
        userName: name,
        createTime: "",
        doctorName: "",
        price: ""
      };
      record(userinfo).then(res => {
        this.orderList = res.result;
      });
    },
    changeInfo() {
      let userinfo = {
        userId: this.userId,
        // password:userinfo.password,
        tel: userinfo.tel,
        info: "",
        // balance: ""
      };
      updateUser(userinfo).then(res => {
        if (res.code == 200) {
          // alert(res.message);
        }
      });
      this.isshow = false;
    }
  },
  created() {
    if (window.sessionStorage["loginKey1"]) {
      this.userId = window.sessionStorage["loginKey1"];
    }
    this.getUser();
    this.isShow = false;
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
.daohang {
  margin-bottom: 30px;
}
</style>

