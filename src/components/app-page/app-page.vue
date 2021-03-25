<template>
  <view class="page app-page" :class="pageSkin">
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
