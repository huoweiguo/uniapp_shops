<template>
	<view class="main">
		<view class="main-search">
			<uni-section class="search-box">
				<uni-easyinput prefixIcon="search" suffixIcon="person-filled" v-model="value"
					placeholder="商品名称/条形码/货号/简拼">
				</uni-easyinput>
			</uni-section>
			<view class="search-icon">
				<uni-icons type="person-filled" size="20" color="#666"></uni-icons>
			</view>
		</view>
		<view class="main-content">
			<view class="main-sort">
				<picker @change="bindPickerChange" :value="index" :range="array">
					<view class="uni-input">{{index>=0?array[index]:'排序'}}</view>
				</picker>
				<uni-icons type="down" color="#666"></uni-icons>
			</view>
			<view class="stock">
				实际库存：1000
				&emsp;
				|
				&emsp;
				总金额：¥ 0.00
			</view>
		</view>
		<view class="commodity">
			<image src="../../static/2.png" class="commodity-image"></image>
			<view class="commodity-msg">
				<view class="commodity-msg-name">示例商品（建议试用后删除）</view>
				<view>--</view>
				<view>库存：10000件</view>
				<view>总金额：¥0.00</view>
			</view>
		</view>
		<view class="commodity">
			<image src="../../static/3.png" class="commodity-image"></image>
			<view class="commodity-msg">
				<view class="commodity-msg-name">琅琅脆清新黄瓜味山药脆片）</view>
				<view>--</view>
				<view>库存：10000袋</view>
				<view>总金额：¥0.00</view>
			</view>
		</view>
		<uni-load-more :status="status"/>
		<view class="instructions" @click="goUrl">
			点击展开新手指引
			<uni-icons type="up" color="#07fbe3"></uni-icons>
		</view>
	</view>
</template>

<script>
	export default {
		data() {
			return {
				array: ['价格从高到低', '价格从高到低', '库存从多到少', '库存从少到多'],
				index: -1,
				status: 'noMore', // more 加载更多，loading 加载中，noMore 没有更多
			}
		},
		methods: {
			bindPickerChange(e) {
				console.log('picker发送选择改变，携带值为', e.detail.value)
				this.index = e.detail.value
			},
			goUrl () {
			  uni.navigateTo({
			    url: "/pages/businessSituation/businessSituation"
			  })
			}
		}
	}
</script>

<style scoped lang="scss">
	.main {
		background-color: #f9f6f6;
		padding-bottom: 70rpx;
		height: 100vh;
		position: relative;
		box-sizing: border-box;

		.main-search {
			height: 70rpx;
			display: flex;
			padding: 30rpx;
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
			padding: 20rpx;

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

			&-image {
				width: 150rpx;
				height: 150rpx;
				margin-right: 20rpx;
				border-radius: 5rpx;
			}

			&-msg {
				&-name {
					color: #333 !important;
				}
				view {
					color: #666;
				}
			}
		}
		
		.instructions{
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