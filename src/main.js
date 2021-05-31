import Vue from 'vue'
import App from './App.vue'
import dayjs from "dayjs"

Vue.config.productionTip = false
Vue.prototype.dayjs = dayjs;//可以全局使用dayjs

new Vue({
  render: h => h(App),
}).$mount('#app')
