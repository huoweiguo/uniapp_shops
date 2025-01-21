<template>
  <view class="transaction_container">
    <view class="transaction_nav">
      <text v-for="(item, index) in navArr" :class="{ 'activeNav': currentIndex === index }" @tap="setCurrentIndex(index)">{{ item }}</text>
    </view>
    <view class="transaction_content">
      <!--全部-->
      <scroll-view scroll-y="true" v-show="currentIndex === 0">
        <view class="transaction-li" v-for="(item,index) in 6" :key="index">
          <view class="transaction-li-s1">
            <text>配送派单</text>
            <text>-2.00</text>
          </view>
          <text class="transaction-time">2015-10-02 18:30</text>
          <text class="transaction-account">账户余额：18.25元</text>
          <text class="transaction-dilivery">美团闪购-9【美团派送】</text>
        </view>
      </scroll-view>
      <!--充值-->
      <scroll-view scroll-y="true" v-show="currentIndex === 1">
        <view class="transaction-li" v-for="(item,index) in 4" :key="index">
          <view class="transaction-li-s1">
            <text>充值</text>
            <text>2.00</text>
          </view>
          <text class="transaction-time">2015-10-02 18:30</text>
          <text class="transaction-account">账户余额：18.25元</text>
          <text class="transaction-dilivery">美团闪购-9【美团派送】</text>
        </view>
      </scroll-view>
      
      <!--消费-->
      <scroll-view scroll-y="true" v-show="currentIndex === 2">
        <view class="transaction-li" v-for="(item,index) in 8" :key="index">
          <view class="transaction-li-s1">
            <text>消费</text>
            <text>-2.00</text>
          </view>
          <text class="transaction-time">2015-10-02 18:30</text>
          <text class="transaction-account">账户余额：18.25元</text>
          <text class="transaction-dilivery">美团闪购-9【美团派送】</text>
        </view>
      </scroll-view>
      
      <!--退款-->
      <scroll-view scroll-y="true" v-show="currentIndex === 3">
        <view class="transaction-li" v-for="(item,index) in 6" :key="index">
          <view class="transaction-li-s1">
            <text>退款</text>
            <text>-2.00</text>
          </view>
          <text class="transaction-time">2015-10-02 18:30</text>
          <text class="transaction-account">账户余额：18.25元</text>
          <text class="transaction-dilivery">美团闪购-9【美团派送】</text>
        </view>
      </scroll-view>
    </view>
  </view>
</template>

<script>
  export default {
    data() {
      return {
        currentIndex: 0,
        navArr: ['全部', '充值', '消费', '退款']
      }
    },
    methods: {
      setCurrentIndex (index) {
        this.currentIndex = index
      }
    }
  }
</script>

<style lang="scss" scoped>
.transaction_nav {
  position: fixed;
  left: 0;
  top: 0;
  width: 100%;
  display: flex;
  justify-content: space-around;
  align-items: center;
  height: 80rpx;
  background-color: #fff;
  z-index: 999;
  text {
    position: relative;
    font-size: 28rpx;
    color: #343434;
  }
  .activeNav {
    &::after {
      position: absolute;
      left: 50%;
      bottom: -10rpx;
      transform: translate(-50%, 0);
      content: '';
      display: flex;
      width: 100%;
      height: 4rpx;
      background-color: #40c37f;
    }
  }
}
.transaction_content {
  margin: 80rpx 0 50rpx;
  padding: 30rpx;
  .transaction-li {
    margin-bottom: 40rpx;
    .transaction-li-s1 {
      display: flex;
      justify-content: space-between;
      align-items: center;
      height: 50rpx;
      text {
        font-size: 32rpx;
        &:first-child {
          color: #333;
        }
        &:last-child {
          color: #eb5926;
          font-weight: bold;
        }
      }
    }
    .transaction-time, .transaction-account, .transaction-dilivery {
      display: flex;
      align-items: center;
      font-size: 28rpx;
      color: #b6b6b6;
      height: 50rpx;
    }
    .transaction-dilivery {
      font-size: 32rpx;
      color: #333;
    }
  }
}
</style>
