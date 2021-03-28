<template>
	<app-page class="search-page">
    <view class="ui-pd-common-h ui-m-t-20 search-page-search">
      <uni-search-bar
          cancel-button="always" :focus="true" @confirm="search" @cancel="cancel"></uni-search-bar>
    </view>

    <view class="ui-pd-common-h search-page-section">
      <view class="ui-m-b-20 ui-flex ui-items-center ui-justify-between search-page-section__header">
        热搜记录
      </view>
      <view class="search-page-section__body search-tags">
        <view class="search-page-section__item search-tag history-item"
              v-for="(hisotry, hisotryIndex) in hisotrys"
              :key="hisotryIndex"
              v-if="hisotry"
        >
          <view class="history-item__name">{{hisotry.name}}</view>
          <!--          <view class="history-item__remove" @click="removeHistory(hisotry)">x</view>-->
        </view>
      </view>
    </view>

		<view class="ui-pd-common-h search-page-section">
			<view class="ui-m-b-20 ui-flex ui-items-center ui-justify-between search-page-section__header">
        历史记录
      </view>
			<view class="search-page-section__body search-tags">
				<view class="search-page-section__item search-tag history-item"
				v-for="(hisotry, hisotryIndex) in hisotrys"
				:key="hisotryIndex"
              v-if="hisotry"
				>
          <view class="history-item__name">{{hisotry.name}}</view>
<!--          <view class="history-item__remove" @click="removeHistory(hisotry)">x</view>-->
        </view>
			</view>
		</view>

	</app-page>
</template>

<script>
import shortUUID  from 'short-uuid'
import {router} from "@/router";

	export default {
	  props: {
	    HisLsKey: {
	      type: String,
        default() {
	        return 'history-ls-key'
        }
      }
    },
		data() {
			return {
				hisotrys: []
			}
		},
    mounted() {
		  this.fetchHistory()
      // this.addHistory('sdsdss')
    },
    methods: {
			search(e) {
				// console.log('search', e)
        setTimeout(() => {
          this.addHistory(e.value)
        }, 300)
			},
      cancel() {
			  router.back();
      },
      fetchHistory() {
        let v = this.$expStorage.get(this.HisLsKey)
        if (Array.isArray(v)) {
          this.hisotrys = v
        }
      },
      updateHistory() {
        this.$nextTick(() => {
          this.$expStorage.set(this.HisLsKey, this.hisotrys)
        })
      },
      removeHistory(obj) {
			  let index = this.hisotrys.findIndex(v => v.uuid === obj.uuid)
        if (index > -1) {
          this.hisotrys.splice(index, 1)
          this.updateHistory()
        }
      },
      addHistory(name) {
        this.hisotrys.push({
          name: name,
          uuid: shortUUID.generate()
        })
        this.updateHistory()
      }
		}
	}
</script>

<style lang="scss">
.search-page {

  font-size: 32rpx;
  color: var(--text-black-common);

  .uni-searchbar {
    padding: 0;
  }

  .search-tag {
    padding: 10rpx 20rpx;
    background: #F4F5FE;
    border-radius: 1000px;
    display: inline-flex;
    font-size: 24rpx;
    font-weight: 400;
    color: #252B33
  }

  .search-tags {
    margin-bottom: -24rpx;
  }

  .search-tag {
    margin-right: 24rpx;
    margin-bottom: 24rpx;
  }

  .search-page-section {
    margin-top: 60rpx;
    &__header {
      font-weight: bold;
    }
  }

  $sel: ".history-item";

  #{$sel} {
    //align-items: center;
    //justify-content: flex-start;

    #{$sel}__name + #{$sel}__remove {
      margin-left: 20rpx;
    }

    #{$sel}__remove {
      padding: 0 10rpx;
      background-color: #eee;
      color: #ffffff;
    }
  }
}
</style>
