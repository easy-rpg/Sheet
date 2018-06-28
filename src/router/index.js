import Vue from 'vue'
import Router from 'vue-router'

import HomeView from '@/views/HomeView'
import SobreView from '@/views/SobreView'
import HelloWorld from '@/components/HelloWorld'
import CardList from '@/components/CardList'

Vue.use(Router)

export default new Router({
	routes: [
		{
			path: '/',
			name: 'HomeView',
			component: HomeView
		},
		{
			path: '/content',
			name: 'CardList',
			component: CardList
		},
		{
			path: '/sobre',
			name: 'SobreView',
			component: SobreView
		},
		{
			path: '/hello',
			name: 'HelloView',
			component: HelloWorld
		}
	]
})
