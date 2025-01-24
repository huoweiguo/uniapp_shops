<template>
  <view class="my_container">
    <view class="my_header_box" :style="'padding-top:'+ top +'px'"></view>
    <view class="deposit_box">
      <text class="deposit_small_text">当前余额</text>
      <text class="deposit_amount">&yen; 18.55</text>
    </view>
    <view class="deposit_outer">
      <view class="deposit_item_amount">
        <view class="deposit_inner" v-for="(item, index) in amountArr" :key="index" @tap="setAmount(index, item)" :class="{'activeAmount': index === currentIndex }">
          <text>&yen;</text>
          <text>{{ item.amount }}</text>
        </view>
      </view>
      <view class="deposit-ipt">
        <input type="text" placeholder="其他金额" v-model="amount" class="other_input"/>
        <text>*充值后不能取现和退回。</text>
      </view>
    </view>
    <view class="deposit_pay">
      <text class="deposit_fs">支付方式</text>
      <view class="deposit_wechat">
        <view class="deposit_wechat_name"><image class="deposit_wechat_image" src="../../static/wechat.png"/>微信支付</view>
        <image class="deposit_checked" src="../../static/check-checked.png"/>
      </view>
    </view>
    
    <button class="pay_btn">立即支付</button>
  </view>
</template>

<script>
  export default {
    data() {
      return {
        top: 0,
        selectAmount: '',
        amount: '',
        currentIndex: 0,
        amountArr: [
          { id: 0, amount: 0.1 },
          { id: 1, amount: 1},
          { id: 2, amount: 10 },
          { id: 3, amount: 50 },
          { id: 4, amount: 100 },
          { id: 5, amount: 300 },
          { id: 6, amount: 500 },
          { id: 7, amount: 1000 }
        ]
      }
    },
    onLoad () {
      this.getSafeArea()
    },
    
    methods: {
      getSafeArea () {
        uni.getSystemInfo({
          success: (res) => {
            if (res.safeAreaInsets) {
              this.top = res.safeAreaInsets.top
            }
          }
        })
      },
      
      setAmount (index, item) {
        this.currentIndex = index
        this.selectAmount = item.amount
      }
    }
  }
</script>

<style lang="scss" scoped>
.my_container {
  background-color: #f3f3f3;
  height: 100vh;
}
.my_header_box {
  background-color: #78cf7e;
}
.deposit_box {
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;
  background-color: #78cf7e;
  padding: 80rpx 0 130rpx;
  .deposit_small_text {
    color: #fff;
    font-size: 32rpx;
    margin-bottom: 30rpx;
  }
  .deposit_amount {
    font-size: 60rpx;
    color: #fff;
  }
}
.deposit_outer {
  width: 80%;
  margin: -80rpx auto 50rpx;
  padding: 30rpx;
  background-color: #fff;
  border-radius: 16rpx;
  .deposit_item_amount {
    display: flex;
    flex-wrap: wrap;
    .deposit_inner {
      display: flex;
      align-items: center;
      justify-content: center;
      width: 30%;
      height: 100rpx;
      border: 2rpx solid #78cf7e;
      border-radius: 16rpx;
      margin: 8rpx;
      text {
        color: #3f3f3f;
        &:first-child {
          font-size: 32rpx;
        }
        &:last-child {
          font-size: 42rpx;
          font-weight: 500;
        }
      }
    }
    .activeAmount {
      background-color: #78cf7e;
      text {
        color: #fff;
      }
    }
  }
  .deposit-ipt {
    display: flex;
    flex-direction: column;
    margin-top: 30rpx;
    .other_input {
      border: 2rpx solid #78cf7e;
      height: 70rpx;
      padding: 0 20rpx;
      border-radius: 10rpx;
      box-sizing: border-box;
    }
    text {
      display: flex;
      justify-content: center;
      color: #f00;
      font-size: 28rpx;
      text-align: center;
      margin-top: 18rpx;
    }
  }
}
.deposit_pay {
  margin: 30rpx;
  background-color: #fff;
  padding: 20rpx;
  .deposit_fs {
    display: flex;
    font-size: 32rpx;
    font-weight: bold;
    color: #333;
    margin-bottom: 20rpx;
  }
  .deposit_wechat {
    display: flex;
    justify-content: space-between;
    .deposit_checked {
      width: 32rpx;
      height: 32rpx;
    }
    .deposit_wechat_name {
      display: flex;
      align-items: center;
      font-size: 28rpx;
      .deposit_wechat_image {
        height: 32rpx;
        width: 34rpx;
        margin-right: 10rpx;
      }
    }
  }
}
</style>
