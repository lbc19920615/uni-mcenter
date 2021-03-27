<style lang="scss">
.index-routes {
  .ele-grid-item {
    .text {
      font-size: 32upx;
    }

    .css-ib-grid-item {
      vertical-align: top;
      height: 60upx;
    }
  }

  .other-griditem {
    .text {
      font-size: 60upx;
    }
  }
}
</style>

<template>
  <view class="index-routes">
    <view class="css-ib-grid css-ib-grid--column-2 ele-grid-item">
      <view class="css-ib-grid-item"
            @click="goToDemo(demo_item)"
            v-for="(demo_item, demo_item_index) in demoList"
            :key="demo_item_index"
      >
        <text class="text">{{demo_item.name}}</text>
      </view>
    </view>
    <!-- #ifdef MP-WEIXIN || MP-ALIPAY -->
    <view class="css-ib-grid css-ib-grid--column-2 ele-grid-item">
      <view class="css-ib-grid-item"
            @click="goToDemo(demo_item)"
            v-for="(demo_item, demo_item_index) in miniList"
            :key="demo_item_index"
      >
        <text class="text">{{demo_item.name}}</text>
      </view>
	</view>
	<!-- #endif -->
  </view>
</template>

<script>
import { router } from "@/router";
import {demoPages, miniPages} from "@/var";

export default {
  name: 'IndexRoutes',
  data() {
    return {
      demoList: demoPages,
      miniList: miniPages,
    }
  },
  methods: {
    goToDemo(row) {
      router.push({
        path: row.url,
      });
    }
  }
}
</script>
