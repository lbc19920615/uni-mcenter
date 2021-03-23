<template>
  <view class="page" :class="pageSkin">
    <slot></slot>
  </view>
</template>

<script>
import {pageMixin} from "@/utils/mixins/page";

export default {
  mixins: [
      pageMixin
  ]
}
</script>
