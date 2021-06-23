import Vue from 'vue';
import App from './App.vue';
import { firestorePlugin } from 'vuefire';
import VueRouter from 'vue-router';
import router from './router'

Vue.use(VueRouter);
Vue.use(firestorePlugin);
Vue.config.productionTip = false;

new Vue({
  router,
  render: h => h(App)
}).$mount('#app')
