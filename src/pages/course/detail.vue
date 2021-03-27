<style lang="scss">
@import "../../styles/alh";

page, .app-page, uni-page-body {
  height: 100%;
}


$submitBarHeight: 100upx;

.page-inner {
  &__scroll {
    height: 600upx;
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
</style>

<template>
	<app-page>
		<view class="page-inner">
      <course-info></course-info>
      <course-detail :item="mockData"></course-detail>
      <course-tab
          :tabs="tabs"
          @click-tab="onClickTab"></course-tab>
      <view>{{currentActive}}</view>
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
  export default {
    components: {CourseTab, CourseDetail, SubmitBar, CourseInfo},
    data() {
			return {
        course_uuid: '',
        currentActive: 0,
        tabs: [
            '课程详情',
            '课程大纲',
            '老师介绍',
        ],
        mockData: mockData.data,
			}
		},
    onLoad(...options){
      // console.log(options)
      // console.log(this.$Route)
      this.course_uuid = this.$Route.query.course_uuid
    },
		methods: {
      onClickTab(e) {
        const { index } = e
        this.currentActive = index
      }
		}
	}
</script>

