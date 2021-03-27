<template>
	<app-page>
		<text>page detail</text><text>{{course_uuid}}</text>
	</app-page>
</template>

<script>
	export default {
		data() {
			return {
        course_uuid: ''
			}
		},
    onLoad(...options){
      // console.log(options)
      // console.log(this.$Route)
      this.course_uuid = this.$Route.query.course_uuid
    },
		methods: {

		}
	}
</script>

<style>

</style>
