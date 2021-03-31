<style lang="scss">
$tag: "page-demos-checkout";
$sel: ".page-demos-checkout";

#{$sel} {
  font-size: 32rpx;
}
</style>

<template>
<app-page class="page-demos-checkout">
  <pay-type-select></pay-type-select>
</app-page>
</template>

<script>
import PayTypeSelect from "@/sub_pages/demos/components/pay-type-select";
export default {
name: "demos-checkout",
mixins: [],
components: {PayTypeSelect},
props: {},
data() {
    return {}
},
methods: {}
}
</script>
