<template>
  <view class="my_container">
    <view class="my_header_box" :style="'padding-top:'+ top +'px'"></view>
    <view class="my_header_outer">
      <view class="my_info">
        <cover-image class="header_icon" src="/static/header.png"></cover-image>
        <text class="header_nickname">我是一只小小鸟</text>
      </view>
    </view>
    <view class="info_common">
      <view class="info_charge">
        <text>账户余额（元）</text>
        <text class="ftb">&yen;149.19</text>
      </view>
      <text class="recharge-btn">立即充值</text>
    </view>
    
    <view class="my-content">
      <view class="my-member">
        <cover-image class="member_icon" src="/static/member.png"></cover-image>
        会员权益生效中
        <text>有效期至：2025-10-01</text>
      </view>
      <view class="my-member-block">
        <view class="my-member-func">常用功能</view>
        <uni-grid :column="4" :highlight="true" :show-border="false">
          <uni-grid-item v-for="(item, index) in list" :index="index" :key="index">
            <view class="grid-item-box" style="background-color: #fff;">
              <cover-image :src="item.icon" class="overview-icon"></cover-image>
              <text class="text">{{ item.title }}</text>
            </view>
          </uni-grid-item>
        </uni-grid>
      </view>
    </view>
  </view>
</template>

<script>
  import dataIcon from '/static/data.png'
  import orderIcon from '/static/order.png'
  export default {
    data() {
      return {
        top: 0,
        list: [
          { icon: dataIcon, title: '经营数据', url: '' },
          { icon: orderIcon, title: '全部订单', url: '' },
        ]
      }
    },
    
    onLoad () {
      this.getSafeArea()
    },
    
    methods: {
      getSafeArea () {
        uni.getSystemInfo({
          success: (res) => {
            if (res.safeAreaInsets) {
              this.top = res.safeAreaInsets.top
            }
          }
        })
      }
    }
  }
</script>

<style lang="scss" scoped>
.my_container {
  background-color: #f3f3f3;
  height: 100vh;
}
.my_header_box {
  background-color: #78cf7e;
}
.my_header_outer {
  padding: 100rpx 40rpx 100rpx;
  background-color: #78cf7e;
  .my_info {
    display: flex;
    align-items: center;
    .header_icon {
      width: 80rpx;
      height: 80rpx;
      border-radius: 50%;
    }
    .header_nickname {
      color: #fff;
      font-size: 32rpx;
      margin-left: 10rpx;
      font-weight: 500;
    }
  }
}
.info_common {
  display: flex;
  justify-content: space-between;
  align-items: center;
  background-color: #fff;
  border-radius: 10rpx;
  margin: -70rpx 40rpx 30rpx;
  padding: 30rpx 20rpx;
  .info_charge {
    display: flex;
    flex-direction: column;
    color: #303c30;
    text {
      margin: 6rpx 0;
    }
  }
  .recharge-btn {
    background-color: #f8852a;
    color: #fff;
    padding: 15rpx 40rpx;
    border-radius: 35rpx;
  }
}
.my-content {
  margin: 0 40rpx;
  .my-member {
    display: flex;
    align-items: center;
    height: 100rpx;
    background-color: #f4e3c9;
    border-radius: 10rpx 10rpx 0 0;
    padding: 0 20rpx;
    color: #8a5a1a;
    font-size: 32rpx;
    font-weight: 500;
    text {
      color: #b1894c;
      font-size: 28rpx;
      margin-left: 20rpx;
    }
    .member_icon {
      width: 50rpx;
      height: 50rpx;
      margin-right: 10rpx;
    }
  }
}
.grid-item-box {
  flex: 1;
  // position: relative;
  /* #ifndef APP-NVUE */
  display: flex;
  /* #endif */
  flex-direction: column;
  align-items: center;
  justify-content: center;
  padding: 15px 0;
}
.my-member-block {
  background-color: #fff;
  padding: 20rpx;
  position: relative;
  padding-left: 16rpx;
  .my-member-func {
    position: relative;
    padding-left: 16rpx;
    &::after {
      position: absolute;
      left: 0;
      top: 50%;
      content: '';
      display: block;
      background-color: #40c37f;
      width: 6rpx;
      height: 28rpx;
      transform: translate(0, -50%);
      border-radius: 3rpx;
    }
  }
  .text {
    font-size: 24rpx;
    color: #666;
    margin-top: 10rpx;
  }
  .overview-icon {
    width: 60rpx;
    height: 60rpx;
  }  
}
</style>
