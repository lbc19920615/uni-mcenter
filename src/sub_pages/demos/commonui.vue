<template>
	<app-page class="commonui-page">
		<media-card title="media1">
      <view class="commonui-page-main">main</view>
    </media-card>
    <media-card title="media2" :reverse="true">
      <view class="commonui-page-main">main</view>
    </media-card>
	</app-page>
</template>

<script>
	import MediaCard from "@/components/media-card/media-card";
  export default {
    components: {MediaCard},
    data() {
			return {

			};
		}
	}
</script>

<style lang="scss">
@import "../../styles/alh";

.commonui-page {
  --media-card-avatar-width: 120rpx;
  --media-card-avatar-height: 120rpx;
  --media-card-avatar-font-size: 40rpx;

  --media-card-body-padding-gutter: 24rpx;

  @include def-com-style('.media-card__avatar') {
    background-color: var(--color-gray-200)
  };

  &-main {
    font-size: 32rpx;
  }
}
</style>
