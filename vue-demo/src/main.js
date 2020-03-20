// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue'
import App from './App'
import '@/comm/reset-qxj.css'
import '@/comm/icon-qxj.css'
import Global from './global-qxj.js'
import router from './router'

Vue.config.productionTip = false;

Vue.prototype.global = Global;

/* eslint-disable no-new */
new Vue({
  el: '#app',
  router,
  components: { App },
  template: '<App/>'
});
