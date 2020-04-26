// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue'
import App from './App'
import router from './router'

import ElementUI from 'element-ui';
import 'element-ui/lib/theme-chalk/index.css';

Vue.use(ElementUI);


import 'swiper/dist/css/swiper.css';
//css样式
import './style/resize.scss';//css reset
import './style/comment.scss';//公共css

Vue.config.productionTip = false

import 'babel-polyfill'


/**@name 接口 */
import conf from "./config/index.js";
import http from "./utils/http.js";
Vue.prototype.$http = http;
Vue.prototype.$conf = conf;



/* eslint-disable no-new */
new Vue({
  el: '#app',
  router,
  components: { App },
  template: '<App/>'
})
