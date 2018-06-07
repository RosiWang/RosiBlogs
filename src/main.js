
import Vue from 'vue'
import App from './StartApp'
import router from './router'

Vue.config.productionTip = false

new Vue({
    el : '#index',
    router,
    components:{App},
    template:'<App/>'
    }
)

console.log('main start');