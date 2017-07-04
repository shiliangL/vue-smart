import Vue from 'vue';
import Router from 'vue-router';

import Login from '../page/login/login.vue';
import Layout from '../layout/App.vue';

Vue.use(Router);

export default new Router({
	routes: [
		{
			path: '/layout',
			name: 'Layout',
			component: Layout
		},
		{
			path: '/',
			redirect: '/login'
		},
		{
			path: '/login',
			name: 'Login',
			component: Login
		}
		// {
		// 	path: '/login',
		// 	component: resolve => require(['../pages/login/login.vue'], resolve)
		// },
		// {
		// 	path: '/layout',
		// 	component: resolve => require(['../layout/Layout.vue'])
		// }
	]
})