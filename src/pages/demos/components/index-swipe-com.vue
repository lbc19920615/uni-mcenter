<template>
  <view style="height: 100%;">
<!--    <index-fragment-main-->
<!--        ref="fagmain"-->
<!--        v-if="item.name === '首页'">-->
<!--    </index-fragment-main>-->
<!--    <view v-else>{{item}}</view>-->
    <view>{{innerItem.name}}</view>
  </view>
</template>

<script>
export default {
  name: "index-swipe-com",
  components: {},
  props: {
    item: {
      type: Object,
      default() {
        return {}
      }
    },
    index: Number
  },
  data() {
    return {
      innerItem: this.item
    }
  },
  watch: {
    item: {
      immediate: true,
      handler(newValue) {
        this.handleItemChange(newValue)
      }
    }
  },
  methods: {
    handleItemChange(newValue) {
      this.innerItem = newValue
      // this.$nextTick(() => {
      //   if (newValue.name === '首页') {
      //     this.$refs.fagmain.reload()
      //   }
      // })
    }
  }
}
</script>

<style >

</style>
