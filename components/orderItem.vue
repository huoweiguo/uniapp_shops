<template>
  <view class="order_container">
    <view class="order_status_desc">
      <view class="order_status_outer">
        <text class="order_status_name order_status_1">已完成</text>
        <text class="order_id">158965423AD4X</text>
      </view>
      <!-- <text>已取消</text>
      <text>待拣货</text>
      <text>已拣货</text> -->
      <text class="order_dilivery">立即送出 | 12:28前到达</text>
    </view>
    <view class="order_mall">
      <cover-image class="order_mall_icon" src="../static/mall-f.png"></cover-image>
      <text class="order_mall_name">上海人民广场人民公园店</text>
    </view>
    <view class="order_user">
      <view class="order_user_info">
        <view class="order_user_outer">
          <text class="mall_user_name">霍维国</text>
          <text class="mall_user_tag">门店新客</text>
          <text class="mall_user_phone">18725486580</text>
        </view>
        <cover-image @tap="callPhone('18721586596')" class="mall_phone" src="../static/phone-icon.png"></cover-image>
      </view>
      <view class="order_user_address">
        安徽省六安市金安区三十铺镇枣园小区,安徽省六安市金安区三十铺镇枣园小区。
      </view>
      <view class="order_times">
        <text class="order_times_text">下单时间：</text>
        <text class="order_times_sec">05-01 18:20</text>
      </view>
      <view class="order_user_info">
        <view class="order_user_outer">
          <text class="mall_user_name">jackson</text>
          <text class="user_tag">骑手</text>
          <text class="mall_user_phone">18725486580</text>
        </view>
        <cover-image @tap="callPhone('18721586596')" class="mall_phone" src="../static/phone-icon.png"></cover-image>
      </view>
      <view class="order_remark">
        <text class="order_remark_tag">备注</text>
        <text class="order_remark_text">收货人隐私号 178514894140566，手机号138****0931</text>
      </view>
      <view class="order_button">
        <text class="order_button_btn">开门</text>
        <text class="order_button_btn">添加商品</text>
      </view>
      <view class="order_number">
        <text>1</text>件商品，预计收入：<text>&yen;128.50</text>
      </view>
    </view>
    <uni-collapse class="my-collapse">
      <uni-collapse-item title="展开收起信息" title-border="false" :border="false" :show-animation="true">
        <view class="order_content">
          <view class="mb30"><text class="order_button_btn_2">改库存</text></view>
          <view class="order_content_title mb30">蝴蝶结糯米阔腿裤女春秋新款高腰直筒小个子冬季休闲宽松加绒加厚701</view>
          <view class="order_goods_item">
            <view class="order_goods_left">
              <swiper class="swiper" circular indicator-color="#999" indicator-active-color="white" :indicator-dots="indicatorDots" autoplay interval="2000"
              				:duration="duration">
                <swiper-item>
                  <cover-image src="/static/2.png"></cover-image>
                </swiper-item>
                <swiper-item>
                  <cover-image src="/static/3.png"></cover-image>
                </swiper-item>
              </swiper>
            </view>
            <view class="order_goods_right">
              <view class="goods_item">条码：232025757<text>7075</text></view>
              <view class="goods_item">编码：9761103024</view>
              <view class="goods_item_orange">规格：白色80-100斤</view>
              <view class="goods_item">单价：<text>&yen;38.50</text></view>
              <view class="goods_store">
                <view class="goods_store_number">库存：<text>0</text></view>
                <uni-number-box :value="goodsNumber" @change="changeNumber"/>
              </view>
            </view>
          </view>
          <view class="order_info_item">
            <view class="info_item_text"><text>打包费</text><text>&yen; 2.58</text></view>
            <view class="info_item_text"><text>小计</text><text>&yen; 38</text></view>
            <view class="info_item_text"><text>差价</text><text>&yen; 0</text></view>
            <view class="info_item_text"><text>拣货数量</text><text>2</text></view>
            <view class="info_item_text"><text>商品数量</text><text>1</text></view>
            <view class="info_item_charge"><text>预计收入:</text><text>&yen; 32.58</text></view>
            <view class="info_item_charge"><text>顾客实际收入:</text><text>&yen; 30.25</text></view>
          </view>
        </view>
      </uni-collapse-item>
    </uni-collapse>   
  </view>
</template>

<script>
  export default {
    name:"orderItem",
    data() {
      return {
        goodsNumber: 1,
        indicatorDots: true,
        duration: 500
      };
    },
    methods: {
      callPhone (phoneNumber) {
        uni.makePhoneCall({
          phoneNumber: phoneNumber, // 电话号码
          success: function () {
            console.log('拨打电话成功');
          },
          fail: function (err) {
            console.log('拨打电话失败：', err);
          }
        });
      },
      
      changeNumber (value) {
        console.log(value, 'haha')
      }
    },
    options: {
      styleIsolation: 'shared'
    }
  }
</script>

<style scoped>
  >>> .uni-collapse-item__title-wrap {
    flex: none !important;
    width: auto !important;
  }
  >>> .uni-collapse-item__title.uni-collapse-item-border {
    display: flex;
    justify-content: center;
    align-items: center;
  }
  >>> .goods_store .uni-numbox__plus {
    background-color: #ff6d00 !important;
    border-radius: 50%;
    padding: 0 !important;
    width: 46rpx;
    height: 46rpx;
  }
  >>> .goods_store .uni-numbox__value {
    font-size: 32rpx;
    font-weight: bold;
  }
  >>> .goods_store .uni-numbox__plus .uni-numbox--text {
    color: #fff !important;
  }
  >>> .goods_store .uni-numbox__minus {
    border: 2rpx solid #ff6d00;
    border-radius: 50%;
    color: #ff6d00;
    padding: 0 !important;
    width: 46rpx;
    height: 46rpx;
    box-sizing: border-box;
  }
  >>> .goods_store .uni-numbox__minus .uni-numbox--text {
    color: #ff6d00 !important;
  }
</style>
<style lang="scss" scoped>
.order_container {
  .order_status_desc {
    background-color: rgba(255,247,211,1);
    padding: 30rpx 30rpx 30rpx 0;
    font-family: PingFangSC-Regular;
    margin-bottom: 20rpx;
    .order_status_outer {
      display: flex;
      justify-content: space-between;
      align-items: center;
      margin-bottom: 20rpx;
      .order_status_name {
        color: #fff;
        font-size: 28rpx;
        padding: 6rpx 15px;
        border-radius: 0 25rpx 25rpx 0;
      }
      .order_status_1 {
        background-color: #40c37f;
      }
      .order_id {
        font-size: 28rpx;
        color: #f60;
        font-weight: bold;
      }
    }
    .order_dilivery {
      font-family: PingFangSC-Regular;
      font-weight: bold;
      color: #040000;
      font-size: 30rpx;
      padding: 0 20rpx;
    }
  }
  .order_mall {
    display: flex;
    align-items: center;
    margin-bottom: 40rpx;
    .order_mall_icon {
      width: 40rpx;
      height: 40rpx;
      margin-right: 10rpx;
    }
    .order_mall_name {
      font-size: 30rpx;
      color: #030303;
      font-weight: bold;
    }
  }
  .order_user {
    margin-bottom: 50rpx;
    .order_user_info {
      display: flex;
      justify-content: space-between;
      align-items: center;
      margin-bottom: 30rpx;
      .order_user_outer {
        display: flex;
        justify-content: space-between;
        align-items: center;
        .user_tag {
          background-color: #ecf7fd;
          color: #4099d3;
          font-size: 24rpx;
          padding: 6rpx 10rpx;
        }
      }
      .mall_user_name {
        font-weight: bold;
        margin-right: 14rpx;
      }
      .mall_user_tag {
        margin-right: 20rpx;
        color: #40c37f;
        border: 2rpx solid #40c37f;
        font-size: 20rpx;
        padding: 4rpx 8rpx;
        border-radius: 6rpx;
      }
      .mall_user_phone {
        color: #656565;
      }
      .mall_phone {
        width: 40rpx;
        height: 40rpx;
      }
    }
    .order_user_address {
      color: #9f9f9f;
      margin-bottom: 30rpx;
    }
    .order_times {
      display: flex;
      align-items: center;
      margin-bottom: 30rpx;
      .order_times_text {
        color: #aaa;
      }
      .order_times_sec {
        color: #5c5c5c;
      }
    }
    .order_remark {
      background-color: #fff2ea;
      padding: 20rpx;
      margin-bottom: 30rpx;
      .order_remark_tag {
        background-color: #ffe9db;
        color: #d8344d;
        font-size: 28rpx;
        padding: 6rpx 10rpx;
        font-weight: bold;
        margin-right: 10rpx;
      }
      .order_remark_text {
        color: #000;
        font-weight: bold;
        font-size: 28rpx;
      }
    } 
    .order_button {
      display: flex;
      justify-content: space-between;
      align-items: center;
      margin-bottom: 30rpx;
      .order_button_btn {
        color: #ff7704;
        border: 2rpx solid #ff7704;
        font-size: 28rpx;
        padding: 10rpx 30rpx;
        border-radius: 30rpx;
      }
    }
    .order_number {
      display: flex;
      align-items: center;
      text {
        color: #ff7704;
        font-weight: bold;
      }
    }
  }
  .order_complete {
    display: flex;
    justify-content: center;
    align-items: end;
    color: #6d6d6d;
    text {
      color: #666 !important;
    }
  }
}
.order_content {
  padding: 30rpx 0;
  .order_content_title {
    font-size: 32rpx;
    color: #040404;
    font-weight: bold;
  }
  .order_goods_item {
    display: flex;
    margin-bottom: 30rpx;
    .order_goods_left {
      width: 220rpx;
      height: 220rpx;
      overflow: hidden;
      margin-right: 20rpx;
    }
    .order_goods_right {
      flex: 1;
    }
  }
  .goods_item {
    color: #979797;
    margin-bottom: 10rpx;
    text {
      color: #ff051c;
      font-weight: bold;
    }
  }
  .goods_item_orange {
    color: #ff7704;
    margin-bottom: 10rpx;
  }
  .goods_store {
    display: flex;
    justify-content: space-between;
    align-items: center;
    .goods_store_number {
      color: #979797;
      text {
        color: #ff051c;
        font-weight: bold;
      }
    }
  }
  .order_info_item {
    .info_item_text {
      display: flex;
      justify-content: space-between;
      align-items: center;
      margin-bottom: 18rpx;
      text {
        font-size: 28rpx;
        &:first-child {
          color: #9d9d9d;
        }
        &:last-child {
          color: #000;
          font-weight: bold;
        }
      }
    }
    .info_item_charge {
      display: flex;
      justify-content: flex-end;
      align-items: center;
      text {
        font-size: 28rpx;
        &:first-child {
          color: #000;
        }
        &:last-child {
          color: #f87e19;
          font-weight: bold;
          margin-left: 20rpx;
        }
      }
    }
  }
}
.swiper {
  height: 220rpx;
}
.swiper-item {
  display: block;
  height: 220rpx;
  line-height: 220rpx;
  text-align: center;
}
</style>