<template>
	<view class="goods_container">
		<uni-section>
			<uni-search-bar placeholder="请输入商品名称" bgColor="#efefef" @confirm="pageReqVO.name" @input="search" />
		</uni-section>
		<view class="goods_operation">
			<uni-data-picker placeholder="全部类别" popup-title="选择类别" :localdata="dataTree" v-model="pageReqVO.categoryId"
				@change="onchange">
			</uni-data-picker>
			<navigator class="select-all" url="/pages/createGoods/createGoods"><uni-icons type="plus"
					size="20"></uni-icons>新增</navigator>
		</view>
		<!-- <view class="goods-counts">
      <text class="goods-counts-text">商品数量：200</text>|<text class="goods-counts-text">商品库存：50000</text>
    </view> -->

		<scroll-view scroll-y="true" lower-threshold="50" @scrolltolower="scrolltolower" class="scroll-view-container">
			<view class="goods-item-list" v-for="item in goodsList" :key="item.id" @tap="toLinks(item.id)">
				<uni-swipe-action>
					<uni-swipe-action-item>
						<view class="content-box">
							<image :src="item.pic" class="goods-list-image"></image>
							<view class="goods-content">
								<text class="goods-content-title">{{ item.name }}</text>
								<text>销售价格：&yen;{{ item.salePrice && item.salePrice.toFixed(2) }}</text>
								<text>采购价格：&yen;{{ item.purchasePrice && item.purchasePrice.toFixed(2) }}</text>
								<text>产品分类：{{ item.categoryName }}</text>
							</view>
						</view>
						<template v-slot:right>
							<view class="slot-button">
								<text class="slot-button-text bgred"
									@tap.stop="editGoods({position:'right', id: item.id, content:{text:'编辑'}})">编辑</text>
								<text class="slot-button-text bgblue"
									@tap.stop="deleteGoods({position:'right', id: item.id, content:{text:'删除'}})">删除</text>
							</view>
						</template>
					</uni-swipe-action-item>
				</uni-swipe-action>
			</view>
      <uni-load-more :status="status"></uni-load-more>
		</scroll-view>
    
    <!-- 提示窗示例 -->
    <uni-popup ref="alertDialog" type="dialog">
      <uni-popup-dialog type="warning" cancelText="取消" confirmText="确定" title="警告" content="确定要删除该商品吗？" @confirm="dialogConfirm"></uni-popup-dialog>
    </uni-popup>
	</view>
</template>

<script>
	import {
		productList,
		categoryList,
    deleteProduct
	} from '@/api/common.js'
	export default {
		data() {
			return {
        goodsId: '',
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
        timer: null
			}
		},
		onLoad() {
			this.getCategoryList()
			this.getGoodsList()
		},
		methods: {
			search(e) {
        clearTimeout(this.timer)
        this.timer = setTimeout(() => {
          this.pageReqVO.name = e;
          this.goodsList = []
          this.getGoodsList()
        },200)
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

			toLinks(id) {
				uni.navigateTo({
					url: `/pages/goodsDetail/goodsDetail?id=${id}`
				})
			},

			scrolltolower() {
				if (this.pageReqVO.pageNo * this.pageReqVO.pageSize < this.total) {
					this.pageReqVO.pageNo++
					this.getGoodsList()
				}
			},

			onchange(e) {
				if (e.detail.value.length > 0) {
					this.pageReqVO.categoryId = e.detail.value[0].value
				} else {
          this.pageReqVO.categoryId = ''
        }
        this.pageReqVO.pageNo = 1
        this.goodsList = []
        this.getGoodsList()
			},

			editGoods({
				id
			}) {
				uni.navigateTo({
					url: `/pages/createGoods/createGoods?id=${id}`
				})
			},
      
      async dialogConfirm () {
        const res = await deleteProduct(this.goodsId)
        if (res.code === 0) {
          const idx = this.goodsList.findIndex(item => item.id === this.goodsId)
          this.goodsList.splice(idx, 1)
          uni.showToast({
            icon: 'none',
            title: '删除商品成功'
          })
        } else {
          uni.showToast({
            icon: 'none',
            title: res.msg
          })
        }
      },

			async deleteGoods({id}) {
        this.goodsId = id
        this.$refs.alertDialog.open()
      }
		}
	}
</script>

<style lang="scss" scoped>
	.goods_container {
		padding: 30rpx 0;
		background-color: #f1f4f9;
		height: calc(100vh - 60rpx);
		box-sizing: border-box;

		.scroll-view-container {
			max-height: calc(100vh - 200rpx);
		}

		.goods_operation {
			display: flex;
			justify-content: space-between;
			align-items: center;
			font-size: 28rpx;
			color: #666;
			height: 80rpx;
			margin-bottom: 20rpx;
			background-color: #fff;
			padding: 10rpx 20rpx;
		}

		.select-all {
			display: flex;
			align-items: center;
		}

		.goods-item-list {
			background-color: #fff;
			margin-bottom: 20rpx;
		}

		.goods-counts {
			display: flex;
			align-items: center;
			background-color: #fff;
			padding: 10rpx 20rpx;
			color: #595d5e;
			font-size: 28rpx;
			height: 60rpx;
			margin-bottom: 30rpx;

			.goods-counts-text {
				margin: 0 10rpx;
			}
		}

		.content-box {
			display: flex;
			padding: 20rpx;

			.goods-list-image {
				width: 200rpx;
				height: 200rpx;
				overflow: hidden;
				margin-right: 20rpx;
        border-radius: 10rpx;
			}

			.goods-content {
				display: flex;
				flex-direction: column;
				flex: 1;

				.goods-content-title {
					font-size: 30rpx;
					font-weight: bold;
					color: #333;
				}

				text {
					color: #777;
					font-size: 26rpx;
					margin-bottom: 8rpx;
				}
			}
		}
	}

	.slot-button {
		display: flex;

		.slot-button-text {
			display: flex;
			justify-content: center;
			align-items: center;
			width: 100rpx;
			font-size: 28rpx;
			height: 100%;
		}
	}
</style>