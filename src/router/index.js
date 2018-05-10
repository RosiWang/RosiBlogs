import Vue from 'vue'
import Router from 'vue-router'
import homePage from '@/component/HomePage'

Vue.use(Router)
export default new Router({
    routes:[
        {
            path:'/',
            name:'name',
            component:homePage
        }
    ]
})