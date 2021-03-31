<template>
	<app-page>
		<ss-hycamera @runMethod="onRunMethod"></ss-hycamera>
  </app-page>
</template>

<script>
	import {pageMixin} from "@/utils/mixins/page";
  import SsHycamera from "./components/ss-hycamera";

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
