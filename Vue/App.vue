<template>
	<div id="app">
		<h2>welcome VUe</h2>
		<div>
			<a v-link="{path:'/home'}">home</a>
			<a v-link="{path:'/news'}">news</a>
		</div>
		<div class="content">
			
			<router-view></router-view>
		</div>
	</div>
</template>
<script>
</script>
<style>
	body{
		background:#ccc;
	}
	.v-link-active{
		font-size:18px;
		color:#f60;
	}
	.content{
		border: 1px solid orange;
	}
</style>