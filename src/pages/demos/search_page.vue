<template>
	<app-page>
		<uni-search-bar  cancel-button="always" :focus="true" @confirm="search"></uni-search-bar>
		
		<view>
			always
		</view>
	</app-page>
</template>

<script>
	export default {
		data() {
			return {
				
			}
		},
		methods: {
			search(e) {
				console.log('search', e)
			}
		}
	}
</script>

<style>

</style>
