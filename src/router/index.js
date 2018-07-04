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
			component: HomeView
		},
		{
			path: '/login',
			name: 'Login',
			component: Login
		},
		{
			path: '/register',
			name: 'Register',
			component: Register
		},
		{
			path: '/hello',
			name: 'HelloView',
			component: HelloWorld
		}
	]
})
