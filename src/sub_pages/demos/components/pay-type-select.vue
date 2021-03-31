<style lang="scss">
@import "../../../styles/alh";

$tag: "pay-type-select";
$sel: ".pay-type-select";

#{$sel} {
  &__radio-icon {
    $height: 60rpx;
    line-height: $height;
    @include size($height);
    border-radius: 1000px;
    background-color: var(--color-gray-200);
    text-align: center;
  }
  @include def-com-style('.uni-icons') {
    color: #ffffff !important;
    font-size: 32rpx !important;
  }
  .pay-type--selected {
    #{$sel}__radio-icon {
      background-color: #2D87D5;
    }
  }
}
</style>

<template>
  <view class="pay-type-select">
    <uni-list :class="listCls">
      <uni-list-item
          v-for="(item, index) in items"
          :key="index"
          :class="{'pay-type--selected': currentIndex === index}"
          :title="item.name" clickable
                      @click="onClickItem(item, index)" >
        <view class="pay-type-select__radio-icon" slot="footer">
          <uni-icons type="checkmarkempty"></uni-icons>
        </view>
      </uni-list-item>
    </uni-list>
  </view>
</template>

<script>
import { payTypes } from "@/var";

export default {
  name: "pay-type-select",
  mixins: [],
  components: {},
  props: {
    value: null
  },
  data() {
    return {
      currentIndex: 0,
      currentItem: {},
      items: payTypes
    }
  },
  computed: {
    listCls() {
      return {
        ['pay-type--select-' + this.currentIndex]: true
      }
    }
  },
  mounted() {
    this._selectCurrentItem(this.items[this.currentIndex], this.currentIndex)
  },
  methods: {
    _selectCurrentItem(item, index) {
      this.currentItem = item
      this.currentIndex = index
      this.$emit('input', item.value)
    },
    onClickItem(item, index) {
      this._selectCurrentItem(item, index)
    }
  }
}
</script>
