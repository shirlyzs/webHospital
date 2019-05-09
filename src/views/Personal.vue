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
        <el-form :form="userList">
          <el-form-item label="用户名" :label-width="formLabelWidth">
            <el-input v-model="userList.userName" auto-complete="off"></el-input>
          </el-form-item>
          <el-form-item label="联系方式" :label-width="formLabelWidth">
            <el-input v-model="userList.tel" auto-complete="off"></el-input>
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
      <span style="color:blue">问诊记录：</span>
      <el-table :data="orderList" style="width: 80%" border>
        <el-table-column prop="createTime" label="预约时间" width="180"></el-table-column>
        <el-table-column prop="createTime" label="预约日期" width="180"></el-table-column>
        <el-table-column prop="doctorName" label="医生" width="180"></el-table-column>
        <el-table-column prop="price" label="价格"></el-table-column>
        <el-table-column label="操作">
          <template slot-scope="scope">
            <el-button size="mini" type="primary" @click="text(scope.$index, scope.row)">给他留言</el-button>
          </template>
        </el-table-column>
      </el-table>
      <el-dialog title="给他留言" :visible.sync="isVisible">
        <el-input
          v-model="liuyan"
          type="textarea"
          :rows="8"
          auto-complete="off"
          style="width:300px;height:200px"
        ></el-input>
        <div slot="footer" class="dialog-footer">
          <el-button @click="isVisible = false">取 消</el-button>
          <el-button type="primary" @click="getText">确 定</el-button>
        </div>
      </el-dialog>
      <span style="color:blue">留言记录：</span>
      <div class="text" v-for="item in textList" :key="item.boardId">
        <div slot="title">{{item.createTime}}</div>
        <div slot="title">{{item.doctorName}}</div>
        <div slot="title">{{item.content}}</div>
        <el-button type="danger" @click="del(item.boardId)">删除留言</el-button>
      </div>
    </div>
    <Footer></Footer>
  </div>
</template>

<script>
import menuNav from "@/components/menuNav.vue";
import Footer from "@/components/Footer.vue";
import {
  person,
  record,
  updateUser,
  addText,
  doctor,
  delText,
  searchText
} from "@/api/api";

export default {
  data() {
    return {
      userList: [],
      orderList: [],
      formLabelWidth: "120px",
      liuyan: "",
      isShow: false,
      isVisible: false,
      textList: []
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
    search(id) {
      let info = {
        userId: id
      };
      searchText(info).then(res => {
        this.textList = res.result;
      });
    },
    changeInfo(userList) {
      let xinxi = {
        userId: this.userId,
        info: this.userList.info,
        tel: this.userList.tel
      };
      updateUser(xinxi).then(res => {
        if (res.code == 200) {
        }
        this.isShow = false;
      });
    },
    text(index, row) {
      this.isVisible = true;
      let detail = {
        doctorName: row.doctorName,
        department: "",
        keShi: "",
        ranks: ""
      };
      doctor(detail).then(res => {
        this.doctorId = res.result[0].content[0].doctorId;
      });
    },
    getText(id) {
      let info = {
        userId: id,
        doctorId: this.doctorId,
        content: this.liuyan
      };
      addText(info).then(res => {
        this.search();
        this.isVisible = false;
      });
    },
    del(id) {
      let info={
        boardId:id
      }
      delText(info).then(res =>{
        // alert(res.message);
        this.getText();
      })
    }
  },
  created() {
    if (window.sessionStorage["loginKey1"]) {
      this.userId = window.sessionStorage["loginKey1"];
    }
    this.getUser();
    this.search(this.userId);
    this.isShow = false;
    this.isVisible = false;
  }
};
</script>
<style lang="less" scoped>
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
.text {
  border-bottom: solid 1px;
  margin-bottom: 10px;
}
// .el-textarea__inner {
//     width: 400px;;
// }
</style>

