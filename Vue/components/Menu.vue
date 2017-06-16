<!-- Menu.vue -->
<template>
	<ul>
		<!-- <li><a href="">主页</a></li>
		<li><a href="">新闻</a></li>
		<li><a href="">体育</a></li>
		<li><a href="">娱乐</a></li> -->
		<li v-for='item in list'><a href="">{{item}}</a></li>
	</ul>
</template>
<script>
	export default{
		data(){
			return {
				list:['apple','banana','orange']
			}
		}
	}
</script>
<style>
	
</style>