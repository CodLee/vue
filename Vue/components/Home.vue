<template>
	<h3>Home主页</h3>
	<ul>
		<li><a v-link="{path:'/home/login'}">login</a> <a v-link="{path:'/home/reg'}">register</a></li>
	</ul>
	<div class="box">
		<router-view>展示路由内容</router-view>
	</div>
</template>
<style scope>
	.box{
		border:1px dashed #000;
	}
	
</style>