<template>
	<view class="main-search">
		<uni-section class="search-box">
			<uni-easyinput prefixIcon="search" v-model="pageReqVO.name"
				placeholder="名称/条形码/编号货品/简拼" clearButton="none" @input="search">
				<!-- <uni-easyinput prefixIcon="search" suffixIcon="" v-model="value" placeholder="名称/条形码/编号货品/简拼" clearButton="none" > -->
			</uni-easyinput>
			<!-- <view class="scan-the-code" @click="scanCode">
				<uni-icons type="scan" size="20" color="#333"></uni-icons>
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
			<scroll-view scroll-y="true" lower-threshold="50" @scrolltolower="scrolltolower" class="scroll-view-container">
				<uni-swipe-action>
					<uni-swipe-action-item>
						<view class="content-item" v-for="item in goodsList" :key="item.id" @tap="toggleClick(item)">
							<image :src="item.pic" class="content-item-image"></image>
							<view class="content-item-msg">
								<view class="content-item-title">{{item.name}}</view>
								<view>货架号：{{item.shelfCode}}</view>
							</view>
						</view>
						<!-- <view class="content-item" @click="toggleClick">
				<image src="../../static/2.png" class="content-item-image"></image>
				<view class="content-item-msg">
					<view>示例商品（建议试用后删除）</view>
					<view>库存：1000袋</view>
				</view>
			</view> -->

					</uni-swipe-action-item>
				</uni-swipe-action>
        <uni-load-more :status="status" />
			</scroll-view>
			
		</view>
		<uni-popup ref="popup" @change="change">
			<view class="popup-content">
				<view class="popup-goodsinfo">
					<img :src="record.pic" class="popup-goodsImg" />
					<view class="popup-goods-text">
						<text>{{ record.name }}</text>
						<text>价格：&yen;{{ record.salePrice }}</text>
					</view>
				</view>
				<view class="popup-info-stock">
					<view class="popup-goods-item">
						<text>盘点时间</text>
						<view style="width: 480rpx;"><uni-datetime-picker type="datetime"
								v-model="selectParams.checkTime" /></view>
					</view>
					<view class="popup-goods-item">
						<text>账面库存</text>
						<text>{{ countStore }} {{ record.unitName }}</text>
					</view>
					<view class="popup-goods-item">
						<text>实际库存</text>
						<uni-number-box @change="changeValue" :max="maxValue" background="#ff7704" color="#fff"
							:value="selectParams.actualValue" />
					</view>
					<view class="popup-goods-item">
						<text>盈亏数量</text>
						<text>{{ ykCount }} {{ record.unitName }}</text>
					</view>
					<view class="popup-goods-item">
						<text>产品单价(元)</text>
						<input @input="changePrice" class="input-number" type="number"
							:value="selectParams.salePrice" />
					</view>
					<view class="popup-goods-item">
						<text>合计金额(元)</text>
						<text>{{ selectParams.totalAmount }}</text>
					</view>
					<view class="popup-goods-item">
						<text>备注</text>
						<view class="popup-input-remark"><uni-easyinput trim="all" v-model="selectParams.remark"
								placeholder="备注(可选填)"></uni-easyinput></view>
					</view>
				</view>
				<button type="primary" style="background-color: #ff7704;" @tap="submitSelect">选好了</button>
			</view>
		</uni-popup>
	</view>
</template>

<script>
	import {
		stockQuery,
		productList,
		categoryList,
		stockCheckCreate,
		getStockByGoods
	} from '@/api/common.js'
	export default {
		data() {
			return {
				maxValue: 9999999999,
				value: 1000,
				countStore: 0,
				ykCount: 0,
				status: 'noMore', // more 加载更多，loading 加载中，noMore 没有更多
				placeholderStyle: "color:#333;font-size:28rpx",
				actualValue: 1,
				styles: {
					color: '#333',
					borderColor: '#fff'
				},
				selectParams: {
					remark: '',
					checkTime: '',
					actualValue: 100,
					salePrice: '',
					totalAmount: 0.00
				},
				style: {
					backgroundColor: '#5ffff1',
					borderColor: '#fff'
				},
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
				record: {},
				realyCount: 0,
				profitLoss: '0',
				remark: '',
        timer: null
			}
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
				} else {
					uni.showToast({
						icon: 'none',
						title: res.msg
					})
				}
			},
			search(e){
        clearTimeout(this.timer)
        this.timer = setTimeout(() => {
          this.pageReqVO.name=e;
          this.pageReqVO.pageNo = 1
          this.goodsList = []
          this.getGoodsList()
        }, 200)
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
			scrolltolower() {
        console.log(122)
				if (this.pageReqVO.pageNo * this.pageReqVO.pageSize < this.total) {
					this.pageReqVO.pageNo++
					this.getGoodsList()
				}
			},
			changeValue(e) {
				if (e !== '') {
					this.ykCount = e - this.countStore
				} else {
					this.ykCount = 0 - this.countStore
				}
				this.selectParams.totalAmount = this.ykCount * this.selectParams.salePrice
			},
			changePrice(e) {
				let num = e.target.value.match(/^\d*(\.?\d)/g)[0] || null;
				if (num) {
					this.selectParams.totalAmount = num * this.ykCount
					this.selectParams.salePrice = num
				} else {
					this.selectParams.salePrice = 0
					this.selectParams.totalAmount = 0
				}
			},
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
			changeType(item) {
				this.pageReqVO.categoryId = item.value;
        this.pageReqVO.pageNo = 1
        this.goodsList = []
				this.getGoodsList();
			},
			async toggleClick(item) {
				// open 方法传入参数 等同在 uni-popup 组件上绑定 type属性
				this.record = item;
				this.selectParams.salePrice = item.salePrice
				const result = uni.getStorageSync('storeId');
				this.$refs.popup.open('bottom')
				const res = await getStockByGoods({
					productId: item.id,
					warehouseId: result
				})

				if (res.code == 0) {
					this.countStore = res.data || 0
					this.ykCount = this.selectParams.actualValue - this.countStore
					this.selectParams.totalAmount = this.ykCount * this.selectParams.salePrice
				} else {
					uni.showToast({
						icon: 'none',
						title: res.msg || ''
					})
				}

			},
			change(e) {
				console.log('当前模式：' + e.type + ',状态：' + e.show);
			},

			canInput() {
				this.disabledEdit = !this.disabledEdit
			},

			async submitSelect() {
				if (this.selectParams.actualValue === '') {
					uni.showToast({
						icon: 'none',
						title: '请填写实际库存'
					})
					return false
				}

				if (this.selectParams.checkTime === '') {
					uni.showToast({
						icon: 'none',
						title: '请选择盘点时间'
					})
					return false
				}


				const result = uni.getStorageSync('storeId');
				const res = await stockCheckCreate({
					warehouseId: result,
					checkTime: new Date(this.selectParams.checkTime).getTime(),
					items: [{
						actualCount: this.selectParams.actualValue,
						count: this.selectParams.actualValue - this.countStore,
						productBarCode: this.record.barCode,
						productId: this.record.id,
						productPrice: this.selectParams.salePrice,
						productUnitName: this.record.unitName,
						shelfCode: this.record.shelfCode,
						stockCount: this.countStore,
						totalPrice: this.selectParams.totalAmount,
						pic: this.record.pic,
						warehouseId: result
					}],
					remark: this.selectParams.remark
				})

				if (res.code === 0) {
					uni.showToast({
						icon: 'none',
						title: '商品盘点成功'
					})
					this.getGoodsList()
					this.$refs.popup.close()
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

	.input-number {
		width: 63vw;
		box-sizing: border-box;
		border-radius: 8rpx;
		height: 70rpx;
		border: 1px solid #e5e5e5;
		padding: 0 10rpx;
		text-align: right;
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
      .scroll-view-container {
      	max-height: calc(100vh - 90rpx);
      }

			&-item {
				background-color: #fff;
				margin-bottom: 20rpx;
				display: flex;
				padding: 20rpx;

				.content-item-image {
					width: 150rpx;
					height: 150rpx;
					overflow: hidden;
					margin-right: 20rpx;
					overflow: hidden;
          border-radius: 10rpx;
				}

				.content-item-msg {
					display: flex;
					flex-direction: column;
					justify-content: space-between;
					flex: 1;
					font-weight: 400;
					font-size: 24rpx;

					.content-item-title {
						margin-bottom: 10rpx;
					}
				}

			}
		}
	}
</style>