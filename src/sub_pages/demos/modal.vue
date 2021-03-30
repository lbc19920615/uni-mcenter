<style lang="scss">
$tag: "modal";
$sel: ".modal";

#{$sel} {

}
</style>

<template>
<app-page class="page-modal">
  <button @click="openModal('modal1')">open center modal</button>
  <button @click="openModal('modal2')">open bottom modal</button>
  <al-modal position="center" ref="modal1">
    <view>texttexttext</view>
  </al-modal>
  <al-modal position="bottom" ref="modal2">
    <view>texttexttext</view>
  </al-modal>
</app-page>
</template>

<script>
import AlModal from "@/components/al-modal/al-modal";
export default {
  name: "modal",
  mixins: [],
  components: {AlModal},
  props: {},
  data() {
    return {}
  },
  methods: {
    openModal(name) {
      this.$refs[name].open()
    }
  }
}
</script>
