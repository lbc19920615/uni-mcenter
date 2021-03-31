<style lang="scss">
$tag: "webview-link";
$sel: ".webview-link";

#{$sel} {

}
</style>

<template>
<view class="webview-link" @click="openWebview"><slot></slot></view>
</template>

<script>

import {webviewControlMixin} from "@/utils/mixins/page";
import {router} from "@/router";
import shortUUID from "short-uuid";

export default {
name: "webview-link",
mixins: [
  webviewControlMixin(
      shortUUID.generate()
  )
],
components: {},
props: {
  pagePath: String,
  href: String
},
data() {
    return {
    }
},
  mounted() {
    this.webviewOnEvent()
  },
  beforeDestroy() {
    this.webviewOffEvent()
  },
  methods: {
  handleLinkTalk({uuid, data}) {
    console.log('webviewEmit', uuid, data)
    this.webviewEmit(uuid, {
      src: this.href
    })
  },
  openWebview() {
    let self = this
    router.push({
      path: self.pagePath,
      query: {
        from_uuid: self.webviewUUID,
        webview_uuid: shortUUID.generate()
      }
    })
  }
}
}
</script>
