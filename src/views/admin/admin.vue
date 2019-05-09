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
        <el-col :span="4">
          <div class="item-control" @click="changeType('User')" :class="type=='User'?'is-on':''">用户管理</div>
          <div class="item-control" @click="changeType('Doctor')" :class="type=='Doctor'?'is-on':''">医生管理</div>
          <div class="item-control" @click="changeType('News')" :class="type=='News'?'is-on':''">新闻管理</div>
          <div class="item-control" @click="changeType('Article')" :class="type=='Article'?'is-on':''">文章管理</div>
          <div class="item-control" @click="changeType('Orders')" :class="type=='Orders'?'is-on':''">预约统计</div>
        </el-col>
        <!-- 右侧表格 -->
        <el-col :span="20" class="navi">
          <div class="search-box">
            <el-input size="small" placeholder="请输入搜索内容" v-model="searchData" class="input-with-select" @keyup.enter.native="searchMethod" style="width:250px;margin-right: 70px;">
              <el-button slot="append" icon="el-icon-search" @click="searchMethod"></el-button>
            </el-input>
            <el-select v-model="searchSelect" placeholder="请选择" size="small" clearable @change="selectMethod" v-if="type == 'Doctor'" style="width:220px">
              <el-option label="内科" value="内科"></el-option>
              <el-option label="外科" value="外科"></el-option>
              <el-option label="医技" value="医技"></el-option>
              <el-option label="其他" value="其他"></el-option>
            </el-select>
          </div>
          <!-- 用户 -->
          <div v-if="type == 'User'">
            <el-table :data="tableData" style="width: 100%" border height="650">
              <el-table-column prop="userName" label="用户名" width="120"></el-table-column>
              <el-table-column prop="tel" label="手机号" width="200"></el-table-column>
              <el-table-column prop="balance" label="余额" width="120"></el-table-column>
              <el-table-column label="操作" v-if="type == 'User'" key="user">
                <template slot-scope="scope">
                  <el-button size="mini" @click="upUser(scope.$index, scope.row,'请输入充值金额')">充值</el-button>
                  <el-button size="mini" @click="upUser(scope.$index, scope.row,'确认重置为初始密码123456？')">重置密码</el-button>
                  <el-button size="mini" type="danger" @click="upUser(scope.$index, scope.row,'确认删除该用户？')">删除用户</el-button>
                </template>
              </el-table-column>
            </el-table>
          </div>
          <!-- 医生 -->
          <div v-if="type === 'Doctor'">
            <el-button @click="changeShow(true,'NEW')" type="primary" icon="el-icon-plus" circle style="float:right"></el-button>
            <!-- dialog -->
            <addForm :showAdd="showAdd" @cancelAdd="changeShow" @toUP="upDoctor" :from="fromDoctor" :showName="showName"></addForm>
            <el-table :data="tableData" style="width: 100%" height="650">
              <el-table-column prop="doctorName" label="名字"></el-table-column>
              <el-table-column prop="ranks" label="职称"></el-table-column>
              <el-table-column prop="department" label="主科室"></el-table-column>
              <el-table-column prop="keShi" label="分科室"></el-table-column>
              <el-table-column prop="ordersNum" label="最大预约数" sortable></el-table-column>
              <el-table-column prop="price" label="门诊费" sortable></el-table-column>
              <el-table-column label="操作" v-if="type == 'Doctor'" key="doctor">
                <!-- 操作 -->
                <template slot-scope="scope">
                  <el-button @click="changeShow(true,'EDIT',scope.row)" type="primary" size="mini">编辑</el-button>
                  <el-button size="mini" type="danger" @click="delDoctor(scope.$index, scope.row)">删除</el-button>
                </template>
              </el-table-column>
            </el-table>
          </div>
          <!-- 新闻 -->
          <div v-if="type === 'News'">
            <el-button @click="changeShow(true,'NEW')" type="primary" icon="el-icon-plus" circle style="float:right"></el-button>
            <newsForm :showAdd="showAdd" :form="fromNews" :hasType="false" @cancelAdd="changeShow" @toUP="upNews"></newsForm>
            <el-table :data="tableData" style="width: 100%" height="650">
              <el-table-column prop="title" label="标题"></el-table-column>
              <el-table-column label="创建时间" v-if="type === 'News'" key="news1">
                <template slot-scope="scope">
                  <i class="el-icon-time"></i>
                  <span style="margin-left: 10px">{{ scope.row.createTime }}</span>
                </template>
              </el-table-column>
              <el-table-column prop="author" label="来源"></el-table-column>
              <el-table-column prop="content" label="内容" :formatter="formatterContent"></el-table-column>
              <el-table-column label="操作" v-if="type == 'News'" key="news2">
                <!-- 操作 -->
                <template slot-scope="scope">
                  <el-button size="mini" @click="changeShow(true,'EDIT',scope.row)">编辑</el-button>
                  <el-button size="mini" type="danger" @click.stop="delNews(scope.$index, scope.row)">删除</el-button>
                </template>
              </el-table-column>
            </el-table>
          </div>
          <!-- 文章 -->
          <div v-if="type === 'Article'">
            <el-button @click="changeShow(true,'NEW')" type="primary" icon="el-icon-plus" circle style="float:right"></el-button>
            <newsForm :showAdd="showAdd" :form="fromNews" :hasType="true" @cancelAdd="changeShow" @toUP="upArticle"></newsForm>
            <el-table :data="tableData" style="width: 100%" height="650">
              <el-table-column prop="title" label="标题"></el-table-column>
              <el-table-column label="创建时间" v-if="type=='Article'" key="article1">
                <template slot-scope="scope">
                  <i class="el-icon-time"></i>
                  <span style="margin-left: 10px">{{ scope.row.createTime }}</span>
                </template>
              </el-table-column>
              <el-table-column prop="author" label="来源"></el-table-column>
              <el-table-column prop="type" label="类型"></el-table-column>
              <el-table-column prop="content" label="内容" :formatter="formatterContent"></el-table-column>
              <el-table-column label="操作" v-if="type == 'Article'" key="article2">
                <!-- 操作 -->
                <template slot-scope="scope">
                  <el-button size="mini" @click="changeShow(true,'EDIT',scope.row)">编辑</el-button>
                  <el-button size="mini" type="danger" @click="delArticle(scope.$index, scope.row)">删除</el-button>
                </template>
              </el-table-column>
            </el-table>
          </div>
          <!-- 预约统计 -->
          <div v-if="type === 'Orders'">
            <el-table :data="tableData" style="width: 100%" border height="650">
              <el-table-column prop="doctorName" label="医生名字"></el-table-column>
              <el-table-column prop="userName" label="用户名"></el-table-column>
              <el-table-column label="创建时间" v-if="type=='Orders'" key="orders1">
                <template slot-scope="scope">
                  <i class="el-icon-time"></i>
                  <span style="margin-left: 10px">{{ scope.row.createTime }}</span>
                </template>
              </el-table-column>
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
// 医生筛选不管用
// 医生rule有问题

import {
  // 管理员
  // findAdmin,
  // delAdmin,
  // 用户
  findUser,
  delUser,
  updateUser,
  chongzhiUser,
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
  delArticle
  //科室
  // findDepartment
} from '@/api/admin'
import axios from 'axios'
import addForm from '@/components/addForm'
import newsForm from '@/components/newsForm'

export default {
  components: {
    addForm,
    newsForm
  },
  data() {
    return {
      searchData: '',
      searchSelect: '',
      tableData: [],
      type: 'User',
      showAdd: false,
      fromNews: {},
      fromDoctor: {},
      showName: false
    }
  },
  watch: {
    searchData() {
      if (!this.searchData) {
        this.changeType(this.type)
      }
    }
  },
  methods: {
    // 表格相关
    formatterContent(row, column) {
      if (row.content) {
        return row.content.substr(0, 10) + '...'
      }
    },
    searchMethod() {
      this.tableData = this.tableData.filter(item => {
        if (this.type == 'User') {
          return item['userName'].indexOf(this.searchData) > -1
        } else if (this.type == 'Doctor') {
          return item['doctorName'].indexOf(this.searchData) > -1
        } else if (this.type == 'News') {
          return item['title'].indexOf(this.searchData) > -1
        } else if (this.type == 'Article') {
          return item['title'].indexOf(this.searchData) > -1
        } else if (this.type == 'Orders') {
          return item['doctorName'].indexOf(this.searchData) > -1
        }
      })
    },
    selectMethod(e) {
      if (!e) {
        this.getDoctor()
        return
      }
      findDoctor(0, 50).then(res => {
        this.tableData = res.result[0].content.filter(item => {
          return item['department'] == e
        })
      })
    },
    // dialog
    changeShow(e, text, row) {
      this.showAdd = e
      this.searchData = ''
      this.searchSelect = ''
      if (text == 'NEW') {
        this.showName = true
        this.fromDoctor = {
          doctorName: '',
          password: '',
          keShi: '',
          department: '',
          resume: '',
          ranks: '',
          ordersNum: '',
          price: '',
          image: ''
        }
        this.fromNews = {
          title: '',
          author: '',
          type: '',
          content: ''
        }
      } else {
        this.showName = false
        this.fromNews = row
        this.fromDoctor = row
      }
    },
    // 登录登出
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
    // get
    getUser() {
      findUser(0, 50).then(res => {
        this.tableData = res.result[0].content
      })
    },
    getDoctor() {
      findDoctor(0, 50).then(res => {
        this.tableData = res.result[0].content
      })
      // let that = this;
      // axios.get("http://localhost:8081/mock.json").then(function(res) {
      //   that.tableData = res.data.doctor;
      // });
    },
    getNews() {
      findNews(0, 50).then(res => {
        this.tableData = res.result[0].content
        this.tableData.forEach(item => {
          item.createTime = item.createTime.substr(0, 19)
        })
      })
      // let that = this;
      // axios.get("http://localhost:8081/mock.json").then(function(res) {
      //   that.tableData = res.data.news;
      // });
    },
    getArticle() {
      findArticle(0, 50).then(res => {
        this.tableData = res.result[0].content
        this.tableData.forEach(item => {
          item.createTime = item.createTime.substr(0, 19)
        })
      })
      // let that = this;
      // axios.get("http://localhost:8081/mock.json").then(function(res) {
      //   that.tableData = res.data.news;
      // });
    },
    getOrders() {
      findOrders(0, 50).then(res => {
        this.tableData = res.result[0].content
        this.tableData.shift()
        this.tableData.forEach(item => {
          item.createTime = item.createTime.substr(0, 19)
        })
      })
      // let that = this;
      // axios.get("http://localhost:8081/mock.json").then(function(res) {
      //   that.tableData = res.data.orders;
      // });
    },
    // updata
    upUser(index, info, msg) {
      // 用户的充值，删除，重置密码
      if (msg == '请输入充值金额') {
        this.$prompt(msg, {
          confirmButtonText: '确定',
          cancelButtonText: '取消',
          inputPattern: /\d/
        }).then(({ value }) => {
          // userId，password，tel，info，balance
          chongzhiUser(info.userId, value).then(
            res => {
              if (res.code == 200) {
                this.getUser()
                this.$message({
                  type: 'success',
                  message: '充值' + value + '成功!'
                })
              }
            },
            rej => {
              this.$message({
                type: 'error',
                message: rej.message
              })
            }
          )
        })
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
              this.getUser()
              this.$message({
                message: res.message,
                type: 'success'
              })
            }
          })
        } else {
          // 参数userId，password，tel，info，balance
          updateUser(info.userId, '123456', info.tel, info.info).then(res => {
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
    upDoctor(row) {
      // 新增医生和修改医生信息
      console.log(row, '更新医生获取的')
      if (row.ranks == '主任医师') {
        row.price = '50'
      } else if (row.ranks == '副主任医师') {
        row.price = '30'
      }
      // 参数doctorName,password,resume,department,keShi,ranks,price
      updateDoctor(
        row.doctorName,
        '123456',
        row.resume,
        row.department,
        row.keShi,
        row.ranks,
        row.price
      ).then(res => {
        if (res.code == 200) {
          this.changeShow(false, 'NEW')
          this.getDoctor()
          this.$message({
            message: '提交成功',
            type: 'success'
          })
        }
      })
    },
    upNews(row) {
      console.log(row, '接参')
      let id = row.newsId || 'new'
      updateNews(id, row.author, row.title, row.content).then(res => {
        if (res.code == 200) {
          this.changeShow(false, 'NEW')
          this.getNews()
          this.$message({
            message: '操作成功',
            type: 'success'
          })
        }
      })
    },
    upArticle(row) {
      console.log(row)
      let id = row.articleId || 'new'
      updateArticle(id, row.author, row.title, row.content, row.type).then(
        res => {
          if (res.code == 200) {
            this.changeShow(false, 'NEW')
            this.getArticle()
            this.$message({
              message: '操作成功',
              type: 'success'
            })
          }
        }
      )
    },

    // 切换
    changeType(type) {
      this.type = type
      this.changeShow(false, 'NEW')
      if (type == 'User') {
        this.getUser()
      } else if (type == 'Doctor') {
        this.getDoctor()
      } else if (type == 'News') {
        this.getNews()
      } else if (type == 'Article') {
        this.getArticle()
      } else if (type == 'Orders') {
        this.getOrders()
      }
    },
    delDoctor(index, row) {
      this.$confirm('确认删除该医生?', '提示', {
        distinguishCancelAndClose: true,
        confirmButtonText: '确定',
        cancelButtonText: '取消',
        type: 'warning'
      }).then(() => {
        delDoctor(row.doctorId)
          .then(res => {
            if (res.code == 200) {
              this.getDoctor()
              this.$message({
                message: res.message,
                type: 'success'
              })
            }
          })
          .catch(err => {
            this.$message({
              message: err.message,
              type: 'error'
            })
          })
      })
    },
    delNews(index, row) {
      this.$confirm('确认删除?', '提示', {
        distinguishCancelAndClose: true,
        confirmButtonText: '确定',
        cancelButtonText: '取消',
        type: 'warning'
      }).then(() => {
        delNews(row.newsId)
          .then(res => {
            if (res.code == 200) {
              // this.tableData.shift();
              this.getNews()
              this.$message({
                message: res.message,
                type: 'success'
              })
            }
          })
          .catch(err => {
            this.$message({
              message: err.message,
              type: 'error'
            })
          })
      })
    },
    delArticle(index, row) {
      this.$confirm('确认删除?', '提示', {
        distinguishCancelAndClose: true,
        confirmButtonText: '确定',
        cancelButtonText: '取消',
        type: 'warning'
      }).then(() => {
        delArticle(row.articleId)
          .then(res => {
            if (res.code == 200) {
              this.getArticle()
              this.$message({
                message: res.message,
                type: 'success'
              })
            }
          })
          .catch(err => {
            this.$message({
              message: err.message,
              type: 'error'
            })
          })
      })
    }
  },
  created() {
    this.type = 'Doctor'
    this.getDoctor()
  }
}
</script>


<style lang="less" scoped>
.demo-table-expand {
  font-size: 0;

  .el-form-item {
    margin-right: 0;
    margin-bottom: 0;
    width: 30%;

    .el-textarea {
      width: 800px !important;
      margin: 10px 0;
    }
  }

  .el-form-item:last-child {
    width: 85%;
  }

  label {
    width: 90px;
    color: black;
    font-weight: bold;
  }
}

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

.navi {
  border-radius: 3px;
  min-height: 200px;
  height: fit-content;
  padding: 20px;
  box-shadow: 0 2px 12px 0 rgba(0, 0, 0, 0.3);
  margin-top: 15px;
}

.search-box {
  margin: 15px 0;
  display: flex;
  // justify-content: space-between;
}
</style>