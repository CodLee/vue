<template>
<section  id='news'>
	<h2>新闻页</h2>
	<ul>
		<li v-for='(val,index) in news'>
			{{index}}----{{val}}
		</li>
	</ul>
	<div>
		<router-view>数据</router-view>
	</div>
</section>
</template>
<script>
	export default {
		name:'news',
		data(){
			return {
				news:['ajax','nodejs','angularjs','vuejs','reactjs']
			}
		}
	}
</script>
<style scope>
	li{
		border: 1px dashed #ccc;
	}
</style>