<template>
  <view class="stocking-container">
    <view class="stocking-shop" @tap="toLinks">
      <text class="shop-text">仓库</text>
      <view class="shop-right">
        <text>我的店铺</text>
        <uni-icons type="right" size="18" color="#ddd"></uni-icons>
      </view>
    </view>
    
    <view class="stocking-shop justify-around">
      <view class="add-select"><uni-icons type="plusempty" size="18" color="#fa600a" class="mr10"></uni-icons> <text>选择商品</text></view>
      <view class="add-select"><uni-icons type="scan" size="18" color="#0095fc" class="mr10"></uni-icons> <text>扫码添加</text></view>
    </view>
  </view>
</template>

<script>
  export default {
    data() {
      return {
        
      }
    },
    methods: {
      toLinks () {
        uni.navigateTo({
          url: '/pages/stockingList/stockingList'
        })
      }
    }
  }
</script>

<style lang="scss" scoped>
  .stocking-container {
    background-color: #f1f4f9;
    min-height: 100vh;
    padding: 20rpx;
    box-sizing: border-box;
    .stocking-shop {
      display: flex;
      justify-content: space-between;
      align-items: center;
      height: 90rpx;
      background-color: #fff;
      border-radius: 10rpx;
      padding: 0 30rpx;
      margin-bottom: 30rpx;
      text {
        color: #333;
        font-size: 28rpx;
      }
      .shop-right {
        display: flex;
        align-items: center;
      }
      .add-select {
        display: flex;
        align-items: center;
        margin: 0 20rpx;
      }
    }
    .justify-around {
      justify-content: space-around;
    }
  }
</style>
