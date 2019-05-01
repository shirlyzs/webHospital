<template>
  <div>
    <div class="container">
      <div class="wel">医生信息</div>
      <div class="login" @click="toLoginOut">退出登录</div>
    </div>
    <div class="navi">
      <el-tabs v-model="activeName" @tab-click="handleClick">
        <el-tab-pane label="个人信息" name="first">
          <div>
            <span style="color:blue;width：150px">医生姓名：</span>
            {{doctorList.doctorName}}
          </div>
          <div>
            <span style="color:blue;width：150px">部 门 ：</span>
            {{doctorList.department}}
          </div>
          <div>
            <span style="color:blue;width：150px">科 室 ：</span>
            {{doctorList.keShi}}
          </div>
          <div>
            <span style="color:blue;width：150px">职 称 ：</span>
            {{doctorList.ranks}}
          </div>
          <div>
            <span style="color:blue;width：150px">当前预约数：</span>
            {{doctorList.ordersNum}}
          </div>
          <div>
            <span style="color:blue;width：150px">最大预约数：</span>
            {{doctorList.maxOrdersNum}}
            <i class="el-icon-edit" @click="isShow = true"></i>
          </div>
          <div>
            <span style="color:blue;width：150px">个人简介：</span>
            {{doctorList.resume}}
          </div>
          <el-dialog title="修改信息" :visible.sync="isShow">
            <el-form :model="doctorList">
              <el-form-item label="最大预约数" :label-width="formLabelWidth">
                <el-input v-model="doctorList.maxOrdersNum" auto-complete="off"></el-input>
              </el-form-item>
            </el-form>
            <div slot="footer" class="dialog-footer">
              <el-button @click="isShow = false">取 消</el-button>
              <!-- <el-button type="primary" @click="changeInfo">确 定</el-button> -->
            </div>
          </el-dialog>
        </el-tab-pane>
        <el-tab-pane label="订单记录" name="second">
          <span style="color:blue">预约记录：</span>
          <el-table :data="orderList" style="width: 80%" border>
            <el-table-column prop="createTime" label="预约时间" width="180"></el-table-column>
            <el-table-column prop="createTime" label="预约日期" width="180"></el-table-column>
            <el-table-column prop="userName" label="患者" width="180"></el-table-column>
          </el-table>
        </el-tab-pane>
        <el-tab-pane label="留言板" name="third">
          <div v-for="item in messageList" :key="item.boardId">
            <div  slot="title">{{item.createTime}}</div>
            <div  slot="title">{{item.userName}}</div>
            <div  slot="title">{{item.content}}</div>        
          </div>
        </el-tab-pane>
      </el-tabs>
    </div>
  </div>
</template>

<script>
import { doctordetail, changeDoctor, board } from "@/api/api";
import { docOrder } from "@/api/reserve";

export default {
  data() {
    return {
      activeName: "first",
      doctorList: [],
      orderList: [],
      messageList: [],
      formLabelWidth: "120px",
      isShow: false
    };
  },
  methods: {
    getDoctor(id) {
      let doctorInfo = {
        doctorId: id
      };
      doctordetail(doctorInfo).then(res => {
        this.doctorList = res.result;
        this.doctorName = res.result.doctorName;
        this.getOrder(this.doctorName);
      });
    },
    getOrder(name) {
      let doctorinfo = {
        doctorName: name
        // createTime: "",
        // userName: "",
        // price: ""
      };
      docOrder(doctorinfo).then(res => {
        console.log(res.result);
        this.orderList = res.result;
        this.userName = res.result;
        this.getUser(this.userName);
      });
    },
    getUser(name) {
      let userinfo = {
        userName: name
      };
    },
    getBoard(id) {
      let info = {
        doctorId: id
      };
      board(info).then(res => {
        console.log(res.result);

        this.messageList = res.result;
      });
    },
    // changeInfo() {
    //   let doctorInfo = {
    //     doctorId: this.doctorId,
    //     maxOrdersNum: ""
    //   };
    //   changeDoctor(doctorInfo).then(res => {
    //     if (res.code == 200) {
    //       alert(res.message);
    //     }
    //   });
    //   this.isshow = false;
    // },
    handleClick(tab, event) {
      console.log(tab, event);
    },
    toLoginOut() {
      this.$confirm("确认退出登录?", "提示", {
        distinguishCancelAndClose: true,
        confirmButtonText: "确定",
        cancelButtonText: "取消",
        type: "warning"
      }).then(() => {
        window.sessionStorage.clear();
        this.doctorId = "";
        this.$router.push("./");
      });
    }
  },
  created() {
    if (window.sessionStorage["loginKey2"]) {
      this.doctorId = window.sessionStorage["loginKey2"];
    }
    this.getDoctor(this.doctorId);
    this.getBoard(this.doctorId);
    this.isShow = false;
  }
};
</script>
<style lang="less" scoped>
.container {
  height: 50px;
  line-height: 50px;
  background-color: #078ed4;
  color: #ffffff;

  .wel {
    margin-left: 100px;
    float: left;
    font-size: 18px;
  }
  .login {
    float: right;
    font-size: 16px;
    margin-right: 50px;
    color: #ffffff;
    font-weight: 300;
  }
}

.navi {
  border-radius: 3px;
  width: 1000px;
  margin: 50px auto;
  text-align: left;
  min-height: 1000px;
  height: fit-content;
  padding: 10px;
  position: relative;
  box-shadow: 0 2px 12px 0 rgba(0, 0, 0, 0.3);
}
.daohang {
  margin-bottom: 30px;
}
</style>