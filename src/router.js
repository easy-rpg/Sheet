import Vue from 'vue'
import Router from 'vue-router'

import SobreView from './views/SobreView.vue'
import HomeView from './views/HomeView.vue'

Vue.use(Router)

export default new Router({
	routes: [
		{
			path: '/',
			name: 'HomeView',
			component: HomeView
		},
		{
			path: '/sobre',
			name: 'SobreView',
			component: SobreView
		}
	]
})
