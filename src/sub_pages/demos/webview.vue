<style lang="scss">
$tag: "webview";
$sel: ".webview";

#{$sel} {

}
</style>

<template>
  <web-view :src="src"></web-view>
</template>

<script>
import {webviewControlMixin} from "@/utils/mixins/page";

export default {
  name: "webview",
  mixins: [
      webviewControlMixin()
  ],
  components: {},
  props: {},
  data() {
    return {
      src: ''
    }
  },
  mounted() {
    let self = this
    self.webviewInit(self.$Route.query.webview_uuid)
    this.webviewOnEvent()
    let cached = self.$expStorage.get(this.webviewCachedKey)
    // console.log(self.webviewUUID, cached)
    if (cached) {
      self.render(cached)
    } else {
      self.webviewEmit(self.$Route.query.from_uuid, {
      })
    }
  },
  beforeDestroy() {
    this.webviewOffEvent()
    this.$expStorage.remove(this.webviewCachedKey)
  },
  methods: {
    handleLinkTalk({uuid, data}) {
      // 默认只保存3天
      let saveTime = new this.$expStorage.Expire(3, this.$expStorage.EXPIRE_UNIT.DAY);
      this.$expStorage.set(this.webviewCachedKey, data, saveTime)
      this.render(data)
    },
    render(data) {
      this.src = data.src
    }
  }
}
</script>
