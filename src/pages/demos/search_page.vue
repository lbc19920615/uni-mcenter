<template>
	<app-page class="search-page">
		<uni-search-bar  cancel-button="always" :focus="true" @confirm="search"></uni-search-bar>

		<view class="ui-pd-common-h search-page-section">
			<view class="ui-m-b-20 search-page-section__header">搜索历史</view>
			<view class="search-page-section__body">
				<view class="search-page-section__item history-item"
				v-for="(hisotry, hisotryIndex) in hisotrys"
				:key="hisotryIndex"
              v-if="hisotry"
				>
          <view class="history-item__name">{{hisotry.name}}</view>
          <view class="history-item__remove" @click="removeHistory(hisotry)">x</view>
        </view>
			</view>
		</view>
	</app-page>
</template>

<script>
import shortUUID  from 'short-uuid'

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

  font-size: 32upx;
  color: var(--text-black-common);

  .search-page-section {
    &__header {
    }
  }

  $sel: ".history-item";

  #{$sel} {
    display: flex;
    align-items: center;
    justify-content: flex-start;



    #{$sel}__name + #{$sel}__remove {
      margin-left: 20upx;
    }

    #{$sel}__remove {
      padding: 0 10upx;
      background-color: #eee;
      color: #ffffff;
    }
  }
}
</style>
