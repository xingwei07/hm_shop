<template>
	<view class="goos_list">
		<view class="goods_item"
			v-for="item in goods"
			:key="item.goods_id"
			@click="$emit('goodsItemClick', item.goods_id)">
			<image :src="item.goods_small_logo"></image>
			<view class="price">
				<text>￥{{ item.goods_price }}</text>
				<text>￥{{ item.goods_price }}</text>
			</view>
			<view class="name">
				<text>{{ item.goods_name }}</text>
			</view>
		</view>
	</view>
</template>

<script>
	export default {
		name: 'GoodsList',
		props: {
			goods: {
				type: Array,
				required: true,
				default: []
			}
		}
	}
</script>

<style lang="scss">
.goos_list {
	padding: 0 15rpx;
	display: flex;
	flex-wrap: wrap; // 换行显示
	justify-content: space-between;
	.goods_item {
		background-color: #fff;
		width: 355rpx;
		margin: 10rpx 0;
		padding: 15rpx;
		box-sizing: border-box;
		image {
			width: 80%;
			height: 150px;
			display: block;
			margin: 0 auto;
		}
		.price {
			color: $shop_color;
			font-size: 36rpx;
			margin: 20rpx 0 5rpx 0;
			text:nth-child(2) {
				color: #ccc;
				font-size: 28rpx;
				margin-left: 17rpx;
				text-decoration: line-through;
			}
		}
		.name {
			font-size: 28rpx;
			line-height: 50rpx;
			padding-bottom: 15rpx;
			padding-top: 10rpx;
		}
	}
}
</style>