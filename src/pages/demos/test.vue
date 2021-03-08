<template>
	<view>
		<common-drag :list.sync="list" :number="20"></common-drag>
	</view>
</template>

<script>
	import commonDrag from './components/commonDrag.vue'
	// import listData from './listdata.js'

	export default {
		components: {
			commonDrag,
		},
		data() {
			return {
				list: [
				  {
						disable: true,
						holder: true,
						src: 'http://static-11ea0c21-6b8f-47f7-b77f-cb0c7ea3f355.bspapp.com/shmily-drag-image/static/5.jpg',
					},
					{
						disable: true,
						holder: true,
						src: 'http://static-11ea0c21-6b8f-47f7-b77f-cb0c7ea3f355.bspapp.com/shmily-drag-image/static/2.jpg',
					},
					{
						disable: true,
						holder: true,
						src: 'http://static-11ea0c21-6b8f-47f7-b77f-cb0c7ea3f355.bspapp.com/shmily-drag-image/static/3.jpg',
					},
					{
						disable: false,
						src: 'http://static-11ea0c21-6b8f-47f7-b77f-cb0c7ea3f355.bspapp.com/shmily-drag-image/static/5.jpg',
					},
					{
						disable: false,
						src: 'http://static-11ea0c21-6b8f-47f7-b77f-cb0c7ea3f355.bspapp.com/shmily-drag-image/static/2.jpg',
					},
					{
						disable: false,
						src: 'http://static-11ea0c21-6b8f-47f7-b77f-cb0c7ea3f355.bspapp.com/shmily-drag-image/static/3.jpg',
					}
				]
			}
		},
		methods: {

		},
		onShow() {

		}
	}
</script>

<style>
</style>
