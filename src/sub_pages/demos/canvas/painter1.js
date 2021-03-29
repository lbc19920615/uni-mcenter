import Painter from "mp-painter";

export async function draw() {
	var ctx = uni.createCanvasContext('painterCanvas')
	let painter = new Painter(ctx);
	await painter.draw({
		type: "text",
		color: "#f33",
		fontSize: 60, // = 60rpx
		content: "Hello World" //绘制的文本
	});
}
