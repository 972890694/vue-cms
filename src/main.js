// 入口文件
// 导入 Vue
import Vue from 'vue'

// 导入 MintUI 组件 
import { Header } from 'mint-ui';
Vue.component(Header.name, Header);

// 导入 mui 
import './lib/mui/css/mui.min.css'

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