<template>
	<view class="main-search">
		<view class="search-icon">
			<uni-icons type="person-filled" size="20" color="#ff7704"></uni-icons>
			出库单
		</view>
		<uni-section class="search-box">
			<uni-easyinput prefixIcon="search" v-model="value" placeholder="请输入商品名称、条码、货位" >
			</uni-easyinput>
			<view class="scan-the-code" @click="scanCode">
				<uni-icons type="person-filled" size="20" color="#fff"></uni-icons>扫码
			</view>
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
			<view class="content-item">
				<view class="content-item-title">华太 五号电池 10g/粒</view>
				<view class="content-item-box">
					<image src="../../static/2.png" class="content-item-image"></image>
					<view class="content-item-msg">
						<view>条码：4910494868665</view>
						<view>编码：9761103085</view>
						<view>规格：<text>10g*1粒</text></view>
						<view>零售价：<text>¥0.7</text></view>
					</view>
				</view>
				<view class="content-item-action">
					<view class="content-item-action-count">库存：50份</view>
					<view class="content-item-action-btn">
						<view>打印</view>
						<view>+ 出库</view>
					</view>
				</view>
			</view>
			<view class="content-item">
				<view class="content-item-title">华太 7号电池1个</view>
				<view class="content-item-box">
					<image src="../../static/2.png" class="content-item-image"></image>
					<view class="content-item-msg">
						<view>条码：4910494868665</view>
						<view>编码：9761103085</view>
						<view>规格：<text>10g*1粒</text></view>
						<view>零售价：<text>¥0.7</text></view>
					</view>
				</view>
				<view class="content-item-action">
					<view class="content-item-action-count">库存：40份</view>
					<view class="content-item-action-btn">
						<view>打印</view>
						<view>+ 出库</view>
					</view>
				</view>
			</view>
			<view class="content-item">
				<view class="content-item-title">小鹿妈妈 装经典牙线棒50支/盒</view>
				<view class="content-item-box">
					<image src="../../static/2.png" class="content-item-image"></image>
					<view class="content-item-msg">
						<view>条码：4910494868665</view>
						<view>编码：9761103085</view>
						<view>规格：<text>10g*1粒</text></view>
						<view>零售价：<text>¥0.7</text></view>
					</view>
				</view>
				<view class="content-item-action">
					<view class="content-item-action-count">库存：999份</view>
					<view class="content-item-action-btn">
						<view>打印</view>
						<view>+ 出库</view>
					</view>
				</view>
			</view>
			<view class="content-item">
				<view class="content-item-title">华太 五号电池 10g/粒</view>
				<view class="content-item-box">
					<image src="../../static/2.png" class="content-item-image"></image>
					<view class="content-item-msg">
						<view>条码：4910494868665</view>
						<view>编码：9761103085</view>
						<view>规格：<text>10g*1粒</text></view>
						<view>零售价：<text>¥0.7</text></view>
					</view>
				</view>
				<view class="content-item-action">
					<view class="content-item-action-count">库存：50份</view>
					<view class="content-item-action-btn">
						<view>打印</view>
						<view>+ 出库</view>
					</view>
				</view>
			</view>
			<view class="content-item">
				<view class="content-item-title">华太 五号电池 10g/粒</view>
				<view class="content-item-box">
					<image src="../../static/2.png" class="content-item-image"></image>
					<view class="content-item-msg">
						<view>条码：4910494868665</view>
						<view>编码：9761103085</view>
						<view>规格：<text>10g*1粒</text></view>
						<view>零售价：<text>¥0.7</text></view>
					</view>
				</view>
				<view class="content-item-action">
					<view class="content-item-action-count">库存：50份</view>
					<view class="content-item-action-btn">
						<view>打印</view>
						<view>+ 出库</view>
					</view>
				</view>
			</view>
			<view class="content-item">
				<view class="content-item-title">华太 五号电池 10g/粒</view>
				<view class="content-item-box">
					<image src="../../static/2.png" class="content-item-image"></image>
					<view class="content-item-msg">
						<view>条码：4910494868665</view>
						<view>编码：9761103085</view>
						<view>规格：<text>10g*1粒</text></view>
						<view>零售价：<text>¥0.7</text></view>
					</view>
				</view>
				<view class="content-item-action">
					<view class="content-item-action-count">库存：50份</view>
					<view class="content-item-action-btn">
						<view>打印</view>
						<view>+ 出库</view>
					</view>
				</view>
			</view>
			<view class="content-item">
				<view class="content-item-title">华太 五号电池 10g/粒</view>
				<view class="content-item-box">
					<image src="../../static/2.png" class="content-item-image"></image>
					<view class="content-item-msg">
						<view>条码：4910494868665</view>
						<view>编码：9761103085</view>
						<view>规格：<text>10g*1粒</text></view>
						<view>零售价：<text>¥0.7</text></view>
					</view>
				</view>
				<view class="content-item-action">
					<view class="content-item-action-count">库存：50份</view>
					<view class="content-item-action-btn">
						<view>打印</view>
						<view>+ 出库</view>
					</view>
				</view>
			</view>
			
			<uni-load-more :status="status" />
		</view>
	</view>
	<view class="main-shopping">
		<view class="shop-left">
			<uni-icons class="shop-cart" type="cart" size="20" color="#ff7704"></uni-icons>
			<view class="shop-msg">
				<view class="shop-money">
					总计<text>¥10</text>
				</view>
				<view class="shop-count">
					<text>种类</text><text>0种</text>
					<text>数量</text><text>0</text>
				</view>
			</view>
		</view>
		<view class="shop-btn" @click="goUrl">提交</view>
	</view>
</template>

<script>
	export default {
		data() {
			return {
				value: '',
				status: 'noMore', // more 加载更多，loading 加载中，noMore 没有更多

			}
		},
		methods: {
			goUrl () {
			  uni.navigateTo({
			    url: '/pages/inventoryQuery/inventoryQuery'
			  })
			},
			scanCode () {
				// 只允许通过相机扫码
				uni.scanCode({
					onlyFromCamera: true,
					success: function (res) {
						console.log('条码类型：' + res.scanType);
						console.log('条码内容：' + res.result);
					}
				});
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
			flex: auto;
			display: flex;
			align-items: center;

			.scan-the-code {
				line-height: 36px;
				height: 36px;
				padding: 0 20rpx;
				background-color: #ff7704;
				border-top-right-radius: 5px;
				border-bottom-right-radius: 5px;
				color: #fff;
				margin-left: -10px;
				z-index: 1;
			}
		}
	}

	.main-content {
		height: calc(100vh - 320rpx);
		display: flex;
		justify-content: space-between;

		.aside {
			height: 100%;
			flex: 0 0 200rpx;
			background-color: #efefef;
			overflow-x: hidden;
			overflow-y: auto;

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
			background-color: #efefef;
			overflow-y: auto;
			overflow-x: hidden;

			&-item {
				background-color: #fff;
				margin-bottom: 20rpx;

				&:last-child {
					margin-bottom: 0;
				}

				&-title {
					color: #000;
					padding: 20rpx 20rpx 0;
				}

				&-box {
					display: flex;
					padding: 20rpx;
					align-items: center;

					.content-item-image {
						width: 150rpx;
						height: 150rpx;
						overflow: hidden;
						margin-right: 20rpx;
					}

					.content-item-msg {
						font-weight: 200;
						color: #666;

						text {
							color: #ff7704;
						}
					}
				}

				&-action {
					border-top: 1px solid #efefef;
					padding: 15rpx 20rpx;
					display: flex;
					align-items: center;
					justify-content: space-between;

					&-count {
						color: #666;
					}

					&-btn {
						display: flex;
						justify-content: space-between;

						view {
							border: 1px solid #d6d4d4;
							color: #000;
							width: 130rpx;
							height: 50rpx;
							line-height: 50rpx;
							border-radius: 5rpx;
							text-align: center;

							&:last-child {
								border-color: #ff7704;
								color: #ff7704;
								margin-left: 10rpx;
							}
						}
					}
				}
			}
		}
	}

	.main-shopping {
		height: 100rpx;
		// color: #ff7704;
		display: flex;
		justify-content: space-between;
		align-items: center;

		.shop-left {
			display: flex;
			height: 100%;
			justify-content: space-between;
			align-items: center;

			.shop-cart {
				margin: 20rpx;
			}

			.shop-msg {
				display: flex;
				flex-direction: column;
				justify-content: space-between;

				.shop-money {
					color: #000;

					text {
						color: #ff7704;
						margin-left: 10rpx;
					}
				}

				.shop-count {
					color: #666;
					font-weight: 100;

					text {
						margin-right: 10rpx;
					}
				}
			}
		}

		.shop-btn {
			width: 260rpx;
			height: 100rpx;
			line-height: 100rpx;
			font-size: 32rpx;
			text-align: center;
			background-color: #ff7704;
			color: #fff;
		}
	}
</style>