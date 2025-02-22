<template>
	<view class="main">
    <view class="status">
      <text>{{ orderInfo.logisticName }}</text>
      <text>{{ orderInfo.track }}</text>
    </view>
		<view class="custom">
			<view class="title">
				<text>店铺名称</text>
				<text class="date">{{ orderInfo.channelName }}</text>
			</view>
			<view class="custom-item">
				<text>单据编号：</text>
				<text>{{ orderInfo.no }}</text>
			</view>
			<view class="custom-item">
				<text>客户名称：</text>
				<text>{{ orderInfo.customerName }}</text>
			</view>
			<view class="custom-item">
				<text>客户地址：</text>
				<text>{{ orderInfo.address }}</text>
			</view>
			<view class="custom-item">
				<text>下单时间：</text>
				<text>{{ orderInfo.orderTime }}</text>
			</view>
		</view>
		<view class="goods">
			<view class="title">销售商品</view>
			<view class="goods-detail" v-for="item in orderInfo.items" :key="item.id">
				<image class="goods-img" :src="item.pic"></image>
				<view class="goods-text">
					<view class="goods-msg">{{ item.productName }}</view>
					<view class="goods-money">
						<text>¥ {{ item.productPrice ? item.productPrice.toFixed(2) : '0.00' }}</text>
						<text>{{ item.count }}件</text>
					</view>
				</view>
			</view>
			<view class="goods-total">
				<text>合计数量：{{ orderInfo.totalCount }}</text>
        <text>合计价格：¥ {{ orderInfo.totalProductPrice ? orderInfo.totalProductPrice.toFixed(2) : '0.00' }}</text>
			</view>
      
		</view>
		<view class="rebate">
			<view class="rebate-item">
				<text>优惠金额：</text>
				<text>¥ {{ orderInfo.discountPrice ? orderInfo.discountPrice.toFixed(2) : '0.00' }}</text>
			</view>
      
      <view class="rebate-item" v-if="orderInfo.discountPercent">
      	<text>优惠率：</text>
      	<text>{{ orderInfo.discountPercent }}%</text>
      </view>
      <view class="rebate-item" v-if="orderInfo.totalTaxPrice">
      	<text>税额：</text>
      	<text>¥ {{ orderInfo.totalTaxPrice ? orderInfo.totalTaxPrice.toFixed(2) : '0.00' }}</text>
      </view>
      
			<view class="rebate-item">
				<text>定金金额：</text>
				<text>¥ {{ orderInfo.depositPrice ? orderInfo.depositPrice.toFixed(2) : '0.00' }}</text>
			</view>
			<view class="rebate-item">
				<text>运费：</text>
				<text>¥ {{ orderInfo.sendFee ? orderInfo.sendFee.toFixed(2) : '0.00' }}</text>
			</view>
			<view class="rebate-item">
				<text>最终价格：</text>
				<text>¥ {{ orderInfo.totalPrice ? orderInfo.totalPrice.toFixed(2) : '0.00' }}</text>
			</view>
			<!-- <view class="rebate-item">
				<text></text>
				<text class="rebate-item-text">已抹零：¥ 0.02</text>
			</view> 
			<view class="net-receipts">
				<text>本单实收：</text>
				<text>¥0.02 <text class="net-tools">|</text> 现金 <text class="net-tools">〉</text></text>
			</view>-->
		</view>
	</view>
	<!-- <view class="main-footer">
		<view class="btn">
			<uni-icons type="bars" size="20"></uni-icons>
			打印
		</view>
		<view class="btn">
			<uni-icons custom-prefix="custom-icon" type="icon-youxi" size="30"></uni-icons>
			<uni-icons type="bars" size="20"></uni-icons>
			修改
		</view>
	</view> -->
</template>

<script>
  import { orderInfo } from '@/api/common.js'
	export default {
		data() {
			return {
        orderInfo: {}
      }
		},
    onLoad (options) {
      this.getOrderInfo(options.id)
    },
		methods: {
      async getOrderInfo (id) {
        const res = await orderInfo({ id })
        if (res.code === 0) {
          this.orderInfo = res.data || {}
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
		height: calc(100vh - 225rpx);
		background-color: #f2f2f2;
		padding: 20rpx;
		overflow-y: auto;
		overflow-x: hidden;
    
    .status {
      display: flex;
      justify-content: space-between;
      align-items: center;
      height: 60rpx;
    	padding: 20rpx;
    	color: #78cf7e;
      background-color: #fff;
      margin-bottom: 20rpx;
    }
    

		.custom {
			background-color: #fff;
			padding: 20rpx;
			border-radius: 20rpx;

			.title {
				display: flex;
				justify-content: space-between;
				align-items: flex-start;
				padding: 20rpx 0;
        text {
          display: flex;
          &:first-child {
            width: 160rpx;
          }
          &:last-child {
            flex: 1;
            overflow: hidden;
          }
        }

				.date {
					font-size: 28rpx;
					color: #666;
				}
			}
			.custom-item {
				display: flex;
				justify-content: space-between;
				align-items: center;
				padding: 20rpx 0;
			}
		}

		.goods {
			background-color: #fff;
			padding: 20rpx;
			border-radius: 20rpx;
			margin: 20rpx 0;

			.title {
				padding-left: 20rpx;
				position: relative;
				margin-bottom: 20rpx;

				&:before {
					position: absolute;
					left: 0;
					top: 50%;
					transform: translateY(-50%);
					content: "";
					width: 5rpx;
					height: 30rpx;
					background-color: #12ffdd;
					margin-right: 10rpx;
				}
			}

			.goods-detail {
				display: flex;
				justify-content: space-between;
				align-items: flex-start;

				.goods-img {
					width: 100rpx;
					height: 100rpx;
					background-color: #eeeeee;
					margin-bottom: 20rpx;
				}

				.goods-text {
					flex: 1;
					padding: 0 20rpx;
          overflow: hidden;

					.goods-msg {
						padding: 20rpx 0;
					}

					.goods-money {
						padding-bottom: 20rpx;
						display: flex;
						justify-content: space-between;
						text {
							&:last-child {
								font-weight: 100;
								font-size: 28rpx;
								color: #999;
							}
						}
					}
				}
			}

			.goods-total {
				border-top: 1px solid #eeeeee;
				text-align: right;
				padding-top: 20rpx;
				margin: 20rpx 0;
        display: flex;
        flex-direction: column;
			}
		}

		.rebate {
			background-color: #fff;
			padding: 20rpx;
			border-radius: 20rpx;

			&-item {
				display: flex;
				justify-content: space-between;
				align-items: center;
				padding: 10rpx 0;

				&-text {
					color: #999;
				}
			}

			.net-receipts {
				border-top: 1px solid #eee;
				display: flex;
				justify-content: space-between;
				align-items: center;
				padding: 10rpx 0;
				margin-top: 10px;
				.net-tools{
					color: #eee;
				}
			}
		}
	}

	.main-footer {
		display: flex;
		justify-content: space-between;
		align-items: center;
		padding: 20rpx 40rpx;

		.btn {
			width: 48%;
			height: 45px;
			line-height: 45px;
			text-align: center;
			border: 1px solid #eee;
			border-radius: 5rpx;
		}
	}
</style>