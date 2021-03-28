<style lang="scss">
	@import "../../../styles/alh";

	.index-demo-item {
	  height: 150rpx;
	  padding: $commonPadding;
	}

	.loading-more {
		padding: $commonPadding;
	}
</style>

<template>
	<view class="z-paging-wrap" style="height: 100%">
		<z-paging
		  ref="paging"
		  :mounted-auto-call-reload="false"
		  @query="queryList"
		  :list.sync="dataList"
		>
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
		  <view
		  class="loading-more"
		  slot="loadingMoreNoMore">这是完全自定义的没有更多数据view</view>
		</z-paging>
	</view>
</template>

<script>
import { getCourseProducts } from "@/api/common";

import alEmpty from "@/components/al-empty/al-empty.vue";
import alRefresher from "@/components/al-refresher/al-refresher.vue";

import { demoPages } from '@/var';

let mockData = demoPages

mockData = mockData.concat(mockData)
mockData = mockData.concat(mockData)
mockData = mockData.concat(mockData)

export default {
	name: 'indexFragmentMain',
	components: {
	  alEmpty,
	  alRefresher
	},
	data() {
	  return {
	    dataList: [],
	    refresherStatus: null,
	  };
	},
	methods: {
		reload() {
			// console.log(this.$refs.paging.reload)
			// this.$refs.paging.reload()
			if (this.$refs.paging && this.$refs.paging.reload) {
				this.$refs.paging.reload()
			}
		},
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

			console.log(pageNo)

			setTimeout(() => {
				let first = (pageNo - 1) * 15
				let end = pageNo * 15
				let data = mockData.slice(first, end)
				this.$refs.paging.addData(data);
			}, 300)
		},
	}
}
</script>

