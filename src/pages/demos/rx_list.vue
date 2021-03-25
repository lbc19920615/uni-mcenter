<template>
  <app-page>
    <safe-area :custom-nav="true">
      <category-s></category-s>
    </safe-area>
  </app-page>
</template>

<script>
	import SafeArea from '@/components/safe-area/safe-area.vue'
	import CategoryS from '@/components/category-s/category-s.vue'

	export default {
		components: {
			SafeArea,
			CategoryS
		},
		data() {
			return {

			}
		},
		methods: {

		}
	}
</script>

<style>
page {
	height: 100%;
}

</style>
