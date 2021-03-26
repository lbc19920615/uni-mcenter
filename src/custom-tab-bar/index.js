Component({
	data: {
		selected: 0,
    color: "#7A7E83",
    selectedColor: "#3cc51f",
		"list": [
			{
				"pagePath": "/pages/index/index",
				iconPath: "/static/tabbar/icon_component.png",
				selectedIconPath: "/static/tabbar/icon_component_HL.png",
				"text": "组件"
			},
			{
				"pagePath": "/pages/mime/index",
				iconPath: "/static/tabbar/icon_API.png",
				selectedIconPath: "/static/tabbar/icon_API_HL.png",
				"text": "我的"
			}
		]
	},
	attached() {},
	methods: {
		switchTab(e) {
			const data = e.currentTarget.dataset
			const url = data.path
			wx.switchTab({
				url
			})
			this.setData({
				selected: data.index
			})
		}
	}
})
