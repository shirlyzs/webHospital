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
          <!-- 用户 -->
          <div v-if="type == 'User'">
            <el-table :data="tableData" style="width: 100%" border height="650">
              <el-table-column prop="userName" label="用户名" width="120"></el-table-column>
              <el-table-column prop="tel" label="手机号" width="200"></el-table-column>
              <el-table-column prop="balance" label="余额" width="120"></el-table-column>
              <el-table-column label="操作" v-if="type == 'User'" key="user">
                <!-- 用户密码重置 -->
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
            <el-button @click="showAdd=true" type="primary" icon="el-icon-plus" circle style="float:right"></el-button>
            <!-- 添加 -->
            <addForm :showAdd="showAdd" @cancelAdd="changeShow(false)" @toUP="upDoctor"></addForm>
            <!-- :expand-row-keys="editRow" :row-key="getRow"  -->
            <el-table :data="tableData" style="width: 100%" height="650">
              <el-table-column type="expand" key="doctor1" v-if="type == 'Doctor'">
                <!-- 扩展信息 -->
                <template slot-scope="props">
                  <!-- <el-button @click="doctorShow(props.$index,props.row)" type="primary">{{props.row.isEdit?'取消':'编辑'}}</el-button>
                  <el-button @click="upDoctor(props.$index,props.row,'修改')" v-if="props.row.isEdit" type="success">保存</el-button> -->
                  <el-form label-position="left" inline class="demo-table-expand">
                    <el-form-item label="职称：">
                      <span v-if="!props.row.isEdit">{{ props.row.ranks }}</span>
                      <el-select v-else v-model="props.row.ranks" placeholder="请选择" size="mini">
                        <el-option label="主任医师" value="主任医师"></el-option>
                        <el-option label="副主任医师" value="副主任医师"></el-option>
                      </el-select>
                    </el-form-item>
                    <el-form-item label="主科室：">
                      <span v-if="!props.row.isEdit">{{ props.row.department }}</span>
                      <el-select @change="props.row.keShi=''" v-else v-model="props.row.department" placeholder="请选择" size="mini">
                        <el-option label="内科" value="内科"></el-option>
                        <el-option label="外科" value="外科"></el-option>
                        <el-option label="医技" value="医技"></el-option>
                        <el-option label="其他" value="其他"></el-option>
                      </el-select>
                    </el-form-item>
                    <el-form-item label="分科室：">
                      <span v-if="!props.row.isEdit">{{ props.row.keShi }}</span>
                      <el-select v-else v-model="props.row.keShi" placeholder="请选择" size="mini">
                        <div v-if="props.row.department=='内科'">
                          <el-option label="消化内科" value="消化内科"></el-option>
                          <el-option label="肾脏病科" value="肾脏病科"></el-option>
                          <el-option label="肿瘤科" value="肿瘤科"></el-option>
                          <el-option label="呼吸内科" value="呼吸内科"></el-option>
                          <el-option label="内分泌科" value="内分泌科"></el-option>
                          <el-option label="神经内科" value="神经内科"></el-option>
                        </div>
                        <div v-if="props.row.department=='外科'">
                          <el-option label="肝胆病科" value="肝胆病科"></el-option>
                          <el-option label="耳鼻喉科" value="耳鼻喉科"></el-option>
                          <el-option label="胃肠病科" value="胃肠病科"></el-option>
                          <el-option label="皮肤科" value="皮肤科"></el-option>
                          <el-option label="骨科" value="骨科"></el-option>
                          <el-option label="泌尿外科" value="泌尿外科"></el-option>
                          <el-option label="神经外科" value="神经外科"></el-option>
                        </div>
                        <div v-if="props.row.department=='医技'">
                          <el-option label="麻醉科" value="麻醉科"></el-option>
                          <el-option label="核医学科" value="核医学科"></el-option>
                        </div>
                        <div v-if="props.row.department=='其他'">
                          <el-option label="急诊科" value="急诊科"></el-option>
                          <el-option label="病理科" value="病理科"></el-option>
                        </div>
                      </el-select>
                    </el-form-item>
                    <el-form-item label="简介：">
                      <p v-if="!props.row.isEdit" style="width:800px">{{ props.row.resume }}</p>
                      <el-input v-else autosize type="textarea" placeholder="请输入简介" v-model="props.row.resume"></el-input>
                    </el-form-item>
                  </el-form>
                </template>
              </el-table-column>
              <el-table-column prop="doctorName" label="名字"></el-table-column>
              <el-table-column key="doctor2" v-if="type == 'Doctor'" prop="ranks" label="职称" column-key="ranks" :filters="[{text: '主任医师', value: '主任医师'}, {text: '副主任医师', value: '副主任医师'}]" :filter-method="filterHandler"></el-table-column>
              <el-table-column key="doctor3" v-if="type == 'Doctor'" prop="department" label="主科室" column-key="department" :filters="[{text: '内科', value: '内科'}, {text: '外科', value: '外科'},{text: '医技',value: '医技'},{text: '其他', value: '其他'}]" :filter-method="filterHandler"></el-table-column>
              <el-table-column prop="keShi" label="分科室"></el-table-column>
              <el-table-column prop="ordersNum" label="预约数" sortable></el-table-column>
              <el-table-column prop="price" label="门诊费" sortable></el-table-column>
              <el-table-column label="操作" v-if="type == 'Doctor'" key="doctor">
                <!-- 操作 -->
                <template slot-scope="scope">
                  <!-- <el-button @click="doctorShow(scope.$index,scope.row)" type="primary" size="mini">{{scope.row.isEdit?'取消':'编辑'}}</el-button>
                  <el-button @click="upDoctor(scope.$index,scope.row,'修改')" size="mini" v-if="scope.row.isEdit" type="success">保存</el-button> -->
                  <el-button size="mini" type="danger" @click="delDoctor(scope.$index, scope.row)">删除</el-button>
                </template>
              </el-table-column>
            </el-table>
          </div>
          <!-- 新闻 -->
          <div v-if="type === 'News'">
            <el-button @click.self="showAdd=true" type="primary" icon="el-icon-plus" circle style="float:right"></el-button>
            <newsForm :showAdd="showAdd" :form="addContent" :hasType="false" @cancelAdd="changeShow" @toUP="upNews"></newsForm>
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
                  <!-- <el-button size="mini" @click.native.prevent="showEdit=true">编辑</el-button> -->
                  <el-button size="mini" type="danger" @click.stop="delNews(scope.$index, scope.row)">删除</el-button>
                  <newsForm key="item2" :showAdd="showEdit" :form="scope.row" :hasType="false" @cancelAdd="changeShow" @toUP="upNews"></newsForm>
                </template>
              </el-table-column>
            </el-table>
          </div>
          <!-- 文章 -->
          <div v-if="type === 'Article'">
            <el-button @click="showAdd=true" type="primary" icon="el-icon-plus" circle style="float:right"></el-button>
            <newsForm :showAdd="showAdd" :form="addContent" :hasType="true" @cancelAdd="changeShow" @toUP="upNews"></newsForm>
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
                  <!-- <el-button size="mini" @click="showAdd=true">编辑</el-button> -->
                  <el-button size="mini" type="danger" @click="delArticle(scope.$index, scope.row)">删除</el-button>
                  <newsForm :showAdd="showEdit" :form="scope.row" :hasType="true" @cancelAdd="changeShow" @toUP="upArticle"></newsForm>
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
import addForm from '@/components/addForm'
import newsForm from '@/components/newsForm'

export default {
  components: {
    addForm,
    newsForm
  },
  data() {
    return {
      tableData: [],
      type: 'User',
      showAdd: false,
      showEdit: false,
      editRow: [],
      addContent: { title: '', author: '', type: '', content: '' }
      // getRow(row) {
      //   console.log(row)
      //   return row.doctorId
      // }
    }
  },
  // mounted() {
  //   if (this.type == 'Doctor') {
  //     this.editRow.push(this.tableData[0].doctorId)
  //   }
  // },
  methods: {
    // rule取消了
    // 医生文章新闻，编辑问题
    // 项展示不全。50
    // 表格相关
    filterHandler(value, row, column) {
      const property = column['property']
      return row[property] === value
    },
    formatterContent(row, column) {
      if (row.content) {
        return row.content.substr(0, 10) + '...'
      }
    },
    doctorShow(index, row) {
      console.log(index, row)
      this.tableData[index].isEdit = !this.tableData[index].isEdit
      console.log(this.tableData)
      this.editRow = row.doctorId
    },
    // 切换
    changeType(type) {
      this.type = type
      this.changeShow(false)
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
    // dialog
    changeShow(e) {
      this.showAdd = e
      this.showEdit = e
      this.addContent = { title: '', author: '', type: '', content: '' }
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
    // 接口
    getUser() {
      findUser(0, 50).then(res => {
        this.tableData = res.result[0].content
      })
    },
    upUser(index, info, msg) {
      if (msg == '请输入充值金额') {
        this.$prompt(msg, {
          confirmButtonText: '确定',
          cancelButtonText: '取消',
          inputPattern: /\d/
        }).then(({ value }) => {
          // userId，password，tel，info，balance
          updateUser(
            info.userId,
            info.password,
            info.tel,
            info.info,
            value
          ).then(
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
              // this.tableData.shift();
              this.getUser()
              this.$message({
                message: res.message,
                type: 'success'
              })
            }
          })
        } else {
          // 参数userId，password，tel，info，balance
          updateUser(info.userId, '123456', '', '', '0').then(res => {
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
      findDoctor(0, 50).then(res => {
        this.tableData = res.result[0].content
        this.tableData.forEach(item => {
          item.isEdit = false
        })
        this.editRow.push(this.tableData[0].doctorId)
      })
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
    upDoctor(index, row, text) {
      console.log(row)
      if (row.ranks == '主任医师') {
        row.price = '50'
      } else if (row.ranks == '副主任医师') {
        row.price = '30'
      }
      this.$confirm('确认' + text + '医生信息?', '提示', {
        distinguishCancelAndClose: true,
        confirmButtonText: '确定',
        cancelButtonText: '取消',
        type: 'warning'
      })
        .then(() => {
          row.isEdit = false
          // 参数doctorName,password,resume,department,keShi,ranks,price
          updateDoctor(
            row.doctorName,
            row.password,
            row.resume,
            row.department,
            row.keShi,
            row.ranks,
            row.price
          ).then(res => {
            if (res.code == 200) {
              this.changeShow(false)
              this.getDoctor()
              this.$message({
                message: text + '成功',
                type: 'success'
              })
            }
          })
        })
        .catch(() => {
          this.getDoctor()
        })
    },
    getNews() {
      findNews(0, 50).then(res => {
        this.tableData = res.result[0].content
        this.tableData.forEach(item => {
          item.createTime = item.createTime.substr(0, 19)
        })
      })
    },
    upNews(row) {
      console.log(row, '接参')
      // author, title, content
      updateNews(row.author, row.title, row.content).then(res => {
        if (res.code == 200) {
          this.changeShow(false)
          this.getNews()
          this.$message({
            message: '操作成功',
            type: 'success'
          })
        }
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
    getArticle() {
      findArticle(0, 50).then(res => {
        this.tableData = res.result[0].content
        this.tableData.forEach(item => {
          item.createTime = item.createTime.substr(0, 19)
        })
      })
    },
    upArticle(row) {
      console.log(row)
      this.changeShow(false)
      //author, title, content, type
      updateArticle(row.author, row.title, row.content, row.type).then(res => {
        if (res.code == 200) {
          this.changeShow(false)
          this.getArticle()
          this.$message({
            message: '操作成功',
            type: 'success'
          })
        }
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
    },
    getOrders() {
      findOrders(0, 50).then(res => {
        this.tableData = res.result[0].content
        // 不显示第一项
        this.tableData.shift()
        this.tableData.forEach(item => {
          item.createTime = item.createTime.substr(0, 19)
        })
      })
    }
  },
  created() {
    this.getUser()
    console.log(this.type)
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
</style>

