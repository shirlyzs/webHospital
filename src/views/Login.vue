<template>
  <div class="login-container">
    <div class="login-box" v-show="showLogin">
      <h3 class="title">{{userType}}登录</h3>
      <input class="input" type="text" placeholder="用户名" placeholder-style="color: #8a8a8a;" v-model="userName">
      <input class="input" type="text" placeholder="登录密码" placeholder-style="color: #8a8a8a;" v-model="password">
      <button class="btn" @click="login">登录</button>
      <span v-on:click="ToRegister">没有账号？马上注册</span>
    </div>
    <div class="register-box" v-show="showRegister">
      <h3 class="title">用户注册</h3>
      <input type="text" placeholder="请输入用户名" placeholder-style="color: #8a8a8a;" v-model="newUsername">
      <input type="password" placeholder="请输入密码" placeholder-style="color: #8a8a8a;" v-model="newPassword">
      <button class="btn" v-on:click="register">注册</button>
      <span v-on:click="ToRegister">已有账号？马上登录</span>
    </div>
  </div>
</template>

<script>
import { login } from '@/api/api'
import axios from '@/api/index'

export default {
  data() {
    return {
      showLogin: true,
      showRegister: false,
      userName: '',
      password: '',
      newUsername: '',
      newPassword: '',
      userType: '用户'
    }
  },
  methods: {
    register() {},
    ToRegister() {
      this.showRegister = true
      this.showLogin = false
    },
    ToLogin() {
      this.showRegister = false
      this.showLogin = true
    },
    login() {
      let info = { userName: this.userName, password: this.password }
      console.log(info)

      login().then(
        res => {
          console.log(res)
        },
        rej => {
          console.log(rej)
        }
      )
    }
  },
  created() {
    console.log(this.$route.query)
    if (this.$route.query.type == 'admin') {
      this.userType = '管理员'
    }
  }
}
</script>


<style lang="less" scoped>
.login-container {
  height: 500px;
  background: url(../assets/login_bg.jpg);
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
  right: 8%;
  top: 10%;
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

