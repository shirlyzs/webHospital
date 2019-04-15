<template>
  <div class>
    <div class="container">
      <div class="wel">
        <i class="el-icon-edit"></i>
        后台管理
      </div>
      <div class="login" @click="toLoginOut">退出登录</div>
    </div>

    <div style="margin:40px 70px">
      <el-row>
        <!-- 左侧选择栏 -->
        <el-col :span="5">
          <!-- <div class="item-control" @click="changeType('Admin')" :class="type=='Admin'?'is-on':''">管理员管理</div> -->
          <div class="item-control" @click="changeType('User')" :class="type=='User'?'is-on':''">用户管理</div>
          <div class="item-control" @click="changeType('Doctor')" :class="type=='Doctor'?'is-on':''">医生管理</div>
          <div class="item-control" @click="changeType('Department')" :class="type=='Department'?'is-on':''">科室管理</div>
          <div class="item-control" @click="changeType('News')" :class="type=='News'?'is-on':''">新闻管理</div>
          <div class="item-control" @click="changeType('Article')" :class="type=='Article'?'is-on':''">文章管理</div>
          <div class="item-control" @click="changeType('Orders')" :class="type=='Orders'?'is-on':''">预约统计</div>
        </el-col>
        <!-- 右侧表格 -->
        <el-col :span="19">
          <!-- 管理员 -->
          <!-- <div v-if="type == 'Admin'">
              <el-table-column prop="adminName" label="管理员名"></el-table-column>
            </div> -->
          <!-- 用户 -->
          <div v-if="type == 'User'">
            <el-table :data="tableData" style="width: 100%" height="650" border>
              <el-table-column prop="userName" label="用户名"></el-table-column>
              <!-- <el-table-column prop="info" label="备注"></el-table-column> -->
              <el-table-column prop="tel" label="手机号"></el-table-column>
              <el-table-column prop="balance" label="余额" width="120"></el-table-column>
              <el-table-column label="操作">
                <!-- 用户密码重置 -->
                <template slot-scope="scope">
                  <el-button size="mini" @click="upUser(scope.$index, scope.row)">编辑</el-button>
                  <el-button size="mini" @click="upUser(scope.$index, scope.row,'确认重置为初始密码123456？')">重置密码</el-button>
                  <el-button size="mini" type="danger" @click="upUser(scope.$index, scope.row,'确认删除该用户？')">删除</el-button>
                </template>
              </el-table-column>
            </el-table>
          </div>
          <!-- 医生 -->
          <div v-if="type === 'Doctor'">
            <el-table :data="tableData" style="width: 100%" height="650" fit border :default-sort="{prop: 'date', order: 'descending'}">
              <el-table-column prop="image" label="照片">
                <!-- <template slot-scope="scope" v-if="scope.row.image">
                  <img :src="scope.row.image" min-width="70" height="70">
                </template> -->
              </el-table-column>
              <el-table-column prop="doctorName" label="名字"></el-table-column>
              <el-table-column prop="ranks" label="职称"></el-table-column>
              <el-table-column prop="department" label="主科室"></el-table-column>
              <el-table-column prop="keShi" label="分科室"></el-table-column>
              <el-table-column prop="ordersNum" label="预约数"></el-table-column>
              <el-table-column prop="price" label="门诊费"></el-table-column>
              <el-table-column prop="resume" label="简介"></el-table-column>
            </el-table>
          </div>
          <!-- 科室 -->
          <div v-if="type === 'Department'">
            <el-table :data="tableData" style="width: 100%" height="650" fit border :default-sort="{prop: 'date', order: 'descending'}">
              <el-table-column prop="departme" label="主科室"></el-table-column>
              <el-table-column prop="keShiName" label="分科室"></el-table-column>
              <el-table-column prop="info" label="简介"></el-table-column>
            </el-table>
          </div>
          <!-- 新闻 -->
          <div v-if="type === 'News'">
            <el-table :data="tableData" style="width: 100%" height="650" fit border :default-sort="{prop: 'date', order: 'descending'}">
              <el-table-column prop="title" label="标题"></el-table-column>
              <el-table-column prop="createTime" label="创建时间"></el-table-column>
              <el-table-column prop="author" label="来源"></el-table-column>
              <el-table-column prop="content" label="内容"></el-table-column>
            </el-table>
          </div>
          <!-- 文章 -->
          <div v-if="type === 'Article'">
            <el-table :data="tableData" style="width: 100%" height="650" fit border :default-sort="{prop: 'date', order: 'descending'}">
              <el-table-column prop="title" label="标题"></el-table-column>
              <el-table-column prop="createTime" label="创建时间"></el-table-column>
              <el-table-column prop="author" label="来源"></el-table-column>
              <el-table-column prop="content" label="类型"></el-table-column>
              <el-table-column prop="content" label="内容"></el-table-column>
            </el-table>
          </div>
          <!-- 预约统计 -->
          <div v-if="type === 'Orders'">
            <el-table :data="tableData" style="width: 100%" height="650" fit border :default-sort="{prop: 'date', order: 'descending'}">
              <el-table-column prop="doctorName" label="医生名字"></el-table-column>
              <el-table-column prop="userName" label="用户名"></el-table-column>
              <el-table-column prop="createTime" label="创建时间"></el-table-column>
              <el-table-column prop="price" label="订单费用"></el-table-column>
              <el-table-column prop="tel" label="联系方式"></el-table-column>
            </el-table>
          </div>
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
} from '@/api/admin'
import axios from 'axios'

export default {
  data() {
    return {
      tableData: [
        //   {
        //     doctorName: "1",
        //     password: "2",
        //     keShi: "2",
        //     department: "3",
        //     resume: "4",
        //     ranks: "5",
        //     ordersNum: "6",
        //     price: "7",
        //     image:
        //       "https://ss2.bdstatic.com/70cFvnSh_Q1YnxGkpoWK1HF6hhy/it/u=530763801,912059783&fm=27&gp=0.jpg"
        //   },
        //   {
        //     doctorName: "a",
        //     password: "1",
        //     keShi: "2",
        //     department: "3",
        //     resume: "4",
        //     ranks: "5",
        //     ordersNum: "6",
        //     price: "7",
        //     image:
        //       "https://ss2.bdstatic.com/70cFvnSh_Q1YnxGkpoWK1HF6hhy/it/u=530763801,912059783&fm=27&gp=0.jpg"
        //   },
        //   {
        //     doctorName: "a",
        //     password: "1",
        //     keShi: "2",
        //     department: "3",
        //     resume: "4",
        //     ranks: "5",
        //     ordersNum: "6",
        //     price: "7",
        //     image:
        //       "https://ss2.bdstatic.com/70cFvnSh_Q1YnxGkpoWK1HF6hhy/it/u=530763801,912059783&fm=27&gp=0.jpg"
        //   },
        //   {
        //     doctorName: "a",
        //     password: "1",
        //     keShi: "2",
        //     department: "3",
        //     resume: "4",
        //     ranks: "5",
        //     ordersNum: "6",
        //     price: "7",
        //     image:
        //       "https://ss2.bdstatic.com/70cFvnSh_Q1YnxGkpoWK1HF6hhy/it/u=530763801,912059783&fm=27&gp=0.jpg"
        //   }
      ],
      type: 'User'
    }
  },
  methods: {
    aa(a) {
      console.log(a)
    },
    toLoginOut() {
      this.$confirm('确认退出登录?', '提示', {
        distinguishCancelAndClose: true,
        confirmButtonText: '确定',
        cancelButtonText: '取消',
        type: 'warning'
      }).then(() => {
        this.$router.push('./')
      })
    },
    changeType(type) {
      this.type = type
      if (type == 'User') {
        this.getUser()
      } else if (type == 'Doctor') {
        this.getDoctor()
      } else if (type == 'Department') {
        this.getDepartment()
      } else if (type == 'News') {
        this.getNews()
      } else if (type == 'Article') {
        this.getArticle()
      } else if (type == 'Orders') {
        this.getOrders()
      }
    },
    getAdmin() {
      findAdmin(0, 20, 1).then(res => {
        this.tableData = res.result[0].content
      })
    },
    getUser() {
      findUser(0, 20).then(res => {
        this.tableData = res.result[0].content
      })
    },
    upUser(index, info, msg) {
      if (!msg) {
        console.log('编辑')
        return
      }
      this.$confirm(msg, '提示', {
        distinguishCancelAndClose: true,
        confirmButtonText: '确定',
        cancelButtonText: '取消',
        type: 'warning'
      }).then(() => {
        if (msg == '确认删除该用户？') {
          delUser(info.userId).then(res => {
            if (res.code == 200) {
              this.tableData.shift()
              this.$message({
                message: res.message,
                type: 'success'
              })
            }
          })
        } else {
          updateUser(info.userId, '123456', '', '', '').then(res => {
            if (res.code == 200) {
              this.$message({
                message: '已重置',
                type: 'success'
              })
            }
          })
        }
      })
    },
    getDoctor() {
      findDoctor(0, 20).then(res => {
        this.tableData = res.result[0].content
        this.tableData.forEach(item => {
          item.resume = item.resume.substring(0, 20) + '...'
        })
      })
    },
    getDepartment() {
      findDepartment(0, 20).then(res => {
        this.tableData = res.result[0].content
        this.tableData.forEach(item => {
          item.info = item.info.substring(0, 20) + '...'
        })
      })
    },
    getNews() {
      findNews(0, 20).then(res => {
        this.tableData = res.result[0].content
        this.tableData.forEach(item => {
          item.content = item.content.substring(0, 20) + '...'
        })
      })
    },
    getArticle() {
      findArticle(0, 20).then(res => {
        this.tableData = res.result[0].content
        this.tableData.forEach(item => {
          item.content = item.content.substring(0, 20) + '...'
        })
      })
    },
    getOrders() {
      findOrders(0, 20).then(res => {
        this.tableData = res.result[0].content
        this.tableData.shift()
      })
    }
  },
  created() {
    this.getUser()
  }
}
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
  padding: 8px 10px;
  margin: 10px 20px;
  border-radius: 10px;
  border: solid 1px rgb(236, 233, 233);
}
.is-on {
  background-color: #078ed4;
  color: #ffffff;
}
</style>

