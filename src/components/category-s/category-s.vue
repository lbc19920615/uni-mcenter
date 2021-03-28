<template>
	<view class="category-s-wrap">
		<scroll-view scroll-y="true" class="SV_categoryTitle">
			<view class="categoryTitle">
				<view class="categoryName" v-for="(item,index) in categoryList" :key="index" :class="categoryNameActive == index?'categoryNameActive':''"
				 @click="categoryClickEvent(item,index)">
					{{item.name}}
				</view>
			</view>
		</scroll-view>
		<scroll-view class="scroll-Y" :scroll-y="true" :scroll-top="scrollTop"
		:scroll-with-animation="true" @scroll="scrollEvent"
		@scrolltoupper="scrollToUp" @scrolltolower="scrollToDown"
		>
			<view class="categoryList" v-for="(item,index) in categoryList" :key="item.id">
				<view class="categoryListName">
					<view class="categoryListName_line"></view>{{item.name}}
				</view>
				<view class="categoryListBox" v-for="(sub,idx) in item.subCategoryList" :key="idx">
					<image :src="sub.image" lazy-load mode=""></image>
					<text>{{sub.name}}</text>
				</view>
			</view>
		</scroll-view>
	</view>
</template>

<script>
	export default {
		data() {
			return {
				categoryList: [{
					"id": "3",
					"name": "测试一级菜单1",
					"subCategoryList": [{
						"id": "10",
						"name": "测试二级菜单1-1",
						image: "http://gw.alicdn.com/bao/uploaded/i1/2091067499/TB1G2EHc1H2gK0jSZFEXXcqMpXa.png_290x10000.jpg_.webp"
					}, {
						"id": "11",
						"name": "测试二级菜单1-2",
						image: "http://gw.alicdn.com/bao/uploaded/i1/2091067499/TB1eyUmS7voK1RjSZFwXXciCFXa.png_290x10000.jpg_.webp"
					}, {
						"id": "12",
						"name": "测试二级菜单1-3",
						image: "http://gw.alicdn.com/bao/uploaded/i1/2091067499/O1CN01bxyQcD1CETxd3uDMG_!!2-item_pic.png_290x10000.jpg_.webp"
					}]
				}, {
					"id": "2",
					"name": "测试一级菜单2",
					"subCategoryList": [{
						"id": "7",
						"name": "测试二级菜单2-1",
						image: "http://gw.alicdn.com/bao/uploaded/i1/2091067499/O1CN01JME8QL1hn3yJjFmsC_!!2-item_pic.png_290x10000.jpg_.webp"
					}, {
						"id": "8",
						"name": "测试二级菜单2-3",
						image: "http://gw.alicdn.com/bao/uploaded/i1/2091067499/O1CN01SiNmgu1HJ84rwnlPw_!!2-item_pic.png_290x10000.jpg_.webp"
					}, {
						"id": "9",
						"name": "测试二级菜单2-2",
						image: "http://gw.alicdn.com/bao/uploaded/i1/2091067499/O1CN011KQrV8LEdxrFt7i_!!2468631159.png_290x10000.jpg_.webp"
					}]
				}, {
					"id": "1",
					"name": "测试一级菜单3",
					"subCategoryList": [{
						"id": "4",
						"name": "测试二级菜单3-1",
						image: "http://gw.alicdn.com/bao/uploaded/i1/2091067499/O1CN01pAbhJz1vmW7x7y6ni_!!0-item_pic.jpg_290x10000Q75.jpg_.webp"
					}, {
						"id": "5",
						"name": "查询测试专用",
						image: "http://gw.alicdn.com/bao/uploaded/i1/2091067499/TB1xYioVG6qK1RjSZFmXXX0PFXa.png_290x10000.jpg_.webp"
					}, {
						"id": "6",
						"name": "测试二级菜单3-2",
						image: "http://gw.alicdn.com/bao/uploaded/i1/2091067499/O1CN01hhMSW41GOKwzymt98_!!2935350612.jpg_290x10000Q75.jpg_.webp"
					}]
				}],
				categoryNameActive: 0, //当前选中active
				scrollTop: 0, //scroll-top
				scrollVal: 0, //滑动的值
				scrollStatus: true, //点击状态，是否能点击
				nodeHeight: [], //存储categoryList的top
				reveseNode: [],
				windowHeight: 0,
				windowTop: 0,
			};
		},
		mounted() {

			uni.createSelectorQuery().in(this).select('.category-s-wrap').boundingClientRect((data) => {
				console.log('data', data)
				this.windowHeight = data.height;
				this.windowTop = data.top;
			}).exec()
			this.nodeHeight = [];
			let theNode = uni.createSelectorQuery().in(this).selectAll(".categoryList");
			theNode.boundingClientRect((data) => {
				data.forEach((item, index) => {

					if (index < data.length - 1) {
					this.nodeHeight.push({
						top: item.top,
						index: index
					})
					}

					// // #ifdef H5
					// this.nodeHeight.push({
					// 	top: item.top + this.windowTop,
					// 	index: index
					// })
					// // #endif
				})
			this.reveseNode = JSON.parse(JSON.stringify(this.nodeHeight)).reverse()
				console.log(this.nodeHeight, this.reveseNode)
			}).exec()

		},
		methods: {
			categoryClickEvent(item, index) {
				// 300毫秒才能执行下次点击
				if (this.scrollStatus) {
					this.scrollStatus = false;
					this.categoryNameActive = index;
					let theNode = uni.createSelectorQuery().in(this).selectAll(".categoryList");
					theNode.boundingClientRect((data) => {
						/* 获取当前第index的categoryList的top,滑动后值scrollVal + categoryList的top */
						// #ifndef H5
						this.scrollTop = this.scrollVal + data[index].top;
						// #endif
						// #ifdef H5
						this.scrollTop = this.scrollVal + data[index].top + this.windowTop;
						// #endif
						setTimeout(() => {
							// 200毫秒才能执行下次点击
							this.scrollStatus = true;
						}, 200)
					}).exec()
				}
			},
			scrollToUp() {
				 this.categoryNameActive  = 0
				this.scrollVal =  0
			},
			scrollToDown() {
				//
			},
			scrollEvent(e) {
				let scrollToDownHolder = 60
				let scrollToUpHolder = 60
				if (e.detail.scrollTo < scrollToDownHolder ) {
					 this.categoryNameActive  = 0
				} else {
					if (this.scrollVal < e.detail.scrollTop) {
						// 向上
						this.nodeHeight.forEach(item => {
							// if (this.scrollVal < item.top && this.scrollVal - item.top > -this.windowHeight) {
							// 	this.categoryNameActive = item.index;
							// }
							if (this.scrollVal > item.top - scrollToDownHolder) {
								 this.categoryNameActive = item.index;
							}
						})
					} else {
										// console.log(this.scrollVal, e.detail.scrollTop, this.windowHeight)
						// 向下
						this.reveseNode.forEach(item => {
							// if (this.scrollVal > item.top && this.scrollVal - item.top < this.windowHeight) {
							// 	this.categoryNameActive = item.index;
							// }
							 if (this.scrollVal < item.top + scrollToUpHolder) {
								// console.log(item)
								 this.categoryNameActive = item.index;
							 }

						})
					}
				}
				this.scrollVal = e.detail.scrollTop;
			},
		},
	}
</script>

<style>
	:host {
		display: block;
	}

	.category-s-wrap {
	height: 600rpx;
		font-size: 28rpx;
	}

	.categoryTitle {
		width: 249rpx;
		float: left;
		height: 100%;
		border-right: 1px solid #ccc;
	}

	.SV_categoryTitle {
		width: 250rpx;
		height: 100%;
		float: left;
	}

	.categoryName {
		width: 100%;
		text-align: center;
		height: 100rpx;
		line-height: 100rpx;
		color: #3E3E3E;
	}

	.categoryNameActive {
		background: rgba(0, 86, 67, .3);
	}

	.scroll-Y {
		height: 100%;
		width: 500rpx;
		float: left;
	}

	.categoryList {
		width: 100%;
		padding-left: 16rpx;
		box-sizing: border-box;
		height: 100%;
	}

	.categoryListName {
		width: 100%;
		height: 100rpx;
		line-height: 100rpx;
		text-indent: 20rpx;
		float: left;
	}

	.categoryListBox {
		width: 145rpx;
		border: 1px solid #CCCCCC;
		margin-right: 15rpx;
		float: left;
		overflow: hidden;
	}

	.categoryListBox image {
		width: 145rpx;
		height: 145rpx;
	}

	.categoryListName_line {
		height: 30rpx;
		background: rgba(0, 126, 96, 0.7);
		width: 8rpx;
		float: left;
		margin-top: 35rpx;
	}
</style>
