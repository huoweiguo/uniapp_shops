<template>
	<view class="main-search">
		<!-- <view class="search-icon">
			<uni-icons type="person-filled" size="20" v-model="pageReqVO.categoryId" color="#ff7704"></uni-icons>
			出库单
		</view> -->
		<uni-section class="search-box">
			<uni-easyinput prefixIcon="search" v-model="pageReqVO.name" placeholder="请输入商品名称、条码、货位" :clearable="false">
			</uni-easyinput>
			<!-- <view class="scan-the-code" @click="scanCode">
				<uni-icons type="scan" size="20" color="#fff"></uni-icons>扫码
			</view> -->
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
									<view>零售价：<text>¥{{item.salePrice ? item.salePrice.toFixed(2) : '0.0'}}</text></view>
								</view>
							</view>
							<view class="content-item-action">
								<!-- <view class="content-item-action-count">库存：50份</view> -->
								<view class="content-item-action-btn">
									<!-- <view>打印</view> -->
									<view @tap="handleOut(item)">+ 出库</view>
								</view>
							</view>
						</view>


					</uni-swipe-action-item>
				</uni-swipe-action>
			</scroll-view>
			<uni-load-more :status="status" />
		</view>
	</view>
	<!-- <view class="main-shopping">
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
	</view> -->
  
  <uni-popup ref="popup">
  	<view class="popup-content">
      <view class="popup-goodsinfo">
        <img :src="record.pic" class="popup-goodsImg"/>
        <view class="popup-goods-text">
          <text>{{ record.name }}</text>
          <text>价格：&yen;{{ record.salePrice ? record.salePrice.toFixed(2) : '0.00' }}</text>
        </view>
      </view>
      <view class="popup-info-stock">
        <view class="popup-goods-item">
          <text>出库时间</text>
          <view style="width: 480rpx;"><uni-datetime-picker type="datetime" v-model="selectParams.checkTime" /></view>
        </view>
        <view class="popup-goods-item">
          <text>实际库存</text>
          <text>{{ selectParams.storeNumber }}</text>
        </view>
        <view class="popup-goods-item">
          <text>数量</text>
          <uni-number-box @change="changeValue" :max="maxValue" background="#ff7704" color="#fff" :value="selectParams.actualValue"/>
        </view>
        <view class="popup-goods-item">
          <text>产品单价(元)</text>
          <input @input="changePrice" class="input-number" type="number" :value="selectParams.salePrice" />
        </view>
        <view class="popup-goods-item">
          <text>合计金额(元)</text>
          <text>{{ selectParams.totalAmount }}</text>
        </view>
        <view class="popup-goods-item">
          <text>备注</text>
          <view class="popup-input-remark"><uni-easyinput trim="all" v-model="selectParams.remark" placeholder="备注(可选填)"></uni-easyinput></view>
        </view>
      </view>
      <button type="primary" style="background-color: #ff7704;">选好了</button>
  	</view>
  </uni-popup>
</template>

<script>
	import {
		productList,
		categoryList,
		stockOutCreate,
    getStockByGoods
	} from '@/api/common.js'
	export default {
		data() {
			return {
				value: '',
        maxValue: 9999999999,
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
        record: {},
        selectParams: {
          checkTime: '',
          actualValue: 1,
          storeNumber: 0,
          salePrice: '0.00',
          totalAmount: '0.00',
          remark: ''
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
      changeValue (e) {
        if (e !== '') {
          this.selectParams.totalAmount = (e * this.selectParams.salePrice)
        } else {
          this.selectParams.totalAmount = 0
        }
      },
      
      changePrice (e) {
        if (e !== '') {
          let num = e.target.value.match(/^\d*(\.?\d)/g)[0] || null;
          this.selectParams.totalAmount = (num * this.selectParams.actualValue)
        } else {
          this.selectParams.salePrice = 0
          this.selectParams.totalAmount = 0
        }
        
      },
      
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
				} else {
					uni.showToast({
						icon: 'none',
						title: res.msg
					})
				}
			},
      
      async getStockByGoods (data) {
        const res = await getStockByGoods(data)
        if (res.code === 0) {
          this.selectParams.storeNumber = res.data || 0
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
				stockOutCreate({
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
        this.record = item
        this.selectParams.salePrice = item.salePrice
        const warehouseId = uni.getStorageSync('storeId')
        this.getStockByGoods({
          productId: item.id,
          warehouseId
        })
        this.selectParams.totalAmount = (this.selectParams.actualValue * this.selectParams.salePrice).toFixed(2)
				this.$refs.popup.open('bottom')
			}
		}
	}
</script>

<style lang="scss" scoped>
	.main-search {
    position: fixed;
    left: 0;
    top: 0;
    width: 100%;
		height: 70rpx;
		display: flex;
		padding: 10rpx 30rpx;
		align-items: center;
    background-color: #fff;
    z-index: 10;

		.search-icon {
			flex: 0 0 100rpx;
			color: #ff7704;
		}

		.search-box {
			flex: auto;
			display: flex;
			align-items: center;

			// .scan-the-code {
			// 	line-height: 38px;
			// 	height: 38px;
			// 	padding: 0 20rpx;
			// 	background-color: #ff7704;
			// 	border-top-right-radius: 5px;
			// 	border-bottom-right-radius: 5px;
			// 	color: #fff;
			// 	margin-left: -10px;
			// 	z-index: 1;
			// }
		}
	}

	.main-content {
		height: calc(100vh - 90rpx);
		display: flex;
		justify-content: space-between;
    margin-top: 90rpx;
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
					justify-content: flex-end;

					&-count {
						color: #666;
					}

					&-btn {
						display: flex;
						

						view {
							color: #000;
							width: 130rpx;
							height: 50rpx;
							line-height: 50rpx;
							border-radius: 25rpx;
							text-align: center;

							&:last-child {
								background-color: #ff7704;
								color: #fff;
								margin-left: 10rpx;
							}
						}
					}
				}
			}
		}
	}

  .popup-content {
    background-color: #f1f4f9;
    padding: 20rpx;
    .popup-goodsinfo {
      display: flex;
      align-items: center;
      .popup-goodsImg {
        width: 100rpx;
        height: 100rpx;
        margin-right: 20rpx;
        border-radius: 10rpx;
      }
      .popup-goods-text {
        flex: 1;
        width: calc(100vw - 180rpx);
        display: flex;
        flex-direction: column;
        overflow: hidden;
        text {
          font-size: 32rpx;
          &:first-child {
            height: 50rpx;
            line-height: 50rpx;
            overflow: hidden;
            white-space: nowrap;
            text-overflow: ellipsis;
          }
          &:last-child {
            font-size: 28rpx;
            color: #777;
            margin-top: 10rpx;
          }
        }
      }
    }
    .popup-info-stock {
      background-color: #fff;
      padding: 20rpx;
      margin: 40rpx 0;
      .popup-goods-item {
        display: flex;
        margin: 20rpx 0;
        justify-content: space-between;
        align-items: center;
        .popup-input-remark {
          width: 63vw;
        }
        text {
          font-size: 28rpx;
          color: #333;
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
  .input-number {
    width: 63vw;
    box-sizing: border-box;
    border-radius: 8rpx;
    height: 70rpx;
    border: 1px solid #e5e5e5;
    padding: 0 10rpx;
    text-align: right;
  }
</style>