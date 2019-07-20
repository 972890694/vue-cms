// 入口文件
// 导入 Vue
import Vue from 'vue'

// 1.1 导入路由的包
import VueRouter from 'vue-router'
// 1.2 安装路由
Vue.use(VueRouter)

// 导入 MintUI 组件 
import { Header, Swipe, SwipeItem } from 'mint-ui';
Vue.component(Header.name, Header);
Vue.component(Swipe.name, Swipe);
Vue.component(SwipeItem.name, SwipeItem);

// 导入 mui 
import './lib/mui/css/mui.min.css'
import './lib/mui/css/icons-extra.css'
import './lib/mui/fonts/mui-icons-extra.ttf'

// 导入路由模块
import router from './router'

// 导入 App 组件
import App from './App.vue'

// 创建 Vue 实例
const vm = new Vue({
    el: "#app",
    data: {
        
    },
    methods: {

    },
    render: c => c(App),
    router
})