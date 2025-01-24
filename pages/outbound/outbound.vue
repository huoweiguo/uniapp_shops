<template>
	<view class="main-search">
		<view class="search-icon">
			<uni-icons type="person-filled" size="20" color="#ff7704"></uni-icons>
			出库单
		</view>
		<uni-section class="search-box">
			<uni-easyinput prefixIcon="search" v-model="value" placeholder="请输入商品名称、条码、货位" @iconClick="iconClick">
			</uni-easyinput>			
			<view class="scan-the-code">
				<uni-icons type="person-filled" size="20" color="#fff"></uni-icons>扫码
			</view>
		</uni-section>
	</view>
</template>

<script>
	export default {
		data() {
			return {
				value: ''
			}
		},
		methods: {
			
		}
	}
</script>

<style lang="scss" scoped>
.main-search{
	display: flex;
	padding: 30rpx;
	align-items: center;
	.search-icon{
		flex: 0 0 100rpx;
		color: #ff7704;
	}
	.search-box{
		flex: auto;
		display: flex;
		align-items: center;
		.scan-the-code{
			line-height: 36px;
			height: 36px;
			padding: 0 20rpx;
			background-color: #ff7704;
			border-top-right-radius: 18px;
			border-bottom-right-radius: 18px;
			color: #fff;
			margin-left: -10px;
			z-index: 1;
		}
	}
}
</style>
