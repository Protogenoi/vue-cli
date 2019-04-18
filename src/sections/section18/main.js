import Vue from 'vue/types'
import VueRouter from 'vue-router/types'
import VueResource from 'vue-resource/types';

import App from './App.vue'
import {routes} from './routes'
import store from './store/store'

Vue.use(VueRouter);
Vue.use(VueResource);

Vue.http.options.root = 'https://vuejs-stock-trader-d4803.firebaseio.com/';

Vue.filter('currency', (value) => {
  return '£' + value.toLocaleString();
});

const router = new VueRouter({
  routes,
  mode: 'history'
});

new Vue({
  el: '#app',
  router,
  store,
  render: h => h(App)
});