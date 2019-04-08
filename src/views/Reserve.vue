<template>
  <div class="page">
    <div class="clearfloat">
      <div class="container">
        <div class="wel">欢迎来到山东省立医院</div>
        <div class="login">
          <router-link to="/Login">登录 / 注册</router-link>
        </div>
      </div>
    </div>
    <div class="nav">
      <el-menu
        :default-active="activeIndex"
        class="el-menu-demo2"
        mode="horizontal"
        @select="handleSelect"
        background-color="rgb(24, 116, 205)"
        text-color="#fff"
        text-align="center"
      >
        <el-menu-item index="1">
          <router-link to="/">网站首页</router-link>
        </el-menu-item>
        <el-submenu index="2">
          <template slot="title">医院概况</template>
          <el-menu-item index="2-1">
            <router-link to="/intro">医院简介</router-link>
          </el-menu-item>
          <el-menu-item index="2-2">
            <router-link to="/leader">历任领导</router-link>
          </el-menu-item>
          <el-menu-item index="2-3">
            <router-link to="/culture">医院文化</router-link>
          </el-menu-item>
        </el-submenu>
        <el-submenu index="3">
          <template slot="title">新闻动态</template>
          <el-menu-item index="3-1">
            <router-link to="/news">医院要闻</router-link>
          </el-menu-item>
          <el-menu-item index="3-2">
            <router-link to="/room">科室动态</router-link>
          </el-menu-item>
          <el-menu-item index="3-3">
            <router-link to="/notice">医院公告</router-link>
          </el-menu-item>
        </el-submenu>
        <el-submenu index="4">
          <template slot="title">就诊指南</template>
          <el-menu-item index="4-1">
            <router-link to="/know">就诊须知</router-link>
          </el-menu-item>
          <el-menu-item index="4-2">
            <router-link to="/process">就医流程</router-link>
          </el-menu-item>
          <el-menu-item index="4-3">
            <router-link to="/professor">专家门诊</router-link>
          </el-menu-item>
          <el-menu-item index="4-4">
            <router-link to="/location">医院布局</router-link>
          </el-menu-item>
          <el-menu-item index="4-5">
            <router-link to="/transport">交通指南</router-link>
          </el-menu-item>
        </el-submenu>
        <el-menu-item index="5">
          <a href="https://www.ele.me" target="_blank">科室介绍</a>
        </el-menu-item>
        <el-menu-item index="6">
          <a href="https://www.ele.me" target="_blank">专家介绍</a>
        </el-menu-item>
      </el-menu>
    </div>
    <el-table
      class="table"
      :data="test"
      stripe
      border
      style="width: 100%"
      :row-class-name="tableRowClassName"
    >
      <el-table-column label="科室">
        <el-table-column prop="part" label="主科室" width="120"></el-table-column>
        <el-table-column prop="depart" label="分科室" width="120"></el-table-column>
      </el-table-column>
      <el-table-column prop="Monday" label="星期一"></el-table-column>
      <el-table-column prop="Tuesday" label="星期二"></el-table-column>
      <el-table-column prop="Wednesday" label="星期三"></el-table-column>
      <el-table-column prop="Thursday" label="星期四"></el-table-column>
      <el-table-column prop="Friday" label="星期五"></el-table-column>
      <el-table-column prop="Saturday" label="星期六"></el-table-column>
      <el-table-column prop="Sunday" label="星期日"></el-table-column>
    </el-table>
    <div class="footer">
      <div class="footer-R">
        <p>ICP备案：鲁ICP备11021200号</p>
        <p>
          工信部连接：
          <a
            href="http://www.miitbeian.gov.cn/state/outPortal/loginPortal.action"
          >http://www.miitbeian.gov.cn</a>
        </p>
        <p>山东省立医院地址：山东财经大学燕山校区 邮编地址：250014</p>
        <p>
          山东省立医院版权所有
          <span>Copyrights © 2009 sph.com.cn All Rights Reserved</span>
        </p>
      </div>
    </div>
  </div>
</template>


<script>
export default {
  data() {
    return {
      activeIndex: 1,
      test: [
        {
          part: "内科",
          depart: "消化内科",
          Monday: "王可可"
        },
        {
          part: "外科",
          depart: "胸外科",
          Tuesday: "张一一"
        },
        {
          part: "内科",
          depart: "血液内科",
          Thursday: "刘长春"
        },
        {
          part: "妇产科",
          depart: "妇科",
          Monday: "刘翠翠"
        }
      ]
    };
  },
  methods: {
    handleSelect(key, keyPath) {
      console.log(key, keyPath);
    },
    tableRowClassName(row, index) {
      if (index === 1) {
        return "info-row";
      } else if (index === 9) {
        return "positive-row";
      }
      return "";
    },
    goback() {
      this.$router.go(-1);
    }
  }
};
</script>
<style lang="less" scoped>
.page {
  height: 1000px;
  position: relative;
}
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
.nav {
  display: block;
  margin-top: 50px;
  height: fit-content;
}
.el-header {
  background-color: #1874cd;
  color: #333;
  text-align: left;
  height: 20px !important;
}
.el-menu-demo2 {
  width: 100%;
  position: absolute;
  top: 50px;
  left: 0;
  display: flex;
  justify-content: center;
  z-index: 3;
  border: none !important;
}
.el-menu--horizontal > .el-menu {
  line-height: 80px;
}
// .linkmap {
//   margin: 0px auto;
//   width: 1280px;
//   line-height: 40px;
//   font-family: "微软雅黑";
//   color: #666;
//   white-space: nowrap;
// }
.table {
  margin: 50px 20px;
}
.el-table .info-row {
  background: #c9e5f5;
}

.el-table .positive-row {
  background: #e2f0e4;
}
.el-table th,
.el-table tr {
  border: solid 1px black;
  border: 1px solid #b0b6c6;
}
.footer {
  padding: 60px 0px;
  display: flex;
  height: 150px;
  position: absolute;
  bottom: 0;
  line-height: 28px;
  width: 100%;
  color: #ffffff;
  justify-content: center;
  margin-top: 20px;
  background: url(../assets/a1.jpg);
  // no-repeat center
}
</style>
