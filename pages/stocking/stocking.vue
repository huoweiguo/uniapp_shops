<template>
  <view class="stocking-container">
    <view class="stocking-shop" @tap="toLinks">
      <text class="shop-text">{{ storeName ? storeName : "请选择仓库" }}</text>
      <view class="shop-right">
        <uni-icons type="right" size="18" color="#ddd"></uni-icons>
      </view>
    </view>
    
    <view class="stocking-shop justify-around">
      <view class="add-select" @click="goUrl"><uni-icons type="plusempty" size="18" color="#fa600a" class="mr10"></uni-icons> <text>选择商品</text></view>
    </view>
  </view>
</template>

<script>
  export default {
    data() {
      return {
        storeName: ''
      }
    },
    onShow () {
      uni.getStorage({
        key: 'storeName',
        success: (res) => {
          if (res.errMsg === 'getStorage:ok') {
            this.storeName = res.data
          }
        },
        fail: function (error) {
            console.log('获取失败', error);
        }
      })
    },
    methods: {
      toLinks () {
        uni.navigateTo({
          url: '/pages/stockingList/stockingList'
        })
      },
      goUrl () {
        uni.navigateTo({
          url: '/pages/selectProduct/selectProduct'
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
