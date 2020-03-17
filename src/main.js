import Vue from 'vue'
import App from './App.vue'
// 导入router
import router from './router'
// 导入element-ui
import ElementUI from 'element-ui';
// 导入element-uId样式
import 'element-ui/lib/theme-chalk/index.css';
// 使用element-ui
Vue.use(ElementUI);

Vue.config.productionTip = false

new Vue({
  render: h => h(App),
  // 将路由对象挂载到vue实例中
  router
}).$mount('#app')
