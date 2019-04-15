<template>
  <div class>
    <div class="container">
      <div class="wel">
        <i class="el-icon-edit"></i>
        后台管理
      </div>
      <div class="login" @click="toLoginOut">退出登录</div>
    </div>

    <div style="margin:50px">
      <el-row :gutter="60">
        <el-col :span="5">
          <div class="item-control" @click="changeType('Admin')">管理员管理</div>
          <div class="item-control" @click="changeType('User')">用户管理</div>
          <div class="item-control" @click="changeType('Doctor')">医生管理</div>
          <div class="item-control" @click="changeType('Department')">科室管理</div>
          <div class="item-control" @click="changeType('News')">新闻管理</div>
          <div class="item-control" @click="changeType('Article')">文章管理</div>
          <div class="item-control" @click="changeType('Orders')">预约统计</div>
        </el-col>

        <el-col :span="18">
          <el-table :data="tableData" style="width: 100%" height="650" fit border>
            <!-- 管理员 -->
            <div v-if="type == 'Admin'">
              <el-table-column prop="adminName" label="管理员名"></el-table-column>
            </div>
            <!-- 用户 -->
            <div v-if="type == 'User'">
              <el-table-column prop="userName" label="用户名" key="1"></el-table-column>
              <el-table-column prop="password" label="密码" key="2"></el-table-column>
              <el-table-column prop="info" label="备注" key="3"></el-table-column>
              <el-table-column prop="tel" label="手机号" key="4"></el-table-column>
              <el-table-column prop="balance" label="余额" key="5"></el-table-column>
            </div>
            <!-- 医生 -->
            <div v-if="type == 'Doctor'">
              <el-table-column prop="image" label="照片" key="1">
                <template slot-scope="scope">
                  <img :src="scope.row.image" min-width="70" height="70">
                </template>
              </el-table-column>
              <el-table-column prop="doctorName" label="名字" key="2"></el-table-column>
              <el-table-column prop="ranks" label="职称" key="3"></el-table-column>
              <el-table-column prop="department" label="主科室" key="4"></el-table-column>
              <el-table-column prop="keShi" label="分科室" key="5"></el-table-column>
              <el-table-column prop="ordersNum" label="预约数" key="6"></el-table-column>
              <el-table-column prop="price" label="门诊费" key="7"></el-table-column>
              <el-table-column prop="resume" label="简介" key="8"></el-table-column>
            </div>
            <!-- 科室 -->
            <div v-if="type == 'Department'">
              <el-table-column prop="departme" label="主科室"></el-table-column>
              <el-table-column prop="keShiName" label="分科室"></el-table-column>
              <el-table-column prop="info" label="简介"></el-table-column>
            </div>
            <!-- 新闻 -->
            <div v-if="type == 'News'">
              <el-table-column prop="title" label="标题"></el-table-column>
              <el-table-column prop="createTime" label="创建时间"></el-table-column>
              <el-table-column prop="author" label="来源"></el-table-column>
              <el-table-column prop="content" label="内容"></el-table-column>
            </div>
            <!-- 文章 -->
            <div v-if="type == 'Article'">
              <el-table-column prop="title" label="标题"></el-table-column>
              <el-table-column prop="createTime" label="创建时间"></el-table-column>
              <el-table-column prop="author" label="来源"></el-table-column>
              <el-table-column prop="content" label="类型"></el-table-column>
              <el-table-column prop="content" label="内容"></el-table-column>
            </div>
            <!-- 预约统计 -->
            <div v-if="type == 'Orders'">
              <el-table-column prop="doctorName" label="医生名字"></el-table-column>
              <el-table-column prop="userName" label="用户名"></el-table-column>
              <el-table-column prop="createdTime" label="创建时间"></el-table-column>
              <el-table-column prop="tel" label="联系方式"></el-table-column>
            </div>
          </el-table>
        </el-col>
      </el-row>
    </div>
  </div>
</template>

<script>
import {
  // 管理员
  findAdmin,
  delAdmin,
  // 用户
  findUser,
  delUser,
  updateUser,
  // 医生
  findDoctor,
  delDoctor,
  updateDoctor,
  // 订单
  findOrders,
  // 新闻
  findNews,
  updateNews,
  delNews,
  // 文章
  findArticle,
  updateArticle,
  delArticle,
  //科室
  findDepartment
} from "@/api/admin";
import axios from "axios";

export default {
  data() {
    return {
      tableData: [
        {
          doctorName: "1",
          password: "2",
          keShi: "2",
          department: "3",
          resume: "4",
          ranks: "5",
          ordersNum: "6",
          price: "7",
          image:
            "https://ss2.bdstatic.com/70cFvnSh_Q1YnxGkpoWK1HF6hhy/it/u=530763801,912059783&fm=27&gp=0.jpg"
        },
        {
          doctorName: "a",
          password: "1",
          keShi: "2",
          department: "3",
          resume: "4",
          ranks: "5",
          ordersNum: "6",
          price: "7",
          image:
            "https://ss2.bdstatic.com/70cFvnSh_Q1YnxGkpoWK1HF6hhy/it/u=530763801,912059783&fm=27&gp=0.jpg"
        },
        {
          doctorName: "a",
          password: "1",
          keShi: "2",
          department: "3",
          resume: "4",
          ranks: "5",
          ordersNum: "6",
          price: "7",
          image:
            "https://ss2.bdstatic.com/70cFvnSh_Q1YnxGkpoWK1HF6hhy/it/u=530763801,912059783&fm=27&gp=0.jpg"
        },
        {
          doctorName: "a",
          password: "1",
          keShi: "2",
          department: "3",
          resume: "4",
          ranks: "5",
          ordersNum: "6",
          price: "7",
          image:
            "https://ss2.bdstatic.com/70cFvnSh_Q1YnxGkpoWK1HF6hhy/it/u=530763801,912059783&fm=27&gp=0.jpg"
        }
      ],
      type: "Doctor"
    };
  },
  methods: {
    aa(a) {
      console.log(a);
    },
    toLoginOut() {
      this.$confirm("确认退出登录?", "提示", {
        distinguishCancelAndClose: true,
        confirmButtonText: "确定",
        cancelButtonText: "取消",
        type: "warning"
      }).then(() => {
        this.$router.push("./");
      });
    },
    changeType(type) {
      this.type = type;
      if (type == "User") {
        this.getUser();
      } else if (type == "Doctor") {
        this.getDoctor();
      } else if (type == "Department") {
        this.getDepartment();
      } else if (type == "News") {
        this.getNews();
      } else if (type == "Article") {
        this.getArticle();
      } else if (type == "Orders") {
        this.getOrders();
      }
    },
    getAdmin() {
      findAdmin(0, 20, 1).then(res => {
        this.tableData = res.result[0].content;
      });
    },
    getUser() {
      findUser(0, 20).then(res => {
        this.tableData = res.result[0].content;
      });
    },
    getDoctor() {
      // findDoctor(0, 20).then(res => {
      //   this.tableData = res.result[0].content;
      //   this.tableData.forEach(item => {
      //     item.resume = item.resume.substring(0, 20) + "...";
      //   });
      // });
      axios
        .get(
          "https://www.easy-mock.com/mock/5cb44d905db60d3cdc9223b6/example/mock"
        )
        .then(function(res) {});
    },
    getDepartment() {
      findDepartment(0, 20).then(res => {
        this.tableData = res.result[0].content;
      });
    },
    getNews() {
      findNews(0, 20).then(res => {
        this.tableData = res.result[0].content;
      });
    },
    getArticle() {
      findArticle(0, 20).then(res => {
        this.tableData = res.result[0].content;
      });
    },
    getOrders() {
      findOrders(0, 20).then(res => {
        this.tableData = res.result[0].content;
      });
    }
  },
  created() {
    // this.getAdmin();
  }
};
</script>


<style lang="less" scoped>
.container {
  height: 50px;
  line-height: 50px;
  background-color: #078ed4;
  .wel {
    margin-left: 100px;
    float: left;
    font-size: 18px;
    color: #ffffff;
    .el-icon-edit {
      margin-right: 10px;
      font-size: 18px;
      color: #fff;
    }
  }
  .login {
    float: right;
    font-size: 16px;
    margin-right: 50px;
    color: #ffffff;
    font-weight: 300;
  }
}

.el-col {
  border-radius: 4px;
}
.item-control {
  width: 140px;
  height: 30px;
  line-height: 30px;
  color: #ffffff;
  padding: 8px 10px;
  margin: 10px 20px;
  border-radius: 10px;
  background: #0087cd;
}
</style>

