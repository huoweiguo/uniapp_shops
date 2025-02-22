<template>
  <view class="recharge_container">
    <view class="recharge_title">版本订阅</view>
    <view class="recharge_version">
      <view class="recharge_version_item" v-for="(item, index) in versionArr" :key="item.id" :class="{'active_version': currentIndex === index}" @tap="setCurrent(index, item)">
        <text class="version_label">{{ item.name }}</text>
        <text class="version_small">{{ item.price.toFixed(2) }} 元</text>
      </view>
    </view>
    <view class="recharge_pay">
      <text class="charge_price">&yen; {{ currentMount }}</text>
      <text class="charge_btn">立即订阅</text>
    </view>
  </view>
</template>

<script>
  import { tenantPackage } from '@/api/common.js'
  export default {
    data() {
      return {
        currentIndex: 0,
        currentMount: 0,
        versionArr: []
      }
    },
    onLoad () {
      this.getRechargeList()
    },
    methods: {
      setCurrent (index, obj) {
        this.currentIndex = index
        this.currentMount = obj.price.toFixed(2)
      },
      
      async getRechargeList () {
        const res = await tenantPackage()
        if (res.code === 0) {
          this.versionArr = res.data || []
          if (this.versionArr.length > 0) {
            this.currentMount = this.versionArr[0].price.toFixed(2)
          }
        } else {
          uni.showToast({
            icon: 'none',
            title: res.msg
          })
        }
      }
    }
  }
</script>

<style lang="scss" scoped>
  .recharge_container {
    padding: 30rpx;
    .recharge_title {
      display: flex;
      align-items: center;
      font-size: 32rpx;
      height: 60rpx;
      color: #333;
      font-weight: bold;
      margin-bottom: 40rpx;
    }
    .recharge_version {
      display: flex;
      justify-content: space-between;
      align-items: center;
      .recharge_version_item {
        display: flex;
        justify-content: center;
        flex-direction: column;
        align-items: center;
        border: 2rpx solid #eaebed;
        border-radius: 10rpx;
        height: 220rpx;
        width: 200rpx;
        .version_label {
          color: #333;
          font-size: 32rpx;
          font-weight: bold;
          margin-bottom: 20rpx;
        }
        .version_small {
          color: #999;
          font-size: 24rpx;
        }
      }
      .active_version {
        border: 2rpx solid #fbe5c0;
        background-image: linear-gradient(to bottom, #ffe9af, #fff7e0);
        .version_label {
          color: #925101;
        }
      }
    }
    .recharge_pay {
      position: fixed;
      left: 0;
      bottom: 80rpx;
      width: 100%;
      display: flex;
      justify-content: space-between;
      align-items: center;
      padding: 0 30rpx;
      box-sizing: border-box;
      .charge_btn {
        display: flex;
        justify-content: center;
        align-items: center;
        width: 230rpx;
        height: 80rpx;
        background-image: linear-gradient(to right, #ffcd7c, #ffe8b0);
        border-radius: 10rpx;
        color: #542801;
      }
      .charge_price {
        color: #fc5e03;
        font-weight: bold;
      }
    }
  }
</style>
