<template>
  <view>{{innerItem}}</view>
</template>

<script>
export default {
  name: "index-swipe-com",
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
    }
  }
}
</script>

<style scoped>

</style>
