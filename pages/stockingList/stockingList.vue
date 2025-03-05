<template>
  <view class="stocking-list">
    <!-- <view class="search-input">
      <uni-easyinput prefixIcon="search" v-model="searchKey" placeholder="单号/商品/备注"></uni-easyinput>
    </view> -->
    <!-- <view class="stocking-nav">2025-01-10 星期五</view> -->
    <view class="list-item" v-for="item in list" :key="item.id">
      <view class="list-item-title">{{ item.name }}</view>
      <view class="list-text">
        <text>仓库状态：{{ item.status }}</text>
        <text>默认仓库：{{ item.defaultStatus ? '是' : '否'}}</text>
      </view>
      <view class="list-text">负责人：{{ item.principal ? item.principal : '--' }}</view>
      <view class="list-text">仓库地址：{{ item.address ? item.address : '--' }}</view>
      <view class="list-text">
        <text>仓储费：{{ item.warehousePrice ? item.warehousePrice : '0.00' }}元</text>
        <text>搬运费：{{ item.truckagePrice ? item.truckagePrice : '0.00' }}元</text>
      </view>
      <view>
        <text class="change-btn" @tap="changeStore(item)">切换仓库</text>
      </view>
    </view>
  </view>
</template>

<script>
  import { warehouseList } from '@/api/common.js' 
  export default {
    data() {
      return {
        searchKey: '',
        list: []
      }
    },
    onLoad () {
      this.getStoreList()
    },
    methods: {
      toLinks () {
        uni.navigateTo({
          url: '/pages/stocktakingDetail/stocktakingDetail'
        })
      },
      
      changeStore (item) {
        const { id, name } = item
        try {
          uni.setStorageSync('storeName', name)
          uni.setStorageSync('storeId', id)
          uni.navigateTo({
            url: '/pages/stocking/stocking'
          })
        } catch (e) {
          uni.showToast({
            icon: 'none',
            title: '切换仓库失败，请重试!'
          })
        }
      },
      
      async getStoreList () {
        const res = await warehouseList()
        if (res.code === 0) {
          this.list = res.data || []
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
      .list-text {
        font-size: 24rpx;
        color: #999;
        margin-bottom: 6rpx;
        text {
          margin-right: 40rpx;
        }
      }
    }
  }
  .change-btn {
    display: flex;
    width: 100%;
    height: 60rpx;
    background-color: #ff7704;
    color: #fff;
    font-size: 28rpx;
    justify-content: center;
    align-items: center;
    border-radius: 10rpx;
    margin: 20rpx 0;
  }
</style>
