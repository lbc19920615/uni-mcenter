<template>
	<HM-dragSorts :list="list" :isLongTouch="true" :rowHeight="55" @change="change" @confirm="confirm" @onclick="onclick">
		<template slot="rowContent" slot-scope="{ row }">
			<view class="row">
				<div class="ui-flex ui-items-center">
					<image v-if="row.icon" class="icon" :src="row.icon"></image>
					<text class="text">{{row.name}}</text>
				</div>
			</view>
		</template>
	</HM-dragSorts>
</template>

<script>
	export default {
		name: 'DragListDemo',
		data() {
			return {
				list:[
					{
						"name": "图片拖动排序",
						"icon": "/static/c1.png",
						"url": "/pages/demos/test"
					},
					{
						"name": "类似于element-form表单",
						"icon": "/static/c1.png",
						"url": "/pages/demos/form"
					},
					{
						"name": "布局",
						"icon": "/static/c1.png",
						"url": "/pages/demos/layout"
					},
				]
			}
		},
		methods: {
			onclick(e){
				console.log('=== onclick start ===');
				console.log("被点击行: " + JSON.stringify(e.value));
				console.log("被点击下标: " + JSON.stringify(e.index));
				console.log('=== onclick end ===');

				let row = e.value
				uni.navigateTo({
					url: row.url
				})
			},
			change(e){
				console.log('=== change start ===');
				console.log("被拖动行: " + JSON.stringify(e.moveRow));
				console.log('原始下标：',e.index);
				console.log('移动到：',e.moveTo);
				console.log('=== change end ===');
			},
			confirm(e){
				console.log('=== confirm start ===');
				console.log("被拖动行: " + JSON.stringify(e.moveRow));
				console.log('原始下标：',e.index);
				console.log('移动到：',e.moveTo);
				console.log('=== confirm end ===');
			}
		}
	}
</script>

<style lang="scss">
    //scoped css只在当前页生效 不影响子组件
	.icon {
		width: 40rpx;
		height: 40rpx;
	}
  //  @media (prefers-color-scheme: dark){
  //
	//	.content {
	//		.row{display: flex;flex-direction: row;align-items: center;}
	//		.icon{width: 30px;border-radius: 6px;margin-right: 13px;}
	//		.text{font-size: 13px;}
	//	}
	//}
</style>
