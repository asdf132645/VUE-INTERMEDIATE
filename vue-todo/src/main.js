import 'babel-polyfill';
import { from } from 'core-js/fn/array'
import Vue from 'vue'
import App from './App.vue'

//스토어 연결
import { store } from './store/store'

Vue.config.productionTip = false

new Vue({
    // store : store 이런식이 맞지만 es6 문법은 생략 가능
    store,
    render: h => h(App),
}).$mount('#app')