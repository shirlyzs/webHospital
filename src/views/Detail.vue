<template>
  <div>
    <menuNav></menuNav>
    <div class="backTo">
      <span v-on:click="back">>>返回上一页</span>
    </div>
    <div class="title">{{}}</div>
    <div class="navi"></div>
  </div>
</template>

<script>
import menuNav from "@/components/menuNav.vue";

export default {
  data() {
    return {
      // objone:this.$route.query.id
    };
  },
  components: {
    menuNav
  },
  methods:{
    back() {
      this.$router.go(-1); //返回上一层
    }
  }
};
</script>

<style scoped>
.navi {
  border-radius: 3px;
  width: 1000px;
  margin: 50px auto;
  text-align: left;
  height: 1000px;
  padding: 10px;
  position: relative;
  box-shadow: 0 2px 12px 0 rgba(0, 0, 0, 0.3);
}
.backTo {
  position: absolute;
  top: 120px;
  left:180px;
  font-size: 13px;
  color: #0087cd;
}
</style>

