<template>
	<view class="home">
		<!-- 轮播图区域 -->
		<swiper indicator-dots circular autoplay>
			<swiper-item v-for="item in swipers" :key="item.goods_id">
				<image :src="item.image_src"></image>
			</swiper-item>
		</swiper>
		<!-- 导航区域 -->
		<view class="nav">
			<view v-for="(item, index) in navs"
				:key="index" 
				class="nav_item"
				@click="navItemClick(item.path)">
				<view class="iconfont" :class="item.icon"></view>
				<text>{{ item.title }}</text>
			</view>
		</view>
		<!-- 推荐商品区 -->
		<view class="hot_goods">
			<view class="tit">
				推荐商品
			</view>
			<goods-list :goods="goods" @goodsItemClick="goGoodsDetail"></goods-list>
		</view>
	</view>
</template>

<script>
	import GoodsList from '../../components/goods-list/goods-list.vue'
	
	export default {
		data() {
			return {
				swipers: [], // 轮播图
				goods:[], // 热门商品
				navs: [
					{
						icon: 'icon-ziyuan',
						title: '黑马超市',
						path: '/pages/goods/goods'
					},
					{
						icon: 'icon-guanyuwomen',
						title: '联系我们',
						path: '/pages/contact/contact'
					},
					{
						icon: 'icon-tupian',
						title: '社区图片',
						path: '/pages/pics/pics'
					},
					{
						icon: 'icon-shipin',
						title: '学习视频',
						path: '/pages/videos/videos'
					}
				]
			}
		},
		onLoad() {
			this.getSwipers()
			this.getHotGoods()
		},
		components: {
			GoodsList
		},
		methods: {
			// 获取轮播图数据
			async getSwipers() {
				const res = await this.$request({
					url: '/home/swiperdata',
				});
				this.swipers = res.data.message
			},
			// 获取推荐商品数据
			async getHotGoods() {
				const res = await this.$request({
					url: '/goods/search?pagenum=1&pagesize=10'
				})
				this.goods = res.data.message.goods
			},
			// 导航跳转的处理事件
			navItemClick(url) {
				uni.navigateTo({
					url
				})
			},
			// 跳转到商品详情页
			goGoodsDetail(id) {
				uni.navigateTo({
					url: '/pages/goods-detail/goods-detail?id='+ id
				})
			}
		}
	}
</script>

<style lang="scss">
	.home {
		swiper {
			width: 750rpx;
			height: 380rpx;
			image {
				height: 100%;
				width: 100%;
			}
		}
		.nav {
			display: flex;
			.nav_item {
				width: 25%;
				text-align: center;
				view {
					width: 120rpx;
					height: 120rpx;
					background-color: $shop-color;
					border-radius: 60rpx;
					margin: 10px auto;
					line-height: 120rpx;
					color: #fff;
					font-size: 50rpx;
				}
				.icon-tupian {
					font-size: 45rpx;
				}
				text {
					font-size: 30rpx;
				}
			}
		}
		.hot_goods {
			background-color: #eee;
			overflow: hidden;
			margin-top: 10px;
			.tit {
				height: 50px;
				line-height: 50px;
				color: $shop-color;
				text-align: center;
				letter-spacing: 20px; // 文字间隔
				background-color: #fff;
				margin: 7rpx 0;
			}
		}
	}
</style>
