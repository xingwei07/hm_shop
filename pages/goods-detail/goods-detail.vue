<template>
	<view class="goods_detail">
		<swiper indicator-dots>
			<swiper-item v-for="item in detail.pics" :key="detail.pics.pics_id">
				<image :src="item.pics_mid_url"></image>
			</swiper-item>
		</swiper>
		<view class="box1">
			<view class="price">
				<text>￥{{detail.goods_price}}</text>
				<text>￥{{detail.goods_price}}</text>
			</view>
			<view class="goods_name">
				{{detail.goods_name}}
			</view>
		</view>
		<view class="line"></view>
		<view class="box2">
			<view>货号：{{detail.cat_id}}</view>
			<view>库存：{{detail.cat_id}}</view>
		</view>
		<view class="line"></view>
		<view class="box3">
			<view class="tit">详情介绍</view>
			<view class="content">
				<rich-text :nodes="detail.goods_introduce"></rich-text>
			</view>
		</view>
		<view class="goods_nav">
			<uni-goods-nav :fill="true"  :options="options" :buttonGroup="buttonGroup"  @click="onClick" @buttonClick="buttonClick" />
		</view>
	</view>
</template>

<script>
	export default {
		data() {
			return {
				id: 0,
				detail: {},
				options: [
					{
						icon: 'headphones',
						text: '客服'
					}, {
						icon: 'shop',
						text: '店铺',
						info: 2,
						infoBackgroundColor:'#007aff',
						infoColor:"red"
					}, {
						icon: 'cart',
						text: '购物车',
						info: 2
					},
				],
				buttonGroup: [
					{
					  text: '加入购物车',
					  backgroundColor: '#ff0000',
					  color: '#fff'
					},
					{
					  text: '立即购买',
					  backgroundColor: '#ffa200',
					  color: '#fff'
					}
				]
			}
		},
		onLoad(options) {
			this.id = options.id
			this.getGoodDetail()
		},
		methods: {
			async getGoodDetail() {
				const res = await this.$request({
					url: '/goods/detail?goods_id='+ this.id
				})
				this.detail = res.data.message
				console.log(this.detail)
			},
			onClick (e) {
				    uni.showToast({
				      title: `点击${e.content.text}`,
				      icon: 'none'
				    })
				  },
				  buttonClick (e) {
				    console.log(e)
				    this.options[2].info++
				  }
		}
	}
</script>

<style lang="scss">
	.goods_detail {
		swiper {
			height: 700rpx;
			image {
				height: 100%;
				width: 100%;
			}
		}
		.box1 {
			padding: 10px;
			.price {
				font-size: 35rpx;
				color: $shop-color;
				line-height: 80rpx;
				text:nth-child(2) {
					color: #ccc;
					font-size: 28rpx;
					text-decoration: line-through;
					margin-left: 20rpx;
				}
			}
			.goods_name {
				font-size: 32rpx;
				line-height: 60rpx;
			}
		}
		.box2 {
			padding: 0 10px;
			font-size: 32rpx;
			line-height: 70rpx;
		}
		.box3 {
			padding-bottom: 50px;
			.tit {
				font-size: 32rpx;
				padding-left: 10px;
				border-bottom: 1px solid #eee;
				line-height: 70rpx;
			}
			.content {
				padding: 10px;
				font-size: 28rpx;
			}
		}
		.goods_nav {
			position: fixed;
			bottom: 0;
			width: 100%;
		}
	}
	
	.line {
		height: 10rpx;
		width: 750rpx;
		background-color: #eee;
	}
</style>