import Vue from 'vue';
import Router from 'vue-router';


import jrtj from '../pages/jrtj'
import ncxd from '../pages/ncxd'
import zhfq from '../pages/zhfq'
import Main from '../pages/main'

import test from '../pages/test1'

Vue.use(Router);

export default new Router({
    // mode:'history',
    routes:[
        {
            path:'/main',
            name:'main',
            component:Main
        },{
        path:'/jrtj',
        name:'jrtj',
        component:jrtj
    },{
        path:'/ncxd',
        name:'ncxd',
        component:ncxd
    },
    {
        path:'/zhfq',
        name:'zhfq',
        component:zhfq
    },
    {
        path:'/test1',
        name:'test1',
        component:test
    },
    
    {
        path:'/',
        redirect:'/main'
    }
]
})