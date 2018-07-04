// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue'
import App from './App'
import router from './router'
import Vuetify from 'vuetify'
import 'vuetify/dist/vuetify.css'
import VueSession from 'vue-session'
import axios from 'axios'
import VueAxios from 'vue-axios'

Vue.use(VueAxios, axios)
// axios.defaults.headers.common['access-control-allow-origin'] = true
Vue.config.productionTip = false

Vue.use(VueSession, {persist: true})
Vue.use(Vuetify, {iconfont: 'fa'})

/* eslint-disable no-new */
new Vue({
    el: '#app',
    router,
    template: '<App/>',
    components: { App }
})
