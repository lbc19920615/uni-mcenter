<script>
	export default {
		onLaunch: function() {
			console.log('App Launch')
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
	/*每个页面公共css */
	@import "styles/css-grid";
	@include init-css-grid("css-ib-grid", 5, 24upx);
	
	@import "styles/flex";
	@include init-flex("ui");
</style>
