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
    <scroll-view class="scroll_container" scroll-y="true" @scrolltolower="scrolltolower" lower-threshold="50">
      <view class="scroll-view-item" v-show="current === 0">
        <view v-for="(item, index) in allList" :key="index">
          <orderItem :list="item"/>
        </view>
      </view>
      <uni-load-more v-show="current === 0" :status="allStatus"></uni-load-more>
      <view class="scroll-view-item" v-show="current === 1">
        <view v-for="(item, index) in waitPickedList" :key="index">
          <orderItem :list="item"/>
        </view>
      </view>
      <uni-load-more v-show="current === 1" :status="waitPickedStatus"></uni-load-more>
      <view class="scroll-view-item" v-show="current === 2">
        <view v-for="(item, index) in pickedList" :key="index">
          <orderItem :list="item"/>
        </view>
      </view>
      <uni-load-more v-show="current === 2" :status="pickedStatus"></uni-load-more>
      <view class="scroll-view-item" v-show="current === 3">
        <view v-for="(item, index) in finishList" :key="index">
          <orderItem :list="item"/>
        </view>
      </view>
      <uni-load-more v-show="current === 3" :status="finishStatus"></uni-load-more>
      <view class="scroll-view-item" v-show="current === 4">
        <view v-for="(item, index) in cancelList" :key="index">
          <orderItem :list="item"/>
        </view>
      </view>
      <uni-load-more v-show="current === 4" :status="cancelStatus"></uni-load-more>
    </scroll-view>
	</view>
</template>

<script>
  import { orderList } from '@/api/common.js'
  import orderItem from '../../components/orderItem.vue'
	export default {
    components: {
      orderItem
    },
		data() {
			return {
        orderStatus: ['全部','拣货中','配送中','已完成', '已取消'], // 3: 拣货中 4:配送中 5: 已取消 1: 已完成
        current: 0,
        pageSize: 10,
        allNum: 1,
        waitPickNum: 1,
        pickedNum: 1,
        finishNum: 1,
        cancelNum: 1,
        allStatus: 'more',
        waitPickedStatus: 'more',
        pickedStatus: 'more',
        finishStatus: 'more',
        cancelStatus: 'more',
        allTotal: 0,
        waitPickedTotal: 0,
        pickedTotal: 0,
        finishTotal: 0,
        cancelTotal: 0,
        allList: [],
        waitPickedList: [],
        pickedList: [],
        finishList: [],
        cancelList: []
      }
		},
		onLoad() {
      // 获取全部
      this.getOrderList({
        sourceStatus: '',
        pageNo: this.allNum,
        pageSize: this.pageSize
      })
      // 获取拣货中
      this.getOrderList({
        sourceStatus: 3,
        pageNo: this.waitPickNum,
        pageSize: this.pageSize
      })
      // 获取配送中
      this.getOrderList({
        sourceStatus: 4,
        pageNo: this.pickedNum,
        pageSize: this.pageSize
      })
      // 获取已完成
      this.getOrderList({
        sourceStatus: 1,
        pageNo: this.finishNum,
        pageSize: this.pageSize
      })
      // 获取已取消
      this.getOrderList({
        sourceStatus: 5,
        pageNo: this.cancelNum,
        pageSize: this.pageSize
      })
    },
		methods: {
      search (e) {},
      async getOrderList (params) {
        const res = await orderList(params)
        if (res.code === 0) {
          const data = res.data.list || []
          if (params.sourceStatus == '') {
            this.allList = [...this.allList, ...data]
            this.allTotal = res.data.total || 0
            if (this.allNum * this.pageSize >= this.allTotal) {
              this.allStatus = 'noMore'
            } else {
              this.allStatus = 'more'
            }
          } else if (params.sourceStatus == '3') {
            this.waitPickedList = [...this.waitPickedList, ...data]
            console.log(3, this.waitPickedList)
            this.waitPickedTotal = res.data.total || 0
            if (this.waitPickNum * this.pageSize >= this.waitPickedTotal) {
              this.waitPickedStatus = 'noMore'
            } else {
              this.waitPickedStatus = 'more'
            }
          } else if (params.sourceStatus == '4') {
            this.pickedList = [...this.pickedList, ...data]
            this.pickedTotal = res.data.total || 0
            if (this.pickedNum * this.pageSize >= this.pickedTotal) {
              this.pickedStatus = 'noMore'
            } else {
              this.pickedStatus = 'more'
            }
          } else if (params.sourceStatus == '1') {
            this.finishList = [...this.finishList, ...data]
            this.finishTotal = res.data.total || 0
            if (this.finishNum * this.pageSize >= this.finishTotal) {
              this.finishStatus = 'noMore'
            } else {
              this.finishStatus = 'more'
            }
          } else if (params.sourceStatus == '5') {
            this.cancelList = [...this.cancelList, ...data]
            this.cancelTotal = res.data.total || 0
            if (this.cancelNum * this.pageSize >= this.cancelTotal) {
              this.cancelStatus = 'noMore'
            } else {
              this.cancelStatus = 'more'
            }
          }
        } else {
          uni.showToast({
            icon: 'none',
            title: res.msg
          })
        }
      },
      handleTap (index) {
        this.current = index
      },
      scrolltolower () {
        switch (this.current) {
          case 0:
            if (this.allNum * this.pageSize < this.allTotal) {
              this.allNum++
              // 获取全部
              this.allStatus = 'loading'
              this.getOrderList({
                sourceStatus: '',
                pageNo: this.allNum,
                pageSize: this.pageSize
              })
            }
            break;
          case 1: 
            if (this.waitPickNum * this.pageSize < this.waitPickedTotal) {
              this.waitPickNum++
              this.waitPickedStatus = 'loading'
              this.getOrderList({
                sourceStatus: 3,
                pageNo: this.waitPickNum,
                pageSize: this.pageSize
              })
            }
            break;
          case 2:
            if (this.pickedNum * this.pageSize < this.pickedTotal) {
              this.pickedNum++
              this.pickedStatus = 'loading'
              this.getOrderList({
                sourceStatus: 4,
                pageNo: this.pickedNum,
                pageSize: this.pageSize
              })
            }
            break;
          case 3:
            if (this.finishNum * this.pageSize < this.finishTotal) {
              this.finishNum++
              // 获取已完成
              this.finishStatus = 'loading'
              this.getOrderList({
                sourceStatus: 1,
                pageNo: this.finishNum,
                pageSize: this.pageSize
              })
            }
            break;
          case 4:
            if (this.cancelNum * this.pageSize < this.cancelTotal) {
              this.cancelNum++
              this.cancelStatus = 'loading'
              this.getOrderList({
                sourceStatus: 5,
                pageNo: this.cancelNum,
                pageSize: this.pageSize
              })
            }
            break;
          default:
            break;
        }
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
    height: calc(100vh - 200rpx);
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
