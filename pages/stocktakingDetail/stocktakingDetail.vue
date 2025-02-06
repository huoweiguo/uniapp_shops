<template>
  <view class="stock-container">
    <view class="stock-item">
      <view class="stock-item-header">
        <text>我的店铺</text>
        <text>2024-12-19</text>
      </view>
      <view class="stock-item-text">
        <text>单据编号:</text>
        <text>PD1254486335</text>
      </view>
      <view class="stock-item-text">
        <text>业务员:</text>
        <text>阿萨</text>
      </view>
      <view class="stock-item-text">
        <text>制单人:</text>
        <text>老板</text>
      </view>
      <view class="stock-item-text">
        <text>制单时间:</text>
        <text>2021-12-31 08:50:23</text>
      </view>
    </view>
    <view class="stock-goods">
      <view class="stock-goods-header">盘点商品</view>
      <view class="stock-goods-box">
        <view class="stock-list" v-for="item in goodsList" :key="item.id">
          <image class="stock-image" :src="item.goodsImage" />
          <view class="stock-text">
            <text class="goods-title">{{ item.goodsName }}</text>
            <text>库存数：{{ item.stock }}{{ item.unit }}</text>
            <text>实际数：{{ item.actual }}{{ item.unit }}</text>
            <view class="stock-yk"><text>盈亏数：</text><text class="stock-phase" :class="getClassify(item.phase)" >{{ item.phase}}</text><text>{{ item.unit }}</text></view>
          </view>
        </view>
      </view>
    </view>
    <view class="stock-remark">
      <view class="stock-remark-title">备注</view>
      
      <view class="context-upload">
        <image class="images-upload" :src="uploadUrl" v-if="uploadUrl"/>
        <view class="upload_file" @tap="chooseImage">
          <uni-icons type="plusempty" size="30"></uni-icons>
        </view>
      </view>
    </view>
    
    <view>
      <button class="break-btn">作废</button>
    </view>
  </view>
</template>

<script>
  export default {
    data() {
      return {
        goodsList: [
          { id: 1232, goodsName: '南京同仁堂六位地黄丸', goodsImage: '../../static/2.png', stock: 1000, unit: '件', actual: 1005, phase: 5, },
          { id: 1242, goodsName: '西瓜味山药片', goodsImage: '../../static/2.png', stock: 1003, unit: '件', actual: 1000, phase: -3, }
        ],
        uploadUrl: 'http://tmp/hT2pdFYbdP2y040a3469bc45dce3d800ecf23cc832e6.png'
      }
    },
    
    methods: {
      getClassify (phase) {
        return phase >= 0 ? 'fcred' : 'fcgreen'
      },
      
      chooseImage () {
        uni.chooseImage({
        	count: 1,
        	success: function(res) {
            this.uploadUrl = res.tempFilePaths[0]
        	}
        });
      }
    }
  }
</script>

<style lang="scss" scoped>
  .stock-container {
    background-color: #f1f4f9;
    min-height: 100vh;
    padding: 20rpx;
    box-sizing: border-box;
    .stock-item {
      background-color: #fff;
      padding: 30rpx;
      border-radius: 16rpx;
      margin-bottom: 20rpx;
      .stock-item-header {
        display: flex;
        justify-content: space-between;
        align-items: center;
        margin-bottom: 20rpx;
        text {
          font-size: 24rpx;
          color: #999;
          &:first-child {
            color: #333;
            font-size: 32rpx;
            font-weight: bold;
          }
        }
      }
      .stock-item-text {
        display: flex;
        justify-content: space-between;
        align-items: center;
        height: 50rpx;
        font-size: 28rpx;
        color: #555;
      }
    }
    .stock-goods {
      background-color: #fff;
      padding: 30rpx;
      border-radius: 16rpx;
      margin-bottom: 20rpx;
      .stock-goods-header {
        font-size: 30rpx;
        color: #333;
        margin-bottom: 30rpx;
        font-weight: bold;
      }
      .stock-goods-box {
        .stock-list {
          display: flex;
          margin-bottom: 40rpx;
          align-items: center;
          .stock-image {
            width: 180rpx;
            height: 180rpx;
            border-radius: 15rpx;
            margin-right: 20rpx;
          }
          .stock-text {
            display: flex;
            flex-direction: column;
            flex: 1;
            overflow: hidden;
          }
          text {
            display: block;
            font-size: 28rpx;
            margin-bottom: 10rpx;
            color: #666;
          }
          .goods-title {
            font-size: 32rpx;
            color: #333;
          }
          .stock-yk {
            display: flex;
            align-items: center;
            font-size: 28rpx;
            .stock-phase {
              font-weight: bold;
            }
          }
        }
      }
    }
    .stock-remark {
      background-color: #fff;
      padding: 30rpx;
      border-radius: 16rpx;
      margin-bottom: 20rpx;
      .stock-remark-title {
        font-size: 28rpx;
        color: #333;
        font-weight: bold;
        margin-bottom: 20rpx;
      }
    }
    .context-upload {
      display: flex; 
      align-items: center;
      .images-upload {
        margin-right: 20rpx;
        width: 160rpx;
        height: 160rpx;
        border-radius: 6rpx;
      }
    }
  }
</style>
