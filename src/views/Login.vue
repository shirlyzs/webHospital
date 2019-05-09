<template>
  <div class="login-container">
    <div class="login-box" v-show="showLogin">
      <h3 class="title">{{userType}}登录</h3>
      <input
        class="input"
        type="text"
        placeholder="用户名"
        placeholder-style="color: #8a8a8a;"
        v-model="userName"
      >

      <input
        class="input"
        type="password"
        placeholder="登录密码"
        placeholder-style="color: #8a8a8a;"
        v-model="password"
      >
      <!-- <el-select v-model="searchData" clearable placeholder="主科室">
        <el-option v-for="item in bumen" :key="item.id" :label="item.value" :value="item.name"></el-option>
      </el-select>
      <el-select v-model="keshi" clearable placeholder="科室">
        <el-option
          v-for="(itam,index) in Room"
          :key="index"
          :label="itam.value"
          v-show="itam.department === searchData"
          :value="itam.keShiName"
        ></el-option>
      </el-select>-->
      <div v-if="userType == '员工'">
        <el-radio v-model="staffType" label="医生">医生</el-radio>
        <el-radio v-model="staffType" label="管理员">管理员</el-radio>
      </div>

      <input
        v-if="userType == '医生'"
        class="input"
        type="keShi"
        placeholder="科室"
        placeholder-style="color: #8a8a8a;"
        v-model="keShi"
      >
      <div v-if="userType=='员工'">
        <button class="btn" v-if="staffType == '管理员'" @click="loginAdmin">登录</button>
        <button class="btn" v-else-if="staffType == '医生'" @click="loginDoctor">登录</button>
      </div>
      <button class="btn" v-else @click="login">登录</button>
      <span v-on:click="ToRegister" v-if="userType != '员工'">没有账号？马上注册</span>
    </div>
    <!-- 注册 -->
    <div class="register-box" v-show="showRegister">
      <h3 class="title">用户注册</h3>
      <input
        type="text"
        placeholder="请输入用户名"
        placeholder-style="color: #8a8a8a;"
        v-model="newUsername"
      >
      <input
        type="password"
        placeholder="请输入密码"
        placeholder-style="color: #8a8a8a;"
        v-model="newPassword"
      >
      <input
        type="password"
        placeholder="请再次输入密码"
        placeholder-style="color: #8a8a8a;"
        v-model="newPassword2"
      >
      <button class="btn" @click="register">注册</button>
      <span v-on:click="ToLogin">已有账号？马上登录</span>
    </div>
  </div>
</template>

<script>
import { login, register, doctorLogin } from "@/api/api";
import axios from "@/api/index";
import { AdminLogin } from "@/api/admin";

export default {
  data() {
    return {
      showLogin: true,
      showRegister: false,
      userName: "",
      password: "",
      newUsername: "",
      newPassword: "",
      newPassword2: "",
      userType: "用户",
      staffType: "医生",
      keShi: ""
      // options:[]
    };
  },
  methods: {
    register() {
      if (
        this.newUsername == "" ||
        this.newPassword == "" ||
        this.newPassword2 == ""
      ) {
        alert("请输入用户名或密码");
      } else {
        let info = {
          userName: this.newUsername,
          password: this.newPassword,
          password2: this.newPassword2
        };
        register(info).then(res => {
          if (res.code !== 200) {
            alert(res.message);
          } else {
            setTimeout(
              function() {
                this.showLogin = true;
                this.showRegister = false;
              }.bind(this),
              1000
            );
          }
        });
      }
    },
    ToRegister() {
      this.showRegister = true;
      this.showLogin = false;
    },
    ToLogin() {
      this.showRegister = false;
      this.showLogin = true;
    },
    login() {
      if (this.userName == "" || this.password == "") {
        alert("请输入用户名或密码");
      } else {
        let info = {
          userName: this.userName,
          password: this.password,
          tel: ""
        };

        login(info).then(res => {
          if (res.code !== 200) {
            alert(res.message);
          } else {
            // alert("登录成功");
            setTimeout(
              function() {
                this.$router.go(-1);
              }.bind(this),
              1000
            );
            let loginName = res.result[0].userName;
            let loginId = res.result[0].userId;
            window.sessionStorage.setItem("loginKey", loginName);
            window.sessionStorage.setItem("loginKey1", loginId);
          }
        });
      }
    },
    loginAdmin() {
      if (this.userName == "" || this.password == "") {
        alert("请输入用户名或密码");
      } else {
        AdminLogin(this.userName, this.password).then(res => {
          if (res.code !== 200) {
            alert(res.message);
          } else {
            // alert("登录成功");
            setTimeout(
              function() {
                this.$router.push("/admin");
              }.bind(this),
              1000
            );
          }
        });
      }
    },
    loginDoctor() {
      if (this.userName == "" || this.password == "") {
        alert("请输入用户名或密码");
      } else {
        let info = {
          doctorName: this.userName,
          password: this.password,
          keShi: this.keShi
        };
        doctorLogin(info).then(res => {
          if (res.code !== 200) {
            alert(res.message);
          } else {
            // alert("登录成功");
            setTimeout(
              function() {
                this.$router.push("/doctor");
              }.bind(this),
              1000
            );
            let doctorId = res.result[0].doctorId;
            window.sessionStorage.setItem("loginKey2", doctorId);
            window.sessionStorage.setItem("loginKey3", doctorName);
          }
        });
      }
    }
  },
  created() {
    console.log(this.$route.query);
    if (this.$route.query.type == "staff") {
      this.userType = "员工";
    }
    // if (this.$route.query.type == "doctor") {
    //   this.userType = "医生";
    // }
  }
};
</script>


<style lang="less" scoped>
.login-container {
  height: 500px;
  background: url(http://sevenpanel.com/upload/201606/29/201606291708585196.jpg);
  background-size: 100% 100%;
  margin: 0 auto;
  position: relative;
}
.login-box {
  display: flex;
  box-shadow: 0 2px 12px 0 rgba(0, 0, 0, 0.3);
  padding: 50px;
  background-color: #d7d8d9;
  height: 250px;
  width: 250px;
  position: absolute;
  right: 12%;
  top: 17%;
  flex-direction: column;
  border-radius: 10px;
}
.register-box {
  display: flex;
  box-shadow: 0 2px 12px 0 rgba(0, 0, 0, 0.3);
  padding: 50px;
  background-color: #d7d8d9;
  height: 250px;
  width: 250px;
  position: absolute;
  right: 8%;
  top: 10%;
  flex-direction: column;
}
.title {
  font-size: 20px;
  color: #123077;
  text-align: left;
}
input {
  box-sizing: border-box;
  margin: 15px 0;
  padding: 4px;
  width: 265px;
  height: 35px;
  line-height: 35px;
  border: 1px solid #d7d8d9;
  border-radius: 4px;
  color: #666;
}
.btn {
  width: 265px;
  height: 36px;
  line-height: 36px;
  text-align: center;
  margin-top: 20px;
  font-size: 15px;
  background-color: #123077;
  border: none;
  border-radius: 4px;
  color: #fff;
}
</style>

