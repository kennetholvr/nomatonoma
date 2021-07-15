import Vue from 'vue'
import App from './App.vue'
import vuetify from './plugins/vuetify'
import VueCountdownTimer from "vuejs-countdown-timer";

Vue.config.productionTip = false
Vue.use(VueCountdownTimer);
Vue.use(vuetify);

new Vue({
  vuetify,
  render: h => h(App)
}).$mount('#app')
