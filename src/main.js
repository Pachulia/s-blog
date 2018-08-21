// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue'
import VueResource from 'vue-resource'
import VueRouter from 'vue-router'
import App from './App'
import Routes from './routes'

Vue.config.productionTip = false

Vue.use(VueResource)
Vue.use(VueRouter)

//自定义指令
Vue.directive('rainbow', {
  bind(el, binding, vnode) {
    el.style.color = "#" + Math.random().toString(16).slice(2, 8);
  }
})

Vue.directive('theme', {
  bind(el, binding, vnode) {
    if (binding.value == 'width') {
      el.style.maxWidth = "1260px";
    } else if (binding.value == 'narrow') {
      el.style.maxWidth = "560px";
    }
    if (binding.arg == 'column') {
      el.style.background = "#6677cc";
      el.style.padding = '20px';
    }
  }
})

/* 
 *搜索过滤器
 *博客标题大写 
 *全局写法
 */
// Vue.filter("to-upperCase",function(value){
//   return value.toUpperCase();
// })

Vue.filter("snippet", function (value) {
  return value.slice(0, 100) + "...";
})

//创建路由跳转页面
const router = new VueRouter({
  routes: Routes,
  mode: "history" //去掉地址上的#号
})

/* eslint-disable no-new */
new Vue({
  el: '#app',
  components: {
    App
  },
  template: '<App/>',
  router: router
})
