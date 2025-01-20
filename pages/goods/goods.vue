<template>
  <view class="goods_container">
    <uni-section>
      <uni-search-bar placeholder="名称/规格/条形码" bgColor="#efefef" @confirm="search" />
    </uni-section>
    <view class="goods_operation">
      <uni-data-picker placeholder="全部类别" popup-title="选择类别" :localdata="dataTree" v-model="classify"
      @change="onchange" @nodeclick="onnodeclick" @popupopened="onpopupopened" @popupclosed="onpopupclosed">
      </uni-data-picker>
      <view class="select-all"><uni-icons type="plus" size="20"></uni-icons>新增</view>
    </view>
    <view class="goods-counts">
      <text class="goods-counts-text">商品数量：200</text>|<text class="goods-counts-text">商品库存：50000</text>
    </view>
    
    <scroll-view scroll-y="true">
      <navigator class="goods-item-list" url="/pages/goodsDetail/goodsDetail">
        <uni-swipe-action>
          <uni-swipe-action-item>
            <view class="content-box">
              <image src="../../static/2.png" class="goods-list-image"></image>
              <view class="goods-content">
                <text class="goods-content-title">狼蓝螯合钙十多个广东省建设大街解放大道</text>
                <text>零售价：&yen;12.50</text>
                <text>批发价：&yen;12.50</text>
                <text>库存：&yen;12.50</text>
              </view>
            </view>
            <template v-slot:right>
              <view class="slot-button">
                <text class="slot-button-text bgred" @tap="bindClick({position:'right',content:{text:'编辑'}})">编辑</text>
                <text class="slot-button-text bgblue" @tap="bindClick({position:'right',content:{text:'删除'}})">删除</text>
              </view>
            </template>
          </uni-swipe-action-item>
        </uni-swipe-action>
      </navigator>
      
      <navigator class="goods-item-list" url="/pages/goodsDetail/goodsDetail">
        <uni-swipe-action>
          <uni-swipe-action-item>
            <view class="content-box">
              <image src="../../static/2.png" class="goods-list-image"></image>
              <view class="goods-content">
                <text class="goods-content-title">狼蓝螯合钙十多个广东省建设大街解放大道</text>
                <text>零售价：&yen;12.50</text>
                <text>批发价：&yen;12.50</text>
                <text>库存：&yen;12.50</text>
              </view>
            </view>
            <template v-slot:right>
              <view class="slot-button">
                <text class="slot-button-text bgred" @click="bindClick({position:'right',content:{text:'编辑'}})">编辑</text>
                <text class="slot-button-text bgblue" @click="bindClick({position:'right',content:{text:'删除'}})">删除</text>
              </view>
            </template>
          </uni-swipe-action-item>
        </uni-swipe-action>
      </navigator>
    </scroll-view>
  </view>
</template>

<script>
  export default {
    data() {
      return {
        classify: '',
        delArr: [],
        dataTree: [
          { text: '数学', value: 'sx' },
          { text: '语文', value: 'yw' },
          { text: '英语', value: 'yy' },
          { text: '物理', value: 'wl' },
          { text: '化学', value: 'hx' },
          { text: '历史', value: 'ls' },
          { text: '数学1', value: 'sx1' },
          { text: '语文1', value: 'yw1' },
          { text: '英语1', value: 'yy1' },
          { text: '物理1', value: 'wl1' },
          { text: '化学1', value: 'hx1' },
          { text: '历史1', value: 'ls1' },
          { text: '数学2', value: 'sx2' },
          { text: '语文2', value: 'yw2' },
          { text: '英语2', value: 'yy2' },
          { text: '物理2', value: 'wl2' },
          { text: '化学2', value: 'hx2' },
          { text: '历史2', value: 'ls2' }
        ]
      }
    },
    methods: {
      search (value) {
        console.log(value)
      },
      bindClick (options) {
        console.log(options)
      },
      onnodeclick(e) {
        console.log(e);
      },
      onpopupopened(e) {
        console.log('popupopened');
      },
      onpopupclosed(e) {
        console.log('popupclosed');
      },
      onchange(e) {
        console.log('onchange:', e);
      }
    }
  }
</script>

<style lang="scss" scoped>
.goods_container {
  padding: 30rpx;
  background-color: #f1f4f9;
  min-height: 100vh;
  box-sizing: border-box;
  .goods_operation {
    display: flex;
    justify-content: space-between;
    align-items: center;
    font-size: 28rpx;
    color: #666;
    height: 80rpx;
    margin-bottom: 20rpx;
    background-color: #fff;
    padding: 10rpx 20rpx;
  }
  .select-all {
    display: flex;
    align-items: center;
  }
  .goods-item-list {
    background-color: #fff;
    margin-bottom: 20rpx;
  }
  .goods-counts {
    display: flex;
    align-items: center;
    background-color: #fff;
    padding: 10rpx 20rpx;
    color: #595d5e;
    font-size: 28rpx;
    height: 60rpx;
    margin-bottom: 30rpx;
    .goods-counts-text {
      margin: 0 10rpx;
    }
  }
  .content-box {
    display: flex;
    padding: 20rpx;
    .goods-list-image {
      width: 200rpx;
      height: 200rpx;
      overflow: hidden;
      margin-right: 20rpx;
    }
    .goods-content {
      display: flex;
      flex-direction: column;
      flex: 1;
      .goods-content-title {
        font-size: 30rpx;
        font-weight: bold;
        color: #333;
      }
      text {
        color: #777;
        font-size: 26rpx;
        margin-bottom: 8rpx;
      }
    }
  }
}
.slot-button {
  display: flex;
  .slot-button-text {
    display: flex;
    justify-content: center;
    align-items: center;
    width: 100rpx;
    font-size: 28rpx;
    height: 100%;
  }
}

</style>
