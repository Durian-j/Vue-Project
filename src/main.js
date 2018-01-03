// 入口文件
// 导入vue并实例化
import Vue from 'vue';

//导入跟组件用render函数进行解析
import App from './App.vue';
//导入mint-ui和mui
import {Header} from 'mint-ui';
//按需引入
Vue.component(Header.name,Header);

import './lib/mui/css/mui.css';

var vm=new Vue({
	el:'#app',
	render:c=>c(App)
})