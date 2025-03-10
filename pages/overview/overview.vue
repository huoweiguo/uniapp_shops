<template>
  <view class="overview_content">
    <view class="overview_item">
      <view class="overview_item_title">常用功能</view>
      <uni-grid :column="4" :highlight="true" :show-border="false" @change="change">
        <uni-grid-item v-for="(item, index) in list" :index="index" :key="index">
          <view class="grid-item-box" style="background-color: #fff;" @tap="goUrl(item.url)">
            <image :src="item.icon" class="overview-icon"></image>
            <text class="text">{{ item.title }}</text>
          </view>
        </uni-grid-item>
      </uni-grid>
    </view>
  </view>
</template>

<script>
  import record from '../../static/record.png'
  import pandian from '../../static/pandian.png'
  import jiaoyi from '../../static/jiaoyi.png'
  import store from '../../static/store.png'
  import storeQuery from '../../static/store-query.png'
  import taocan from '../../static/taocan.png'
  import kucun from '../../static/stock.png'
  export default {
    data() {
      return {
        list: [
          { icon: jiaoyi, title: '交易信息', url: '/pages/transaction/transaction'},
          { icon: record, title: '出入记录', url: '/pages/entryExit/entryExit'},
          { icon: pandian, title: '盘点', url: '/pages/stocking/stocking'},
          { icon: store, title: '出库', url: '/pages/selectStore/selectStore'},
          { icon: taocan, title: '套餐', url: '/pages/recharge/recharge'},
          { icon: kucun, title: '库存查询', url: '/pages/inventoryQuery/inventoryQuery'}
        ]
      }
    },
    methods: {
      change (e) {},
      goUrl (url) {
        uni.navigateTo({
          url
        })
      }
    }
  }
</script>

<style lang="scss" scoped>
  .overview_content {
    background-color: #f2f2f2;
    height: 100vh;
    width: 100%;
    padding-top: 30rpx;
    box-sizing: border-box;
    .overview_item {
      padding: 20rpx;
      background-color: #fff;
      margin-bottom: 20rpx;
      .overview_item_title {
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
  .text {
    font-size: 24rpx;
    color: #666;
    margin-top: 10rpx;
  }
  .overview-icon {
    width: 60rpx;
    height: 60rpx;
  }
</style>
