<template>
  <!-- pages/login/login.wxml -->
  <view class="container">
    <view class="logo">账号登录</view>
    <view class="form">
      <view class="input-group">
        <input class="input" type="text" placeholder="请输入账号" v-model="params.username" />
      </view>
      <view class="input-group">
        <input class="input" type="password" placeholder="请输入密码" v-model="params.password" />
      </view>
      <button class="login-btn" @click="handleLogin">登录</button>
    </view>
  </view>
</template>

<script>
import { login } from '@/api/login.js'
export default {
  data() {
    return {
      params: {
        username: '',
        password: '',
        captchaVerification: 'PfcH6mgr8tpXuMWFjvW6YVaqrswIuwmWI5dsVZSg7sGpWtDCUbHuDEXl3cFB1+VvCC/rAkSwK8Fad52FSuncVg==',
        socialType: 10,
        socialCode: '1024',
        socialState: '9b2ffbc1-7425-4155-9894-9d5c08541d62',
        socialCodeValid: true
      }
    };
  },
  methods: {
    async handleLogin() {
      if (this.params.username && this.params.password) {
        const res = await login(this.params)
        if (res.code === 200) {
          console.log(res, 'res')
        } else {
          uni.showToast({
            title: res.msg,
            icon: 'none'
          });
        }
        
      } else {
        uni.showToast({
          title: '请输入账号和密码',
          icon: 'none'
        });
      }
    }
  }
};
</script>

<style lang="scss" scoped>
.container {
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  height: 100vh;
  background-color: #f5f5f5;
}

.logo {
  font-size: 36rpx;
  font-weight: 500;
  margin-bottom: 30rpx;
  color: #666;
}

.form {
  width: 80%;
}

.input-group {
  margin-bottom: 20rpx;
}

.input {
  height: 60rpx;
  padding: 10rpx;
  border: 1px solid #ccc;
  border-radius: 10rpx;
  font-size: 24rpx;
}

.login-btn {
  width: 100%;
  height: 80rpx;
  background-color: #78cf7e;
  color: #fff;
  border: none;
  border-radius: 10rpx;
  font-size: 32rpx;
  margin-bottom: 20rpx;
}
</style>
