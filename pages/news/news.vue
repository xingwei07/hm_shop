<template>
	<view class="news">
		<news-list :list="newsList" @goDetail="goDetail"></news-list>
	</view>
</template>

<script>
	import NewsList from '../../components/news-list/news-list.vue'
	export default {
		data() {
			return {
				newsList: []
			}
		},
		onLoad() {
			this.getNews()
		},
		components: {
			NewsList
		},
		methods: {
			async getNews() {
				const res = await this.$request({
					url: '/localhost/api/getnewslist'
				})
				this.newsList = res.data.message
			},
			goDetail(id) {
				uni.navigateTo({
					url: '/pages/news-detail/news-detail?id=' + id
				})
			}
		}
	}
</script>

<style lang="scss">
</style>
