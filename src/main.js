import Vue from 'vue'
import App from './App.vue'
import VueRouter from 'vue-router'
import VueRange from 'vue-for-range';
import store from './store/store'

import { routes } from './routes'
Vue.use(VueRange);
Vue.use(VueRouter);

const router = new VueRouter({
    mode: 'history',
    routes
});


new Vue({
    el: '#app',
    router,
    store,
    render: h => h(App)
});
