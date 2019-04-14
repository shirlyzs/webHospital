<template>
  <div class=" ">
    <div class="container">
      <div class="wel">欢迎来到山东省立医院</div>
      <div class="login">
        <router-link to="/">退出登录</router-link>
      </div>
    </div>
    <div style="margin:50px">
      <el-row :gutter="60">
        <el-col :span="5">
          <div class="item-control" @click="changeType('Admin')">管理员管理</div>
          <div class="item-control" @click="changeType('User')">用户管理</div>
          <div class="item-control" @click="changeType('Docter')">医生管理</div>
          <div class="item-control" @click="changeType('News')">新闻管理</div>
          <div class="item-control" @click="changeType('Orders')">预约统计</div>

        </el-col>
        <el-col :span="18">

          <el-table :data="tableData" style="width: 100%" height="650" fit border>
            <!-- 管理员 -->
            <div v-if="type == 'Admin'">
              <el-table-column prop="adminName" label="管理员名">
              </el-table-column>
            </div>
            <!-- 用户 -->
            <div v-if="type == 'User'">
              <el-table-column prop="userName" label="用户名">
              </el-table-column>
              <el-table-column prop="password" label="密码">
              </el-table-column>
              <el-table-column prop="info" label="备注">
              </el-table-column>
              <el-table-column prop="tel" label="手机号">
              </el-table-column>
              <el-table-column prop="balance" label="余额">
              </el-table-column>
            </div>
            <!-- 医生 -->
            <div v-if="type == 'Docter'">
              <el-table-column prop="doctorName" label="医生名字">
              </el-table-column>
              <el-table-column prop="password" label="密码">
              </el-table-column>
              <el-table-column prop="resume" label="简介">
              </el-table-column>
              <el-table-column prop="department" label="主科室">
              </el-table-column>
              <el-table-column prop="keShi" label="分科室">
              </el-table-column>
              <el-table-column prop="ranks" label="职称">
              </el-table-column>
              <el-table-column prop="ordersNum" label="预约数">
              </el-table-column>
              <el-table-column prop="price" label="门诊费">
              </el-table-column>
              <!-- <el-table-column prop="image" label="医生照片">
                <template slot="header" slot-scope="scope">
                  <img :src="" alt="">
                </template>
              </el-table-column> -->
            </div>
          </el-table>
        </el-col>
      </el-row>
    </div>
  </div>
</template>

<script>
import {
  findAdmin,
  delAdmin,
  findUser,
  delUser,
  updateUser,
  findDocter,
  delDocter,
  updateDocter
} from '@/api/admin'
export default {
  data() {
    return {
      tableData: [],
      type: 'Admin'
    }
  },
  methods: {
    changeType(type) {
      this.type = type
      if (type == 'User') {
        this.getUser()
      } else if (type == 'Docter') {
        this.getDocter()
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
    getDocter() {
      findDocter(0, 20).then(res => {
        this.tableData = res.result[0].content
        this.tableData.forEach(item => {
          item.resume = item.resume.substring(0, 20) + '...'
        })
      })
    }
  },
  created() {
    this.getAdmin()
  }
}
</script>


<style lang="less" scoped>
.container {
  height: 50px;
  line-height: 50px;
  background-color: #078ed4;
  .wel {
    margin-left: 50px;
    float: left;
    font-size: 15px;
    color: #ffffff;
    font-weight: 1000;
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
.overRow {
  overflow: hidden;
  text-overflow: ellipsis;
  display: -webkit-box;
  -webkit-line-clamp: 2;
  -webkit-box-orient: vertical;
}
</style>

