### 简介

**bling.js** 是一个快速制作 **周期性** 动画的工具， 使用了 transition 查看[在线例子](https://stormpass.github.io/example/bling.js/)


### 例子
我的页面上有颗红心，我希望在我点击它的时候它放大了，在放大到最大后，它开始缩小，直到恢复原状。
要达到这个效果，使用bling 就像下面这样简单

```HTML

···
<script src="path/to/bling.js"></script>
···
<img src="heart.png" onclick="Bling(this)" />
···

```
当你点击这个红心时它会马上放大，并且在300毫秒后开始恢复原状，整个动画周期时长为600毫秒  
以上效果的实现我们都使用了默认配置，事实上，Bling.js是非常灵活的，通过简单的配置即可达到丰富的效果  
**淡入淡出** **弹跳** 等等，值得注意的是，bling.js 适合制作 **周期性** 的动画。你只需要定义一个 **边界效果** ，bling 会在合适的时机将 边界效果   添加到元素上，并且在合适的时机移除它，请看下面这个自定义配置的例子  

```javascript

Bling({
  el: document.getElementById('heart'); // 添加动画到 dom 元素
  edgeClass： 'jump-two-vh' // 周期动画中的边界效果 比如向上移动 2vh
})

```
除此之外你还可以设置 动画函数 ， 动画延迟， 触发条件， 循环播放

属性 | 类型 | 默认 | 说明
---|---|---|---
el | HTMLElement | 无 | 必须， 需要设置动画的元素
halfCycle | number | 300 | 可选， 动画的半个周期的时长 毫秒（ms）
edgeClass | string | bling-middle | 可选 ，Bling.js在初始化时会向文档添加这个默认class
loop | boolean | false |可选， 循环执行动画。
animationProperty | string | all | 可选，同 transition-property
animationFunction | string | ease-in-out |可选， 同 transition-timing-function
animationDelay | number | 0 |可选， 单位 毫秒（ms）； 动画执行延迟时间