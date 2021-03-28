<style lang="scss">
@import "../../styles/alh";

page,
.app-page,
uni-page-body {
  height: 100%;
}

$submitBarHeight: 100rpx;

.page-course-detail {
  .page-inner {
    &__scroll {
      height: 600rpx;
    }

    padding-bottom: calc(#{$submitBarHeight} + var(--safe-area-inset-bottom));
    box-sizing: border-box;
  }

  .course-detail {
    //background-color: #ededed;
  }

  .submit-bar {
    height: $submitBarHeight;
  }

  &__tab {
    padding-bottom: 20rpx;
  }
}
</style>

<template>
  <app-page class="page-course-detail">
    <view class="page-inner">
      <course-info :item="mockData"></course-info>
      <course-detail :item="mockData"></course-detail>
      <view class="page-course-detail__tab">
        <course-tab :tabs="tabs" @click-tab="onClickTab"></course-tab>
      </view>
      <view class="page-course-detail__content">
        <mp-html :content="infoHtml" v-if="currentActive === 0"></mp-html>
        <view v-else>{{ currentActive }}</view>
      </view>
    </view>
    <submit-bar></submit-bar>
  </app-page>
</template>

<script>
import { mockData } from "@/pages/course/detail";
import CourseInfo from "@/pages/course/components/course-info";
import SubmitBar from "@/pages/course/components/submit-bar";
import CourseDetail from "@/pages/course/components/course-detail";
import CourseTab from "@/pages/course/components/course-tab";
import MpHtml from "@/uni_modules/mp-html/components/mp-html/mp-html";
export default {
  components: {MpHtml, CourseTab, CourseDetail, SubmitBar, CourseInfo },
  data() {
    return {
      course_uuid: "",
      currentActive: 0,
      tabs: ["课程详情", "课程大纲", "老师介绍"],
      mockData: mockData.data,
      infoHtml: '',
      otherObj: {}
    };
  },
  onLoad(...options) {
    // console.log(options)
    // console.log(this.$Route)
    this.course_uuid = this.$Route.query.course_uuid;
    this.infoHtml = this.mockData.intro
  },
  methods: {
    onClickTab(e) {
      const { index } = e;
      this.currentActive = index;
    },
  },
};
</script>

