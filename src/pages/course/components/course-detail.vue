<template>
  <view class="course-detail">
    <view class="course-detail__inner">
      <view class="course-detail__title">{{model.name}}</view>
      <view class="course-detail__sub-title">{{model.sub_title}}</view>
    </view>
  </view>
</template>

<script>
import {commonHooksMixin} from "@/utils/mixins/component";

export default {
  name: "course-detail",
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
  data() {
    return {
      model: {},
      fields: [
        {
          name:'name',
          val: ''
        },
        {
          name: 'sub_title',
          val: ''
        }
      ]
    }
  },
  methods: {
    comReady() {
      this.render()
    },
    render() {
      let fields = this.fields
      // console.log('this', this.item)
      if (this.item) {
        fields.forEach(field => {
          this.$set(this.model, field.name, this.$utils.getObjByPath(this.item, field.name, field.val))
        })
      }
    }
  }
}
</script>

<style lang="scss">
@import "../../../styles/alh";

$sel: ".course-detail";

#{$sel} {
  &__inner {
    padding: 30upx $commonPaddingH;
  }
  &__title {
    font-size: 42upx;
    line-height: 1;
    margin-bottom: 26upx;
  }
  &__sub-title {
    font-size: 26upx;
    line-height: 1.4;
    color: var(--color-gray-200);
  }
}
</style>
