<template>
  <view class="change_mall">
    <view class="search-input">
      <uni-easyinput prefixIcon="search" v-model="searchKey" placeholder="请输入门店名称/门店ID"></uni-easyinput>
    </view>
    <scroll-view scroll-y="true">
      <view class="mall_item" v-for="item in mallList" :key="item.id">
        <image src="../../static/mall_icon.png" class="mall-image"></image>
        <view class="mall-info">
          <text class="mall-title">{{ item.name }}</text>
          <text class="mall-id">ID: {{ item.id }}</text>
        </view>
        <view class="mall-exchange">切换门店</view>
      </view>
    </scroll-view>
  </view>
</template>

<script>
  import { warehouseList } from '@/api/common.js'
  export default {
    data() {
      return {
        searchKey: '',
        mallList: []
      }
    },
    onLoad () {
      this.getStoreList()
    },
    methods: {
      async getStoreList () {
        const res = await warehouseList()
        if (res.code === 0) {
          console.log(res, 'res')
          this.mallList = res.data || []
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
.change_mall {
  background-color: #f1f4f9;
  min-height: 100vh;
  padding: 20rpx;
  box-sizing: border-box;
  .search-input {
    margin-bottom: 40rpx;
  }
  .mall_item {
    position: relative;
    display: flex;
    align-items: center;
    background-color: #fff;
    padding: 20rpx;
    margin-bottom: 20rpx;
    .mall-image {
      width: 60rpx;
      height: 60rpx;
      margin-right: 20rpx;
    }
    .mall-info {
      display: flex;
      flex-direction: column;
      .mall-title {
        font-size: 28rpx;
        font-weight: bold;
        margin-bottom: 6rpx;
      }
      .mall-id {
        font-size: 24rpx;
        color: #999;
      }
    }
    .mall-exchange {
      position: absolute;
      right: 20rpx;
      top: 50%;
      transform: translate(0, -50%);
      background-color: #f8852a;
      color: #fff;
      padding: 6rpx 20rpx;
      border-radius: 30rpx;
      font-size: 24rpx;
    }
  }
}
</style>
