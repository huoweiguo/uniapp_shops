<template>
	<view class="page-main">
		<view class="key-data">
			<uni-row :gutter="40">
				<uni-col :span="12">
					<view class="title">今日销售（¥）</view>
					<view class="num">{{ sale.todayPrice }}</view>
				</uni-col>
				<uni-col :span="12">
					<view class="title">今日采购（¥）</view>
					<view class="num">{{ purchase.todayPrice }}</view>
				</uni-col>
			</uni-row>
      <uni-row :gutter="40">
      	<uni-col :span="12">
      		<view class="title">昨日销售（¥）</view>
      		<view class="num">{{ sale.yesterdayPrice }}</view>
      	</uni-col>
      	<uni-col :span="12">
      		<view class="title">昨日采购（¥）</view>
      		<view class="num">{{ purchase.yesterdayPrice }}</view>
      	</uni-col>
      </uni-row>
      <uni-row :gutter="40">
      	<uni-col :span="12">
      		<view class="title">本月销售（¥）</view>
      		<view class="num">{{ sale.monthPrice }}</view>
      	</uni-col>
      	<uni-col :span="12">
      		<view class="title">本月采购（¥）</view>
      		<view class="num">{{ purchase.monthPrice }}</view>
      	</uni-col>
      </uni-row>
      <uni-row :gutter="40">
      	<uni-col :span="12">
      		<view class="title">本年销售（¥）</view>
      		<view class="num">{{ sale.yearPrice }}</view>
      	</uni-col>
      	<uni-col :span="12">
      		<view class="title">本年采购（¥）</view>
      		<view class="num">{{ purchase.yearPrice }}</view>
      	</uni-col>
      </uni-row>
		</view>
		<view class="sales-trends">
			<view class="title">销售统计</view>
			<view class="trends">
				<qiun-data-charts type="line" :opts="opts" :chartData="saleTable" />
			</view>
		</view>
		<view class="sales-trends">
			<view class="title">采购统计</view>
			<view class="trends">
        <qiun-data-charts type="line" :opts="opts" :chartData="purchaseTable" />
			</view>
		</view>
	</view>
</template>

<script>
  import { saleStatistics, purchaseSummary, saleSummary, purchaseStatistics } from '@/api/common.js'
	export default {
		data() {
			return {
        purchase: {
          monthPrice: '0.00',
          yearPrice: '0.00',
          yesterdayPrice: '0.00',
          todayPrice: '0.00'
        },
        sale: {
          monthPrice: '0.00',
          yearPrice: '0.00',
          yesterdayPrice: '0.00',
          todayPrice: '0.00'
        },
				isShow: false,
				opts: {
					color: ["#1890FF", "#91CB74", "#FAC858", "#EE6666", "#73C0DE", "#3CA272", "#FC8452", "#9A60B4",
						"#ea7ccc"
					],
					padding: [15, 10, 0, 15],
          xAixs: {
            itemCount: 3,
            scrollShow: true
          },
					extra: {
						line: {
							type: "curve",
							width: 2,
							activeType: "hollow"
						}
					}
				},
				saleTable: {
					categories: [],
					series: [{
						name: "销售量",
						data: []
					}]
				},
        purchaseTable: {
        	categories: [],
        	series: [{
        		name: "采购量",
        		data: []
        	}, ]
        }
			}
		},
    
    onLoad () {
      // 销售统计
      this.getStatistics()
      // 采购统计
      this.getPurchaseStatistics()
      // 采购汇总
      this.getPurchaseSummary()
      // 销售汇总
      this.getSaleSummary()
    },
    
		methods: {
			changeShow() {
				this.isShow = !this.isShow;
			},
      
      async getStatistics () {
        const res = await saleStatistics()
        if (res.code === 0) {
          const data = res.data || []
          if (data.length) {
            data.map(item => {
              this.saleTable.categories.push(item.time)
              this.saleTable.series[0].data.push(item.price)
            })
          }
        }
      },
      
      async getPurchaseStatistics () {
        const res = await purchaseStatistics()
        if (res.code === 0) {
          const data = res.data || []
          if (data.length) {
            data.map(item => {
              this.purchaseTable.categories.push(item.time)
              this.purchaseTable.series[0].data.push(item.price)
            })
          }
        }
      },
      
      async getPurchaseSummary () {
        const res = await purchaseSummary()
        if (res.code === 0) {
          const { monthPrice, todayPrice, yearPrice, yesterdayPrice } = res.data
          this.purchase = {monthPrice, todayPrice, yearPrice, yesterdayPrice}
        }
      },
      async getSaleSummary () {
        const res = await saleSummary()
        if (res.code === 0) {
          const { monthPrice, todayPrice, yearPrice, yesterdayPrice } = res.data
          this.sale = {monthPrice, todayPrice, yearPrice, yesterdayPrice}
        }
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