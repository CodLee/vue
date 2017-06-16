<template>
	<h4>news详细信息</h4>
	<p>{{$route.params|json}}</p>

	<p>添加查询字符串查看——{{$route.query|json}}</p>
</template>