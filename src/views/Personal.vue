<template>
  <div>
    <menuNav></menuNav>
    <div class="navi">
    </div>
    <Footer></Footer>
  </div>
</template>

<script>
import menuNav from "@/components/menuNav.vue";
import Footer from "@/components/Footer.vue";


export default {
  data() {
    return{

    };
  },
  components: {
    menuNav,Footer
  }
};
</script>
<style lang="less" scoped>
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
</style>

