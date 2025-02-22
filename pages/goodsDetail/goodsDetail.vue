<template>
  <view class="goods-info-content">
    <view class="goods-info-section">
      <view class="goods-title mb20">{{ goodsInfo.name }}</view>
      <view class="goods-info-item">编号/货号：<text>{{ goodsInfo.id }}</text></view>
      <view class="goods-info-item">产品分类：<text>{{ goodsInfo.categoryName }}</text></view>
      <view class="goods-info-item">产品条码：<text>{{ goodsInfo.barCode }}</text></view>
      <view class="goods-images">
        <image :src="goodsInfo.pic" @tap="toggle('center')"/>
      </view>
    </view>
    
    <view class="goods-section-det">
      <text class="small-text">价格和库存</text>
      <view class="goods-section-item">
        <view class="goods-li">
          <text class="goods-label">进货价</text>
          <text class="goods-number">&yen;{{ goodsInfo.purchasePrice }}</text>
        </view>
        <view class="goods-li">
          <text class="goods-label">零售价</text>
          <text class="goods-number">&yen;{{ goodsInfo.salePrice }}</text>
        </view>
        <view class="goods-li">
          <text class="goods-label">预警库存</text>
          <text class="goods-number">{{ goodsInfo.warningStock }}</text>
        </view>
      </view>
    </view>
    
    <view class="goods-section-det">
      <text class="small-text">其他信息</text>
      <view class="goods-section-item">
        <view class="goods-li">
          <text class="goods-label">规格</text>
          <text class="goods-number">{{ goodsInfo.standard }}</text>
        </view>
        <view class="goods-li">
          <text class="goods-label">状态</text>
          <text class="goods-number">{{ goodsInfo.status == 0 ? '下架' : '上架' }}</text>
        </view>
        <view class="goods-li">
          <text class="goods-label">单位</text>
          <text class="goods-number">{{ goodsInfo.unitName }}</text>
        </view>
      </view>
    </view>
    
    <navigator class="jump-btn" url="/pages/createGoods/createGoods">修改商品信息</navigator>
    
    <!--商品展示-->
    <uni-popup ref="popup" type="message">
      <image class="image-list" :src="goodsInfo.pic"></image>
    </uni-popup>
  </view>
</template>

<script>
  import { productInfo } from '@/api/common.js'
  export default {
    data() {
      return {
        type: 'center',
        goodsInfo: {}
      }
    },
    onLoad (options) {
      this.getGoodsInfo(options.id)
    },
    methods: {
      toggle(type) {
        this.type = type
        // open 方法传入参数 等同在 uni-popup 组件上绑定 type属性
        this.$refs.popup.open(type)
      },
      
      async getGoodsInfo (id) {
        const res = await productInfo(id)
        if (res.code === 0) {
          this.goodsInfo = res.data || {}
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
.goods-info-content {
  background-color: #f1f4f9;
  padding: 20rpx;
  min-height: 100vh;
  box-sizing: border-box;
  .goods-info-section {
    padding: 20rpx;
    background-color: #fff;
    margin-bottom: 30rpx;
    .goods-title {
      font-size: 32rpx;
      color: #595959;
      font-weight: bold;
      font-family: -apple-system,Helvetica,sans-serif;
    }
    .goods-info-item {
      margin-bottom:20rpx;
      color: #343434;
      font-weight: bold;
      font-size: 28rpx;
      text {
        font-weight: normal;
      }
    }
    .goods-images {
      image {
        width: 140rpx;
        height: 140rpx;
        border-radius: 10rpx;
        margin: 0 10rpx 10rpx 0;
      }
    }
  }
  .goods-section-det {
    margin-bottom: 30rpx;
    .small-text {
      display: block;
      font-weight: bold;
      margin-bottom: 30rpx;
      font-size: 32rpx;
      color: #343434;
    }
    .goods-section-item {
      padding: 20rpx;
      background-color: #fff;
      border-radius: 10rpx;
      .goods-li {
        display: flex;
        justify-content: space-between;
        align-items: center;
        padding: 10rpx 0;
        .goods-label {
          font-weight: bold;
          font-size: 28rpx;
          color: #343434;
        }
        .goods-number {
          font-size: 28rpx;
          color: #343434;
        }
      }
    }
  }
}
.image-list {
  max-width: 600rpx;
}
.jump-btn {
  display: flex;
  justify-content: center;
  align-items: center;
  margin: 30rpx 0;
  height: 80rpx;
  color: #fff;
  font-size: 28rpx;
  background-color: #007aff;
  border-radius: 10rpx;
  box-sizing: border-box;
}
</style>
