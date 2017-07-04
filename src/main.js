// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue'
// import App from './App'
import router from './router'

Vue.config.productionTip = false
import ElementUI from 'element-ui'
import 'element-ui/lib/theme-default/index.css'
import './layout/css/layout.css'
import App from './app.vue'
import '../static/fonts/iconfont.css'
import './components'

//小组件
import 'vue-multiselect/dist/vue-multiselect.min.css'

import axios from 'axios'
Vue.prototype.$api = axios;

import VueTaber from 'vue-tabs'
import './tab/vue-tabs.css'
import tabs from './tabs.js'
const vueTaber = new VueTaber({
	tabs,
    // persist: true
})
Vue.use(VueTaber)
Vue.use(ElementUI)
/* eslint-disable no-new */
new Vue({
	el: '#app',
	router,
	taber: vueTaber,
	template: '<App/>',
	components: { App }
})
