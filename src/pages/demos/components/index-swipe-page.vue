
<style lang="scss">
$click-loading-status: 'click-loading';
	
.index-swiper {
  height: 100%;
}

.index-swiper.click-loading {
	opacity: 0;
}
</style>


<template>
  <swiper
      class="index-swiper"
	  :class="{'click-loading': isClicked}"
      @change="touchmove"
      @transition="transition"
      @animationfinish="animationfinish"
      :indicator-dots="false"
      :vertical="vertical"
      :duration="duration"
      :current="swiperCurrent"
      circular
      :autoplay="autoplay"
      :interval="interval"
      :easingFunction="easingFunction"
  >
    <swiper-item v-for="(item, index) in 3" :key="index">
      <view class="swiper-item" >
        <!-- 这里写你的组件或者内容 -->
        <!-- swiperData应是一个存着对象的数组 每一个对象代表对应页的内容 -->
        <!-- 你的组件应该对应swiperList索引 如 -->
<!--        &lt;!&ndash; <view >{{ swiperData[swiperList[index]].firstname }}</view>-->
        <view >{{ swiperData[swiperList[index]].name }} {{currentSwiperIndex}} {{current}}</view>
        <!-- 或者传入页面数据 由你自己的组件内部来处理 如 -->
        <!-- <myComponents :pageData="swiperData[swiperList[index]]" ></myComponents> -->
        <!-- swiperData[swiperList[index]]是固定写法 -->
      </view>
<!--      <index-swipe-com-->
<!--          :index="index"-->
<!--          :item="swiperData[swiperList[index]]"></index-swipe-com>-->
    </swiper-item>
  </swiper>
</template>

<script>
// 引入和注册组件
import IndexSwipeCom from "@/pages/demos/components/index-swipe-com";

function getIndex(v) {
  if (v > 2) {
    return 0
  }
  if (v < 0) {
    return 2
  }
  return v
}

export default {
  components: {IndexSwipeCom},
  props: {
    swiperData: {
      //传入的数据数组
      type: Array,
      required: true
    },
    dataIndex: {
      type: Number,
      default: 0
    },
    vertical: {
      type: Boolean,
      default: false
    },
    duration: {
      type: Number,
      default: 500
    },
    circular: {
      type: Boolean,
      default: false
    },
    autoplay: {
      type: Boolean,
      default: false
    },
    interval: {
      type: Number,
      default: 5000
    },
    easingFunction: {
      type: String,
      default: 'default'
    }
  },
  data() {
    return {
      swiperList: [],
      currentSwiperIndex: 0,
      swiperLength: 0,
      swiperCurrent: 0,
      current: 0,
      isClicked: false,
      cachedList: [],
    };
  },
  created() {
    this.swiperLength = this.swiperData.length;
    this.current = this.dataIndex;
    this.handleList();
  },
  methods: {
    getCls() {
      return {
        'click-scrolling': this.isClicked
      }
    },
    setIndex(index) {
      let changeSteps = 0

      if (index === this.current) {
        return;
      }

      // console.log(index , this.current)
      this.isClicked = true
	  uni.showLoading({
	  	
	  })
	  
      if (index > this.current) {
         changeSteps = index - this.current

        let currentI = this.currentSwiperIndex
        let p = -1
        for (let i = 0; i < changeSteps; i++) {
          p = getIndex(currentI + 1)
          if (p === 0) {
            currentI = 0
          } else {
            currentI = currentI + 1
          }
          this.getResult(p)
        }
        for (let m = 0; m < 3; m++) {
          this.$set(this.swiperList, m, this.cachedList[m]);
        }

        this.swiperCurrent = p
        this.current = index
        console.log(this.cachedList, index, p)
      }
      if (index < this.current) {
        changeSteps = this.current - index

        let currentI = this.currentSwiperIndex
        let p = -1
        for (let i = 0; i < changeSteps; i++) {
          p = getIndex(currentI - 1)
          if (p === 0) {
            currentI = 0
          } else {
            currentI = p
          }
          this.getResult(p)
        }

        for (let m = 0; m < 3; m++) {
          this.$set(this.swiperList, m, this.cachedList[m]);
        }
        this.swiperCurrent = p
        this.current = index
        console.log(this.cachedList, index, p)
        // console.log(changeSteps, `currentSwiperIndex: ${this.currentSwiperIndex}`)
      }

      setTimeout(() => {
        this.isClicked = false
		uni.hideLoading()
      }, 1000)

      // console.log( this.currentSwiperIndex, changeSteps, this.cachedList)
      // console.log(this.cachedList, this.swiperList)


    },
    touchmove(e) {
      if (!this.isClicked) {
        console.log(e.detail.current)
        this.handleList(e.detail.current);
        this.current = this.swiperList[e.detail.current];
        console.log(`index: ${e.detail.current}`, `current: ${this.current}`, this.swiperList)
        this.$emit('change', {
          ...e.detail,
          current: this.current
        });
      } else {
        console.log('this.isClicked index', e.detail.current)
      }
    },
    animationfinish(e) {
      this.$emit('animationfinish', e);
    },
    transition(e) {
      this.$emit('transition', e);
    },
    getResult(index) {
      this.currentSwiperIndex = index ? index : this.dataIndex
      switch (index) {
        case 0:
          this.$set(this.cachedList, 1, (this.cachedList[0] + 1) % this.swiperLength);
          this.$set(this.cachedList, 2, this.cachedList[0] == 0 ? this.swiperLength - 1 : this.cachedList[0] - 1);
          break;
        case 1:
          this.$set(this.cachedList, 2, (this.cachedList[1] + 1) % this.swiperLength);
          this.$set(this.cachedList, 0, this.cachedList[1] == 0 ? this.swiperLength - 1 : this.cachedList[1] - 1);
          break;
        case 2:
          this.$set(this.cachedList, 0, (this.cachedList[2] + 1) % this.swiperLength);
          this.$set(this.cachedList, 1, this.cachedList[2] == 0 ? this.swiperLength - 1 : this.cachedList[2] - 1);
          break;
        default:
          this.$set(this.cachedList, 0, this.dataIndex);
          this.$set(this.cachedList, 1, (this.cachedList[0] + 1) % this.swiperLength);
          this.$set(this.cachedList, 2, this.cachedList[0] == 0 ? this.swiperLength - 1 : this.cachedList[0] - 1);
      }
    },
    handleList(index) {
      //
      this.currentSwiperIndex = index ? index : this.dataIndex


      switch (index) {
        case 0:
          this.$set(this.swiperList, 1, (this.swiperList[0] + 1) % this.swiperLength);
          this.$set(this.swiperList, 2, this.swiperList[0] == 0 ? this.swiperLength - 1 : this.swiperList[0] - 1);
          break;
        case 1:
          this.$set(this.swiperList, 2, (this.swiperList[1] + 1) % this.swiperLength);
          this.$set(this.swiperList, 0, this.swiperList[1] == 0 ? this.swiperLength - 1 : this.swiperList[1] - 1);
          break;
        case 2:
          this.$set(this.swiperList, 0, (this.swiperList[2] + 1) % this.swiperLength);
          this.$set(this.swiperList, 1, this.swiperList[2] == 0 ? this.swiperLength - 1 : this.swiperList[2] - 1);
          break;
        default:
          this.$set(this.swiperList, 0, this.dataIndex);
          this.$set(this.swiperList, 1, (this.swiperList[0] + 1) % this.swiperLength);
          this.$set(this.swiperList, 2, this.swiperList[0] == 0 ? this.swiperLength - 1 : this.swiperList[0] - 1);
      }

      this.cachedList = JSON.parse(JSON.stringify(this.swiperList))


    }
  },
  watch: {
    dataIndex: {
      immediate: true,
      handler() {
        this.handleList();
      }
    },
    swiperData: {
      immediate: true,
      handler() {
        this.swiperLength = this.swiperData.length;
      }
    },
  }
};
</script>
