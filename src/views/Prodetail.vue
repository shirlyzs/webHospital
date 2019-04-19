<template>
  <div>
    <menuNav></menuNav>
    <div class="backTo">
      <span v-on:click="back">>>返回上一页</span>
    </div>
    <div class="navi">
      <div class="jiandan">
        <div class="image">
          <img :src="docList.image">
          <div class="title">{{docList.doctorName}}</div>
        </div>
        <div class="jianjie">
          <div class="author">
            <span style="color:#0087cd;margin-right:15px;">职称:</span>
            {{docList.ranks}}
          </div>
          <div class="author">
            <span style="color:#0087cd;margin-right:15px;">科室:</span>
            {{docList.keShi}}
          </div>
          <div class="author">
            <span style="color:#0087cd;margin-right:15px;">部门:</span>
            {{docList.department}}
          </div>
          <div class="author">
            <span style="color:#0087cd;margin-right:15px;">预约价格:</span>
            {{docList.price}}
          </div>
          <button class="yuyue" @click="changeVisible">预约</button>
        </div>
      </div>
      <div class="content">{{docList.resume}}</div>
      <el-dialog title="预约挂号" :visible.sync="dialogVisible">
        <div class="author">
          <span>姓名:</span>
          {{userList.userName}}
        </div>
        <div class="author">
          <span>医生:</span>
          {{userList.doctorName}}
        </div>
        <div class="author">
          <span>价格:</span>
          {{userList.price}}
        </div>
        <div class="author">
          <span>序号:</span>
          {{userList.orderId}}
        </div>
        <el-date-picker
          v-model="value1"
          type="date"
          placeholder="选择日期"
          :picker-options="pickerOptions0"
        ></el-date-picker>
        <span slot="footer" class="dialog-footer">
          <!-- <el-button @click="dialogVisible = false">取 消</el-button> -->
          <el-button type="primary" @click="dialogVisible = false">确 定 预 约</el-button>
        </span>
      </el-dialog>
    </div>

    <Footer></Footer>
  </div>
</template>

<script>
import menuNav from "@/components/menuNav.vue";
import Footer from "@/components/Footer.vue";
import { doctordetail } from "@/api/api";
import { getReserve } from "@/api/reserve";

export default {
  data() {
    return {
      pickerOptions0: {
        disabledDate(time) {
          return time.getTime() < Date.now() - 8.64e7;
        }
      },
      docList: [],
      userList: [],
      value1: "",
      dialogVisible: false
    };
  },
  components: {
    menuNav,
    Footer
  },
  methods: {
    changeVisible() {
      // this.dialogVisible = true;
      if (window.sessionStorage["loginKey1"]) {
        this.userId = window.sessionStorage["loginKey1"];
        this.toReserve(this.userId, this.$route.query.newId);
      } else {
        alert("请先登录");
      }
    },
    getName(doctorId) {
      let doctorInfo = {
        doctorId: doctorId
      };
      doctordetail(doctorInfo).then(res => {
        this.docList = res.result;
      });
    },
    back() {
      this.$router.go(-1); //返回上一层
    },
    toReserve(id1, id2) {
      let doctor = {
        userId: id1,
        doctorId: id2
      };
      getReserve(doctor).then(res => {
        if (res.result == null) {
          alert(res.message);
        } else {
          console.log(res.result);
          this.dialogVisible = true;
          this.userList = res.result;
        }
      });
    }
  },
  created() {
    if (window.sessionStorage["loginKey1"]) {
      this.userId = window.sessionStorage["loginKey1"];
    }
    this.getName(this.$route.query.newId);
  }
};
</script>

<style scoped lang="less">
.navi {
  border-radius: 3px;
  width: 800px;
  margin: 50px auto;
  text-align: left;
  height: fit-content;
  min-height: 800px;
  padding: 50px;
  // position: relative;
  box-shadow: 0 2px 12px 0 rgba(0, 0, 0, 0.3);
}
.backTo {
  position: absolute;
  top: 120px;
  left: 180px;
  font-size: 13px;
  color: #0087cd;
}
.title {
  // text-align: center;
  font-size: 24px;
  padding-bottom: 20px;
  margin-left: 82px;
}
.content {
  font-size: 17px;
  margin-bottom: 10px;
  white-space: pre-wrap;
}
.jiandan {
  display: flex;
}
.jianjie {
  display: block;
  margin-left: 50px;
  margin-top: 50px;
}
.author {
  font-size: 17px;
  margin-bottom: 10px;
  span {
    color: #0087cd;
  }
}
.yuyue {
  width: 120px;
  height: 50px;
  font-size: 20px;
  border-radius: 5px;
  border: none;
  background-color: #6795f3;
}
img {
  height: 250px;
  width: 200px;
  margin: 10px;
}
</style>

