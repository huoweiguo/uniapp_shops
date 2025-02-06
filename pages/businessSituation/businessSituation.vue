<template>
	<view class="page-main">
		<view class="main-top">
			日
			<text>2025.02.13</text>
		</view>
		<view class="key-data">
			<uni-row :gutter="20">
				<uni-col :span="12">
					<view class="left">
						关键数据
						<uni-icons type="eye" color="#fff" v-show="isShow" @click="changeShow"></uni-icons>
						<uni-icons type="eye-slash" color="#fff" v-show="!isShow" @click="changeShow"></uni-icons>
					</view>
				</uni-col>
				<uni-col :span="12">
					<view class="right">更新于 2025.01.13 19:11</view>
				</uni-col>
			</uni-row>
			<uni-row :gutter="40">
				<uni-col :span="12">
					<view class="title">销售额（¥）</view>
					<view class="num">0.00</view>
					<view class="yesterday">昨日 0.00</view>
				</uni-col>
				<uni-col :span="12">
					<view class="title">笔数</view>
					<view class="num">0</view>
					<view class="yesterday">昨日 0</view>
				</uni-col>
			</uni-row>
			<uni-row :gutter="20">
				<uni-col :span="12">
					<view class="title">毛利（¥）</view>
					<view class="num">0.00</view>
					<view class="yesterday">昨日 0.00</view>
				</uni-col>
				<uni-col :span="12">
					<view class="title">资金收入（¥）</view>
					<view class="num">0.00</view>
					<view class="yesterday">昨日 0.00</view>
				</uni-col>
			</uni-row>
		</view>
		<view class="sales-trends">
			<view class="title">销售趋势</view>
			<view class="trends">
				<qiun-data-charts type="line" :opts="opts" :chartData="chartData" />
			</view>
		</view>
		<view class="tot-selling-products">
			<view class="title">
				<text>商品热销</text>
				<text>查看更多 > </text>
			</view>
		</view>
	</view>
</template>

<script>
	export default {
		data() {
			return {
				isShow: false,
				opts: {
					color: ["#1890FF", "#91CB74", "#FAC858", "#EE6666", "#73C0DE", "#3CA272", "#FC8452", "#9A60B4",
						"#ea7ccc"
					],
					padding: [15, 10, 0, 15],
					enableScroll: false,
					legend: {},
					xAxis: {
						disableGrid: true
					},
					yAxis: {
						gridType: "dash",
						dashLength: 2,
						title: '销售量'
					},
					extra: {
						line: {
							type: "straight",
							width: 2,
							activeType: "hollow"
						}
					}
				},
				chartData: {
					categories: ["2018", "2019", "2020", "2021", "2022", "2023"],
					series: [{
						name: "销售量",
						data: [35, 8, 25, 37, 4, 20]
					}, ]
				}
			}
		},
		methods: {
			changeShow() {
				this.isShow = !this.isShow;
			}
		}
	}
</script>

<style scoped lang="scss">
	::v-deep .uni-row {
		margin-bottom: 40rpx;
	}

	.page-main {
		background-color: #f2f2f2;

		.main-top {
			height: 50rpx;
			line-height: 50rpx;
			font-weight: 100;
			margin-bottom: 20rpx;
		}

		.key-data {
			background-color: #1677ff;
			border-bottom-right-radius: 5%;
			border-bottom-left-radius: 5%;
			color: #fff;
			padding: 50rpx 40rpx 80rpx;

			.right {
				font-size: 28rpx;
			}

			.title {
				font-weight: 100;
			}

			.num {
				font-weight: 500;
			}

			.yesterday {
				font-size: 24rpx;
				font-weight: 100;
			}
		}

		.sales-trends {
			padding: 20rpx;
			margin: -40rpx 20rpx 20rpx;
			background-color: #fff;
			border-radius: 5rpx;

			.title {
				margin-bottom: 20rpx;
			}

			.trends {
				width: 100%;
				height: 500rpx;
			}
		}

		.tot-selling-products {
			padding: 20rpx;
			background-color: #fff;
			margin: 20rpx;

			.title {
				display: flex;
				justify-content: space-between;
				margin-bottom: 20rpx;

				text {
					&:last-child {
						font-size: 26rpx;
						color: #999;
					}
				}
			}
		}
	}
</style>