<template>
  <view class="course-info">
    <view class="course-info__inner">
      <image mode="widthFix" class="course-info__image" :src="img"></image>
    </view>
  </view>
</template>

<script>
import {commonHooksMixin} from "@/utils/mixins/component";

export default {
  name: "course-info",
  mixins: [
    commonHooksMixin
  ],
  props: {
    item: {
      type: Object,
      default() {
        return {}
      }
    }
  },
  watch: {
    item(newVal) {
      this.render(newVal);
    }
  },
  data() {
    return {
      img: ''
    }
  },
  methods: {
    comReady() {
      this.render(this.item);
    },
    render(item) {
      this.img = this.$utils.getObjByPath(item, 'img_cover')
    }
  }
}
</script>

<style lang="scss">
@import "../../../styles/alh";

.course-info {
  @include aspect-ratio(9, 16);
  background-color: #2D87D5;
  position: relative;
  &__inner {
    width: 100%;
    height: 100%; position: absolute; left: 0; top: 0
  }
  &__image {
    width: 100%;
    height: 100%;
  }
}
</style>
