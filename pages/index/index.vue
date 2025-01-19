<template>
	<view class="content">
    <view class="order_header">
      <view class="search-box">
        <uni-section>
          <uni-search-bar placeholder="请输入订单编号" bgColor="#efefef" @confirm="search" />
        </uni-section>
      </view>
      
      <view class="order_status">
        <text class="order_status_text" :class="{'status_active': current === index}" @tap="handleTap(index)" v-for="(item, index) in orderStatus">{{ item }}</text>
      </view>
    </view>
    <scroll-view class="scroll_container" scroll-y="true" @scroll="scroll">
      <view class="scroll-view-item" v-show="current === 0">
        <orderItem :list="allList"/>
      </view>
      <view class="scroll-view-item" v-show="current === 1">
        <orderItem :list="waitPickedList"/>
      </view>
      <view class="scroll-view-item" v-show="current === 2">
        <orderItem :list="pickedList"/>
      </view>
      <view class="scroll-view-item" v-show="current === 3">
        <orderItem :list="finishList"/>
      </view>
      <view class="scroll-view-item" v-show="current === 4">
        <orderItem :list="cancelList"/>
      </view>
    </scroll-view>
	</view>
</template>

<script>
  import orderItem from '../../components/orderItem.vue'
	export default {
    components: {
      orderItem
    },
		data() {
			return {
        orderStatus: ['全部','待拣货','已拣货','已完成', '已取消'],
        current: 0,
        allList: [],
        waitPickedList: [],
        pickedList: [],
        finishList: [],
        cancelList: []
      }
		},
		onLoad() {},
		methods: {
      search (e) {},
      handleTap (index) {
        this.current = index
      },
      scroll (e) {
        console.log(e)
      }
		}
	}
</script>

<style>
  .order_header {
    position: fixed;
    width: 100%;
    background-color: #fff;
    z-index: 100;
  }
  .scroll_container {
    padding-top: 200rpx;
  }
  .search-box {
    width: 100%;
  }
  .order_status {
    width: 100%;
    padding: 20rpx;
    display: flex;
    justify-content: space-between;
    box-sizing: border-box;
  } 
  .order_status_text {
    height: 60rpx;
    text-align: center;
    font-size: 30rpx;
    font-family: PingFangSC-Regular;
  }
  .status_active {
    position: relative;
    color: #2b9939;
  }
  .status_active::before {
    position: absolute;
    left: 0;
    bottom: 0;
    content: '';
    display: block;
    width: 100%;
    height: 6rpx;
    background-color: #2b9939;
    border-radius: 3rpx;
  }
  .scroll-view-item {
    padding: 20rpx 20rpx 40rpx;
  }
</style>
