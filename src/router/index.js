import Vue from 'vue'
import Router from 'vue-router'

import HomeView from '@/views/HomeView'
import SobreView from '@/views/SobreView'
import HelloWorld from '@/components/HelloWorld'
import Login from '@/components/Login'
import Register from '@/components/Register'

Vue.use(Router)

export default new Router({
	routes: [
		{
			path: '/',
			name: 'HomeView',
			component: HomeView,
			meta: {
				auth: false
			}
		},
		{
			path: '/login',
			name: 'Login',
			component: Login,
			meta: {
				auth: false
			}
		},
		{
			path: '/register',
			name: 'Register',
			component: Login,
			meta: {
				auth: false
			}
		},
		{
			path: '/hello',
			name: 'HelloView',
			component: HelloWorld,
			meta: {
				auth: true
			}
		}
	]
})
