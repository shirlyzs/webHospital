<template>
  <div class="login_container">
  <div class="logo">
    <img src="./images/company_logo.png" alt>
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
        <div class="float_r dialog ov_hidden_1">扫码登录</div>
        <div class="clearfix"></div>
      </div>
      <input class="info_input" type="text" placeholder="用户名" placeholder-style="color: #8a8a8a;">
      <input class="info_input" type="text" placeholder="登录密码" placeholder-style="color: #8a8a8a;">
      <div class="vertify_drag" id="vertify_drag">
        <div class="vertify_bg" id="vertify_bg"></div>
        <div class="vertify_text" id="vertify_text" onselectstart="return false;">请拖动滑块解锁</div>
        <div class="vertify_btn" id="vertify_btn">&gt;&gt;</div>
      </div>
      <a href="#" class="login_a">
        <button class="login_btn">登录</button>
      </a>
    </div>
    <div class="one_column qrcode" id="qrcode">
      <div class="box_title">
        <h4 class="float_l">扫码登录</h4>
        <div class="float_r swith_box_q" id="password-login"></div>
        <div class="float_r dialog">密码登录</div>
        <div class="clearfix"></div>
      </div>
      <div class="erp_qrcode">
        <img src alt>
      </div>
      <div class="code_tips">
        <img class="float_l code_icon" src="./images/code-tip.png" alt>
        <div class="float_l word_tip">
          <p>打开开创之家APP</p>
          <p>扫一扫登录</p>
        </div>
        <div class="clearfix"></div>
      </div>
      <a href="#">
        <div class="float_r download">下载开创之家APP</div>
        <div class="clearfix"></div>
      </a>
    </div>
  </div>
  <div class="footer">
    <span class="gray_footer">@2018&nbsp;CTRL&nbsp;鲁ICP备09017613号-3</span>
    <span class="black_footer">经营许可证编号：鲁B2-20080150号</span>
    <img src="./images/badge.png" alt>
    <span class="black_footer">鲁公网安备：37010102000387号</span>
  </div>
  </div>
</template>
