<template>
  <div id="app">
    <router-view/>
  </div>
</template>

<style lang="less">
// @font-face {
//   font-family: "iconfont"; /* project id 1143281 */
//   src: url("//at.alicdn.com/t/font_1143281_hcu3je97g6.eot");
//   src: url("//at.alicdn.com/t/font_1143281_hcu3je97g6.eot?#iefix")
//       format("embedded-opentype"),
//     url("//at.alicdn.com/t/font_1143281_hcu3je97g6.woff2") format("woff2"),
//     url("//at.alicdn.com/t/font_1143281_hcu3je97g6.woff") format("woff"),
//     url("//at.alicdn.com/t/font_1143281_hcu3je97g6.ttf") format("truetype"),
//     url("//at.alicdn.com/t/font_1143281_hcu3je97g6.svg#iconfont") format("svg");
// }
// .iconfont {
//   font-family: "iconfont" !important;
//   font-size: 12px;
//   font-style: normal;
//   color: #333;
//   -webkit-font-smoothing: antialiased;
//   -moz-osx-font-smoothing: grayscale;
// }
* {
  padding: 0;
  margin: 0;
}
#app {
  font-family: "Avenir", Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
}

.clearfloat:after {
  display: block;
  clear: both;
  content: "";
  visibility: hidden;
  height: 0;
}
.flex-row {
  display: flex;
  flex-direction: row;
  align-items: center;
}
a {
  text-decoration: none;
  color: #464040;
  // color: #ffffff;
}
</style>
