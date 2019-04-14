<template>
  <div class="home">
    <menuNav></menuNav>
    <div class="backTo">
      <span v-on:click="back">>>返回上一页</span>
    </div>
    <div class="navi"></div>
  </div>
</template>

<script>
export default {
  methods: {
    back() {
      this.$router.go(-1); //返回上一层
    }
  }
};
</script>

<style lang="less" scoped>
.backTo {
  position: absolute;
  top: 120px;
  left: 180px;
  font-size: 13px;
  color: #0087cd;
}
.navi {
  border-radius: 3px;
  width: 1230px;
  margin: 50px;
  min-height: 200px;
  height: fit-content;
  padding: 10px;
  float: right;
  display: flex;
  position: relative;
  flex-direction: column;
  box-shadow: 0 2px 12px 0 rgba(0, 0, 0, 0.3);
}
</style>

