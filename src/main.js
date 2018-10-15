import App from './App'
import axios from 'axios'
import router from './router'
import Vue from 'vue'
import store from './store/store'
import ElementUI from 'element-ui'
import 'font-awesome/css/font-awesome.css'
import './assets/sass/element-variable.scss'
import './assets/sass/style.scss'

Vue.config.productionTip = true;
Vue.prototype.$axios = axios;
Vue.use(ElementUI);

const app = new Vue({
  router,
  store,
  render: h => h(App)
}).$mount("#app")
