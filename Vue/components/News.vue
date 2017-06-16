<template>
	<h3>news</h3>
	<ul>
		<li>
			<a v-link="{path:'/news/detail/001'}">第一条</a>
			<a v-link="{path:'/news/detail/002'}">第二条</a>
			<a v-link="{path:'/news/detail/003'}">第三条</a>
			<a v-link="{path:'/news/detail/004'}">第四条</a>
			<a v-link="{path:'/news/detail/005'}">第五条</a>
		</li>
	</ul>
	<router-view></router-view>
</template>