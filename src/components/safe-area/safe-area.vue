<template>
	<view class="safe-area"
  :class="{'safe-area--custom': customNav}"
  :style="{'padding-top': safeAreaTop + 'px', 'padding-bottom': safeAreaBottom + 'px'}"
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
        safeAreaTop: 0,
        safeAreaBottom: 0,
			};
		},
    mounted() {
      const { safeArea } = wx.getSystemInfoSync()
      console.log(safeArea)
      this.safeAreaTop = safeArea.top
      this.safeAreaBottom = safeArea.bottom - safeArea.height
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
  //background-color: #2D87D5;
  //background-clip: content-box;

  &--custom {
    //padding: 100upx 0;
    .#{$cls} {


    }
  }
}

</style>
