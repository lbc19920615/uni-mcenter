<style>
.al-scroll-row-item {
	/* float: left; */
	display: inline-block;
}
</style>

<template>
	<view>
		<al-scroll-row :item-width="300" :items="items">
			<view class="al-scroll-row-item"
			v-for="(item, index) in items"
			:key="index"
			style="width: 300rpx; height: 150rpx;">A</view>
		</al-scroll-row>
	</view>
</template>                                                                                                                                                                                                                                                                                                                          


<script>
	export default {
		data() {
			return {
				items: [
					{
						name: '1'
					},
					{
						name: '2'
					},
					{
						name: '3'
					},
					{
						name: '4'
					},
					{
						name: '5'
					},
					{
						name: '6'
					}
				]
			}
		},
		computed: {

		},
		methods: {
			
		}
	}
</script>


