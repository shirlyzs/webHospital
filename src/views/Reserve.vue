<template>
  <div class="page">
    <menuNav></menuNav>
    <div class="backTo">
      <!-- <span v-on:click="back">>>返回上一页</span> -->
    </div>
    <div style="margin-bottom:20px">
      <span
        style="font-weight: 600; color: #e79128;font-size:36px;margin-left:40px;"
      >就诊需提前一天预约，请您合理安排时间！</span>
    </div>
    <div>
      <!-- <el-cascader placeholder="试试搜索" :options="options" filterable change-on-select></el-cascader> -->
      <el-select v-model="searchData" clearable placeholder="主科室">
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
      </el-select>
      <el-button slot="append" icon="el-icon-search" @click="searchMethod"></el-button>
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
import { room } from "@/api/api";
import { getWeek } from "@/utils/time";

export default {
  data() {
    return {
      test: [],
      searchData: "",
      keshi: "",
      bumen: [
        {
          name: "内科",
          id: 1
        },
        {
          name: "外科",
          id: 2
        },
        {
          name: "医技",
          id: 3
        },
        {
          name: "其他",
          id: 4
        }
      ],
      Room: [],
      doctorName: [],
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
      });
    },
    getRoom() {
      let roomInfo = {
        department: ""
      };
      room(roomInfo).then(res => {
        // this.option = res.result[0].content.department;
        this.Room = res.result[0].content;
      });
    },
    toDoctor(item) {
      this.$router.push({
        path: "/prodetail",
        query: { newId: item.doctorId }
      });
    },
    searchMethod() {
      if (this.searchData) {
        this.test = this.test.filter(item => {
          if(!this.keshi){
            return item['department'].indexOf(this.searchData) > -1
          }else if(this.keshi){
            return item['keShi'].indexOf(this.keshi) > -1
          }
        });
      } else if (!this.searchData||!this.keshi) {
        this.getReserve();
      }
    },
    back() {
      this.$router.go(-1); //返回上一层
    }
  },
  created() {
    this.getReserve();
    this.getRoom();
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
