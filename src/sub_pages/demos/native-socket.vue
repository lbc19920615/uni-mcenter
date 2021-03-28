<template>
  <view> native-socket </view>
</template>

<script>
import io from "@/lib/uni-socket.io/uni-socket.io";

console.log(io);

export default {
  data() {
    return {};
  },
  onLoad() {
    const socket = io("ws://localhost:3000", {
      query: {},
      transports: ["websocket", "polling"],
      timeout: 5000,
    });

    socket.on("connect", () => {
      // ws连接已建立，此时可以进行socket.io的事件监听或者数据发送操作
      console.log("ws 已连接");
      // socket.io 唯一连接id，可以监控这个id实现点对点通讯
      // const { id } = socket;
      // socket.on(id, (message) => {
      //   // 收到服务器推送的消息，可以跟进自身业务进行操作
      //   console.log("ws 收到服务器消息：", message);
      // });
      // // 主动向服务器发送数据
      // socket.emit("send_data", {
      //   time: +new Date(),
      // });
    });

    socket.on("error", (msg) => {
      console.log("ws error", msg);
    });
  },
};
</script>

<style lang="scss">
</style>
