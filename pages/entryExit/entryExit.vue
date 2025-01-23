<template>
	<view class="entry_exit">
		<view class="eeTimes">
			<view class="ee-date">
				<uni-datetime-picker
					v-model="range"
					type="daterange"
					start="2021-3-20"
					end="2021-5-20"
					rangeSeparator="~"
				/>
			</view>
			<view class="ee-total">
				<text>筛选 5 条</text>
			</view>
		</view>
		<view class="main">
			<view class="main-persons">
				<view>进店人数
				<uni-icons type="info-filled" size="16" color="#666"></uni-icons>
				</view>
				<view class="persons-num">5人</view>
			</view>
			<view class="person-detail">
				<view class="pd-date" @click="handleClick()">
					<text>2025-01-0803:22:20~未查询到关门时间</text>
					<uni-icons type="right" size="20" color="#666"></uni-icons>
				</view>
				<view class="pd-name">
					<uni-icons type="person-filled" size="20"></uni-icons>
					肖长江 <text class="pd-tag">骑手</text>
				</view>
				<view class="pd-phone">
					<uni-icons type="bars" size="20"></uni-icons>
					239945569
				</view>
				<view class="pd-button">
					<text>查看回放</text>
				</view>
			</view>
			<view class="person-detail">
				<view class="pd-date">
					<text>2025-01-0803:22:20~未查询到关门时间</text>
					<uni-icons type="right" size="20" color="#666"></uni-icons>
				</view>
				<view class="pd-name">
					<uni-icons type="person-filled" size="20"></uni-icons>
					肖长江 <text class="pd-tag">骑手</text>
				</view>
				<view class="pd-phone">
					<uni-icons type="bars" size="20"></uni-icons>
					239945569
				</view>
				<view class="pd-button">
					<text>查看回放</text>
				</view>
			</view>
			<view class="person-detail">
				<view class="pd-date">
					<text>2025-01-0803:22:20~未查询到关门时间</text>
					<uni-icons type="right" size="20" color="#666"></uni-icons>
				</view>
				<view class="pd-name">
					<uni-icons type="person-filled" size="20"></uni-icons>
					肖长江 <text class="pd-tag">骑手</text>
				</view>
				<view class="pd-phone">
					<uni-icons type="bars" size="20"></uni-icons>
					239945569
				</view>
				<view class="pd-button">
					<text>查看回放</text>
				</view>
			</view>
		</view>
	</view>
</template>

<script>
	export default {
		data() {
			return {
				range: ['2025-01-01','2025-01-20'],
				total: 0
			}
		},
		methods: {
			bindDateChange(v){
				console.log(v,232323)
			},
			
			handleClick(){
				uni.navigateTo({
					url: '/pages/salesOrderDetails/salesOrderDetails'
				})
			}
		}
	}
</script>

<style scoped lang="scss">
	.entry_exit{
		.eeTimes{
			display: flex;
			justify-content: space-between;
			align-items: center;
			.ee-date{
				flex: 0 0 65%;
			}
			.ee-total{
				color: #999;
				// padding-left: 20rpx;
			}
		}
		.main{
			padding: 5px;
			background-color: #f2f2f2;
			.main-persons{
				display: flex;
				justify-content: space-between;
				background-color: #fff;
				border-radius: 3rpx;
				padding: 10rpx 10rpx;
				.persons-num{
					color: #40c37f;
				}
			}
			.person-detail{
				padding: 10rpx 10rpx;
				background-color: #fff;
				border-radius: 3rpx;
				margin-top: 10rpx;
				.pd-date{
					display: flex;
					justify-content: space-between;
					align-items: center;
					text{
						color: #666;
					}
				}
				.pd-name{
					margin-top: 30rpx;
					.pd-tag{
						padding: 3rpx 10rpx;
						color: #1e80ff;
						background-color: #e6f0ff;
						border-radius: 2rpx;
					}
				}
				.pd-phone{
					margin-top: 25rpx;
				}
				.pd-button{
					width: 100%;
					display: flex;
					justify-content: flex-end;
					margin-bottom: 20rpx;
					text{
						color: #fff;
						border: 2rpx solid #40c37f;
						background-color: #40c37f;
						font-size: 28rpx;
						padding: 10rpx 30rpx;
						border-radius: 30rpx;
					}
				}
			}
		}
	}
</style>
