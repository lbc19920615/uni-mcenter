<template>
	<view class="ss-hycamera">
		<camera  class="ss-hycamera-camera"
             device-position="back" flash="auto"></camera>
		<view :class="buttonClass"
          @touchstart="buttonStart"
          @touchend="buttonEnd">
			{{buttonNumber}}
		</view>
	</view>
</template>

<script>

	export default {
	  name: "ss-hycamera",
		data() {
			return {
				buttonClass: "ss-hycamera-button",
				isLX: false,
				buttonNumber:""
			}
		},
		created() {
			uni.authorize({
			    scope: 'scope.record',
			    success() {

			    }
			})
			this.cameraCTX = uni.createCameraContext();
		},
		methods: {
			buttonStart() {
				let self = this
				this.buttonNumber = 0;
				this.buttonMethod = setInterval(function() {
					self.buttonNumber++

					if (self.buttonNumber > 0) {
						self.buttonClass = "ss-hycamera-button-lx"
						if (self.isLX == false) {
							self.isLX = true

							self.cameraCTX.startRecord({
								success: (res) => {},
								fail(res) {
									console.log("========= 调用开始录像失败 ===========",res)
								}
							})
						}
					}
				}, 1000)
			},
			buttonEnd() {
				let self = this
				clearInterval(this.buttonMethod)
				this.buttonClass = "ss-hycamera-button"
				this.isLX = false

				if (this.buttonNumber > 0) {

					this.cameraCTX.stopRecord({
						success: (res) => {
							this.$emit("runMethod","vedio",res)
							self.buttonNumber = ""
						},
						fail() {}
					})
				} else {

					this.cameraCTX.takePhoto({
						quality: 'high',
						success: (res) => {
							this.$emit("runMethod","photo",res)
							self.buttonNumber = ""

						}
					})
				}


			}
		}
	}
</script>

<style lang="scss">
	.ss-hycamera {
		position: fixed;
		height: 100%;
		width: 100%;
		z-index: 10000000;
	}

	.ss-hycamera-camera {
		position: absolute;
		height: 100%;
		width: 100%;
		z-index: 1;
	}

  @mixin camera-button() {
    height: 100upx;
    width: 100upx;
    position: absolute;
    z-index: 2;
    bottom: 200upx;
    left: 50%;
    margin-left: -50upx;
    border: 2upx solid #ffffff;
    border-radius: 50upx;
    text-align: center;
    line-height: 100upx;
    color:#ffffff;
    font-size: 30upx;
  }

	.ss-hycamera-button {
    @include camera-button();
		background-color: #3F536E;
		transition: all 0.2s linear;
	}

	.ss-hycamera-button:active {
		background-color: #1c2632;
	}

	.ss-hycamera-button-lx {
    @include camera-button();
		background-color: #ca0000;
	}

	.ss-hycamera-qh{
		height: 40upx;
		width: 40upx;
		position: absolute;
		z-index: 2;
		bottom: 80upx;
		left: 20upx;
	}
</style>
