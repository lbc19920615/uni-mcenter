<template>
	<view class="page" :class="pageSkin">
    <button @click="open">打开弹窗</button>
    <uni-popup ref="popup" type="center">
      <al-auth
          :step="AUTH_STEP.ONE"
          @get-phone-success="onGetPhoneSuccess"></al-auth>
    </uni-popup>
	</view>
</template>

<script>
	import {pageMixin} from "@/utils/mixins/page";
  import AlAuth from "@/components/al-auth/al-auth";
  import {authLoginMixin} from "@/utils/mixins/auth";
  import {getToken} from "@/utils/auth/token"

  export default {
    components: {AlAuth},
    mixins: [
	    pageMixin,
      authLoginMixin,
    ],
		data() {
			return {
			}
		},
    onShow() {
		  this.open();
    },
		methods: {
      open(){
        // 通过组件定义的ref调用uni-popup方法
        this.$refs.popup.open()
      }
		}
	}
</script>

<style lang="scss">

</style>
