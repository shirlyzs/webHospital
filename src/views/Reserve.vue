<template>
  <div class="page">
    <menuNav></menuNav>
    <div class="backTo">
      <span v-on:click="back">>>返回上一页</span>
    </div>
    <el-table class="table" :data="test" stripe border style="width: 100%">
      <el-table-column label="科室">
        <el-table-column prop="department" label="主科室" width="120"></el-table-column>
        <el-table-column prop="keShi" label="分科室" width="120"></el-table-column>
      </el-table-column>
      <el-table-column :label="nowDay.first">
        <template slot-scope="scope">
          <div
            slot="reference"
            class="name-wrapper"
            @click="toDoctor(scope.row)"
          >{{ scope.row.doctorName }}</div>
        </template>
      </el-table-column>
      <el-table-column :label="nowDay.second">
        <template slot-scope="scope">
          <div
            slot="reference"
            class="name-wrapper"
            @click="toDoctor(scope.row)"
          >{{ scope.row.doctorName }}</div>
        </template>
      </el-table-column>
      <el-table-column :label="nowDay.third">
        <template slot-scope="scope">
          <div
            slot="reference"
            class="name-wrapper"
            @click="toDoctor(scope.row)"
          >{{ scope.row.doctorName }}</div>
        </template>
      </el-table-column>
      <el-table-column :label="nowDay.fourth">
        <template slot-scope="scope">
          <div
            slot="reference"
            class="name-wrapper"
            @click="toDoctor(scope.row)"
          >{{ scope.row.doctorName }}</div>
        </template>
      </el-table-column>
      <el-table-column :label="nowDay.fifth">
        <template slot-scope="scope">
          <div
            slot="reference"
            class="name-wrapper"
            @click="toDoctor(scope.row)"
          >{{ scope.row.doctorName }}</div>
        </template>
      </el-table-column>
      <el-table-column :label="nowDay.sixth">
        <template slot-scope="scope">
          <div
            slot="reference"
            class="name-wrapper"
            @click="toDoctor(scope.row)"
          >{{ scope.row.doctorName }}</div>
        </template>
      </el-table-column>
      <el-table-column :label="nowDay.seventh">
        <template slot-scope="scope">
          <div
            slot="reference"
            class="name-wrapper"
            @click="toDoctor(scope.row)"
          >{{ scope.row.doctorName }}</div>
        </template>
      </el-table-column>
    </el-table>
    <Footer></Footer>
  </div>
</template>

  
<script>
import menuNav from "@/components/menuNav.vue";
import Footer from "@/components/Footer.vue";
import { reserve } from "@/api/reserve";
import { getWeek } from "@/utils/time";

export default {
  data() {
    return {
      test: [],
      nowDay: {
        first: "",
        second: "",
        third: "",
        fourth: "",
        fifth: "",
        sixth: "",
        seventh: ""
      }
    };
  },
  components: {
    menuNav,
    Footer
  },
  methods: {
    getReserve() {
      let doctor = {
        doctorName: "",
        department: "",
        keShi: "",
        ranks: ""
      };
      reserve(doctor).then(res => {
        this.test = res.result[0].content;
        // console.log(this.test)
      });
    },
    toDoctor(item) {
      this.$router.push({
        path: "/prodetail",
        query: { newId: item.doctorId }
      });
    },
    back() {
      this.$router.go(-1); //返回上一层
    }
  },
  created() {
    this.getReserve();
    this.nowDay = getWeek();
  }
};
</script>
<style lang="less" scoped>
.page {
  height: 600px;
  position: relative;
}
.backTo {
  position: absolute;
  top: 120px;
  left: 30px;
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
</style>
