import App from './App'
import Vue from 'vue'

import { myReauest } from 'utils/api.js'
Vue.prototype.$request = myReauest

Vue.filter('formatDate', (date) => {
	const nDate = new Date(date)
	const year = nDate.getFullYear()
	const month = (nDate.getMonth() + 1).toString().padStart(2, 0)
	const day = nDate.getDate().toString().padStart(2, 0)
	
	return `${year}-${month}-${day}`;
})


Vue.config.productionTip = false
App.mpType = 'app'

const app = new Vue({
    ...App
})
app.$mount()