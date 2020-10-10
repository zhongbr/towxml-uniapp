<template>
	<view class="content">
		<towxml class="towxml-view" :nodes="nodes2" @tap="tap"></towxml>
		<towxml class="towxml-view" :nodes="nodes1" @tap="tap"></towxml>
	</view>
</template>

<script>
	const html = 
	`<h1>Hello World</h1>
	<h2>你好，世界</h2>
	<div>
		<a href="https://www.baidu.com">百度一下</a>
	</div>
	<p style="color:red;text-align:center;">towxml uniapp</p>
	`;
	const markdown = `
	# Hello World
	## 你好，世界
	[百度一下](https://www.baidu.com)
	towxml uniapp
	`;
	import Towxml from '../../components/towxml/towxml.vue';
	import towxml from '../../components/towxml/index.js';
	export default {
		data() {
			return {
				nodes1:{},
				nodes2:{}
			}
		},
		components:{
			Towxml,
		},
		onLoad() {
			this.nodes1 = towxml(html, 'html', {
				theme: 'light',
			});
			this.nodes2 = towxml(markdown, 'markdown', {
				theme: 'dark',
			})
		},
		methods: {
			tap(e){
				let tapElement = e.currentTarget.dataset.$el[0];
				console.log(tapElement.attr);
			}
		}
	}
</script>

<style>
	.towxml-view{
		height: 700 rpx;
	}
</style>
