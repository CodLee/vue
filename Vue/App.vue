<template>
	<div id="app">
		<h2>welcome VUe</h2>
		<p @click='change'>{{msg}}</p>
			<div>
				<a v-link="{path:'/home'}">home</a>
				<a v-link="{path:'/news'}">news</a>
			</div>
			<router-view>展示路由内容</router-view>
		
		<my-menu></my-menu>
	</div>
</template>
<script>
	/*js代码*/
	import Menu from './components/Menu.vue';
	export default{
		data(){
			return {
				msg:'welcome VUe ^_^'
			}
		},
		methods:{
			change(){
				this.msg='wahaha'
			}
		},
		components:{
			'my-menu':Menu
		}

	}
</script>
<style>
	body{
		background:#ccc;
	}
</style>