export let swiperMixin = {
	data() {
		return {
			background: ["color1", "color2", "color3"],
			indicatorDots: true,
			autoplay: true,
			interval: 10000,
			duration: 1000,
		};
	},
	methods: {
		changeIndicatorDots(e) {
			this.indicatorDots = !this.indicatorDots;
		},
		changeAutoplay(e) {
			this.autoplay = !this.autoplay;
		},
		intervalChange(e) {
			this.interval = e.target.value;
		},
		durationChange(e) {
			this.duration = e.target.value;
		},
	},
};
