import Vue from 'vue'
import Router from 'vue-router'

import HomeView from '@/views/HomeView'
import CampanhasView from '@/views/CampanhasView'
import PersonagensView from '@/views/PersonagensView'
import WikiView from '@/views/WikiView'
import PerfilView from '@/views/PerfilView.vue'

import Login from '@/components/Usuario/Login'
import Register from '@/components/Usuario/Register'


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
			path: '/wiki',
			name: 'WikiView',
			component: WikiView
		},
		{
			path: '/campanhas',
			name: 'CampanhasView',
			component: CampanhasView
		},
		{
			path: '/personagens',
			name: 'PersonagensView',
			component: PersonagensView
		},
		{
			path: '/perfil',
			name: 'PerfilView',
			component: PerfilView
		}
	]
})
