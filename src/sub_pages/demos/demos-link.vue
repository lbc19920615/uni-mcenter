<style lang="scss">
$tag: "page-demos-link";
$sel: ".page-demos-link";

#{$sel} {
  font-size: 32rpx;
}
</style>

<template>
<app-page class="page-demos-link">
<!--  {{model}}-->
  <view>
    <uni-link href="https://m.kaoyanvip.cn/" text="kaoyanvip"></uni-link>
  </view>
  <view>
    <webview-link page-path="/sub_pages/demos/webview"
                  href="https://m.kaoyanvip.cn/">open webview</webview-link>
  </view>
</app-page>
</template>

<script>
import UniLink from "@/uni_modules/uni-link/components/uni-link/uni-link";
import WebviewLink from "@/sub_pages/demos/components/webview-link";
export default {
name: "demos-link",
mixins: [],
components: {WebviewLink, UniLink},
props: {},
data() {
    return {
      model: {
      }
    }
},
methods: {}
}
</script>
