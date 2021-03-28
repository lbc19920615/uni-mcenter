<template>
	<app-page>
		<media-card>
      <view>main</view>
    </media-card>
    <media-card :reverse="true">
      <view>main</view>
    </media-card>
	</app-page>
</template>

<script>
	import MediaCard from "@/components/media-card/media-card";
  export default {
    components: {MediaCard},
    data() {
			return {

			};
		}
	}
</script>

<style lang="scss">

</style>
