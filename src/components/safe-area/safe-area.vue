<template>
	<view class="safe-area"
  :class="{'safe-area--custom': customNav}"
  >
		<slot></slot>
	</view>
</template>

<script>
	export default {
		name:"safe-area",
    props: {
		  customNav: Boolean
    },
		data() {
			return {

			};
		},
    mounted() {
		  console.log(this)
    }
  }
</script>

<style lang="scss">

:host {
	display: block;
	height: 100%;
}

$cls: 'safe-area';
.#{$cls} {
	box-sizing: border-box;
  height: 100%;

  &--custom {
    padding: 100upx 0;
    .#{$cls} {


    }
  }
}

</style>
