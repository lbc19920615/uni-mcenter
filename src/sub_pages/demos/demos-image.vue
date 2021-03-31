<style lang="scss">
$tag: "page-demos-image";
$sel: ".page-demos-image";

#{$sel} {
  font-size: 32rpx;
}
</style>

<template>
<app-page class="page-demos-image">
<!--  {{model}}-->
  <al-image src="/static/logo.png"></al-image>
</app-page>
</template>

<script>
import AlImage from "@/components/al-image/al-image";
export default {
name: "demos-image",
mixins: [],
components: {AlImage},
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
