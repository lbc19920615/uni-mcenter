<template>
	<view class="page" :class="pageSkin">
		<ss-hycamera @runMethod="onRunMethod"></ss-hycamera>
	</view>
</template>

<script>
	import {pageMixin} from "@/utils/mixins/page";
  import SsHycamera from "@/components/ss-hycamera/ss-hycamera";

  export default {
    components: {SsHycamera},
    mixins: [
	    pageMixin
    ],
		data() {
			return {

			}
		},
		methods: {
      onRunMethod(type, res) {
        console.log('onRunMethod', type, res)
      }
		}
	}
</script>

<style>

</style>
