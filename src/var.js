import Enum from 'enum'

export let demoPages = [
	{
		name: "图片拖动排序",
		icon: "/static/c1.png",
		url: "/pages/demos/test"
	},
	{
		name: "类似于element表单",
		icon: "/static/c1.png",
		url: "/pages/demos/form"
	},
	{
		name: "布局",
		icon: "/static/c1.png",
		url: "/pages/demos/layout"
	},
	{
		name: "左右滚动带指示栏",
		icon: "/static/c1.png",
		url: "/pages/demos/scroll"
	},
	// {
	// 	name: "新首页",
	// 	icon: "/static/c1.png",
	// 	url: "/pages/demos/sliding",
	// },
	{
		name: "常见UI",
		icon: "/static/c1.png",
		url: "/sub_pages/demos/commonui"
	},
	{
		name: "下拉菜单",
		icon: "/static/c1.png",
		url: "/pages/demos/dropdown"
	},
	{
		name: "cavans和海报",
		icon: "/static/c1.png",
		url: "/sub_pages/demos/canvas"
	},
	{
		name: "瑞幸 购买列表",
		icon: "/static/c1.png",
		url: "/pages/demos/rx_list"
	},
	{
		name: "socket.io",
		icon: "/static/c1.png",
		url: "/sub_pages/demos/native-socket"
	},
	{
		name: "ucharts 图表",
		icon: "/static/c1.png",
		url: "/sub_pages/demos/charts"
	},
	{
		name: "picker",
		icon: "/static/c1.png",
		url: "/sub_pages/demos/actionsheet"
	},
	{
		name: "modal",
		icon: "/static/c1.png",
		url: "/sub_pages/demos/modal"
	},
	{
		name: "demos-image",
		icon: "/static/c1.png",
		url: "/sub_pages/demos/demos-image"
	},
	{
		name: "demos-link",
		icon: "/static/c1.png",
		url: "/sub_pages/demos/demos-link"
	},
	{
		name: "弹窗login",
		icon: "/static/c1.png",
		url: "/pages/auth/login"
	},
	{
		name: "搜索页面",
		icon: "/static/c1.png",
		url: "/pages/demos/search_page"
	}
];

export let miniPages = [
	{
		name: "相机",
		icon: "/static/c1.png",
		url: "/sub_pages/demos/mini_camera"
	}
];

export let payTypes = [
	{
		name: '支付宝',
		value: 1
	},
	{
		name: '微信',
		value: 2
	},
	{
		name: '招行',
		value: 3
	},
]

export let processState = new Enum(['PENDING', 'FULFILLED', 'REJECTED'])
