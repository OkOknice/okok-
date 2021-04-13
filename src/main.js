import Vue from 'vue'
import App from './App.vue'
import ElementUI from 'element-ui';
import store from './store'
import router from './router'
import axios from './api/http'
import 'element-ui/lib/theme-chalk/index.css';

Vue.config.productionTip = false
Vue.use(ElementUI);
Vue.prototype.$axios = axios
new Vue({
  store,
  router,
  render: h => h(App),
}).$mount('#app')
