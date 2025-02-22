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
				<text>筛选 {{ total }} 条</text>
			</view>
		</view>
		<view class="main">
			<view class="main-persons">
				<view>进店人数
				<uni-icons type="info-filled" size="16" color="#666"></uni-icons>
				</view>
				<view class="persons-num">{{total}}人</view>
			</view>
      <scroll-view class="scroll-view_H" scroll-y="true" lower-threshold="50" @scrolltolower="scrolltolower">
        <view class="person-detail" v-for="item in list" :key="item.id">
          <view class="pd-date" @tap="handleClick">
            <text>{{ timestampToTime(item.createTime) }}</text>
            <uni-icons type="right" size="20" color="#666"></uni-icons>
          </view>
          <view class="pd-name">
           仓库名： {{ item.warehouseName ? item.warehouseName : '--' }}
          </view>
          <view class="pd-name">
            开门状态：
            <text v-if="item.status === 1" class="fcgreen">成功</text>
            <text v-if="item.status === 0" class="fcred">失败</text>
          </view>
          <!-- <view class="pd-button">
            <text>查看回放</text>
          </view> -->
        </view>
      </scroll-view>
      <uni-load-more :status="status"></uni-load-more>
    </view>
	</view>
</template>

<script>
  import { entryRecord } from '@/api/common.js'
  import { timestampToTime } from '@/utils/tools.js'
	export default {
		data() {
			return {
				range: ['2025-01-01','2025-01-20'],
				total: 0,
        status: 'more',
        timestampToTime,
        pageReqVO: {
          pageNo: 1,
          pageSize: 10
        },
        list: []
			}
		},
    onLoad () {
      this.getEntryRecord()
    },
		methods: {
			bindDateChange(v){
				console.log(v,232323)
			},
      
      async getEntryRecord () {
        const res = await entryRecord(this.pageReqVO)
        if (res.code === 0) {
          this.list = [...this.list, ...res.data.list]
          
          this.total = res.data.total
          if (res.data.list.length < this.pageReqVO.pageSize) {
            this.status = 'noMore'
          }
        } else {
          uni.showToast({
            icon: 'none',
            title: res.msg
          })
        }
      },
      
      scrolltolower () {
        const currentCount = this.pageReqVO.pageSize * this.pageReqVO.pageNo
        if (currentCount < this.total) {
          this.pageReqVO.pageNo++
          this.status = 'loading'
          this.getEntryRecord()
        } else {
          this.status = 'noMore'
        }
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
		height: 100vh;
		.eeTimes{
      position: fixed;
      left: 0;
      top: 0;
      width: 100%;
      padding: 0 20rpx;
			height: 85rpx;
			display: flex;
			justify-content: space-between;
			align-items: center;
      box-sizing: border-box;
      background-color: #fff;
      z-index: 99;
			.ee-date{
				flex: 0 0 65%;
			}
			.ee-total{
				color: #999;
        font-size: 28rpx;
				// padding-left: 20rpx;
			}
		}
		.main{
			height: calc(100vh - 75rpx);
			padding: 20rpx 20rpx 100rpx;
			background-color: #f2f2f2;
      margin-top: 85rpx;
      .scroll-view_H {
        height: 100%;
      }
			.main-persons{
				display: flex;
				justify-content: space-between;
				background-color: #fff;
				border-radius: 10rpx;
				padding: 20rpx;
				.persons-num{
					color: #4fe296;
				}
			}
			.person-detail{
				padding: 20rpx;
				background-color: #fff;
				border-radius: 15rpx;
				margin-top: 20rpx;
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
					font-weight: 300;
					.pd-tag{
						padding: 3rpx 10rpx;
						color: #1e80ff;
						background-color: #e6f0ff;
						border-radius: 5rpx;
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
						border: 2rpx solid #4fe296;
						background-color: #4fe296;
						font-size: 28rpx;
						padding: 10rpx 30rpx;
						border-radius: 30rpx;
					}
				}
			}
		}
	}
</style>
