<script>
	export default {
		onLaunch: function() {
		  this.$utils.UTILS_onLaunch();
		},
		onShow: function() {
			console.log('App Show')
		},
		onHide: function() {
			console.log('App Hide')
		}
	}
</script>

<style lang="scss">
  page {
    /* -------------------------------------------------------------------
        Assign the default/constant/env values to CSS variables
    */
    --safe-area-inset-top   : 0;
    --safe-area-inset-right : 0;
    --safe-area-inset-bottom: 0;
    --safe-area-inset-left  : 0;

    @supports (top: constant(safe-area-inset-top)){
      --safe-area-inset-top   : constant(safe-area-inset-top);
      --safe-area-inset-right : constant(safe-area-inset-right);
      --safe-area-inset-bottom: constant(safe-area-inset-bottom);
      --safe-area-inset-left  : constant(safe-area-inset-left);
    }

    @supports (top: env(safe-area-inset-top)){
      --safe-area-inset-top   : env(safe-area-inset-top);
      --safe-area-inset-right : env(safe-area-inset-right);
      --safe-area-inset-bottom: env(safe-area-inset-bottom);
      --safe-area-inset-left  : env(safe-area-inset-left);
    }
  }

  page {
    -webkit-font-smoothing: antialiased;
    text-rendering: optimizeLegibility;
    font-family: Helvetica Neue, Helvetica, PingFang SC, Hiragino Sans GB, Microsoft YaHei, Arial, sans-serif;
  }

  @import "styles/css-var";

	@import "styles/css-grid";
	@include init-css-grid("css-ib-grid", 5, 24rpx);

	@import "styles/flex";
	@include init-flex("ui");

  @import "styles/reset";

  @import "styles/base";

  @import "styles/theme-dark";

</style>
