<template>
	<view class="main">
		<view class="main-search">
			<uni-section class="search-box">
				<uni-easyinput prefixIcon="search" v-model="pageReqVO.name" placeholder="商品名称/条形码/货号/简拼"
					@input="search"></uni-easyinput>
			</uni-section>
		</view>
		<!-- <view class="main-content">
			<view class="main-sort">
				<picker @change="bindPickerChange" :value="index" :range="array">
					<view class="uni-input">{{index>=0?array[index]:'排序'}}</view>
				</picker>
				<uni-icons type="down" color="#666"></uni-icons>
			</view>
			<view class="stock">
				实际库存：1000 &emsp; | &emsp; 总金额：¥ 0.00
			</view>
		</view> -->
		<scroll-view class="scroll-view_H" scroll-y lower-threshold="50" @scrolltolower="scrollToLower">
			<view class="commodity" v-for="item in list" :key="item.id">
				<image :src="item.pic" class="commodity-image"></image>
				<view class="commodity-msg">
					<view class="commodity-msg-name">{{ item.productName }}</view>
					<view class="fc6">产品编号：{{ item.productId }}</view>
					<view class="fc6">仓库名称：{{ item.warehouseName }}</view>
					<view class="fc6">库存：{{ item.count }}</view>
					<view class="fc6">进货价：&yen;{{ item.purchasePrice?.toFixed(2) }}</view>
				</view>
			</view>
      <uni-load-more :status="status" />
		</scroll-view>
		
		<!-- <view class="instructions" @click="goUrl">
			点击展开新手指引
			<uni-icons type="up" color="#07fbe3"></uni-icons>
		</view> -->
	</view>
</template>

<script>
	import {
		stockQuery
	} from '@/api/common.js'
	export default {
		data() {
			return {
				array: ['价格从高到低', '价格从高到低', '库存从多到少', '库存从少到多'],
				index: -1,
				status: 'noMore', // more 加载更多，loading 加载中，noMore 没有更多
				list: [],
				total: 0,
				pageReqVO: {
					name: '',
					pageNo: 1,
					pageSize: 10
				},
        timer: null
			}
		},
		onLoad() {
			this.getStockList()
		},
		methods: {
			search(e) {
        clearTimeout(this.timer)
        this.timer = setTimeout(() => {
          this.pageReqVO.name = e;
          this.pageReqVO.pageNo = 1
          this.list = []
          this.getStockList()
        }, 200)
			},
			bindPickerChange(e) {
				console.log('picker发送选择改变，携带值为', e.detail.value)
				this.index = e.detail.value
			},

			scrollToLower() {
				const currentCount = this.pageReqVO.pageSize * this.pageReqVO.pageNo
				if (currentCount < this.total) {
					this.pageReqVO.pageNo++
					this.status = 'loading'
					this.getStockList()
				} else {
					this.status = 'noMore'
				}
			},

			async getStockList() {
        uni.showToast({
          icon: 'loading',
          title: '加载中...'
        })
				const res = await stockQuery(this.pageReqVO)
				this.status = 'more'
        uni.hideToast()
				if (res.code === 0) {
					this.list = [...this.list, ...res.data.list]
					this.total = res.data.total || 0
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

<style scoped lang="scss">
	.main {
		background-color: #f1f4f9;
		padding-bottom: 70rpx;
		min-height: 100vh;
		position: relative;
		box-sizing: border-box;

		.main-search {
			height: 70rpx;
			display: flex;
			padding: 30rpx 30rpx 0;
			align-items: center;

			.search-box {
				flex: auto;
				display: flex;
				align-items: center;

				.scan-the-code {
					line-height: 36px;
					height: 36px;
					padding: 0 20rpx;
					color: #fff;
					margin-left: -10px;
					z-index: 1;
				}
			}

			.search-icon {
				flex: 0 0 70rpx;
				color: #ff7704;
				text-align: center;
			}
		}

		.main-content {
			padding: 20rpx 20rpx 0;

			.main-sort {
				display: flex;
				margin-bottom: 20rpx;
			}

			.stock {
				padding: 20rpx;
				background-color: #fffbfb;
				border-radius: 3rpx;
				color: #999;
			}

		}

		.commodity {
			display: flex;
			padding: 20rpx;
			background-color: #fff;
			margin: 20rpx;
			border-radius: 5rpx;

			.commodity-image {
				width: 200rpx;
				height: 170rpx;
				margin-right: 20rpx;
				border-radius: 5rpx;
			}

			.commodity-msg {
				flex: 1;
				overflow: hidden;

				.fc6 {
					color: #999;
					font-size: 24rpx;
					margin-top: 10rpx;
				}

				.commodity-msg-name {
					color: #333 !important;
					font-size: 28rpx;
				}
			}
		}

		.scroll-view_H {
			height: 100vh;
		}

		.instructions {
			width: 100%;
			height: 70rpx;
			line-height: 70rpx;
			background-color: #d5f9f5;
			text-align: center;
			color: #07fbe3;
			position: absolute;
			bottom: 0;
			padding-bottom: 70rpx;
		}
	}
</style>