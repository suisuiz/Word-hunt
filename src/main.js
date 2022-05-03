/*
 * @Descripttion: 
 * @Author: SUI
 * @Date: 2022-05-03 11:16:36
 * @LastEditors: SUI
 * @LastEditTime: 2022-05-03 18:50:00
 * @FilePath: \2022.5.3\vue2-word-hunt\src\main.js
 */
import Vue from 'vue'
import App from './App.vue'

window.$bus = new Vue()

Vue.config.productionTip = false

new Vue({
  render: h => h(App),
}).$mount('#app')