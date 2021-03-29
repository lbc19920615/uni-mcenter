<style lang="scss">
@import "../../styles/alh";

.page-mime {
  --media-card-avatar-width: 120rpx;
  --media-card-avatar-height: 120rpx;
  --media-card-avatar-font-size: 40rpx;

  --media-card-body-padding-gutter: 24rpx;

  @include def-com-style(".media-card__avatar") {
    background-color: var(--color-gray-200);
  }

  font-size: 32rpx;
}
</style>

<template>
	<app-page class="page-mime">
    <view class="ui-pd-common-h">
      <media-card title="151****2116">
        <view>测试哦</view>
      </media-card>
    </view>
    <view class="ui-m-t-30">
      <uni-list>
<!--  #ifdef H5      -->
        <uni-list-item  title="在线客服" link clickable
                        @click="onClickItem" ></uni-list-item>
<!--  #endif      -->
        <uni-list-item  title="我的订单" link clickable
                        @click="onClickOrder" ></uni-list-item>
      </uni-list>
    </view>
<!--		<drag-list-demo></drag-list-demo>-->
  </app-page>
</template>

<script>
	import DragListDemo from './components/DragListDemo.vue'
  import MediaCard from "@/components/media-card/media-card";
  import {router} from "@/router";

	export default {
		components: {
      MediaCard,
			DragListDemo
		},
		data() {
			return {}
		},
		onShow() {
		},
		methods: {
      onClickItem(e) {
        console.log('onClickItem', e)
      },
      onClickOrder(e) {
        console.log('onClickOrder', e)
        router.push({
          name: 'mime-order'
        })
      }
		}
	}
</script>

