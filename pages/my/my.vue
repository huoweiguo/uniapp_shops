<template>
	<view class="my_container">
		<view class="my_header_box" :style="'padding-top:'+ top +'px'"></view>
		<view class="my_header_outer">
			<view class="change_stock" @tap="changeMall"><uni-icons type="loop" size="18"
					color="#78cf7e"></uni-icons>切换仓库</view>
			<view class="my_info">
				<cover-image class="header_icon" v-if="user.avatar" :src="user.avatar"></cover-image>
				<cover-image class="header_icon" v-else src="../../static/header.png"></cover-image>
				<text class="header_nickname" v-if="user.nickname">{{user.nickname}}</text>
				<text class="header_nickname" v-else @tap="login">登录</text>
			</view>
		</view>
		<view class="info_common">
			<view class="info_charge">
				<text>账户余额（元）</text>
				<text class="ftb">&yen;{{ balance }}</text>
			</view>
			<navigator class="recharge-btn" url="/pages/deposit/deposit">立即充值</navigator>
		</view>

		<view class="my-content">
			<!-- <view class="my-member">
				<image class="member_icon" src="../../static/member.png"></image>
				会员权益生效中
				<text>有效期至：2025-10-01</text>
			</view> -->
			<view class="my-member-block">
				<view class="my-member-func">常用功能</view>
				<uni-grid :column="4" :highlight="true" :show-border="false">
					<uni-grid-item v-for="(item, index) in list" :index="index" :key="index" @tap="toLinks(item.url)">
						<view class="grid-item-box" style="background-color: #fff;">
							<image :src="item.icon" class="overview-icon"></image>
							<text class="text">{{ item.title }}</text>
						</view>
					</uni-grid-item>
				</uni-grid>
			</view>
		</view>
	</view>
</template>

<script>
	import {
		getWallet
	} from '@/api/user.js';

	export default {
		data() {
			return {
				top: 0,
				balance: '0.00',
				list: [{
						icon: '../../static/data.png',
						title: '经营数据',
						url: '/pages/businessSituation/businessSituation'
					},
					{
						icon: '../../static/order.png',
						title: '全部订单',
						url: '/pages/index/index'
					},
				],
				user: {}
			}
		},

		onLoad() {
			this.getSafeArea()
			this.getUser()
			this.getWalletInfo()
		},

		methods: {
			getUser() {
				const userInfo = uni.getStorageSync('userInfo')
        this.user = userInfo
			},
			getSafeArea() {
				uni.getSystemInfo({
					success: (res) => {
						if (res.safeAreaInsets) {
							this.top = res.safeAreaInsets.top
						}
					}
				})
			},

			changeMall() {
				uni.navigateTo({
					url: '/pages/changeMall/changeMall'
				})
			},

			// 获取用户余额
			async getWalletInfo() {
				const res = await getWallet()
				if (res.code === 0) {
					console.log(res.data)
					this.balance = res.data.balance.toFixed(2)
				} else {
					uni.showToast({
						icon: 'none',
						title: res.msg
					})
				}
			},

			login() {
				uni.navigateTo({
					url: '/pages/login/login'
				})
			},

			toLinks(url) {
				if (url == '/pages/index/index') {
					uni.switchTab({
						url
					})
				} else {
					uni.navigateTo({
						url
					})
				}
			}
		}
	}
</script>

<style lang="scss" scoped>
	.my_container {
		background-color: #f3f3f3;
		height: 100vh;
	}

	.my_header_box {
		background-color: #78cf7e;
	}

	.my_header_outer {
		position: relative;
		padding: 100rpx 40rpx 100rpx;
		background-color: #78cf7e;

		.change_stock {
			position: absolute;
			right: 0;
			top: 30rpx;
			display: flex;
			background-color: #fff;
			height: 60rpx;
			width: 180rpx;
			justify-content: center;
			align-items: center;
			font-size: 24rpx;
			border-radius: 30rpx 0 0 30rpx;
			color: #78cf7e;
		}

		.my_info {
			display: flex;
			align-items: center;

			.header_icon {
				width: 80rpx;
				height: 80rpx;
				border-radius: 50%;
			}

			.header_nickname {
				color: #fff;
				font-size: 32rpx;
				margin-left: 10rpx;
				font-weight: 500;
			}
		}
	}

	.info_common {
		display: flex;
		justify-content: space-between;
		align-items: center;
		background-color: #fff;
		border-radius: 10rpx;
		margin: 0 40rpx 30rpx;
		padding: 30rpx 20rpx;

		.info_charge {
			display: flex;
			flex-direction: column;
			color: #303c30;

			text {
				margin: 6rpx 0;
			}
		}

		.recharge-btn {
			background-color: #f8852a;
			color: #fff;
			padding: 15rpx 40rpx;
			border-radius: 35rpx;
		}
	}

	.my-content {
		margin: 0 40rpx;

		.my-member {
			display: flex;
			align-items: center;
			height: 100rpx;
			background-color: #f4e3c9;
			border-radius: 10rpx 10rpx 0 0;
			padding: 0 20rpx;
			color: #8a5a1a;
			font-size: 32rpx;
			font-weight: 500;

			text {
				color: #b1894c;
				font-size: 28rpx;
				margin-left: 20rpx;
			}

			.member_icon {
				width: 50rpx;
				height: 50rpx;
				margin-right: 10rpx;
			}
		}
	}

	.grid-item-box {
		flex: 1;
		// position: relative;
		/* #ifndef APP-NVUE */
		display: flex;
		/* #endif */
		flex-direction: column;
		align-items: center;
		justify-content: center;
		padding: 15px 0;
	}

	.my-member-block {
		background-color: #fff;
		padding: 20rpx;
		position: relative;
		padding-left: 16rpx;

		.my-member-func {
			position: relative;
			padding-left: 16rpx;

			&::after {
				position: absolute;
				left: 0;
				top: 50%;
				content: '';
				display: block;
				background-color: #40c37f;
				width: 6rpx;
				height: 28rpx;
				transform: translate(0, -50%);
				border-radius: 3rpx;
			}
		}

		.text {
			font-size: 24rpx;
			color: #666;
			margin-top: 10rpx;
		}

		.overview-icon {
			width: 50rpx;
			height: 50rpx;
		}
	}
</style>