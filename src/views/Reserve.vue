<template>
  <div class="page">
    <menuNav></menuNav>
    <div class="backTo">
      <span v-on:click="back">>>返回上一页</span>
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
import menuNav from "@/components/menuNav.vue";

export default {
  data() {
    return {
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
  components:{
    menuNav
  },
  methods: {
    tableRowClassName(row, index) {
      if (index === 1) {
        return "info-row";
      } else if (index === 9) {
        return "positive-row";
      }
      return "";
    },
    back() {
      this.$router.go(-1); //返回上一层
    }
  }
};
</script>
<style lang="less" scoped>
.page {
  height: 1000px;
  position: relative;
}
.backTo {
  position: absolute;
  top: 120px;
  left:30px;
  font-size: 13px;
  color: #0087cd;
}
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
