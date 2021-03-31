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
  <uni-link href="https://www.baidu.com" text="baidu"></uni-link>
</app-page>
</template>

<script>
import UniLink from "@/uni_modules/uni-link/components/uni-link/uni-link";
export default {
name: "demos-link",
mixins: [],
components: {UniLink},
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
