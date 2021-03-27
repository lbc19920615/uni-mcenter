<template>
  <view class="page app-page"
        :style="{'padding-top': paddingTop}"
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
      paddingTop: this.$utils.calcPx(this.pdt)
    }
  },
  methods: {
  }
}
</script>
