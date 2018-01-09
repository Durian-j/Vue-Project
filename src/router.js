import VueRouter from 'vue-router'

//配置子路由
import HomeContainer from './components/tabbar/HomeContainer.vue'
import MemberContainer from './components/tabbar/MemberContainer.vue'
import ShopcarContainer from './components/tabbar/ShopcarContainer.vue'
import SearchContainer from './components/tabbar/SearchContainer.vue'
import Newlist from './components/new/Newlist.vue'
import Newinfo from './components/new/Newinfo.vue'
import Photolist from './components/photo/photoList.vue'
import Photoinfo from './components/photo/photoinfo.vue'
import Goodslist from './components/goods/goodslist.vue'
import Goodsinfo from './components/goods/goodsinfo.vue'
import GoodsDesc from './components/goods/goodsdesc.vue'
import GoodsComment from './components/goods/goodscomment.vue'

// 3. 创建路由对象
var router = new VueRouter({
	routes: [
		{ path: '/', redirect: '/home' },
		{ path: '/home', component: HomeContainer },
		{ path: '/member', component: MemberContainer },
		{ path: '/shopcar', component: ShopcarContainer },
		{ path: '/search', component: SearchContainer },
		{ path: '/home/newlist', component: Newlist },
		{ path: '/home/newsinfo/:id', component: Newinfo },
		{ path: '/home/photolist', component: Photolist },
		{ path: '/home/photoinfo/:id', component: Photoinfo },
		{ path: '/home/goodslist', component: Goodslist },
		{ path: '/home/goodsinfo/:id', component: Goodsinfo, name:'goodsinfo' },
		{ path: '/home/goodsdesc/:id', component: GoodsDesc, name:'goodsdesc' },
		{ path: '/home/goodscomment/:id', component: GoodsComment, name:'goodscomment' },

	],
	// 覆盖默认路由高亮的类
	linkActiveClass: 'mui-active'
})

// 把路由对象暴露出去
export default router