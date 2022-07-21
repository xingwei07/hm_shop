let BASE_URL = "https://api-hmugo-web.itheima.net/api/public/v1"

export const myReauest = (options) => {
	return new Promise((resolve, reject) => {
		if(options.url.indexOf('/localhost') > -1) {
			BASE_URL = 'http://localhost:8082'
			options.url = options.url.substr(10)
		} else {
			BASE_URL = "https://api-hmugo-web.itheima.net/api/public/v1"
		}
		uni.showLoading({
			title: '加载中...'
		});
		return uni.request({
			url: BASE_URL + options.url,
			method: options.method || 'GET',
			data: options.data || {},
			success: (res) => {
				uni.hideLoading()
				if((res.data.meta && res.data.meta.status === 200) || res.data.status === 0) {
					resolve(res)
				} else {
					uni.showToast({
						title: "数据获取失败",
						icon: "error"
					})
				}
			},
			fail: (err) => {
				uni.hideLoading()
				uni.showToast({
					title: "接口调用失败",
					icon: "error"
				})
				reject(err)
			}
		});
	})
}