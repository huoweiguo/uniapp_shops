<template>
  <!-- pages/login/login.wxml -->
  <view class="login-container">
    <view class="login-box">
      <uni-icons type="weixin" size="80" color="#1aad19"></uni-icons>
      <view class="title">用户登录</view>
      <button
        type="primary"
        open-type="getUserInfo"
        @getuserinfo="onGetUserInfo"
        class="login-button"
        size="mini"
      >
        授权登录微信
      </button>
    </view>
  </view>
</template>

<script>
export default {
  methods: {
    onGetUserInfo(e) {
      if (e.detail.userInfo) {
        // 用户按了允许授权按钮
        console.log('用户信息：', e.detail.userInfo);
        // 这里可以调用登录接口，传递用户信息
      } else {
        // 用户按了拒绝按钮
        console.log('用户拒绝授权');
      }
    }
  }
}
</script>

<style lang="scss" scoped>
.login-container {
  display: flex;
  justify-content: center;
  align-items: center;
  height: 100vh;
  background-color: #f8f8f8;
}

.login-box {
  width: 80%;
  max-width: 400px;
  padding: 20px;
  border-radius: 8px;
  text-align: center;
}


.title {
  font-size: 32rpx;
  margin-bottom: 100px;
  color: #1aad19;
}

.login-button {
  width: 100%;
  padding: 10px;
  background-color: #1aad19;
  color: #ffffff;
  border: none;
  border-radius: 4px;
  font-size: 16px;
}
</style>
