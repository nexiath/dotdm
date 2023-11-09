import Vue from 'vue'
import App from './components/App.vue'
import './registerServiceWorker'
import router from './router'
import BootstrapVue from "bootstrap-vue";
import store from './store'
import axios from "axios";

Vue.config.productionTip = false

Vue.use(BootstrapVue);
Vue.use(axios);

new Vue({
  router,
  store,
  render: h => h(App)
}).$mount('#app')
