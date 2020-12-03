import Vue from 'vue'
import App from './App.vue'
import router from './router'
import store from './store'
import config from './config/index';
import './quasar'
import axios from 'axios'

Vue.prototype.http = axios

Vue.config.productionTip = false
Vue.prototype.server = config.server;
Vue.prototype.root_server = config.root_server;

new Vue({
  router,
  store,
  render: h => h(App)
}).$mount('#app')
