/*main.js--入口文件js*/
import Vue from 'vue';
import VueRouter from 'vue-router'
import App from './App.vue';
/*使用路由*/
Vue.use(VueRouter);
/*引入路由模块*/
import RouterConfig from './router.config.js';
/*配置路由*/
const router = new　VueRouter();

/**/
router.map(RouterConfig);

/*重定向*/
router.redirect({
	'/':'/home'
});
/*开启路由*/
router.start(App,"#app");
/*new Vue({
	el:'body',
	components:{
		app:App
	}
});*/