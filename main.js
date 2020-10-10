import Vue from 'vue'
import App from './App'

Vue.config.productionTip = false

App.mpType = 'app'

// App端和H5引入需要全局引入Decode组件
// #ifdef APP-PLUS || H5
import Decode from './components/towxml/decode.vue';
Vue.component('decode', Decode);
// #endif

const app = new Vue({
    ...App
})
app.$mount()
