<template>
	<view class="main">
		<view class="custom">
			<view class="title">
				<text>零售客户</text>
				<text class="date">2024.12.19</text>
			</view>
			<view class="status">已结清</view>
			<view class="custom-item">
				<text>单据编号：</text>
				<text>XSD202412290001</text>
			</view>
			<view class="custom-item">
				<text>业务员：</text>
				<text>老板</text>
			</view>
			<view class="custom-item">
				<text>制单人：</text>
				<text>老板</text>
			</view>
			<view class="custom-item">
				<text>制单时间：</text>
				<text>2024.12.29 21:09:06</text>
			</view>
		</view>
		<view class="goods">
			<view class="title">销售商品</view>
			<view class="goods-detail">
				<cover-image class="goods-img"  src="/static/2.png"></cover-image>
				<view class="goods-msg">
					<view>示例商品（建议试用后删除）</view>
					<text>0.02×1件</text>
				</view>
				<view class="goods-money">0.02</view>
			</view>
			<view class="goods-total">
				<text>合计已选1，¥0.02</text>
			</view>
		</view>
		<view class="rebate">
			<view class="rebate-item">
				<text>整单折扣：</text>
				<text>100%</text>
			</view>
			<view class="rebate-item">
				<text>折后金额：</text>
				<text>¥ 0.02</text>
			</view>
			<view class="rebate-item">
				<text>运费：</text>
				<text>¥ 0.02</text>
			</view>
			<view class="rebate-item">
				<text>本单应收：</text>
				<text>¥ 0.02</text>
			</view>
			<view class="rebate-item">
				<text></text>
				<text class="rebate-item-text">已抹零：¥ 0.02</text>
			</view>
			<view class="net-receipts">
				<text>本单实收：</text>
				<text>¥0.02 现金〉</text>
			</view>
		</view>
	</view>
	<view class="main-footer">
		<view class="btn">
			<uni-icons type="bars" size="20"></uni-icons>
			打印
		</view>
		<view class="btn">
			<!-- <uni-icons custom-prefix="custom-icon" type="icon-youxi" size="30"></uni-icons> -->
			<uni-icons type="bars" size="20"></uni-icons>
			修改
		</view>
	</view>
</template>

<script>
	export default {
		data() {
			return {
			}
		},
		methods: {
			
		}
	}
</script>

<style scoped lang="scss">
.main{
	height: calc(100vh - 200rpx);
	background-color: #f2f2f2;
	padding: 10rpx;
	.custom{
		background-color: #fff;
		padding: 20rpx;
		border-radius: 20rpx;
		.title{
			display: flex;
			justify-content: space-between;
			align-items: center;
			font-size: 30rpx;
			padding: 10rpx 0;
			.date{
				font-size: 28rpx;
				color: #666;
			}
		}
		.status{
			padding: 10rpx 0;
			color: #77fdea;
			border-bottom: 1px solid #999;
		}
		.custom-item{
			display: flex;
			justify-content: space-between;
			align-items: center;
			padding: 10rpx 0;
		}
	}
	.goods{
		background-color: #fff;
		padding: 20rpx;
		border-radius: 20rpx;
		margin: 20rpx 0;
		.title{
			padding-left: 20rpx;
			position: relative;
			margin-bottom: 20rpx;
			&:before{
				position: absolute;
				left: 0;
				top: 50%;
				transform: translateY(-50%);
				content: "";
				width: 5rpx;
				height: 30rpx;
				background-color: #77fdea;
				margin-right: 10rpx;
			}
		}
		.goods-detail{
			display: flex;
			justify-content: space-between;
			align-items: center;
			.goods-img{
				width: 100rpx;
				height: 100rpx;
				background-color: #eeeeee;
				margin-bottom: 20rpx;
			}
			.goods-msg{
				padding: 0 50rpx;
			}
			.goods-money{
				font-size: 28rpx;
				color: #999;
			}
		}
		.goods-total{
			border-top: 1px solid #999;
			text-align: right;
			padding-top: 20rpx;
			margin: 20rpx 0;
		}
	}
	.rebate{
		background-color: #fff;
		padding: 20rpx;
		border-radius: 20rpx;
		&-item{
			display: flex;
			justify-content: space-between;
			align-items: center;
			padding: 10rpx 0;
			&-text{
				color: #999;
			}
		}
		.net-receipts{
			border-top: 1px solid #999;
			display: flex;
			justify-content: space-between;
			align-items: center;
			padding: 10rpx 0;
			margin-top: 10px;
		}
	}
}
.main-footer{
	display: flex;
	justify-content: space-between;
	align-items: center;
	padding: 40rpx;
	.btn{
		width: 48%;
		height: 30px;
		line-height: 30px;
		text-align: center;
		border: 1px solid #999;
	}
}
</style>
