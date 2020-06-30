import Vue from 'vue'
import App from './App.vue'

Vue.prototype.$win = window

Vue.config.productionTip = false

new Vue({
  render: h => h(App),
}).$mount('#app')

document.title = 'Limón Bar'
