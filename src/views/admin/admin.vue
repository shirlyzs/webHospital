<template>
  <div class=" ">
    <div class="container">
      <div class="wel">欢迎来到山东省立医院</div>
      <div class="login">
        <router-link to="/home">退出登录</router-link>
      </div>
    </div>
    <div style="margin:50px">
      <el-row :gutter="60">
        <el-col :span="5">

          <div class="item-control">用户管理</div>
          <div class="item-control">医生管理</div>
          <div class="item-control">新闻管理</div>
          <div class="item-control">预约统计</div>

        </el-col>
        <el-col :span="18">

          <el-table :data="tableData" style="width: 100%" border>
            <el-table-column prop="date" label="日期" width="180">
            </el-table-column>
            <el-table-column prop="name" label="姓名" width="180">
            </el-table-column>
            <el-table-column prop="address" label="地址">
            </el-table-column>
          </el-table>

        </el-col>

      </el-row>
    </div>
  </div>
</template>

<script>
export default {
  data() {
    return {
      tableData: [
        {
          date: '2016-05-02',
          name: '王小虎',
          address: '上海市普陀区金沙江路 1518 弄'
        },
        {
          date: '2016-05-04',
          name: '王小虎',
          address: '上海市普陀区金沙江路 1517 弄'
        },
        {
          date: '2016-05-01',
          name: '王小虎',
          address: '上海市普陀区金沙江路 1519 弄'
        },
        {
          date: '2016-05-03',
          name: '王小虎',
          address: '上海市普陀区金沙江路 1516 弄'
        }
      ]
    }
  },
  methods: {},
  created() {}
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
</style>

