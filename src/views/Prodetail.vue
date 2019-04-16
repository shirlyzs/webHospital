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
      <div class="author"><sapn style="color:#0087cd;margin-right:15px;">职称:</sapn>{{docList.ranks}}</div>
      <div class="author"><sapn style="color:#0087cd;margin-right:15px;">科室:</sapn>{{docList.keShi}}</div>
      <div class="author"><sapn style="color:#0087cd;margin-right:15px;">部门:</sapn>{{docList.department}}</div>
      <div class="author"><sapn style="color:#0087cd;margin-right:15px;">预约价格:</sapn>{{docList.price}}</div>
      </div>
      </div>
      <div class="content">{{docList.resume}}</div>
    </div>
    <Footer></Footer>
  </div>
</template>

<script>
import menuNav from "@/components/menuNav.vue";
import Footer from "@/components/Footer.vue";
import { doctordetail } from "@/api/api";

export default {
  data() {
    return {
      docList: []
    };
  },
  components: {
    menuNav,
    Footer
  },
  methods: {
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
    }
  },
  created() {
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
.content{
  font-size: 17px;
  margin-bottom: 10px;
  white-space: pre-wrap;
}
.jiandan{
  display: flex;
}
.jianjie{
  display: block;
  margin-left: 50px;
  margin-top: 50px;
}
.author {
  font-size: 17px;
  margin-bottom: 10px;
}
img {
    height: 250px;
    width: 200px;
    margin: 10px;
  }
</style>

