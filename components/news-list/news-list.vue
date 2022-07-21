<template>
	<view>
		<view class="news_item"
			v-for="item in list"
			:key="item.id"
			@click="$emit('goDetail', item.id)">
			<image src="http://image2.suning.cn/uimg/b2c/newcatentries/0070078057-000000000634917020_1_400x400.jpg"></image>
			<view class="right">
				<view class="tit">
					{{ item.title }}
				</view>
				<view class="info">
					<text>发表时间：{{item.add_time | formatDate}}</text>
					<text>浏览次数：{{ item.click }}</text>
				</view>
			</view>
		</view>
	</view>
</template>

<script>
	export default {
		props: ['list'],
		filters: {
			formatDate(date) {
				const nDate = new Date(date)
				const year = nDate.getFullYear()
				const month = (nDate.getMonth() + 1).toString().padStart(2, 0)
				const day = nDate.getDate().toString().padStart(2, 0)
				
				return `${year}-${month}-${day}`;
			}
		},
	}
</script>

<style lang="scss">
	.news_item {
		display: flex;
		padding: 10rpx 20rpx;
		border-bottom: 1px solid $shop-color;
		image {
			height: 150rpx;
			min-width: 200rpx;
			max-width: 200rpx;
		}
		.right {
			margin-left: 15rpx;
			display: flex; // flex布局
			flex-direction: column; // 纵轴展示
			justify-content: space-between; // 两边贴边显示
			.tit {
				font-size: 30rpx;
			}
			.info {
				font-size: 24rpx;
				text:nth-child(2) {
					margin-left: 30rpx;
				}
			}
		}
		
	}
</style>