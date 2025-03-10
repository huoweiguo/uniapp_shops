<template>
  <view class="search-order">
    <uni-section class="search-box">
    	<uni-easyinput prefixIcon="search" v-model="params.no"
    		placeholder="请输入订单编号" clearButton="none" @input="search">
    	</uni-easyinput>
    </uni-section>
    
    <scroll-view class="scroll_container" scroll-y="true">
    	<view class="scroll-view-item">
    		<view v-for="(item, index) in list" :key="index">
    			<orderItem :list="item" />
    		</view>
    	</view>
      <view class="no-data" v-if="list.length === 0">暂无数据</view>
    </scroll-view>
  </view>
</template>

<script>
  import { orderList } from '@/api/common.js'
  import orderItem from '@/components/orderItem.vue'
  export default {
    components: {
      orderItem
    },
    data() {
      return {
        params: {
          no: '',
          pageNo: 1,
          pageSize: 20
        },
        list: [],
        timer: null
      }
    },
    methods: {
      search (e) {
        if (e.replace(/\s+/g, '') === '') {
          this.list = []
          return false
        }
        clearTimeout(this.timer)
        this.timer = setTimeout(() => {
          this.params.no = e
          this.getSearchOrder()
        }, 200) 
      },
      
      async getSearchOrder () {
        // 获取全部
        this.list = []
        uni.showToast({
          icon: 'loading',
          title: '加载中'
        })
        const res = await orderList(this.params);
        uni.hideToast()
        if (res.code === 0) {
          this.list = res.data.list || []
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
  .search-order {
    padding: 20rpx;
    min-height: calc(100vh - 40rpx);
    background-color: #f1f1f1;
    .scroll_container {
    	padding-top: 20rpx;
    	height: calc(100vh - 110rpx);
      box-sizing: border-box;
      .scroll-view-item {
      	padding: 20rpx 0 40rpx;
      }
    }
    .no-data {
      padding: 20rpx 0;
      text-align: center;
      color: #777;
      font-size: 28rpx;
    }
  }
</style>
