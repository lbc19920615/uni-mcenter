<template>
	<view class="page" :class="pageSkin">
    <button @click="open">打开弹窗</button>
    <uni-popup ref="popup" type="center">
      <al-auth-phone @get-phone-success="onGetPhoneSuccess"></al-auth-phone>
    </uni-popup>
	</view>
</template>

<script>
	import {pageMixin} from "@/utils/mixins/page";
  import AlAuthPhone from "@/components/al-auth-phone/al-auth-phone";
  import {authLoginMixin} from "@/utils/mixins/auth";
  import {getToken} from "@/utils/auth/token";

  export default {
    components: {AlAuthPhone},
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
