<template>
  <view class="goods-content">
    <view class="goods-scan">
      <uni-icons type="scan" size="18" color="#0990e2"></uni-icons>
      <text>扫条形码快速录入商品</text>
    </view>
    <view class="goods-context">
      <view class="goods-form">
        <!-- 基础用法，不包含校验规则 -->
        <uni-forms ref="baseForm" label-width="160rpx" :modelValue="goodsInfo">
          <uni-forms-item label="商品名称" required>
            <uni-easyinput v-model="goodsInfo.name" placeholder="请输入商品名称" />
          </uni-forms-item>
          <uni-forms-item label="编号/货号" required>
            <uni-easyinput v-model="goodsInfo.sid" placeholder="请输入编号/货号" />
          </uni-forms-item>
          <uni-forms-item label="商品分类" required>
            <uni-data-select v-model="goodsInfo.cataId" :localdata="range" @change="change"></uni-data-select>
          </uni-forms-item>
          <uni-forms-item label="图片" required>
            <view class="upload_file" @tap="chooseImage">
              <uni-icons type="plusempty" size="30"></uni-icons>
            </view>
          </uni-forms-item>
          <uni-forms-item label="单位" required>
            <uni-data-select v-model="goodsInfo.cataId" :localdata="range"  @change="change"></uni-data-select>
          </uni-forms-item>
          <uni-forms-item label="条形码" required>
            <uni-easyinput v-model="goodsInfo.txCode" placeholder="请输入" />
          </uni-forms-item>
          <uni-forms-item label="多规格">
            <switch @change="switchRule" style="transform:scale(0.8)"/>
          </uni-forms-item>
          <uni-forms-item label="规格">
            <uni-easyinput v-model="goodsInfo.txCode" :disabled="!goodsInfo.disableRule" placeholder="请输入" />
          </uni-forms-item>
          <uni-forms-item label="进货价" required>
            <uni-easyinput v-model="goodsInfo.txCode" placeholder="请输入" />
          </uni-forms-item>
        </uni-forms>
      </view>
    </view>
    
    <view class="fixed-save"><button type="primary" size="mini" style="width: 100%;">保存</button></view>
  </view>
</template>

<script>
  export default {
    data() {
      return {
        goodsInfo: {
          name: '',
          sid: '',
          cataId: 1,
          txCode: '',
          disableRule: false
        },
        range: [
          { value: 0, text: "篮球" },
          { value: 1, text: "足球" },
          { value: 2, text: "游泳" },
        ],
      }
    },
    methods: {
      change (e) {},
      chooseImage () {
        uni.chooseImage({
        	count: 1,
        	success: function(res) {}
        });
      },
      switchRule (e) {
        this.goodsInfo.disableRule = e.target.value
      }
    }
  }
</script>

<style lang="scss" scoped>
  .goods-content {
    min-height: 100vh;
    background-color: #f1f4f9;
    padding: 20rpx;
    box-sizing: border-box;
    margin-bottom: 20rpx;
    .goods-scan {
      display: flex;
      justify-content: center;
      align-items: center;
      height: 80rpx;
      background-color: #fff;
      border-radius: 10rpx;
      color: #0990e2;
      font-size: 28rpx;
      font-weight: bold;
      margin-bottom: 20rpx;
      text {
        margin-left: 10rpx;
      }
    }
  }
  .goods-context {
    padding-bottom: 100rpx;
    .goods-form {
      background-color: #fff;
      padding: 20rpx;
      border-radius: 10rpx;
    }
  }
  .fixed-save {
    width: 100%;
    position: fixed;
    bottom: 50rpx;
    left: 0rpx;
    padding: 0 20rpx;
    box-sizing: border-box;
    z-index: 100;
  }
</style>
