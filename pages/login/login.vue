<template>
  <!-- pages/login/login.wxml -->
  <view class="header-bg"></view>
  <view class="header-content"></view>
  <view class="container">
    <view class="logo">账号登录</view>
    <view class="form-container">
      <view class="form">
        <view class="input-group">
          <input class="input" type="text" placeholder="请输入租户名称" v-model="params.tenantName" />
        </view>
      <view class="input-group">
        <input class="input user-input" type="text" placeholder="请输入用户名" v-model="params.username" />
      </view>
        <view class="input-group">
          <input class="input pass-input" type="password" placeholder="请输入密码" v-model="params.password" />
        </view>
        <view class="protrol-text">
          <view style="display: flex; align-items: center;">
            <uni-icons type="checkbox-filled" size="20" color="#ddd" v-if="!selected" @tap="selectCheck(true)"></uni-icons>
            <uni-icons type="checkbox-filled" size="20" color="#78cf7e" v-else @tap="selectCheck(false)"></uni-icons>已知晓并同意我们的
            <navigator class="protrol-nav">《桃晚晚服务协议》</navigator>
          </view>
        </view>
        <button class="login-btn" @tap="handleLogin">登录</button>
      </view>
    </view>
  </view>
</template>

<script>
import { login } from '@/api/login.js'
import { getUserInfo } from '@/api/user.js'
export default {
  data() {
    return {
      selected: true,
      params: {
        tenantName: '',
        username: '',
        password: '',
        // captchaVerification: 'PfcH6mgr8tpXuMWFjvW6YVaqrswIuwmWI5dsVZSg7sGpWtDCUbHuDEXl3cFB1+VvCC/rAkSwK8Fad52FSuncVg==',
        // socialType: 10,
        // socialCode: '1024',
        // socialState: '9b2ffbc1-7425-4155-9894-9d5c08541d62',
        // socialCodeValid: true
      }
    };
  },
  onLoad () {
    uni.removeStorage({
      key:'jumped'
    })
  },
  methods: {
    selectCheck (flag) {
      this.selected = flag
    },
    async handleLogin() {
      if (!this.selected) {
        uni.showToast({
          icon: 'none',
          title: '请勾选服务协议'
        })
        return false
      }
      
      if (this.params.tenantName && this.params.username && this.params.password) {
        const res = await login(this.params)
        if (res.code === 0) {
          // 存储accessToken
          uni.setStorage({
            key: 'accessToken',
            data: res?.data?.accessToken||'',
            success: async function () {
              const res = await getUserInfo()
              if (res.code === 0) {
                // 存储dept
                const info = res.data
                uni.setStorage({
                  key: 'dept',
                  data: res?.data?.dept
                })
                // 存储用户信息
                uni.setStorage({
                  key: 'userInfo',
                  data: {
                    username: info.username,
                    avatar: info.avatar,
                    nickname: info.nickname,
                    mobile: info.mobile,
                    email: info.email,
                    posts: info.posts,
                    sex: info.sex,
                    roles: info.roles,
                    id: info.id
                  }
                })
              }
            }
          });
          uni.showToast({
            icon: 'success',
            title: '登录成功'
          })
          setTimeout(() => {
            uni.switchTab({
              url:"/pages/index/index"
            })
          }, 1500)
          
        } else {
          uni.showToast({
            title: res.msg,
            icon: 'none'
          });
        }
        
      } else {
        uni.showToast({
          title: '请将登录信息填写完整',
          icon: 'none'
        });
      }
    }
  }
};
</script>

<style lang="scss" scoped>
.header-bg {
  background-color: #78cf7e;
  height: 50rpx;
}
.header-content {
  background-color: #78cf7e;
  height: 650rpx;
}
.container {
  position: fixed;
  left: 50%;
  top: 50%;
  width: 100%;
  padding: 40rpx;
  display: flex;
  flex-direction: column;
  box-sizing: border-box;
  transform: translate(-50%, -55%);
  .form-container {
    width: 100%;
    background-color: #fff;
    border-radius: 10rpx;
    .form {
      padding: 40rpx;
    }
  }
}

.logo {
  font-size: 50rpx;
  font-weight: 500;
  margin-bottom: 50rpx;
  color: #fff;
}

.input-group {
  margin-bottom: 40rpx;
  .input {
    height: 80rpx;
    padding: 0 15rpx 0 60rpx;
    border: none;
    font-size: 30rpx;
    border-bottom: 1px solid #e1e1e1;
    background-image: url('../../static/name.png');
    background-repeat: no-repeat;
    background-position: 0rpx 18rpx;
    background-size: 44rpx;
    &.user-input {
      background-image: url('../../static/user.png');
    }
    &.pass-input {
      background-image: url('../../static/password.png');
    }
    &::placeholder {
      color: #aaa;
      font-size: 30rpx;
    }
  }
}

.login-btn {
  width: 100%;
  height: 80rpx;
  background-color: #78cf7e;
  color: #fff;
  border: none;
  border-radius: 40rpx;
  font-size: 32rpx;
  margin-bottom: 20rpx;
}
.protrol-text {
  display: flex;
  align-items: center;
  margin-bottom: 40rpx;
  font-size: 28rpx;
  color: #666;
  .protrol-nav {
    color: #78cf7e;
  }
}
</style>
