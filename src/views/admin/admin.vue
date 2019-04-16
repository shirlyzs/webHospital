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
          <!-- <div class="item-control" @click="changeType('Admin')" :class="type=='Admin'?'is-on':''">管理员管理</div> -->
          <div
            class="item-control"
            @click="changeType('User')"
            :class="type=='User'?'is-on':''"
          >用户管理</div>
          <div
            class="item-control"
            @click="changeType('Doctor')"
            :class="type=='Doctor'?'is-on':''"
          >医生管理</div>
          <div
            class="item-control"
            @click="changeType('Department')"
            :class="type=='Department'?'is-on':''"
          >科室管理</div>
          <div
            class="item-control"
            @click="changeType('News')"
            :class="type=='News'?'is-on':''"
          >新闻管理</div>
          <div
            class="item-control"
            @click="changeType('Article')"
            :class="type=='Article'?'is-on':''"
          >文章管理</div>
          <div
            class="item-control"
            @click="changeType('Orders')"
            :class="type=='Orders'?'is-on':''"
          >预约统计</div>
        </el-col>
        <!-- 右侧表格 -->
        <el-col :span="20" class="navi">
          <!-- 管理员 -->
          <!-- <div v-if="type == 'Admin'">
              <el-table-column prop="adminName" label="管理员名"></el-table-column>
          </div>-->
          <!-- 用户 -->
          <div v-if="type == 'User'">
            <el-table :data="tableData1" style="width: 100%" height="650" border>
              <el-table-column prop="userName" label="用户名"></el-table-column>
              <el-table-column prop="tel" label="手机号"></el-table-column>
              <el-table-column prop="balance" label="余额" width="120"></el-table-column>
              <el-table-column label="操作" v-if="type == 'User'" key="user">
                <!-- 用户密码重置 -->
                <template slot-scope="scope">
                  <el-button size="mini" @click="upUser(scope.$index, scope.row,'请输入充值金额')">充值</el-button>
                  <el-button
                    size="mini"
                    @click="upUser(scope.$index, scope.row,'确认重置为初始密码123456？')"
                  >重置密码</el-button>
                  <el-button
                    size="mini"
                    type="danger"
                    @click="upUser(scope.$index, scope.row,'确认删除该用户？')"
                  >删除用户</el-button>
                </template>
              </el-table-column>
            </el-table>
          </div>
          <!-- 医生 -->
          <div v-if="type === 'Doctor'">
            <el-button @click="showAdd=true" type="primary" icon="el-icon-plus" circle style="float:right"></el-button>
            <el-form ref="form" :model="from" label-width="80px" v-if="showAdd">
              <el-form-item label="医生名字">
                <el-input v-model="from.doctorName"></el-input>
              </el-form-item>
              <el-form-item label="职称">
                <el-select v-model="from.ranks" placeholder="请选择">
                  <el-option label="主任医师" value="主任医师"></el-option>
                  <el-option label="副主任医师" value="副主任医师"></el-option>
                </el-select>
              </el-form-item>
              <el-form-item label="主科室">
                <el-select v-model="from.department" placeholder="请选择" size="mini">
                  <el-option label="内科" value="内科"></el-option>
                  <el-option label="外科" value="外科"></el-option>
                  <el-option label="医技" value="医技"></el-option>
                  <el-option label="其他" value="其他"></el-option>
                </el-select>
              </el-form-item>
              <el-form-item label="分科室">
                <el-select v-model="from.keShi" placeholder="请选择" size="mini">
                  <div v-if="from.department=='内科'">
                    <el-option label="消化内科" value="消化内科"></el-option>
                    <el-option label="肾脏病科" value="肾脏病科"></el-option>
                    <el-option label="肿瘤科" value="肿瘤科"></el-option>
                    <el-option label="呼吸内科" value="呼吸内科"></el-option>
                    <el-option label="内分泌科" value="内分泌科"></el-option>
                    <el-option label="神经内科" value="神经内科"></el-option>
                  </div>
                  <div v-if="from.department=='外科'">
                    <el-option label="肝胆病科" value="肝胆病科"></el-option>
                    <el-option label="耳鼻喉科" value="耳鼻喉科"></el-option>
                    <el-option label="胃肠病科" value="胃肠病科"></el-option>
                    <el-option label="皮肤科" value="皮肤科"></el-option>
                    <el-option label="骨科" value="骨科"></el-option>
                    <el-option label="泌尿外科" value="泌尿外科"></el-option>
                    <el-option label="神经外科" value="神经外科"></el-option>
                  </div>
                  <div v-if="from.department=='医技'">
                    <el-option label="麻醉科" value="麻醉科"></el-option>
                    <el-option label="核医学科" value="核医学科"></el-option>
                  </div>
                  <div v-if="from.department=='其他'">
                    <el-option label="急诊科" value="急诊科"></el-option>
                    <el-option label="病理科" value="病理科"></el-option>
                  </div>
                </el-select>
              </el-form-item>
              <el-form-item label="简介">
                <el-input type="textarea" v-model="from.resume"></el-input>
              </el-form-item>
              <el-form-item>
                <el-button type="primary" @click="upDoctor(1,from,'添加')">立即创建</el-button>
                <el-button @click="showAdd=false">取消</el-button>
              </el-form-item>
            </el-form>
            <el-table :data="tableData2" style="width: 100%" ref="filterTable">
              <el-table-column type="expand" key="doctor1" v-if="type == 'Doctor'">
                <template slot-scope="props">
                  <el-button
                    @click="props.row.isEdit=!props.row.isEdit"
                    type="primary"
                  >{{props.row.isEdit?'取消':'编辑'}}</el-button>

                  <el-button
                    @click="upDoctor(props.$index,props.row,'修改')"
                    v-if="props.row.isEdit"
                    type="success"
                  >保存</el-button>
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
                      <el-select
                        v-else
                        v-model="props.row.department"
                        placeholder="请选择"
                        size="mini"
                      >
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
                      <el-input
                        v-else
                        autosize
                        type="textarea"
                        placeholder="请输入简介"
                        v-model="props.row.resume"
                      ></el-input>
                    </el-form-item>
                  </el-form>
                </template>
              </el-table-column>
              <el-table-column prop="doctorName" label="名字"></el-table-column>
              <el-table-column
                key="doctor2"
                v-if="type == 'Doctor'"
                prop="ranks"
                label="职称"
                column-key="ranks"
                :filters="[{text: '主任医师', value: '主任医师'}, {text: '副主任医师', value: '副主任医师'}]"
                :filter-method="filterHandler"
              ></el-table-column>
              <el-table-column
                key="doctor3"
                v-if="type == 'Doctor'"
                prop="department"
                label="主科室"
                column-key="department"
                :filters="[{text: '内科', value: '内科'}, {text: '外科', value: '外科'},{text: '医技',value: '医技'},{text: '其他', value: '其他'}]"
                :filter-method="filterHandler"
              ></el-table-column>
              <el-table-column prop="keShi" label="分科室"></el-table-column>
              <el-table-column prop="ordersNum" label="预约数" sortable></el-table-column>
              <el-table-column prop="price" label="门诊费" sortable></el-table-column>
              <el-table-column label="操作" v-if="type == 'Doctor'" key="doctor">
                <!-- 用户密码重置 -->
                <template slot-scope="scope">
                  <el-button
                    size="mini"
                    type="danger"
                    @click="delDoctor(scope.$index, scope.row)"
                  >删除医生</el-button>
                </template>
              </el-table-column>
            </el-table>
          </div>
          <!-- 科室 -->
          <div v-if="type === 'Department'">
            <el-table :data="tableData" style="width: 100%" height="650" border>
              <el-table-column prop="departme" label="主科室"></el-table-column>
              <el-table-column prop="keShiName" label="分科室"></el-table-column>
              <el-table-column prop="info" label="简介"></el-table-column>
            </el-table>
          </div>
          <!-- 新闻 -->
          <div v-if="type === 'News'">
            <el-table :data="tableData" style="width: 100%" height="650" border>
              <el-table-column prop="title" label="标题"></el-table-column>
              <el-table-column label="创建时间" v-if="type === 'News'" key="news">
                <template slot-scope="scope">
                  <i class="el-icon-time"></i>
                  <span style="margin-left: 10px">{{ scope.row.createTime }}</span>
                </template>
              </el-table-column>
              <el-table-column prop="author" label="来源"></el-table-column>
              <el-table-column prop="content" label="内容"></el-table-column>
            </el-table>
          </div>
          <!-- 文章 -->
          <div v-if="type === 'Article'">
            <el-table
              :data="tableData"
              style="width: 100%"
              height="650"
              fit
              border
              :default-sort="{prop: 'date', order: 'descending'}"
            >
              <el-table-column prop="title" label="标题"></el-table-column>
              <el-table-column label="创建时间" v-if="type=='Article'" key="article">
                <template slot-scope="scope">
                  <i class="el-icon-time"></i>
                  <span style="margin-left: 10px">{{ scope.row.createTime }}</span>
                </template>
              </el-table-column>
              <el-table-column prop="author" label="来源"></el-table-column>
              <el-table-column prop="content" label="类型"></el-table-column>
              <el-table-column prop="content" label="内容"></el-table-column>
            </el-table>
          </div>
          <!-- 预约统计 -->
          <div v-if="type === 'Orders'">
            <el-table
              :data="tableData"
              style="width: 100%"
              height="650"
              fit
              border
              :default-sort="{prop: 'date', order: 'descending'}"
            >
              <el-table-column prop="doctorName" label="医生名字"></el-table-column>
              <el-table-column prop="userName" label="用户名"></el-table-column>
              <el-table-column label="创建时间" v-if="type=='Orders'" key="orders">
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
} from "@/api/admin";
import axios from "axios";

export default {
  data() {
    return {
      //用户模拟
      tableData1: [
        {
          userName: "zhaa",
          tel: "ddd",
          balance: "40"
        },
        {
          userName: "sddd",
          tel: "8888",
          balance: "30"
        },
        {
          userName: "www",
          tel: "ffff",
          balance: "20"
        },
        {
          userName: "fgg",
          tel: "sss",
          balance: "10"
        }
      ],
      //医生模拟
      tableData2: [
        {
          doctorName: "1",
          password: "2",
          keShi: "2",
          department: "外科",
          resume:
            "好多字好多字好多字好多字好多字好多字好多字好多字好多字好多字好多字好多字好多字好多字好多字好多字好多字好多字好多字好多字好多字好多字好多字好多字好多字好多字好多字好多字好多字好多字好多字好多字好多字好多字好多字好多字好多字好多字好多字好多字好多字好多字好多字好多字好多字好多字好多字好多字好多字好多字好多字好多字好多字好多字好多字好多字好多字好多字好多字好多字好多字好多字好多字好多字好多字好多字好多字好多字好多字好多字好多字好多字好多字好多字好多字好多字好多字好多字好多字好多字好多字好多字好多字好多字好多字好多字好多字好多字好多字好多字好多字好多字好多字好多字好多字好多字好多字好多字好多字好多字好多字好多字好多字好多字好多字好多字好多字好多字好多字好多字好多字好多字好多字好多字好多字好多字好多字好多字好多字好多字好多字好多字好多字好多字好多字好多字好多字好多字好多字好多字好多字好多字好多字好多字好多字好多字好多字好多字好多字好多字好多字好多字好多字好多字好多字好多字好多字好多字好多字好多字好多字好多字好多字好多字好多字好多字好多字好多字好多字好多字好多字好多字好多字好多字好多字好多字好多字好多字好多字好多字好多字好多字好多字好多字好多字好多字好多字好多字好多字好多字",
          ranks: "主任医师",
          ordersNum: "s",
          price: "2",
          image:
            "https://ss2.bdstatic.com/70cFvnSh_Q1YnxGkpoWK1HF6hhy/it/u=530763801,912059783&fm=27&gp=0.jpg",
          isEdit: false,
          doctorId: 1
        },
        {
          doctorName: "a",
          password: "1",
          keShi: "2",
          department: "内科",
          resume: "好多字好多字好多字好多字好多字",
          ranks: "主任医师",
          ordersNum: "2",
          price: "3",
          image:
            "https://ss2.bdstatic.com/70cFvnSh_Q1YnxGkpoWK1HF6hhy/it/u=530763801,912059783&fm=27&gp=0.jpg",
          isEdit: false,
          doctorId: 2
        },
        {
          doctorName: "a",
          password: "1",
          keShi: "2",
          department: "其他",
          resume: "好多字好多字好多字好多字好多字",
          ranks: "副主任医师",
          ordersNum: "1",
          price: "1",
          image:
            "https://ss2.bdstatic.com/70cFvnSh_Q1YnxGkpoWK1HF6hhy/it/u=530763801,912059783&fm=27&gp=0.jpg",
          isEdit: false,
          doctorId: 3
        },
        {
          doctorName: "a",
          password: "1",
          keShi: "2",
          department: "外科",
          resume: "好多字好多字好多字好多字好多字",
          ranks: "主任医师",
          ordersNum: "6",
          price: "7",
          image:
            "https://ss2.bdstatic.com/70cFvnSh_Q1YnxGkpoWK1HF6hhy/it/u=530763801,912059783&fm=27&gp=0.jpg",
          isEdit: false,
          doctorId: 4
        }
      ],
      // 科室模拟
      tableData: [
        {
          departme: "mingzi",
          keShiName: "fem,omgzo",
          info:
            "aaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaa"
        },
        {
          departme: "mingzi",
          keShiName: "fem,omgzo",
          info:
            "aaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaa"
        },
        {
          departme: "mingzi",
          keShiName: "fem,omgzo",
          info:
            "aaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaa"
        },
        {
          departme: "mingzi",
          keShiName: "fem,omgzo",
          info:
            "aaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaa"
        }
      ],
      type: "Department",
      showAdd: false,
      from: {
        doctorName: "",
        password: "",
        keShi: "",
        department: "",
        resume: "",
        ranks: "",
        ordersNum: "",
        price: "",
        image: "",
        isEdit: false
      }
    };
  },
  methods: {
    // 表格相关
    filterHandler(value, row, column) {
      const property = column["property"];
      return row[property] === value;
    },
    // formatter(row, column) {
    //   return row.resume.substring(0, 6) + "...";
    // },
    // 切换
    changeType(type) {
      this.type = type;
      // if (type == "User") {
      //   this.getUser();
      // } else if (type == "Doctor") {
      //   this.getDoctor();
      // } else if (type == "Department") {
      //   this.getDepartment();
      // } else if (type == "News") {
      //   this.getNews();
      // } else if (type == "Article") {
      //   this.getArticle();
      // } else if (type == "Orders") {
      //   this.getOrders();
      // }
    },
    // 登录登出
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
    getAdmin() {
      findAdmin(0, 20, 1).then(res => {
        this.tableData = res.result[0].content;
      });
    },
    // 接口
    getUser() {
      findUser(0, 20).then(res => {
        this.tableData = res.result[0].content;
      });
    },
    upUser(index, info, msg) {
      if (msg == "请输入充值金额") {
        this.$prompt(msg, {
          confirmButtonText: "确定",
          cancelButtonText: "取消",
          inputPattern: /\d/
        }).then(({ value }) => {
          updateUser(info.userId, "", "", "", value).then(
            res => {
              if (res.code == 200) {
                this.getUser();
                this.$message({
                  type: "success",
                  message: "充值" + value + "成功!"
                });
              }
            },
            rej => {
              this.$message({
                type: "error",
                message: rej.message
              });
            }
          );
        });
        return;
      }
      this.$confirm(msg, "提示", {
        distinguishCancelAndClose: true,
        confirmButtonText: "确定",
        cancelButtonText: "取消",
        type: "warning"
      }).then(() => {
        if (msg == "确认删除该用户？") {
          delUser(info.userId).then(res => {
            if (res.code == 200) {
              // this.tableData.shift();
              this.getUser();
              this.$message({
                message: res.message,
                type: "success"
              });
            }
          });
        } else {
          // 参数userId，password，tel，info，balance
          updateUser(info.userId, "123456", "", "", "0").then(res => {
            if (res.code == 200) {
              this.$message({
                message: "已重置",
                type: "success"
              });
            }
          });
        }
      });
    },
    getDoctor() {
      findDoctor(0, 20).then(res => {
        this.tableData = res.result[0].content;
        this.tableData.forEach(item => {
          item.resume = item.resume.substring(0, 20) + "...";
          item.isEdit = false;
        });
      });
    },
    delDoctor(index, row) {
      this.$confirm("确认删除该医生?", "提示", {
        distinguishCancelAndClose: true,
        confirmButtonText: "确定",
        cancelButtonText: "取消",
        type: "warning"
      }).then(() => {
        delDoctor(row.doctorId)
          .then(res => {
            if (res.code == 200) {
              // this.tableData.shift();
              // 友好，扩展
              this.getDoctor();
              this.$message({
                message: res.message,
                type: "success"
              });
            }
          })
          .catch(err => {
            this.$message({
              message: err.message,
              type: "error"
            });
          });
      });
    },
    upDoctor(index, row, text) {
      if (row.ranks == "主任医师") {
        row.price == "50";
      } else {
        row.price == "30";
      }
      console.log(row);

      this.$confirm("确认" + text + "医生信息?", "提示", {
        distinguishCancelAndClose: true,
        confirmButtonText: "确定",
        cancelButtonText: "取消",
        type: "warning"
      })
        .then(() => {
          row.isEdit = false;
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
              this.$message({
                message: text + "成功",
                type: "success"
              });
            }
          });
        })
        .catch(() => {
          row.isEdit = false;
        });
    },
    getDepartment() {
      findDepartment(0, 20).then(res => {
        this.tableData = res.result[0].content;
        this.tableData.forEach(item => {
          item.info = item.info.substring(0, 20) + "...";
        });
      });
    },
    getNews() {
      findNews(0, 20).then(res => {
        this.tableData = res.result[0].content;
        this.tableData.forEach(item => {
          item.content = item.content.substring(0, 20) + "...";
        });
      });
    },
    getArticle() {
      findArticle(0, 20).then(res => {
        this.tableData = res.result[0].content;
        this.tableData.forEach(item => {
          item.content = item.content.substring(0, 20) + "...";
        });
      });
    },
    getOrders() {
      findOrders(0, 20).then(res => {
        this.tableData = res.result[0].content;
        this.tableData.shift();
      });
    }
  },
  created() {
    // this.getUser();
  }
};
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

