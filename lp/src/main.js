// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue'
import App from './App'
import router from './router'
import jquery from 'jquery'
// import $ from 'jquery'
import ElementUI from 'element-ui';
import 'element-ui/lib/theme-chalk/index.css';
import animated from 'animate.css'

import VueAwesomeSwiper from 'vue-awesome-swiper'
import 'swiper/dist/css/swiper.css'


import 'bootstrap/dist/css/bootstrap.min.css'
import 'bootstrap/dist/js/bootstrap.min'
Vue.use(ElementUI);
Vue.use(animated)
Vue.use(VueAwesomeSwiper, /* { default global options } */)

// 引入axios模块
import axios from "axios"
// 配置服务器基础路径
axios.defaults.baseURL="http://127.0.0.1:4001/"
// 配置保存session信息
axios.defaults.withCredentials=true
// axios 注册vue
Vue.prototype.axios=axios
// 引入vuex第三方模块
import Vuex from "vuex"
// 注册vuex
Vue.use(Vuex)


Vue.config.productionTip = false

/* eslint-disable no-new */
new Vue({
  el: '#app',
  router,
  jquery,
  components: { App },
  template: '<App/>'
})
