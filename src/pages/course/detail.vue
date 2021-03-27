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
  background-color: #ededed;
}

.submit-bar {
  height: $submitBarHeight;
}
</style>

<template>
	<app-page>
		<view class="page-inner">
      <course-info></course-info>
      <course-detail></course-detail>
      end
    </view>
    <submit-bar></submit-bar>
	</app-page>
</template>

<script>
	import CourseInfo from "@/pages/course/components/course-info";
  import SubmitBar from "@/pages/course/components/submit-bar";
  import CourseDetail from "@/pages/course/components/course-detail";
  export default {
    components: {CourseDetail, SubmitBar, CourseInfo},
    data() {
			return {
        course_uuid: ''
			}
		},
    onLoad(...options){
      // console.log(options)
      // console.log(this.$Route)
      this.course_uuid = this.$Route.query.course_uuid
    },
		methods: {

		}
	}
</script>

