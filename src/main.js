// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue'
import App from './App'
import router from './router'
// swiper插件
import VueAwesomeSwiper from 'vue-awesome-swiper'
import '../css/swiper-4.1.6.min.css'   
import $ from 'jquery' //引入的jq

// import  louti from '../static/js/louti'  
// Vue.use(louti);

Vue.config.productionTip = false

Vue.use(VueAwesomeSwiper)

/* eslint-disable no-new */
new Vue({
  el: '#app',
  router,
  components: { App },
  template: '<App/>'
})


