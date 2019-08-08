import Vue from 'vue'
import Router from 'vue-router'

Vue.use(Router)

const router = new Router({
    mode: 'history',
    routes:[{
        name:'EnterApply',
        path: '/EnterApply',
        component: ()=>import('./../components/Main/list.vue'),
        children:[{
            name: 'detail',
            path: 'detail/:id',
            component: ()=>import('./../components/Main/folder.vue')
        }]
    }]
})

export default router;