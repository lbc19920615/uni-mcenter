<style lang="scss">
$tag: "al-image";
$sel: ".al-image";

#{$sel} {

}
</style>

<template>
<view class="al-image" :class="getCls">
  <image :src="src"
         @error="imageError"
         @load="imageLoad"
  ></image>
</view>
</template>

<script>
import { processState } from "@/var";
import kebabCase from 'lodash/kebabCase'

// console.log(processState.PENDING.key)

export default {
  name: "al-image",
  mixins: [],
  components: {},
  props: {
    src: String
  },
  data() {
    return {
      processState,
      state: processState.PENDING
    }
  },
  computed: {
    getCls() {
      let state = kebabCase(this.state.key)
      return {
        ['al-image--load-' + state]: 1
      }
    }
  },
  methods: {
    imageLoad(e) {
      this.state = processState.FULFILLED
    },
    imageError(e) {
      this.state = processState.REJECTED
    }
  }
}
</script>
