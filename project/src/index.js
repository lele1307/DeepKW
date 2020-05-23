//export
import Vue from 'vue'
import VueRouter from 'vue-router' //1.导入包
Vue.use(VueRouter) //2.安装路由功能
import router from '../src/router/router.js'//3.抽离路由到相应独立的js文档
import app from '../src/app.vue'
import '../src/assets/css/bootstrap.min.css'
import '../src/assets/css/style.css'

import { library } from '@fortawesome/fontawesome-svg-core'
import { faWeixin,faWeibo,faGithub } from '@fortawesome/free-brands-svg-icons'
import { FontAwesomeIcon } from '@fortawesome/vue-fontawesome'
library.add(faWeixin,faWeibo,faGithub)
Vue.component('font-awesome-icon', FontAwesomeIcon)

new Vue({
    el: '#app',
    render: c => c(app),
    router: router, //4.挂载
});