// 入口文件
// 导入vue并实例化
import Vue from 'vue';

import VueRouter from 'vue-router';

Vue.use(VueRouter);

import router from './router.js'

import VueResource from 'vue-resource';

Vue.use(VueResource);

Vue.http.options.root = 'http://vue.studyit.io';

Vue.http.options.emulateJSON = true;

import moment from 'moment'

Vue.filter('dateFormat',function(dataStr,pattern="YYYY-MM-DD HH:mm:ss"){
	return moment(dataStr).format(pattern)
})

//导入跟组件用render函数进行解析
import App from './App.vue';
//导入mint-ui和mui
import {Header,Swipe,SwipeItem,Button} from 'mint-ui';
//按需引入
Vue.component(Header.name,Header);
Vue.component(Swipe.name,Swipe);
Vue.component(SwipeItem.name,SwipeItem);
Vue.component(Button.name,Button);

import './lib/mui/css/mui.css';
import './lib/mui/css/icons-extra.css';

var vm=new Vue({
	el:'#app',
	render:c=>c(App),
	router
})
