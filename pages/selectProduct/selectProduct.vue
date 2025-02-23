<template>
	<view class="main-search">
		<uni-section class="search-box">
			<uni-easyinput prefixIcon="search" suffixIcon="scan" @iconClick="scanCode" v-model="value"
				placeholder="名称/条形码/编号货品/简拼" clearButton="none">
				<!-- <uni-easyinput prefixIcon="search" suffixIcon="" v-model="value" placeholder="名称/条形码/编号货品/简拼" clearButton="none" > -->
			</uni-easyinput>
			<!-- <view class="scan-the-code" @click="scanCode">
				<uni-icons type="scan" size="20" color="#333"></uni-icons>
			</view> -->
		</uni-section>
	</view>
	<view class="main-content">
		<view class="aside">
			<view class="aside-item active">全部</view>
			<view class="aside-item">一次性用品</view>
			<view class="aside-item">圣诞专区</view>
			<view class="aside-item">化妆用品</view>
			<view class="aside-item">精选福袋下单必看</view>
			<view class="aside-item">精选福袋</view>
			<view class="aside-item">降温保暖</view>
			<view class="aside-item">美妆小样</view>
			<view class="aside-item">JK制服</view>
			<view class="aside-item">男士服装</view>
			<view class="aside-item">毛绒玩具</view>
			<view class="aside-item">女士上衣</view>
			<view class="aside-item">本周新品</view>
			<view class="aside-item">女士职业工装</view>
			<view class="aside-item">店铺公告</view>
			<view class="aside-item">女士套装</view>
		</view>
		<view class="content">
			<view class="content-item" @click="toggleClick">
				<image src="../../static/2.png" class="content-item-image"></image>
				<view class="content-item-msg">
					<view>琅琅脆清新黄瓜味山药脆片</view>
					<view>库存：0袋</view>
				</view>
			</view>
			<view class="content-item" @click="toggleClick">
				<image src="../../static/2.png" class="content-item-image"></image>
				<view class="content-item-msg">
					<view>示例商品（建议试用后删除）</view>
					<view>库存：1000袋</view>
				</view>
			</view>

			<uni-load-more :status="status" />
		</view>
		<uni-popup ref="popup" background-color="#fff" @change="change">
			<view class="popup-content">
				<view class="popup-content-goods">
					<image src="../../static/2.png" class="popup-content-image"></image>
					<text>示例商品（建议试用后删除）</text>
				</view>
				<view class="popup-content-count">
					<view class="popup-content-count-item">
						<view>库存数量</view>
						<view>1000</view>
					</view>
					<view class="popup-content-count-item">
						<view>实际数量</view>
						<view>
							<uni-icons type="minus" size="20" color="#99fdf9"></uni-icons>
							<uni-easyinput v-model="value" placeholder="请输入内容" clearable="false"></uni-easyinput>
							<uni-icons type="plus-filled" size="20" color="#5ffff1"></uni-icons>
						</view>
					</view>
				</view>
				<view class="popup-content-profitLoss">盈亏：0件</view>
				<view class="popup-content-remark">
					<view>备注：</view>
					<uni-easyinput v-model="value" placeholder="请输入内容" clearable="false"
						@input="input"></uni-easyinput>
					<uni-icons type="scan" size="20" color="#333"></uni-icons>
				</view>
			</view>
			<view class="popup-footer">
				<view>盈亏数量：<text>0</text></view>
				<view class="popup-footer-btn">选好了</view>
			</view>
		</uni-popup>
	</view>
</template>

<script>
	export default {
		data() {
			return {
				value: '1000',
				status: 'noMore', // more 加载更多，loading 加载中，noMore 没有更多
				placeholderStyle: "color:#333;font-size:28rpx",
				styles: {
					color: '#333',
					borderColor: '#fff'
				},
				style: {
					backgroundColor: '#5ffff1',
					borderColor: '#fff'
				}
			}
		},
		methods: {
			scanCode(e) {
				if (e == 'prefix') {
					return false
				}
				// 只允许通过相机扫码
				uni.scanCode({
					onlyFromCamera: true,
					success: function(res) {
						console.log('条码类型：' + res.scanType);
						console.log('条码内容：' + res.result);
					}
				});
			},
			toggleClick(item) {
				// open 方法传入参数 等同在 uni-popup 组件上绑定 type属性
				this.$refs.popup.open('bottom')
			},
			change(e) {
				console.log('当前模式：' + e.type + ',状态：' + e.show);
			},

			input(e) {
				console.log('输入内容：', e);
			}
		}
	}
</script>

<style lang="scss" scoped>
	.main-search {
		height: 70rpx;
		display: flex;
		padding: 30rpx;
		align-items: center;

		.search-icon {
			flex: 0 0 100rpx;
			color: #ff7704;
		}

		.search-box {
			// position: relative;
			width: 100%;
			// .scan-the-code {
			// 	position: absolute;
			// 	top: 0;
			// 	right: 0;
			// 	line-height: 36px;
			// 	height: 36px;
			// 	padding: 0 20rpx;
			// 	// background-color: #ff7704;
			// 	border-top-right-radius: 5px;
			// 	border-bottom-right-radius: 5px;
			// 	color: #333;
			// 	margin-left: -10px;
			// 	z-index: 1;
			// }
		}
	}

	.main-content {
		height: calc(100vh - 135rpx);
		display: flex;
		justify-content: space-between;

		.aside {
			height: 100%;
			flex: 0 0 200rpx;
			background-color: #efefef;
			overflow-x: hidden;
			overflow-y: auto;
			font-size: 28rpx;

			.aside-item {
				padding: 20rpx 30rpx;
				position: relative;
				text-align: center;

				&:before {
					content: '';
					width: 2px;
					height: 100%;
					background-color: #efefef;
				}

				&.active {
					background-color: #fff;

					&:before {
						background-color: #ff7704;
					}
				}
			}
		}

		.content {
			height: 100%;
			flex: auto;
			background-color: #fff;
			overflow-y: auto;
			overflow-x: hidden;

			&-item {
				background-color: #fff;
				margin-bottom: 20rpx;
				display: flex;
				padding: 20rpx;
				align-items: center;


				&:last-child {
					margin-bottom: 0;
				}

				.content-item-image {
					width: 120rpx;
					height: 130rpx;
					overflow: hidden;
					margin-right: 20rpx;
				}

				.content-item-msg {
					font-weight: 400;
					font-size: 28rpx;
				}

			}
		}
	}

	.popup-content {
		// @include flex;
		align-items: center;
		justify-content: center;
		padding: 15px;
		// height: 50px;
		background-color: #ddd;
		border-top-left-radius: 10rpx;
		border-top-right-radius: 10rpx;
		font-size: 28rpx;

		&-image {
			width: 120rpx;
			height: 120rpx;
		}

		&-goods {
			margin-bottom: 20rpx;
			display: flex;

			text {
				font-size: 28rpx;
				margin-left: 20rpx;
			}
		}

		&-count {
			border-radius: 5rpx;
			background: #fff;
			padding: 0 20rpx;

			&-item {
				padding: 20rpx 0;
				display: flex;
				justify-content: space-between;
				align-items: center;

				&:first-child {
					border-bottom: 1px solid #efefef;
				}

				view {
					height: 57rpx;
					line-height: 57rpx;

					&:last-child {
						display: flex;
						align-items: center;

						.uni-easyinput {
							width: 200rpx;
							color: #000;
						}
					}
				}
			}
		}

		&-profitLoss {
			background-color: #fff;
			padding: 40rpx 20rpx;
			text-align: center;
			margin-top: 20rpx;
		}

		&-remark {
			margin: 20rpx 0;
			padding: 20rpx;
			display: flex;
			justify-content: space-between;
			align-items: center;
			background-color: #fff;
		}
	}

	.popup-footer {
		padding: 30rpx 20rpx;
		display: flex;
		justify-content: space-between;
		align-items: center;
		font-size: 28rpx;

		text {
			color: #ff7704;
		}

		&-btn {
			color: #fff;
			background: #ff7704;
			border-radius: 10rpx;
			width: 200rpx;
			padding: 40rpx;
			text-align: center;
			font-weight: 500;
			font-size: 30rpx;
		}
	}
</style>