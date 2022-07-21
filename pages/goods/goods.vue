<template>
	<view class="goos_list">
		<goods-list :goods="goods" @goodsItemClick="goGoodsDetail"></goods-list>
		<view class="isOver" v-if="isOver">
			-----我是有底线的-----
		</view>
	</view>
</template>

<script>
	import GoodsList from '../../components/goods-list/goods-list.vue'
	
	export default {
		data() {
			return {
				goods: [],
				pagenum: 5743,
				pageSize: 10,
				isOver: false
			}
		},
		components: {
			GoodsList
		},
		onLoad() {
			this.getGoodsList()
		},
		methods: {
			async getGoodsList(callback) {
				const res = await this.$request({
					url: `/goods/search?pagenum=${this.pagenum}&pagesize=${this.pageSize}`
				})
				if(res.data.message.goods.length < this.pageSize) {
					this.isOver = true
				}
				this.goods = [...this.goods, ...res.data.message.goods]
				callback && callback()
			},
			goGoodsDetail(id) {
				uni.navigateTo({
					url: '/pages/goods-detail/goods-detail?id='+ id
				})
			}
		},
		// 上划触底事件
		onReachBottom() {
			if(this.isOver) return
			this.pagenum += 1
			this.getGoodsList()
		},
		// 下拉加载
		onPullDownRefresh() {
			this.pagenum = 5743
			this.isOver = false
			this.goods = []
			this.getGoodsList(()=>{
				uni.stopPullDownRefresh()
			})
		}
	}
</script>

<style lang="scss">
	.goos_list {
		background-color: #eee;
		.isOver {
			width: 100%;
			height: 50px;
			line-height: 50px;
			text-align: center;
			font-size: 28rpx;
		}
	}
</style>
