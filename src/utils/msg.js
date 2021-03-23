export function showToast(title, options = {}) {
	uni.showToast({
		title: title,
		duration: 2000
	});
}
