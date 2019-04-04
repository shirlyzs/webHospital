<template>
  <div class="login_container">
  <div class="logo">
    <img src="\webhospital\src\assets\a1.jpg" alt>
  </div>
  <div class="buttons_block">
    <a href="#">设为首页</a>|
    <a href="#">加入收藏</a>
  </div>
  <div class="login_box">
    <div class="one_column password" id="password">
      <div class="box_title">
        <h4 class="float_l">用户登录</h4>
        <div class="float_r swith_box_p" id="qrcode-login"></div>
        <div class="clearfix"></div>
      </div>
      <input class="info_input" type="text" placeholder="用户名" placeholder-style="color: #8a8a8a;">
      <input class="info_input" type="text" placeholder="登录密码" placeholder-style="color: #8a8a8a;">
      <a href="#" class="login_a">
        <button class="login_btn">登录</button>
      </a>
    </div>
    <div class="one_column qrcode" id="qrcode">
      <div class="box_title">
        <div class="float_r swith_box_q" id="password-login"></div>
        <div class="float_r dialog">密码登录</div>
        <div class="clearfix"></div>
      </div>
      <div class="erp_qrcode">
        <img src alt>
      </div>
      <div class="code_tips">
        <img class="float_l code_icon" src="\webhospital\src\assets\a1.jpg" alt>
        <div class="clearfix"></div>
      </div>
    </div>
  </div>
  <div class="footer">
    <span class="gray_footer">@2018&nbsp;CTRL&nbsp;鲁ICP备09017613号-3</span>
    <span class="black_footer">经营许可证编号：鲁B2-20080150号</span>
    <img src="\webhospital\src\assets\a1.jpg" alt>
    <span class="black_footer">鲁公网安备：37010102000387号</span>
  </div>
  </div>
</template>
<style lang="less" scoped>
* {
  margin: 0;
  padding: 0;
}

a {
  text-decoration: none;
}

a:hover {
  text-decoration: none;
}

page {
  background-color: #f5f5f5;
}

html,
body {
  font-size: 10px;
  background-color: #f5f5f5;
}

.ov_hidden_1 {
  overflow: hidden;
  text-overflow: ellipsis;
  white-space: nowrap;
}

.float_l {
  float: left;
}

.float_r {
  float: right;
}

.clearfix::after {
  clear: both;
  content: ".";
  display: block;
  height: 0;
  visibility: hidden;
}

/* 登录页 */

.login_container {
  width: 96rem;
  height: 34rem;
  background-color: #fff;
  // background-image: url('../assets/a1.jpg');
  background-repeat: no-repeat;
  background-size: 96rem 31.85rem;
}

/* .line{
  width: 96rem;
  height: 2rem;
  background-color: #000;
} */

.logo{
  padding: 1.2rem 0 0 15rem;
  box-sizing: content-box;
  width: 191px;
  height: 23px;
}

.logo img {
  width: 100%;
  height: 100%;
}

.buttons_block{
  padding-top: 2.5rem;
  padding-left: 57rem;
  width: 320px;
  height: 40px;
  line-height: 40px;
  font-size: 14px;
  text-align: right;
  color: #fff;
  z-index: 1000;
}

.buttons_block a {
  color: #fff;
  margin: 0 10px;
}

.login_box {
  box-sizing: border-box;
  margin-left: 57rem;
  width: 320px;
  height: 303px;
  background-color: #fff;
  overflow: hidden;
  z-index: 1000;
}

.one_column {
  box-sizing: border-box;
  padding: 25px;
  width: 320px;
  height: 303px;
  background-color: #fff;
}

.password {
  display: block;
}

.qrcode {
  display: none;
}

.box_title {
  height: 37px;
  line-height: 37px;
  width: 265px;
}

.box_title h4 {
  font-size: 20px;
  line-height: 25px;
  color: #123077;
  margin-right: 34px;
}

.box_title img:hover {
  cursor: pointer;
}

.dialog {
  width: 68px;
  height: 20px;
  background-color: #fff;
  // background-image: url('../assets/a1.jpg');
  background-repeat: no-repeat;
  background-position: center;
  background-size: 68px 20px;
  font-size: 12px;
  color: #123077;
  line-height: 20px;
  padding-left: 13px;
}

.swith_box_p {
  cursor: pointer;
  width: 28px;
  height: 28px;
  overflow: hidden;
  // background: url('../assets/a1.jpg') no-repeat;
  background-position: 0 0;
  background-size: 28px 56px;
}

.swith_box_p:hover {
  background-position: 0 -28px;
}

.swith_box_q {
  margin-left: 1px;
  cursor: pointer;
  width: 27px;
  height: 27px;
  overflow: hidden;
  // background: url('../images/qrcode-pic.png') no-repeat;
  background-position: 0 0;
  background-size: 27px 54px;
}

.swith_box_q:hover {
  background-position: 0 -27px;
}




.info_input {
  box-sizing: border-box;
  margin: 8px 0;
  padding: 4px;
  width: 265px;
  height: 35px;
  line-height: 35px;
  font-size: 12px;
  border: 1px solid #d7d8d9;
  border-radius: 4px;
  color: #666;
}

/* 验证码 */

.vertify_drag {
  margin: 10px 0;
  width: 265px;
  height: 32px;
  line-height: 32px;
  box-sizing: content-box;
  background-color: #e8e8e8;
  border: 1px solid #d7d8d9;
  border-radius: 4px;
  position: relative;
}

.vertify_bg {
  width: 265px;
  height: 100%;
  position: absolute;
  background-color: #cfd6e7;
}

.vertify_text {
  position: absolute;
  width: 100%;
  height: 100%;
  text-align: center;
  user-select: none;
}

.vertify_btn {
  width: 25px;
  height: 32px;
  position: absolute;
  border: 1px solid #ccc;
  cursor: move;
  font-family: "宋体";
  font-size: 14px;
  text-align: center;
  background-color: #fff;
  user-select: none;
  color: #666;
}

.login_a{
  display: block;
  margin-top: 22px;
  width: 265px;
  height: 36px;
}

.login_btn {
  /* margin-top: 17px; */
  width: 265px;
  height: 36px;
  line-height: 36px;
  text-align: center;
  font-size: 15px;
  background-color: #123077;
  border: none;
  border-radius: 4px;
  color: #fff;
}

.erp_qrcode {
  background-color: #eee;
  width: 110px;
  height: 110px;
  margin: 14px auto;
}

.erp_qrcode img {
  width: 100%;
  height: 100%;
}

.code_tips {
  width: 140px;
  height: auto;
  margin: 8px auto;
}

.code_icon {
  width: 25px;
  height: 25px;
  margin: 8px 8px 0 0;
}

.word_tip {
  font-size: 12px;
  color: #000;
  line-height: 20px;
}

.download {
  margin: 17px 0;
  font-size: 12px;
  color: #999;
  line-height: 17px;
}

.footer{
  position: absolute;
  top: 31.85rem;
  left: 0;
  right: 0;
  width: 100%;
  text-align: center;
  height: 40px;
  line-height: 40px;
  font-size: 12px;
}

.gray_footer{
  color: #828282;
}

.black_footer{
  color: #333;
}

.footer img {
  width: 15px;
  height: 15px;
}
</style>