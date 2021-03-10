<template>
  <view class="container">
    <view>
      <swiper
        class="swiper"
        :indicator-dots="indicatorDots"
        :autoplay="autoplay"
        :interval="interval"
        :duration="duration"
      >
        <swiper-item>
          <view class="swiper-item uni-bg-red">A</view>
        </swiper-item>
        <swiper-item>
          <view class="swiper-item uni-bg-green">B</view>
        </swiper-item>
        <swiper-item>
          <view class="swiper-item uni-bg-blue">C</view>
        </swiper-item>
      </swiper>
    </view>
    <z-paging
      ref="paging"
      @query="queryList"
      :list.sync="dataList"
      :refresher-threshold="80"
      :use-custom-refresher="false"
      :refresher-status.sync="refresherStatus"
    >
      <!-- 自定义下拉刷新view，若不设置，则使用z-paging自带的下拉刷新view -->
      <al-refresher slot="refresher" :status="refresherStatus"></al-refresher>
      <!-- 设置自定义emptyView组件，非必须。空数据时会自动展示空数据组件，不需要自己处理 -->
      <al-empty slot="empty"></al-empty>
      <!-- list数据，建议像下方这样在item外层套一个view，而非直接for循环item，因为slot插入有数量限制 -->
      <view class="index-demo-wrap">
        <view
          class="index-demo-item"
          @click="onClickItem(item)"
          v-for="(item, index) in dataList"
		  :key="index"
        >
          <view class="item-title">{{ item.name }}</view>
        </view>
      </view>
      <view slot="loadingMoreNoMore">这是完全自定义的没有更多数据view</view>
    </z-paging>
  </view>
</template>

<script>
import { getCourseProducts } from "@/api/common";
import alEmpty from "@/components/al-empty/al-empty.vue";
import alRefresher from "@/components/al-refresher/al-refresher.vue";

let swiperMixin = {
  data() {
    return {
      background: ["color1", "color2", "color3"],
      indicatorDots: true,
      autoplay: true,
      interval: 10000,
      duration: 1000,
    };
  },
  methods: {
    changeIndicatorDots(e) {
      this.indicatorDots = !this.indicatorDots;
    },
    changeAutoplay(e) {
      this.autoplay = !this.autoplay;
    },
    intervalChange(e) {
      this.interval = e.target.value;
    },
    durationChange(e) {
      this.duration = e.target.value;
    },
  },
};

export default {
	mixins: [
		swiperMixin
	],
  components: {
    alEmpty,
    alRefresher,
  },
  data() {
    return {
      dataList: [],
      refresherStatus: null,
    };
  },
  methods: {
    onClickItem(row) {
      uni.navigateTo({
        url: row.url,
      });
    },
    queryList(pageNo, pageSize) {
      //这里的pageNo和pageSize会自动计算好，直接传给服务器即可
      //这里的请求只是演示，请替换成自己的项目的网络请求，请在网络请求回调中
      //通过this.$refs.paging.addData(请求回来的数组);将请求结果传给z-paging
      // this.$request.queryList(pageNo, pageSize, (data) => {
      //     this.$refs.paging.addData(data);
      // });

      // getCourseProducts().then(res => {
      // 	 // this.$refs.paging.addData(res.data);
      // 	 this.$refs.paging.addData([]);
      // })

      this.$refs.paging.addData([
        {
          name: "图片拖动排序",
          icon: "/static/c1.png",
          url: "/pages/demos/test",
        },
        {
          name: "类似于element-form表单",
          icon: "/static/c1.png",
          url: "/pages/demos/form",
        },
        {
          name: "布局",
          icon: "/static/c1.png",
          url: "/pages/demos/layout",
        },
      ]);
    },
  },
};
</script>

<style lang="scss">
@import "./styles/index";
</style>
