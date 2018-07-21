
import Vue from 'vue'
import App from './StartApp'
import router from './router'
import VueI18n from 'vue-i18n'
import VueResource from 'vue-resource'

Vue.config.productionTip = false

Vue.use(VueI18n);
Vue.use(VueResource);

const i18n = new VueI18n({
    locale: 'zh', // 语言标识
    messages: {
        'zh': require('../static/language/zh'),
        'en': require('../static/language/en')
    }
})
new Vue({
    el : '#index',
    router,
    i18n,
    components:{App},
    template:'<App/>'
    }
)

console.log('main start');
