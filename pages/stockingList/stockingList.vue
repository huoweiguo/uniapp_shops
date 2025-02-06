<template>
  <view class="stocking-list">
    <view class="search-input">
      <uni-easyinput prefixIcon="search" v-model="searchKey" placeholder="单号/商品/备注"></uni-easyinput>
    </view>
    <view class="stocking-nav">2025-01-10 星期五</view>
    <view class="list-item" @tap="toLinks">
      <view class="list-item-title">我的店铺</view>
      <view class="list-item-lk">
        <text class="lk-text1">PDD32587458SXXL</text>
        <view class="lk-yk">
          <text class="lk-text2">盈亏</text>
          <text class="fcred">+0.5</text>
        </view>
      </view>
    </view>
  </view>
</template>

<script>
  export default {
    data() {
      return {
        searchKey: ''
      }
    },
    methods: {
      toLinks () {
        uni.navigateTo({
          url: '/pages/stocktakingDetail/stocktakingDetail'
        })
      }
    }
  }
</script>

<style lang="scss" scoped>
  .stocking-list {
    background-color: #f1f4f9;
    padding: 20rpx;
    min-height: 100vh;
    box-sizing: border-box;
    .search-input {
      margin-bottom: 40rpx;
    }
    .stocking-nav {
      font-size: 24rpx;
      color: #777;
      margin-bottom: 20rpx;
    }
    .list-item {
      background-color: #fff;
      padding: 20rpx;
      border-radius: 10rpx;
      margin-bottom: 20rpx;
      .list-item-title {
        font-size: 28rpx;
        font-weight: 500;
        margin-bottom: 10rpx;
      }
      .list-item-lk {
        display: flex;
        align-items: center;
        .lk-text1 {
          margin-right: 40rpx;
          font-size: 24rpx;
          color: #777;
        }
        .lk-yk {
          display: flex;
          align-items: center;
          text {
            font-size: 24rpx;
            color: #777;
          }
        }
      }
    }
  }
</style>
