<template>
	<view>
	  <view>
      <canvas style="width: 300px; height: 200px;"
              canvas-id="firstCanvas" id="firstCanvas"></canvas>
    </view>

    <view>
      <canvas style="width: 300px; height: 200px;"
              canvas-id="painterCanvas" id="painterCanvas"></canvas>
    </view>
	</view>
</template>

<script>
	import * as demo1 from './canvas/demo1.js'
  import * as painter1 from './canvas/painter1'

	export default {
		data() {
			return {

			}
		},
		onReady: function (e) {
			demo1.draw()
      painter1.draw()
		},
		methods: {

		}
	}
</script>

<style>

</style>
