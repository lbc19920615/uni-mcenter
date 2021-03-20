<style lang="scss">
.al-scroll-row-item {
	/* float: left; */
	display: inline-block;
}

.container {
  position: relative;
  overflow-y: auto;
}

.container {
  .chapter-title {
    height: 120upx;
    position: sticky;
    top: 0;
    background: #6cd0e9;
  }

  .section-wrapper {
    height: 700upx;
  }
}
</style>

<template>
  <safe-area class="page">
    <div class="ui-h-full container">
      <view>
        <view class="header">
          <image
              class="ui-w-full"
              src="https://oss.kaoyanvip.cn/attach/file1597643018706.png"
                 mode="widthFix"></image>

          <al-scroll-row :item-width="300" :items="items">
            <view class="al-scroll-row-item"
                  v-for="(item, index) in items"
                  :key="index"
                  style="width: 300rpx; height: 150rpx;">A</view>
          </al-scroll-row>
        </view>
        <block v-for="(item, index) in items" :key="index">
          <view class="chapter-title" >
            <view class="ct-name">chapter-title</view>
          </view>
          <view class="section-wrapper">section-wrapper</view>
        </block>
      </view>
    </div>
  </safe-area>
</template>


<script>
	import {pageMixin} from "@/utils/mixins/page";

  export default {
	  mixins: [
	      pageMixin
    ],
		data() {
			return {
				items: [
					{
						name: '1'
					},
					{
						name: '2'
					},
					{
						name: '3'
					},
					{
						name: '4'
					},
					{
						name: '5'
					},
					{
						name: '6'
					}
				]
			}
		},
		computed: {

		},
		methods: {

		}
	}
</script>


