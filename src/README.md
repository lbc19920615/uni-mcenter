# uni-sticky

## 介绍

封装自 微信小程序扩展组件 [mp-sticky](https://developers.weixin.qq.com/miniprogram/dev/extended/component-plus/sticky.html)

## 介绍
### 复制的介绍

粘性布局组件。Sticky 组件与 CSS 中 `position: sticky` 属性实现的效果一致，当组件在屏幕范围内时，会按照正常的布局排列，当组件滚出屏幕范围时，始终会固定在屏幕顶部。

**注意**：但不是使用 `position: sticky` 实现，而是通过 `createIntersectionObserver`、`relativeToViewport` 等API 实现。微信小程序功能正常，但未确定其他平台是否支持此部分API。如有跨平台需要，**请自行验证、或 folk 代码更改**（PS：之所以放到这里，也是想着说开发过程中此部分功能耗费了不少时间折腾，以期能给有需要的朋友也稍微带来一些便利，但本人没有更多维护的精力）。

## 属性列表

|属性	|类型	|默认值|	必填|	说明|
|------|    ---|   --|----   | ----|
offset-top|	Number |0	|否	|吸顶时与顶部的距离，单位px|
|z-index	|Number|	99|	否	|吸顶时的 z-index|
|container|	function|	null|	否|	一个函数，返回容器对应的 NodesRef 节点|
|disabled|	Boolean|	false|	否|	是否禁用|
|bindscroll|Object|	|	否|	滚动时触发，{scrollTop: 距离顶部位置, isFixed: 是否吸顶 } **（注意此处与 mp-sticky 有差异，mp-sticky 返回的是事件对象，此处只是单纯对象）**|

## 使用
```js
import UniSticky from 'uni-sticky/uni-sticky'

export default {
    // ....etc....
    components: {    
        UniSticky,
    },
    // ....etc....
}
```

### 吸顶距离
通过 `offset-top` 属性可以设置组件在吸顶时与顶部的距离

```html
<uni-sticky offset-top="32">
  <button size="mini" type="primary" style="margin-left: 115px; background-color: #1989fa">吸顶距离</button>
</uni-sticky>
```

### 指定容器
通过 `container` 属性可以指定组件的容器，页面滚动时，组件会始终保持在容器范围内，当组件即将超出容器底部时，会返回原位置。

```html
<view id="container" style="height: 250px; background-color: #E0E0E0;">
    <view style="height: 100px; background-color: #FFFF99;"></view>
    <uni-sticky :container="container" offset-top="64">
        <button size="mini" type="primary" style="margin-left: 215px; background-color: #ff976a">指定容器</button>
    </uni-sticky>
</view>
```

```js
export default {
    data() {
        return {
            container: () => uni.createSelectorQuery().select('#container')
        }
    }
}
```