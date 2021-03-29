<template>
	<app-page class="page-demos-charts">
		<view style="height: 600rpx">
      <u-charts canvas-id="demo_chart" type="column" :chart-data="chartData"></u-charts>
    </view>
	</app-page>
</template>

<script>
	import UCharts from "./components/u-charts";
  export default {
    components: {UCharts},
    data() {
			return {
        "chartData": {
          "categories": ["2012", "2013", "2014", "2015", "2016", "2017"],
          "series": [{
            "name": "成交量1",
            "data": [15, {"value": 20,"color": "#f04864"}, 45, 37, 43, 34]
          }, {
            "name": "成交量2",
            "data": [30, {"value": 40,"color": "#facc14"}, 25, 14, 34, 18]
          }]
        }
			};
		}
	}
</script>

<style lang="scss">

</style>
