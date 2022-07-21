<template>
	<view class="pics">
		<scroll-view class="left" scroll-y>
			<view v-for="(item, index) in cate"
				:key="item.cat_id"
				:class="{active: current == index}"
				@click="leftClickHandle(index)">
				{{ item.cat_name }}
			</view>
		</scroll-view>
		<scroll-view class="right" scroll-y>
			<view class="item"
				v-for="(item, index) in secondData"
				:key="item.cat_id">
				<image @click="previewImage(index)" :src="item.cat_icon"></image>
				<text>{{ item.cat_name }}</text>
			</view>
		</scroll-view>
	</view>
</template>

<script>
	export default {
		data() {
			return {
				cate: {},
				current: 0,
				secondData: []
			}
		},
		onLoad() {
			this.getPicsCate()
		},
		methods: {
			async getPicsCate() {
				const res = await this.$request({
					url: '/categories'
				})
				this.cate = res.data.message
				this.secondData = this.cate[0].children[0].children
				console.log(this.secondData)
			},
			leftClickHandle(index) {
				this.current = index
				this.secondData = this.cate[index].children[0].children
				console.log(this.secondData)
			},
			// 预览图片
			previewImage(index) {
				let imgUrl = []
				// this.secondData.forEach(item => {
				// 	imgUrl.push(item.cat_icon)
				// })
				imgUrl = this.secondData.map(item => {
					return item.cat_icon
				})
				
				uni.previewImage({
					current: index,
					urls: imgUrl
				})
			}
		}
	}
</script>

<style lang="scss">
	page {
		height: 100%;
	}
	.pics {
		height: 100%;
		display: flex;
		.left {
			width: 200rpx;
			height: 100%;
			border-right: 1px solid #eee;
			view {
				height: 60px;
				line-height: 60px;
				border-top: 1px solid #eee;
				text-align: center;
				color: #333;
				font-size: 30rpx;
			}
			.active {
				background-color: $shop-color;
				color: #fff;
			}
		}
		.right {
			height: 100%;
			width: 520rpx;
			margin: 10rpx auto;
			image {
				width: 520rpx;
				height: 520rpx;
				border-radius: 5px;
			}
			text {
				font-size: 30rpx;
				line-height: 60rpx;
			}
		}
	}
</style>
