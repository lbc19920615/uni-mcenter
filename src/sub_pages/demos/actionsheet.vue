<style lang="scss">
$tag: "actionsheet";
$sel: ".actionsheet";

#{$sel} {

}
</style>

<template>
<app-page class="page-actionsheet">
  <button @click="openPicker1">打开picker1</button>
  <button @click="openPicker2">打开picker2</button>
  <button @click="openPicker3">打开picker3</button>
  <lb-picker ref="picker1"
             v-model="value1"
             :list="list1"></lb-picker>
  <lb-picker ref="picker2"
             v-model="value2"
             mode="unlinkedSelector"
             :list="list2"></lb-picker>
  <lb-picker ref="picker3"
             v-model="value3"
             :level="3"
             mode="multiSelector"
             :list="list3"></lb-picker>
</app-page>
</template>

<script>
import LbPicker from 'uni-lb-picker'

export default {
name: "actionsheet",
mixins: [],
components: {
  LbPicker
},
props: {},
data() {
    return {
      value1: '',
      list1: [
        {
          label: '选项1',
          value: '1'
        },
        {
          label: '选项2',
          value: '2'
        }
      ],
      value2: [],
      list2: [
        [
          { label: '选项1', value: '1' },
          { label: '选项2', value: '2' },
          { label: '选项3', value: '3' }
        ],
        [
          { label: '选项11', value: '11' },
          { label: '选项22', value: '22' },
          { label: '选项33', value: '33' }
        ],
        [
          { label: '选项111', value: '111' },
          { label: '选项222', value: '222' },
          { label: '选项333', value: '333' }
        ]
      ],
      value3: [],
      list3: [
        {
          label: '选项1',
          value: '1',
          children: [
            {
              label: '选项1-1',
              value: '1-1',
              children: [
                {
                  label: '选项1-1-1',
                  value: '1-1-1'
                }
              ]
            }
          ]
        }
      ]
    }
},
methods: {
  openPicker1() {
    this.$refs.picker1.show()
  },
  openPicker2() {
    this.$refs.picker2.show()
  },
  openPicker3() {
    this.$refs.picker3.show()
  }
}
}
</script>
