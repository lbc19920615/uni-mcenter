<template>
  <view class="page app-page"
        :class="pageSkin">
    <slot></slot>
  </view>
</template>

<script>
import {pageMixin} from "@/utils/mixins/page";

export default {
  props: {
    pdt: {
      type: Number,
      default: 0
    }
  },
  mixins: [
      pageMixin
  ],
  data() {
    return {
    }
  },
  methods: {
  }
}
</script>
