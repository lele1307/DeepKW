import VueRouter from 'vue-router' //1.导入包
import home from '../components/Home/home.vue'
import about from '../components/About/about.vue'
import works from '../components/Works/works.vue'
import news from '../components/News/news.vue'
import contact from '../components/Contact/contact.vue'
//2.创建路由对象
var router = new VueRouter({
    routes:[
        {path: '/', redirect: '/home'},
        {
            path: '/home', 
            component: home,
            /* children:[
                {path:'news',component:news},
            ]  */
        },
        {path: '/about', component: about},
        {path: '/news', component: news},
        {path: '/works', component: works},
        {path: '/contact', component: contact}
    ]
})
export default router//3.暴露
