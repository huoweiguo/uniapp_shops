<template>
	<view class="main-search">
		<view class="search-icon">
			<uni-icons type="person-filled" size="20" color="#ff7704"></uni-icons>
			出库单
		</view>
		<uni-section class="search-box">
			<uni-easyinput prefixIcon="search" v-model="pageReqVO.name" placeholder="请输入商品名称、条码、货位" :clearable="false">
			</uni-easyinput>
			<view class="scan-the-code" @click="scanCode">
				<uni-icons type="scan" size="20" color="#fff"></uni-icons>扫码
			</view>
		</uni-section>
	</view>
	<view class="main-content">
		<view class="aside">
			<view :class="pageReqVO.categoryId==''?'aside-item active':'aside-item'"
				@click="changeType({value: '',text: 'all'})">全部
			</view>
			<view v-for="item in dataTree" :class="pageReqVO.categoryId==item.value?'aside-item active':'aside-item'"
				@click="changeType(item)" :key="item.value">{{item.text}}</view>
		</view>
		<view class="content">

			<scroll-view scroll-y="true" lower-threshold="50" @scrolltolower="scrolltolower"
				class="scroll-view-container">
				<uni-swipe-action>
					<uni-swipe-action-item>
						<view class="content-item" v-for="item in goodsList">
							<view class="content-item-title">{{item.name}}</view>
							<view class="content-item-box">
								<image :src="item.pic" class="content-item-image"></image>
								<view class="content-item-msg">
									<view>条码：{{item.barCode}}</view>
									<view>编码：{{item.id}}</view>
									<view>规格：<text>{{item.standard}}</text></view>
									<view>零售价：<text>¥{{item.salePrice}}</text></view>
								</view>
							</view>
							<view class="content-item-action">
								<view class="content-item-action-count">库存：50份</view>
								<view class="content-item-action-btn">
									<!-- <view>打印</view> -->
									<view @click="handleOut(item)">+ 出库</view>
								</view>
							</view>
						</view>


					</uni-swipe-action-item>
				</uni-swipe-action>
			</scroll-view>
			<uni-load-more :status="status" />
		</view>
	</view>
	<view class="main-shopping">
		<view class="shop-left">
			<uni-icons class="shop-cart" type="cart" size="20" color="#ff7704"></uni-icons>
			<view class="shop-msg">
				<view class="shop-money">
					总计<text>¥{{totalPrice}}</text>
				</view>
				<view class="shop-count">
					<text>种类</text><text>{{cartItems.length}}种</text>
					<text>数量</text><text>{{totalCount}}</text>
				</view>
			</view>
		</view>
		<view class="shop-btn" @click="goUrl">提交</view>
	</view>
</template>

<script>
	import {
		productList,
		categoryList,
		stockOutSubmit
	} from '@/api/common.js'
	export default {
		data() {
			return {
				value: '',
				status: 'noMore', // more 加载更多，loading 加载中，noMore 没有更多
				pageReqVO: {
					pageNo: 1,
					pageSize: 10,
					name: '',
					categoryId: ''
				},
				listReqVO: {
					name: '',
					status: ''
				},
				status: 'more',
				total: 0,
				goodsList: [],
				dataTree: [],
				disabledEdit: true,
				cartItems: []
			}
		},
		computed: {
			totalPrice() {
				return this.cartItems.reduce((total, item) => total + item.quantity * item.salePrice, 0);
			},
			totalCount() {
				return this.cartItems.reduce((total, item) => total + item.quantity, 0);
			},
		},
		onLoad() {
			this.getCategoryList()
			this.getGoodsList()
		},
		methods: {
			async getCategoryList() {
				const res = await categoryList(this.listReqVO)
				if (res.code === 0) {
					let data = res.data || []
					data.map(item => {
						this.dataTree.push({
							text: item.name,
							value: item.id
						})
					})
					console.log(this.dataTree, 'datatree')
				} else {
					uni.showToast({
						icon: 'none',
						title: res.msg
					})
				}
			},

			async getGoodsList() {
				const res = await productList(this.pageReqVO)
				this.status = 'loading'
				if (res.code === 0) {
					this.goodsList = [...this.goodsList, ...res.data.list]
					this.total = res.data.total
					if (this.pageReqVO.pageNo * this.pageReqVO.pageSize >= this.total) {
						this.status = 'noMore'
					} else {
						this.status = 'more'
					}
				} else {
					uni.showToast({
						icon: 'none',
						title: res.msg
					})
				}
			},
			changeType(item) {
				this.pageReqVO.categoryId = item.value;
				this.getGoodsList();
			},
			goUrl() {
				// uni.navigateTo({
				// 	url: '/pages/inventoryQuery/inventoryQuery'
				// })
				// 提交
				const ids = [];
				this.cartItems.forEach(item => {
					ids.push(item.id)
				})
				stockOutSubmit({
					ids
					// id: '', // 编号,示例值(17386)
					// outTime: '', // 出库时间
					// orderId: '', // 销售订单编号,示例值(17386)
					// discountPercent: '', // 优惠率，百分比,示例值(99.88)
					// items: this.cartItems
				}).then(res => {
					if (res.code == 0) {
						uni.showToast({
							icon: 'success',
							title: res?.msg || '提交成功'
						})
					} else {
						uni.showToast({
							icon: 'none',
							title: res.msg
						})
					}
				})
			},
			scanCode() {
				// 只允许通过相机扫码
				uni.scanCode({
					onlyFromCamera: true,
					success: function(res) {
						console.log('条码类型：' + res.scanType);
						console.log('条码内容：' + res.result);
					}
				});
			},
			handleOut(item) {
				console.log(item);
				const found = this.cartItems.find(i => i.id === item.id);
				if (found) {
					found.quantity++;
				} else {
					this.cartItems.push({
						...item,
						quantity: 1
					});
				}
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
				line-height: 38px;
				height: 38px;
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