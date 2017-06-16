/*main.js--入口文件js*/
import Vue from 'vue';
import VueRouter from 'vue-router'
import App from './App.vue';

Vue.use(VueRouter);
/*引入模块*/
import Home from './components/Home.vue'
import News from './components/News.vue'
const router = new　VueRouter();
router.map({
	'home':{
		component:Home
	},
	'news':{
		component:News
	}
});
/*开启路由*/
router.start(App,"#app");
/*new Vue({
	el:'body',
	components:{
		app:App
	}
});*/