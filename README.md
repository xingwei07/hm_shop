### 生命周期事件

- 监听触底事件
```js
onReachBottom(){}
```

- 上拉刷新
```js
onPullDownRefresh() {}
```

- 停止刷新动画
```js
uni.stopPullDownRefresh()
```

### page.json

```json
"style": {
	"enablePullDownRefresh": true // 开启下拉刷新
}
```

## API

### 设备

#### 拨打电话

##### uni.makePhoneCall(OBJECT)
拨打电话。

**OBJECT 参数说明**

|参数名|类型|必填|说明|
|:-|:-|:-|:-|
|phoneNumber|String|是|需要拨打的电话号码|
|success|Function|否|接口调用成功的回调|
|fail|Function|否|接口调用失败的回调函数|
|complete|Function|否|接口调用结束的回调函数（调用成功、失败都会执行）|

**示例**

```javascript
uni.makePhoneCall({
	phoneNumber: '114' //仅为示例
});
```


注：App端关于电话短信的扩展文档
- Android需要在 manifest.json 增加权限 `<uses-permission android:name="android.permission.CALL_PHONE"/>`
- Android不弹出询问框直接拨打电话：[https://ask.dcloud.net.cn/question/4035](https://ask.dcloud.net.cn/question/4035)
- 发送短信：[http://www.html5plus.org/doc/zh_cn/messaging.html](http://www.html5plus.org/doc/zh_cn/messaging.html)
- Android读取短信验证码：[http://ask.dcloud.net.cn/article/676](http://ask.dcloud.net.cn/article/676)
- Android遍历读取短信：[https://ask.dcloud.net.cn/article/12934](https://ask.dcloud.net.cn/article/12934)
注意需要赋予相关权限。
- 钉钉小程序端拨打电话，详见[https://open.dingtalk.com/document/orgapp-client/call-menu](https://open.dingtalk.com/document/orgapp-client/call-menu)

### 媒体

#### 图片

##### uni.chooseImage(OBJECT)
从本地相册选择图片或使用相机拍照。

App端如需要更丰富的相机拍照API（如直接调用前置摄像头），参考[plus.camera](https://www.html5plus.org/doc/zh_cn/camera.html)

**OBJECT 参数说明**

|参数名|类型|必填|说明|平台差异说明|
|:-|:-|:-|:-|:-|
|count|Number|否|最多可以选择的图片张数，默认9|见下方说明|
|sizeType|Array&lt;String&gt;|否|original 原图，compressed 压缩图，默认二者都有|App、微信小程序、支付宝小程序、百度小程序|
|extension|Array&lt;String&gt;|否|根据文件拓展名过滤，每一项都不能是空字符串。默认不过滤。|H5(HBuilder X2.9.9+)|
|sourceType|Array&lt;String&gt;|否|album 从相册选图，camera 使用相机，默认二者都有。如需直接开相机或直接选相册，请只使用一个选项||
|crop|Object|否|图像裁剪参数，设置后 sizeType 失效|App 3.1.19+|
|success|Function|是|成功则返回图片的本地文件路径列表 tempFilePaths||
|fail|Function|否|接口调用失败的回调函数|小程序、App|
|complete|Function|否|接口调用结束的回调函数（调用成功、失败都会执行）|&nbsp;|

**crop 参数说明**

|参数名|类型|必填|说明|平台差异说明|
|:-|:-|:-|:-|:-|
|quality|Number|否|取值范围为1-100，数值越小，质量越低（仅对jpg格式有效）。默认值为80。||
|width|Number|是|裁剪的宽度，单位为px，用于计算裁剪宽高比。||
|height|Number|是|裁剪的高度，单位为px，用于计算裁剪宽高比。||
|resize|Boolean|否|是否将width和height作为裁剪保存图片真实的像素值。默认值为true。注：设置为false时在裁剪编辑界面显示图片的像素值，设置为true时不显示||

**Tips**

- count 值在 H5 平台的表现，基于浏览器本身的规范。目前测试的结果来看，只能限制单选/多选，并不能限制数量。并且，在实际的手机浏览器很少有能够支持多选的。
- sourceType 值在 H5 平台根据浏览器的不同而表现不同，一般不可限制仅使用相册，部分浏览器也无法限制是否使用相机。
- 可以通过用户授权API来判断用户是否给应用授予相册或摄像头的访问权限[https://uniapp.dcloud.io/api/other/authorize](https://uniapp.dcloud.io/api/other/authorize)
- App端如需选择非媒体文件，可在插件市场搜索[文件选择](https://ext.dcloud.net.cn/search?q=文件选择)，其中Android端可以使用Native.js，无需原生插件，而iOS端需要原生插件。
- 选择照片大多为了上传，uni ui封装了更完善的[uni-file-picker组件](https://ext.dcloud.net.cn/plugin?id=4079)，文件选择、上传到uniCloud的免费存储和cdn中，一站式集成。强烈推荐使用。


**注：文件的临时路径，在应用本次启动期间可以正常使用，如需持久保存，需在主动调用 [uni.saveFile](api/file/file?id=savefile)，在应用下次启动时才能访问得到。**

**success 返回参数说明**

|参数|类型|说明|
|:-|:-|:-|
|tempFilePaths|Array&lt;String&gt;|图片的本地文件路径列表|
|tempFiles|Array&lt;Object&gt;、Array&lt;File&gt;|图片的本地文件列表，每一项是一个 File 对象|

**File 对象结构如下**

|参数|类型|说明|
|:-|:-|:-|
|path|String|本地文件路径|
|size|Number|本地文件大小，单位：B|
|name|String|包含扩展名的文件名称，仅H5支持|
|type|String|文件类型，仅H5支持|

**示例**

```javascript
uni.chooseImage({
	count: 6, //默认9
	sizeType: ['original', 'compressed'], //可以指定是原图还是压缩图，默认二者都有
	sourceType: ['album'], //从相册选择
	success: function (res) {
		console.log(JSON.stringify(res.tempFilePaths));
	}
});
```

##### uni.previewImage(OBJECT)
预览图片。

**OBJECT 参数说明**

|参数名|类型|必填|说明|平台差异说明|
|:-|:-|:-|:-|:-|
|current|String/Number|详见下方说明|详见下方说明||
|urls|Array&lt;String&gt;|是|需要预览的图片链接列表||
|indicator|String|否|图片指示器样式，可取值："default" - 底部圆点指示器； "number" - 顶部数字指示器； "none" - 不显示指示器。|App|
|loop|Boolean|否|是否可循环预览，默认值为 false|App|
|longPressActions|Object|否|长按图片显示操作菜单，如不填默认为**保存相册**|App 1.9.5+|
|success|Function|否|接口调用成功的回调函数||
|fail|Function|否|接口调用失败的回调函数||
|complete|Function|否|接口调用结束的回调函数（调用成功、失败都会执行）|&nbsp;|

**current 参数说明**

> 1.9.5+ 支持传图片在 urls 中的索引值

current 为当前显示图片的链接/索引值，不填或填写的值无效则为 urls 的第一张。**App平台在 1.9.5至1.9.8之间，current为必填。不填会报错**

注意，当 urls 中有重复的图片链接时：

- 传链接，预览结果始终显示该链接在 urls 中第一次出现的位置。
- 传索引值，在微信/百度/字节跳动小程序平台，会过滤掉传入的 urls 中该索引值之前与其对应图片链接重复的值。其它平台会保留原始的 urls 不会做去重处理。

举例说明：

一组图片 `[A, B1, C, B2, D]`，其中 B1 与 B2 的图片链接是一样的。

- 传 B2 的链接，预览的结果是 B1，前一张是 A，下一张是 C。
- 传 B2 的索引值 3，预览的结果是 B2，前一张是 C，下一张是 D。此时在微信/百度/字节跳动小程序平台，最终传入的 urls 是 `[A, C, B2, D]`，过滤掉了与 B2 重复的 B1。

**longPressActions 参数说明**

|参数|类型|必填|说明|
|:-|:-|:-|:-|
|itemList|Array&lt;String&gt;|是|按钮的文字数组|
|itemColor|String|否|按钮的文字颜色，字符串格式，默认为"#000000"|
|success|Function|否|接口调用成功的回调函数，详见返回参数说明|
|fail|Function|否|接口调用失败的回调函数|
|complete|Function|否|接口调用结束的回调函数（调用成功、失败都会执行）|

**success 返回参数说明**

|参数|类型|说明|
|:-|:-|:-|
|index|Number|用户长按图片的索引值|
|tapIndex|Number|用户点击按钮列表的索引值|

**示例**

```javascript
// 从相册选择6张图
uni.chooseImage({
	count: 6,
	sizeType: ['original', 'compressed'],
	sourceType: ['album'],
	success: function(res) {
		// 预览图片
		uni.previewImage({
			urls: res.tempFilePaths,
			longPressActions: {
				itemList: ['发送给朋友', '保存图片', '收藏'],
				success: function(data) {
					console.log('选中了第' + (data.tapIndex + 1) + '个按钮,第' + (data.index + 1) + '张图片');
				},
				fail: function(err) {
					console.log(err.errMsg);
				}
			}
		});
	}
	});
```

**TIPS**
- 在非H5端，previewImage是原生实现的，界面自定义灵活度较低。
- 插件市场有前端实现的previewImage，性能低于原生实现，但界面可随意定义；插件市场也有适于App端的previewImage原生插件，提供了更多功能。

##### uni.closePreviewImage(OBJECT)

关闭预览图片。

|App|H5|微信小程序|支付宝小程序|百度小程序|字节跳动小程序|飞书小程序|QQ小程序|快手小程序|京东小程序|
|:-:|:-:|:-:|:-:|:-:|:-:|:-:|:-:|:-:|:-:|
|√ `(3.2.15+)`|√ `(3.2.15+)`|x|x|x|x|x|x|x|x|

**OBJECT 参数说明**

|参数名|类型|必填|说明|
|:-|:-|:-|:-|
|success|Function|否|接口调用成功的回调函数|
|fail|Function|否|接口调用失败的回调函数|
|complete|Function|否|接口调用结束的回调函数（调用成功、失败都会执行）|

##### uni.getImageInfo(OBJECT)

获取图片信息。

小程序下获取网络图片信息需先配置download域名白名单才能生效。

**平台差异说明**

|App|H5|微信小程序|支付宝小程序|百度小程序|字节跳动小程序、飞书小程序|QQ小程序|快手小程序|京东小程序|
|:-:|:-:|:-:|:-:|:-:|:-:|:-:|:-:|:-:|
|√|√|√|√|√|√|√|√|√|

**OBJECT 参数说明**

|参数名|类型|必填|说明|
|:-|:-|:-|:-|
|src|String|是|图片的路径，可以是相对路径，临时文件路径，存储文件路径，网络图片路径|
|success|Function|否|接口调用成功的回调函数|
|fail|Function|否|接口调用失败的回调函数|
|complete|Function|否|接口调用结束的回调函数（调用成功、失败都会执行）|

**success 返回参数说明**

|参数名|类型|说明|平台差异说明|
|:-|:-|:-|:-|
|width|Number|图片宽度，单位px||
|height|Number|图片高度，单位px||
|path|String|返回图片的本地路径||
|orientation|String|返回图片的方向，有效值见下表|App、小程序、京东小程序|
|type|String|返回图片的格式|App、小程序、京东小程序|

**orientation 参数说明**

|枚举值|说明|
|:-|:-|
|up|默认|
|down|180度旋转|
|left|逆时针旋转90度|
|right|顺时针旋转90度|
|up-mirrored|同up，但水平翻转|
|down-mirrored|同down，但水平翻转|
|left-mirrored|同left，但垂直翻转|
|right-mirrored|同right，但垂直翻转|

**示例**

```javascript
uni.chooseImage({
	count: 1,
	sourceType: ['album'],
	success: function (res) {
		uni.getImageInfo({
			src: res.tempFilePaths[0],
			success: function (image) {
				console.log(image.width);
				console.log(image.height);
			}
		});
	}
});
```

##### uni.saveImageToPhotosAlbum(OBJECT)
保存图片到系统相册。

**平台差异说明**

|App|H5|微信小程序|支付宝小程序|百度小程序|字节跳动小程序、飞书小程序|QQ小程序|快手小程序|京东小程序|
|:-:|:-:|:-:|:-:|:-:|:-:|:-:|:-:|:-:|
|√|x|√|√|√|√|√|√|√|

**OBJECT 参数说明**

|参数名|类型|必填|说明|
|:-|:-|:-|:-|
|filePath|String|是|图片文件路径，可以是临时文件路径也可以是永久文件路径，不支持网络图片路径|
|success|Function|否|接口调用成功的回调函数|
|fail|Function|否|接口调用失败的回调函数|
|complete|Function|否|接口调用结束的回调函数（调用成功、失败都会执行）|

**success 返回参数说明**

|参数名|类型|说明|
|:-|:-|:-|
|path|String|保存到相册的图片路径，仅 App 3.0.5+ 支持|
|errMsg|String|调用结果|

**注意**

- 可以通过用户授权API来判断用户是否给应用授予相册的访问权限[https://uniapp.dcloud.io/api/other/authorize](https://uniapp.dcloud.io/api/other/authorize)
- H5没有API可触发保存到相册行为，下载图片时浏览器会询问图片存放地址。

**示例代码：**

```javascript
uni.chooseImage({
	count: 1,
	sourceType: ['camera'],
	success: function (res) {
		uni.saveImageToPhotosAlbum({
			filePath: res.tempFilePaths[0],
			success: function () {
				console.log('save success');
			}
		});
	}
});
```

##### uni.compressImage(OBJECT)

压缩图片接口，可选压缩质量

**平台差异说明**

|App|H5|微信小程序|支付宝小程序|百度小程序|字节跳动小程序、飞书小程序|QQ小程序|快手小程序|京东小程序|
|:-:|:-:|:-:|:-:|:-:|:-:|:-:|:-:|:-:|
|√|x|√|√|√(基础库版本>=3.110.3)|√|√|√|√|

**OBJECT 参数说明**

| 属性 | 类型 | 默认值 | 必填 | 说明 | 平台差异说明 |
| :- | :- | :- | :- | :- | :- |
| src | String |  | 是 | 图片路径，图片的路径，可以是相对路径、临时文件路径、存储文件路径 ||
| quality | Number | 80 | 否 | 压缩质量，范围0～100，数值越小，质量越低，压缩率越高（仅对jpg有效） ||
| width | String | auto | 否 | 缩放图片的宽度，支持像素值（如"100px"）、百分比（如"50%"）、自动计算（如"auto"，即根据width与源图宽的缩放比例计算，若未设置width则使用源图宽度）|App 3.0.0+|
| height | String | auto | 否 | 缩放图片的高度，支持像素值（如"100px"）、百分比（如"50%"）、自动计算（如"auto"，即根据height与源图高的缩放比例计算，若未设置height则使用源图高度）|App 3.0.0+|
| rotate | Number | 0 | 否 | 旋转度数，范围0～360 |App 3.0.0+|
| success | Function |  | 否 | 接口调用成功的回调函数 ||
| fail | Function |  | 否 | 接口调用失败的回调函数 ||
| complete | Function |  | 否 | 接口调用结束的回调函数（调用成功、失败都会执行） ||

**success 返回参数说明**

| 属性 | 类型 | 说明 |
| :- | :- | :- |
| tempFilePath | String | 压缩后图片的临时文件路径 |

**示例代码：**

```js
uni.compressImage({
  src: '/static/logo.jpg',
  quality: 80,
  success: res => {
    console.log(res.tempFilePath)
  }
})
```


## 组件

### swiper

滑块视图容器。

一般用于左右滑动或上下滑动，比如banner轮播图。

注意滑动切换和滚动的区别，滑动切换是一屏一屏的切换。swiper下的每个swiper-item是一个滑动切换区域，不能停留在2个滑动区域之间。

#### 属性说明

|属性名|类型|默认值|说明|平台差异说明|
|:-|:-|:-|:-|:-|
|indicator-dots|Boolean|false|是否显示面板指示点||
|indicator-color|Color|rgba(0, 0, 0, .3)|指示点颜色||
|indicator-active-color|Color|#000000|当前选中的指示点颜色||
|active-class|String||swiper-item 可见时的 class|支付宝小程序|
|changing-class|String||acceleration 设置为 {{true}} 时且处于滑动过程中，中间若干屏处于可见时的class|支付宝小程序|
|autoplay|Boolean|false|是否自动切换||
|current|Number|0|当前所在滑块的 index||
|current-item-id|String||当前所在滑块的 item-id ，不能与 current 被同时指定|支付宝小程序不支持|
|interval|Number|5000|自动切换时间间隔||
|duration|Number|500|滑动动画时长|app-nvue不支持|
|circular|Boolean|false|是否采用衔接滑动，即播放到末尾后重新回到开头||
|vertical|Boolean|false|滑动方向是否为纵向||
|previous-margin|String|0px|前边距，可用于露出前一项的一小部分，接受 px 和 rpx 值|app-nvue、字节跳动小程序、飞书小程序不支持|
|next-margin|String|0px|后边距，可用于露出后一项的一小部分，接受 px 和 rpx 值|app-nvue、字节跳动小程序、飞书小程序不支持|
|acceleration|Boolean|false|当开启时，会根据滑动速度，连续滑动多屏|支付宝小程序|
|disable-programmatic-animation|Boolean|false|是否禁用代码变动触发 swiper 切换时使用动画。|支付宝小程序|
|display-multiple-items|Number|1|同时显示的滑块数量|app-nvue、支付宝小程序不支持|
|skip-hidden-item-layout|Boolean|false|是否跳过未显示的滑块布局，设为 true 可优化复杂情况下的滑动性能，但会丢失隐藏状态滑块的布局信息|App、微信小程序、京东小程序|
|disable-touch|Boolean|false|是否禁止用户 touch 操作|App 2.5.5+、H5 2.5.5+、支付宝小程序、字节跳动小程序与飞书小程序（只在初始化时有效，不能动态变更）|
|touchable|Boolean|true|是否监听用户的触摸事件，只在初始化时有效，不能动态变更|字节跳动小程序与飞书小程序（uni-app 2.5.5+ 推荐统一使用 disable-touch）|
|easing-function|String|default|指定 swiper 切换缓动动画类型，有效值：default、linear、easeInCubic、easeOutCubic、easeInOutCubic|微信小程序、快手小程序、京东小程序|
|@change|EventHandle||current 改变时会触发 change 事件，event.detail = {current: current, source: source}||
|@transition|EventHandle||swiper-item 的位置发生改变时会触发 transition 事件，event.detail = {dx: dx, dy: dy}，支付宝小程序暂不支持dx, dy|App、H5、微信小程序、支付宝小程序、字节跳动小程序、飞书小程序、QQ小程序、快手小程序|
|@animationfinish|EventHandle||动画结束时会触发 animationfinish 事件，event.detail = {current: current, source: source}|字节跳动小程序与飞书小程序不支持|

change 事件返回 detail 中包含一个 source 字段，表示导致变更的原因，可能值如下：

- autoplay 自动播放导致swiper变化。
- touch 用户划动引起swiper变化。
- 其他原因将用空字符串表示。

**swiper做左右拖动的长列表的专项问题**
- swiper是单页组件，适合做banner图轮播和简单列表左右滑动。
- 因为性能问题，用swiper做复杂长列表，需要较高的优化技巧以及接受一些限制。
- 这是一个范例，[插件市场新闻模板示例](https://ext.dcloud.net.cn/plugin?id=103)，它在App端使用了nvue的原生渲染，实现高性能的左右拖动长列表；并支持可自定义的任何形式的下拉刷新。它在非App端使用的模式是只缓存左右一共3列的数据，dom中的数据过多时，它会自动释放。就是说App上，只要看过这一页，再进去时内容是还在的。而在非App上，只能做到缓存3页数据，其他页即便看过，再进去也会重新加载。并且非App的这种情况下，不再提供下拉刷新。虽然插件市场也有其他前端模拟的下拉刷新，但性能不佳。一般小程序的大厂案例里，提供左右拖长列表的，都是这种做法。

**Tips**

- 如果 nvue 页面 ``@animationfinish`` 事件不能返回正确的数据，可同时监听 ``@change`` 事件。
- 使用竖向滚动时，需要给 ``<scroll-view>`` 一个固定高度，通过 css 设置 height。
- 注意：其中只可放置 ``<swiper-item>`` 组件，否则会导致未定义的行为。 
- 如果遇到current、current-item-id属性设置不生效的问题参考：[组件属性设置不生效解决办法](/tutorial/vue-api.html#componentsolutions)
- banner图的切换效果和指示器的样式，有多种风格可自定义，可在[uni-app插件市场](https://ext.dcloud.net.cn/search?q=%E8%BD%AE%E6%92%AD)搜索
- 如需banner管理后台，参考uniCloud admin banner插件：[https://ext.dcloud.net.cn/plugin?id=4117](https://ext.dcloud.net.cn/plugin?id=4117)
- swiper在App的vue中、百度支付宝头条QQ小程序中，不支持内嵌video、map等原生组件。在微信基础库2.4.4起和App nvue2.1.5起支持内嵌原生组件。竖向的swiper内嵌视频可实现抖音、映客等视频垂直拖动切换效果。
- 同时监听 change transition，开始滑动时触发transition, 放开手后，在ios平台触发顺序为 transition... change，Android/微信小程序/支付宝为 transition... change transition...


#### easing-function 

|值	|	说明|
|:-|:-|
|default	|默认缓动函数	|
|linear	|线性动画	|
|easeInCubic	|缓入动画	|
|easeOutCubic	|缓出动画	|
|easeInOutCubic	|	缓入缓出动画	|


#### swiper-item
仅可放置在 ``<swiper>`` 组件中，宽高自动设置为100%。注意：宽高100%是相对于其父组件，不是相对于子组件，不能被子组件自动撑开。

|属性名|类型|默认值|说明|
|:-|:-|:-|:-|
|item-id|String||该 swiper-item 的标识符|

**示例** [查看演示](https://hellouniapp.dcloud.net.cn/pages/component/swiper/swiper)

### map

地图组件。

地图组件用于展示地图，而定位API只是获取坐标，请勿混淆两者。

**平台差异说明**

|App|H5|微信小程序|支付宝小程序|百度小程序|字节跳动小程序、飞书小程序|QQ小程序|快应用|360小程序|快手小程序|京东小程序|
|:-:|:-:|:-:|:-:|:-:|:-:|:-:|:-:|:-:|:-:|:-:|
|√|√|√|√|√|1.63+|1.9.0+|√|x|x|√|

**地图服务商说明**

|地图服务商|App|H5|微信小程序|
|:-:|:-:|:-:|:-:|
|高德|√|||
|Goolge|3.4+|3.2.10+||
|腾讯||√|√|


#### 属性说明

|属性名|类型|默认值|说明|平台差异说明|
|:-|:-|:-|:-|:-|
|longitude|Number||中心经度||
|latitude|Number||中心纬度||
|scale|Number|16|缩放级别，取值范围为3-20|高德地图缩放比例与微信小程序不同|
|theme|String|normal|主题（satellite 或 normal）只在初始化时有效，不能动态变更（仅Android支持）|京东小程序|
|min-scale|Number|3|最小缩放级别|App-nvue 3.1.0+、微信小程序2.13+|
|max-scale|Number|20|最大缩放级别|App-nvue 3.1.0+、微信小程序2.13+|
|layer-style|Number/String|1|个性化地图|App-nvue 3.1.0+、微信小程序2.13+|
|markers|Array||标记点||
|polyline|Array||路线|飞书小程序不支持|
|circles|Array||圆||
|controls|Array||控件||
|include-points|Array||缩放视野以包含所有给定的坐标点|App-nvue 2.1.5+、微信小程序、H5、百度小程序、支付宝小程序、京东小程序|
|enable-3D|Boolean|false|是否显示3D楼块|App-nvue 2.1.5+、微信小程序2.3.0|
|show-compass|Boolean|false|是否显示指南针|App-nvue 2.1.5+、微信小程序2.3.0|
|enable-zoom|Boolean|true|是否支持缩放|App-nvue 2.1.5+、微信小程序2.3.0|
|enable-scroll|Boolean|true|是否支持拖动|App-nvue 2.1.5+、微信小程序2.3.0|
|enable-rotate|Boolean|false|是否支持旋转|App-nvue 2.1.5+、微信小程序2.3.0|
|enable-overlooking|Boolean|false|是否开启俯视|App-nvue 2.1.5+、微信小程序2.3.0|
|enable-satellite|Boolean|false|是否开启卫星图|App-nvue 2.1.5+、微信小程序2.7.0|
|enable-traffic|Boolean|false|是否开启实时路况|App-nvue 2.1.5+、微信小程序2.7.0|
|enable-poi|Boolean|false|是否展示 POI 点|App-nvue 3.1.0+|
|enable-building|Boolean|false|是否展示建筑物|App-nvue 3.1.0+ 支持 (**废除原enable-3D属性 高德地图默认开启建筑物就是3D无法设置**)|
|show-location|Boolean||显示带有方向的当前定位点|微信小程序、H5、百度小程序、支付宝小程序、京东小程序|
|polygons|Array.`<polygon>`||多边形|App-nvue 2.1.5+、App-vue 3.4.3+、H5 3.4.3+、微信小程序、百度小程序、支付宝小程序|
|enable-indoorMap|Boolean|false|是否展示室内地图|App-nvue 3.1.0+|
|@markertap|EventHandle||点击标记点时触发，e.detail = {markerId}|App-nvue 2.3.3+、H5、微信小程序 （App和H5平台需要指定 marker 对象属性 id）|
|@labeltap|EventHandle||点击label时触发，e.detail = {markerId} |微信小程序2.9.0|
|@callouttap|EventHandle||点击标记点对应的气泡时触发，e.detail = {markerId}||
|@controltap|EventHandle||点击控件时触发，e.detail = {controlId}||
|@regionchange|EventHandle||视野发生变化时触发|微信小程序、H5、百度小程序、支付宝小程序、京东小程序|
|@tap|EventHandle||点击地图时触发; App-nvue、微信小程序2.9支持返回经纬度||
|@updated|EventHandle||在地图渲染更新完成时触发|微信小程序、H5、百度小程序|
|@anchorpointtap|EventHandle||点击定位标时触发，e.detail = {longitude, latitude}|App-nvue 3.1.0+、微信小程序2.13+|
|@poitap|EventHandle||点击地图poi点时触发，e.detail = {name, longitude, latitude}|微信小程序2.3.0+|

**注意** 

- `<map>` 组件的宽/高推荐写直接量，比如：750rpx，不要设置百分比值。
- 谷歌地图使用 `wgs84` 坐标，其他地图使用 `gcj02` 坐标，用错坐标类型会显示偏移。
- App平台 `layer-style` 属性需要在地图服务商后台创建，值设置为高德后台申请的字符串，[详情](https://developer.amap.com/api/android-sdk/guide/create-map/custom)

#### 近期新增功能
1. 支持点聚合，适用于marker过多场景。
2. 支持彩虹蚯蚓线，常用于路线规划场景。
3. 覆盖物支持调整与其它地图元素的压盖关系。
4. 支持marker（小车）平移动画，适用于轨迹回放场景。

####  markers

标记点用于在地图上显示标记的位置

|属性|说明|类型|必填|备注|平台差异说明|
|:-|:-|:-|:-|:-|:-|
|id|标记点id|Number|是|marker点击事件回调会返回此id。建议为每个marker设置上Number类型id，保证更新marker时有更好的性能。最大限制9位数||
|latitude|纬度|Number|是|浮点数，范围 -90 ~ 90||
|longitude|经度|Number|是|浮点数，范围 -180 ~ 180||
|title|标注点名|String|否|点击时显示，callout存在时将被忽略|App-nvue 2.1.5+、微信小程序、H5、支付宝小程序、百度小程序、京东小程序|
|iconPath|显示的图标|String|是|项目目录下的图片路径，支持相对路径写法，以'/'开头则表示相对小程序根目录；也支持临时路径||
|rotate|旋转角度|Number|否|顺时针旋转的角度，范围 0 ~ 360，默认为 0|App-nvue 2.1.5+、微信小程序、支付宝小程序、百度小程序、京东小程序|
|alpha|标注的透明度|Number|否|默认1，无透明，范围 0 ~ 1|App-nvue 2.1.5+、微信小程序、支付宝小程序、百度小程序、京东小程序|
|width|标注图标宽度|Number|否|默认为图片实际宽度|App-nvue 2.1.5+、微信小程序、H5、支付宝小程序、百度小程序、京东小程序|
|height|标注图标高度|Number|否|默认为图片实际高度|App-nvue 2.1.5+、微信小程序、H5、支付宝小程序、百度小程序、京东小程序|
|callout|自定义标记点上方的气泡窗口|Object|否|支持的属性见下表，可识别换行符。|App-nvue 2.1.5+、微信小程序、支付宝小程序、百度小程序、京东小程序|
|label|为标记点旁边增加标签|Object|否|支持的属性见下表，可识别换行符。|App-nvue 2.1.5+、微信小程序、H5、App、百度小程序|
|anchor|经纬度在标注图标的锚点，默认底边中点|Object|否|{x, y}，x表示横向(0-1)，y表示竖向(0-1)。{x: .5, y: 1} 表示底边中点|App-nvue 2.1.5+、微信小程序、H5、百度小程序、京东小程序|
|clusterId|自定义点聚合簇效果时使用|Number|否||App-nvue 3.1.0+、微信小程序|
|customCallout|自定义气泡窗口|Object|否||app暂时不支持、微信小程序|
|aria-label|无障碍访问，（属性）元素的额外描述|String|否||App-nvue 3.1.0+、微信小程序|

**marker 上的气泡 callout**

|属性|说明|类型|平台差异说明|
|:-|:-|:-|:-|
|content|文本|String|App-nvue 2.1.5+、微信小程序、H5、百度小程序、京东小程序|
|color|文本颜色|String|App-nvue 2.1.5+、微信小程序、H5、百度小程序、京东小程序|
|fontSize|文字大小|Number|App-nvue 2.1.5+、微信小程序、H5、百度小程序、京东小程序|
|borderRadius|callout边框圆角|Number|App-nvue 2.1.5+、微信小程序、H5、百度小程序、京东小程序|
|borderWidth|边框宽度|Number|京东小程序|
|borderColor|边框颜色|String|京东小程序|
|bgColor|背景色|String|App-nvue 2.1.5+、微信小程序、H5、百度小程序、京东小程序|
|padding|文本边缘留白|Number|App-nvue 2.1.5+、微信小程序、H5、百度小程序、京东小程序|
|display|'BYCLICK':点击显示; 'ALWAYS':常显|String|App-nvue 2.1.5+、微信小程序、H5、百度小程序、京东小程序|
|textAlign|文本对齐方式。有效值: left, right, center|String|App-nvue 2.1.5+、微信小程序、百度小程序、京东小程序|

**marker 上的标签 label**

|属性|说明|类型|平台差异说明|
|:-|:-|:-|:-|
|content|文本|String||
|color|文本颜色|String|App-nvue 2.1.5+、微信小程序、H5、百度小程序|
|fontSize|文字大小|Number|App-nvue 2.1.5+、微信小程序、H5、百度小程序|
|x|label的坐标，原点是 marker 对应的经纬度|Number|H5、百度小程序|
|y|label的坐标，原点是 marker 对应的经纬度|Number|H5、百度小程序|
|anchorX|label的坐标，原点是 marker 对应的经纬度|Number|App-nvue 2.1.5+、微信小程序|
|anchorY|label的坐标，原点是 marker 对应的经纬度|Number|App-nvue 2.1.5+、微信小程序|
|borderWidth|边框宽度|Number|微信小程序、百度小程序|
|borderColor|边框颜色|String|微信小程序、百度小程序|
|borderRadius|边框圆角|Number|App-nvue 2.1.5+、微信小程序、百度小程序|
|bgColor|背景色|String|App-nvue 2.1.5+、微信小程序、百度小程序|
|padding|文本边缘留白|Number|App-nvue 2.1.5+、微信小程序、百度小程序|
|textAlign|文本对齐方式。有效值: left, right, center|String|App-nvue 2.1.5+、微信小程序、百度小程序|
|customCallout|自定义气泡窗口|Object|App暂时不支持、微信小程序|
|aria-label|无障碍访问，（属性）元素的额外描述|String|App-nvue 3.1.0+、微信小程序|
|joinCluster|是否参与点聚合|Boolean|App-nvue 3.1.0+、微信小程序|

#### 点聚合

当地图上需要展示的标记点 marker 过多时，可能会导致界面上 marker 出现压盖，展示不全，并导致整体性能变差。针对此类问题，推出点聚合能力。

使用流程如下：

[MapContext.initMarkerCluster](/api/location/map?id=createmapcontext) 对聚合点进行初始化配置（可选）；
[MapContext.addMarkers](/api/location/map?id=createmapcontext) 指定参与聚合的 marker；
MapContext.on('markerClusterCreate', callback) 触发时，通过 [MapContext.addMarkers](/api/location/map?id=createmapcontext) 更新聚合簇的样式 （可选）；
[MapContext.removeMarkers](/api/location/map?id=createmapcontext) 移除参与聚合的 marker；

#### polyline

指定一系列坐标点，从数组第一项连线至最后一项

|属性|说明|类型|必填|备注|平台差异说明|
|:-|:-|:-|:-|:-|:-|
|points|经纬度数组|Array|是|[{latitude: 0, longitude: 0}]||
|color|线的颜色|String|否|8位十六进制表示，后两位表示alpha值，如：#0000AA||
|width|线的宽度|Number|否|||
|dottedLine|是否虚线|Boolean|否|默认false|App-nvue 2.1.5+、微信小程序、H5、百度小程序、支付宝小程序、京东小程序|
|arrowLine|带箭头的线|Boolean|否|默认false，微信小程序开发者工具暂不支持该属性|App-nvue 2.1.5+、微信小程序、百度小程序、京东小程序|
|arrowIconPath|更换箭头图标|String|否|在arrowLine为true时生效|App-nvue 2.1.5+、微信小程序、百度小程序、京东小程序|
|borderColor|线的边框颜色|String|否||微信小程序、H5、百度小程序、京东小程序|
|borderWidth|线的厚度|Number|否||微信小程序、H5、百度小程序、京东小程序|
|colorList|彩虹线|Array|false|存在时忽略 color 值|App-nvue 3.1.0+、微信小程序|
|level|压盖关系，默认为 abovelabels|String|false||微信小程序|

 **注意事项** 

- App-nvue 当 arrowLine 为 true 时，显示的是带箭头的图片拼接的线 color 值会被忽略，替换箭头图片的方法[参考文档](https://ask.dcloud.net.cn/article/37901) 

#### polygon
指定一系列坐标点，根据 points 坐标数据生成闭合多边形

|属性|说明|类型|必填|备注
|:--|:--|:--|:--|:--|
|points|经纬度数组|array|是|[{latitude: 0, longitude: 0}]
|strokeWidth|描边的宽度|Number|否||
|strokeColor|描边的颜色|String|否|十六进制|
|fillColor|填充颜色|String|否|十六进制|
|zIndex|设置多边形 Z 轴数值|Number|否||
|level|压盖关系，默认为 abovelabels|String|false|微信小程序|

#### circles

在地图上显示圆

|属性|说明|类型|必填|备注|
|:-|:-|:-|:-|:-|
|latitude|纬度|Number|是|浮点数，范围 -90 ~ 90|
|longitude|经度|Number|是|浮点数，范围 -180 ~ 180|
|color|描边的颜色|String|否|8位十六进制表示，后两位表示alpha值，如：#0000AA|
|fillColor|填充颜色|String|否|8位十六进制表示，后两位表示alpha值，如：#0000AA|
|radius|半径|Number|是||
|strokeWidth|描边的宽度|Number|否|&nbsp;|
|level|压盖关系，默认为 abovelabels|String|false|微信小程序|

#### controls

在地图上显示控件，控件不随着地图移动

|属性|说明|类型|必填|备注|
|:-|:-|:-|:-|:-|
|id|控件id|Number|否|在控件点击事件回调会返回此id|
|position|控件在地图的位置|Object|是|控件相对地图位置|
|iconPath|显示的图标|String|是|项目目录下的图片路径，支持相对路径写法，以'/'开头则表示相对项目根目录；也支持临时路径|
|clickable|是否可点击|Boolean|否|默认不可点击|

**position**

|属性|说明|类型|必填|备注|
|:-|:-|:-|:-|:-|
|left|距离地图的左边界多远|Number|否|默认为0|
|top|距离地图的上边界多远|Number|否|默认为0|
|width|控件宽度|Number|否|默认为图片宽度|
|height|控件高度|Number|否|默认为图片高度|

> 地图组件的经纬度必填，如果不填经纬度则默认值是北京的经纬度。

**示例** [查看示例](https://hellouniapp.dcloud.net.cn/pages/component/map/map)

::: preview https://hellouniapp.dcloud.net.cn/pages/component/map/map
> Template
```vue
<template>
	<view>
		<view class="page-body">
			<view class="page-section page-section-gap">
				<map style="width: 100%; height: 300px;" :latitude="latitude" :longitude="longitude" :markers="covers">
				</map>
			</view>
		</view>
	</view>
</template>
```
> Script
```vue
<script>
export default {
	data() {
		return {
			id:0, // 使用 marker点击事件 需要填写id
			title: 'map',
			latitude: 39.909,
			longitude: 116.39742,
			covers: [{
				latitude: 39.909,
				longitude: 116.39742,
				iconPath: '../../../static/location.png'
			}, {
				latitude: 39.90,
				longitude: 116.39,
				iconPath: '../../../static/location.png'
			}]
		}
	},
	methods: {

	}
}
</script>
```
:::

#### App平台地图服务商差异

##### Map 地图组件

|属性|说明|高德是否支持|google地图是否支持|
|:-|:-|:-|:-|
|subkey|个性化地图使用的key|不支持|不支持|
|show-scale|显示比例尺|已支持	|不支持|
|enable-poi|是否展示 POI 点|已支持|不支持|
|labeltap|点击label时触发|已支持|Android支持iOS不支持|
|poitap|点击地图poi点时触发|已支持|Android不支持 iOS支持|

##### marker

|属性|说明|高德是否支持|google地图是否支持|
|:-|:-|:-|:-|
|label|为标记点旁边增加标签|已支持|Android支持 iOS不支持|

##### marker 上的气泡 callout

|属性|说明|高德是否支持|google地图是否支持|
|:-|:-|:-|:-|
|display|'BYCLICK':点击显示; 'ALWAYS':常显|已支持|Android支持iOS只支持 'BYCLICK'|

##### marker 上的自定义气泡 customCallout

|属性|说明|高德是否支持|google地图是否支持|
|:-|:-|:-|:-|
|display|'BYCLICK':点击显示; 'ALWAYS':常显|已支持|Android支持iOS只支持 'BYCLICK'|

##### polyline

|属性|说明|高德是否支持|google地图是否支持|
|:-|:-|:-|:-|
|colorList|彩虹线|已支持|Android不支持 iOS支持|
|dottedLine|是否虚线|已支持|Android已支持 iOS不支持|
|arrowLine|带箭头的线|已支持|Android不支持 iOS支持|
|arrowIconPath|更换箭头图标|已支持|Android不支持 iOS支持|

map 组件相关操作的 JS API：[uni.createMapContext](api/location/map?id=createmapcontext)
nvue map 更换箭头图标格式参考: [https://ask.dcloud.net.cn/article/37901](https://ask.dcloud.net.cn/article/37901)

**注意事项**

- 小程序和app-vue中，`<map>` 组件是由引擎创建的原生组件，它的层级是最高的，不能通过 z-index 控制层级。在`<map>`上绘制内容，可使用组件自带的marker、controls等属性，也可以使用`<cover-view>`组件。App端还可以使用plus.nativeObj.view 或 subNVue 绘制原生内容，[参考](/component/native-component)。另外App端nvue文件不存在层级问题。从微信基础库2.8.3开始，支持map组件的同层渲染，不再有层级问题。
- App端nvue文件的map和小程序拉齐度更高。vue里的map则与plus.map功能一致，和小程序的地图略有差异。**App端使用map推荐使用nvue。**
- App端使用到本地图像的话，打包前需要设置资源为释放模式，在manifest文件内app-plus新增runmode节点，设置值为liberate。
- 在涉及层级问题的小程序中和app-vue中，请勿在 scroll-view、swiper、picker-view、movable-view 中使用 `<map>` 组件。
- 小程序和 app-vue 中，css 动画对 `<map>` 组件无效。
- map 组件使用的经纬度是国测局坐标，调用 uni.getLocation 接口需要指定 type 为 gcj02。
- `<map>` 组件在不同平台的底层引擎是不同的：微信小程序为腾讯地图；H5为腾讯地图或谷歌地图；App、支付宝（中国大陆地区版本）小程序为高德地图；百度小程序、快应用为百度地图。app-vue也可以使用百度地图，在manifest中配置，打包后生效，但app-nvue只支持高德地图。另外选择地图、查看地图位置的API也仅支持高德地图。App端如无特殊必要，建议使用高德地图。
- map 组件默认的api是参考微信小程序的，如需要使用plus.map，可以通过`$getAppMap`获取原生地图对象，[详见](/api/location/map)。注意nvue的map组件不是plus.map对象，无法使用`$getAppMap`
- H5 端获取定位信息，需要部署在 **https** 服务上，本地预览（localhost）仍然可以使用 http 协议。
- 无GPS模块或GPS无信号的 PC 设备使用 Chrome 浏览器的时候，位置信息是连接谷歌服务器获取的，国内用户可能获取位置信息失败。
- App 端使用地图组件需要**向高德或百度等三方服务商申请SDK资质，获取AppKey，打包时需要在manifest文件中勾选相应模块，在SDK配置中填写Appkey。注意申请包名和打包时的包名需匹配一致，证书信息匹配**。在manifest可视化界面有详细申请指南。
- H5 端使用地图和定位相关，需要在 [manifest.json](/collocation/manifest?id=h5sdkconfig) 内配置腾讯或谷歌等三方地图服务商申请的秘钥（key）。
- ios nvue Color 不支持 ARGB 十六进制，使用 rgba(r,g,b,a) 代替

##### FAQ

Q：应用中使用了 `<map>` 组件，打包为App时，提示缺少权限模块怎么办？
A：App端原生地图，依赖第三方的 SDK，因此打包移动应用时，需要在manifest中勾选相关的权限并填写 key 信息。详见：[https://ask.dcloud.net.cn/article/29](https://ask.dcloud.net.cn/article/29)

Q：国外应用想使用谷歌地图/google地图怎么办？
A: App 3.4+ 已支持 Google 地图， App 3.4 以下版本使用下面的方案
 1. 可以在web-view下调用谷歌的web地图
 2. 可以写一个原生插件封装谷歌原生地图，具体参考uni-app插件市场的原生插件开发教程。插件市场已有三方写好的[地图插件](https://ext.dcloud.net.cn/search?q=%E8%B0%B7%E6%AD%8C%E5%9C%B0%E5%9B%BE)。

##### 三方定位和地图服务收费说明

* 使用三方定位或者地图服务，需向服务提供商（如：高德地图、百度地图、腾讯地图、谷歌地图）申请授权或缴纳费用。
* 申请三方定位或地图服务秘钥时请详细阅读授权和收费说明，并关注服务条款后期的变更。
* 以下是关于部分地图服务商授权和收费的简介，具体以地图服务商官网公布的最新信息为准。
  * 高德地图：商用授权收费，超出配额收费。
  * 百度地图：商用授权收费，超出配额收费。
  * 腾讯地图：商用授权收费，超出配额收费。
  * 谷歌地图：按量收费，每月赠送一定金额。
  * 小程序平台内置地图：无需关心地图服务商，免费使用，无配额限制。

### scroll-view

可滚动视图区域。用于区域滚动。

需注意在webview渲染的页面中，区域滚动的性能不及页面滚动。

#### 属性说明

|属性名|类型|默认值|说明|平台差异说明|
|:-|:-|:-|:-|:-|
|scroll-x|Boolean|false|允许横向滚动||
|scroll-y|Boolean|false|允许纵向滚动||
|upper-threshold|Number/String|50|距顶部/左边多远时（单位px），触发 scrolltoupper 事件||
|lower-threshold|Number/String|50|距底部/右边多远时（单位px），触发 scrolltolower 事件||
|scroll-top|Number/String||设置竖向滚动条位置||
|scroll-left|Number/String||设置横向滚动条位置||
|scroll-into-view|String||值应为某子元素id（id不能以数字开头）。设置哪个方向可滚动，则在哪个方向滚动到该元素||
|scroll-with-animation|Boolean|false|在设置滚动条位置时使用动画过渡||
|enable-back-to-top|Boolean|false|iOS点击顶部状态栏、安卓双击标题栏时，滚动条返回顶部，只支持竖向|app-nvue，微信小程序|
|show-scrollbar|Boolean|false|控制是否出现滚动条| App-nvue 2.1.5+ |
|refresher-enabled|Boolean|false|开启自定义下拉刷新|H5、app-vue 2.5.12+,微信小程序基础库2.10.1+|
|refresher-threshold|Number|45|设置自定义下拉刷新阈值|H5、app-vue 2.5.12+,微信小程序基础库2.10.1+|
|refresher-default-style|String|"black"|设置自定义下拉刷新默认样式，支持设置 black，white，none，none 表示不使用默认样式|H5、app-vue 2.5.12+,微信小程序基础库2.10.1+|
|refresher-background|String|"#FFF" |设置自定义下拉刷新区域背景颜色|H5、app-vue 2.5.12+,微信小程序基础库2.10.1+|
|refresher-triggered|Boolean|false|设置当前下拉刷新状态，true 表示下拉刷新已经被触发，false 表示下拉刷新未被触发|H5、app-vue 2.5.12+,微信小程序基础库2.10.1+|
|enable-flex|Boolean|false|启用 flexbox 布局。开启后，当前节点声明了 display: flex 就会成为 flex container，并作用于其孩子节点。|微信小程序 2.7.3|
|scroll-anchoring|Boolean|false|开启 scroll anchoring 特性，即控制滚动位置不随内容变化而抖动，仅在 iOS 下生效，安卓下可参考 CSS overflow-anchor 属性。|微信小程序 2.8.2|
|@scrolltoupper|EventHandle||滚动到顶部/左边，会触发 scrolltoupper 事件||
|@scrolltolower|EventHandle||滚动到底部/右边，会触发 scrolltolower 事件||
|@scroll|EventHandle||滚动时触发，event.detail = {scrollLeft, scrollTop, scrollHeight, scrollWidth, deltaX, deltaY}|&nbsp;|
|@refresherpulling|EventHandle||自定义下拉刷新控件被下拉|H5、app-vue 2.5.12+,微信小程序基础库2.10.1+|
|@refresherrefresh|EventHandle||自定义下拉刷新被触发|H5、app-vue 2.5.12+,微信小程序基础库2.10.1+|
|@refresherrestore|EventHandle||自定义下拉刷新被复位|H5、app-vue 2.5.12+,微信小程序基础库2.10.1+|
|@refresherabort|EventHandle||自定义下拉刷新被中止|H5、app-vue 2.5.12+,微信小程序基础库2.10.1+|

使用竖向滚动时，需要给 ``<scroll-view>`` 一个固定高度，通过 css 设置 height；使用横向滚动时，需要给``<scroll-view>``添加``white-space: nowrap;``样式。

**示例** [查看演示](https://hellouniapp.dcloud.net.cn/pages/component/scroll-view/scroll-view)

以下示例代码，来自于[hello uni-app项目](https://github.com/dcloudio/hello-uniapp)，推荐使用HBuilderX，新建uni-app项目，选择hello uni-app模板，可直接体验完整示例。

::: preview https://hellouniapp.dcloud.net.cn/pages/component/scroll-view/scroll-view
> Template
```vue
<!-- 本示例未包含完整css，获取外链css请参考上文，在hello uni-app项目中查看 -->
<template>
	<view>
		<view class="uni-padding-wrap uni-common-mt">
			<view class="uni-title uni-common-mt">
				Vertical Scroll
				<text>\n纵向滚动</text>
			</view>
			<view>
				<scroll-view :scroll-top="scrollTop" scroll-y="true" class="scroll-Y" @scrolltoupper="upper"
					@scrolltolower="lower" @scroll="scroll">
					<view id="demo1" class="scroll-view-item uni-bg-red">A</view>
					<view id="demo2" class="scroll-view-item uni-bg-green">B</view>
					<view id="demo3" class="scroll-view-item uni-bg-blue">C</view>
				</scroll-view>
			</view>
			<view @tap="goTop" class="uni-link uni-center uni-common-mt">
				点击这里返回顶部
			</view>
		
			<view class="uni-title uni-common-mt">
				Horizontal Scroll
				<text>\n横向滚动</text>
			</view>
			<view>
				<scroll-view class="scroll-view_H" scroll-x="true" @scroll="scroll" scroll-left="120">
					<view id="demo1" class="scroll-view-item_H uni-bg-red">A</view>
					<view id="demo2" class="scroll-view-item_H uni-bg-green">B</view>
					<view id="demo3" class="scroll-view-item_H uni-bg-blue">C</view>
				</scroll-view>
			</view>
			<view class="uni-common-pb"></view>
		</view>
	</view>
</template>
```
> Script
```vue
<script>
	export default {
		data() {
			return {
				scrollTop: 0,
				old: {
					scrollTop: 0
				}
			}
		},
		methods: {
			upper: function(e) {
				console.log(e)
			},
			lower: function(e) {
				console.log(e)
			},
			scroll: function(e) {
				console.log(e)
				this.old.scrollTop = e.detail.scrollTop
			},
			goTop: function(e) {
				// 解决view层不同步的问题
				this.scrollTop = this.old.scrollTop
				this.$nextTick(function() {
					this.scrollTop = 0
				});
				uni.showToast({
					icon: "none",
					title: "纵向滚动 scrollTop 值已被修改为 0"
				})
			}
		}
	}
</script>
```
> Style
```vue
<style>
	.scroll-Y {
		height: 300rpx;
	}
	.scroll-view_H {
		white-space: nowrap;
		width: 100%;
	}
	.scroll-view-item {
		height: 300rpx;
		line-height: 300rpx;
		text-align: center;
		font-size: 36rpx;
	}
	.scroll-view-item_H {
		display: inline-block;
		width: 100%;
		height: 300rpx;
		line-height: 300rpx;
		text-align: center;
		font-size: 36rpx;
	}
</style>
```

:::

#### 自定义下拉刷新

注意自定义下拉刷新的性能不及pages.json中配置的原生下拉刷新。

::: preview
> Template
```vue
<template>
    <view>
        <scroll-view style="height: 300px;" scroll-y="true" refresher-enabled="true" :refresher-triggered="triggered"
            :refresher-threshold="100" refresher-background="lightgreen" @refresherpulling="onPulling"
            @refresherrefresh="onRefresh" @refresherrestore="onRestore" @refresherabort="onAbort"></scroll-view>
    </view>
</template>
```

> Script
```vue
<script>
    export default {
        data() {
            return {
                triggered: false
            }
        },
        onLoad() {
            this._freshing = false;
            setTimeout(() => {
                this.triggered = true;
            }, 1000)
        },
        methods: {
            onPulling(e) {
                console.log("onpulling", e);
            },
            onRefresh() {
                if (this._freshing) return;
                this._freshing = true;
                setTimeout(() => {
                    this.triggered = false;
                    this._freshing = false;
                }, 3000)
            },
            onRestore() {
                this.triggered = 'restore'; // 需要重置
                console.log("onRestore");
            },
            onAbort() {
                console.log("onAbort");
            }
        }
    }
</script>

```
:::

#### Tips

- APP-vue和小程序中，请勿在 scroll-view 中使用 map、video 等原生组件。小程序中 scroll-view 中也不要使用 canvas、textarea 原生组件。更新：微信基础库2.4.4起支持了原生组件在 scroll-view、swiper、movable-view 中的使用。app-nvue无此限制。
- scroll-view 不适合放长列表，有性能问题。长列表滚动和下拉刷新，应该使用原生导航栏搭配页面级的滚动和下拉刷新实现。包括在app-nvue页面，长列表应该使用list而不是scroll-view。
- scroll-into-view 的优先级高于 scroll-top。
- scroll-view是区域滚动，不会触发页面滚动，无法触发pages.json配置的下拉刷新、页面触底onReachBottomDistance、titleNView的transparent透明渐变。
- 若要使用下拉刷新，建议使用页面的滚动，而不是 scroll-view 。插件市场有前端模拟的基于scroll-view的下拉刷新，但性能不佳。如必需使用前端下拉刷新，推荐使用基于wxs的下拉刷新，性能会比基于js监听方式更高。
- 如果遇到scroll-top、scroll-left、refresher-triggered属性设置不生效的问题参考：[组件属性设置不生效解决办法](/tutorial/vue-api?id=componentsolutions)
- scroll-view的滚动条设置，可通过css的-webkit-scrollbar自定义，包括隐藏滚动条。（app-nvue无此css）

### rich-text

富文本。

支持默认事件，包括：click、touchstart、touchmove、touchcancel、touchend、longpress。

#### 属性说明

|属性名|类型|默认值|说明|平台兼容|
|:-|:-|:-|:-|:-|
|nodes|Array / String|[]|节点列表 / HTML String||
|space|string||显示连续空格|App、H5、微信基础库2.4.1+[详见](https://developers.weixin.qq.com/miniprogram/dev/component/rich-text.html)、QQ小程序、字节小程序、快手小程序[详见](https://mp.kuaishou.com/docs/develop/components/basicComponents/richText.html)|
|selectable|Boolean|true|富文本是否可以长按选中，可用于复制，粘贴等场景|百度小程序（仅真机支持，基础库 3.150.1 以下版本默认为 false）|
|image-menu-prevent|Boolean|false|阻止长按图片时弹起默认菜单（将该属性设置为image-menu-prevent或image-menu-prevent="true"），只在初始化时有效，不能动态变更；若不想阻止弹起默认菜单，则不需要设置此属性|百度小程序|
|preview|Boolean||富文本中的图片是否可点击预览。在不设置的情况下，若 rich-text 未监听点击事件，则默认开启。未显示设置 preview 时会进行点击默认预览判断，建议显示设置 preview|百度小程序|
|@itemclick|EventHandle||拦截点击事件（只支持 `a`、`img`标签），返回当前node信息 `event.detail={node}`|H5 (3.2.13+)、App-Vue (3.2.13+)|

#### nodes

nodes 值为 HTML String 时，在组件内部将自动解析为节点列表，推荐直接使用 Array 类型避免内部转换导致的性能下降。App-nvue 和支付宝小程序不支持 HTML String 方式，仅支持直接使用节点列表即 Array 类型，如要使用 HTML String，则需自己将 HTML String 转化为 nodes 数组，可使用 [html-parser](https://github.com/dcloudio/hello-uniapp/blob/master/common/html-parser.js) 转换。

节点列表内的节点现支持两种类型，通过 type 来区分，分别是元素节点和文本节点，默认是元素节点，在富文本区域里显示的 HTML 节点。

**元素节点：type = node**

|属性|说明|类型|必填|备注|
|:-|:-|:-|:-|:-|
|name|标签名|String|是|支持部分受信任的 HTML 节点|
|attrs|属性|Object|否|支持部分受信任的属性，遵循 Pascal 命名法|
|children|子节点列表|Array|否|结构和 nodes 一致|

**文本节点：type = text**

|属性|说明|类型|必填|备注|
|:-|:-|:-|:-|:-|
|text|文本|String|是|支持 entities|

#### 受信任的HTML节点及属性

全局支持 class 和 style 属性，**不支持 id 属性**。

|节点|属性|
|:-|:-|
|a||
|abbr||
|b||
|blockquote||
|br||
|code||
|col|span，width|
|colgroup|span，width|
|dd||
|del||
|div||
|dl||
|dt||
|em||
|fieldset||
|h1||
|h2||
|h3||
|h4||
|h5||
|h6||
|hr||
|i||
|img|alt，src，height，width|
|ins||
|label||
|legend||
|li||
|ol|start，type|
|p||
|q||
|span||
|strong||
|sub||
|sup||
|table|width|
|tbody||
|td|colspan，height，rowspan，width|
|tfoot||
|th|colspan，height，rowspan，width|
|thead||
|tr||
|ul|&nbsp;|

**示例** [查看演示](https://hellouniapp.dcloud.net.cn/pages/component/rich-text/rich-text)

以下示例代码，来自于[hello uni-app项目](https://github.com/dcloudio/hello-uniapp)，推荐使用HBuilderX，新建uni-app项目，选择hello uni-app模板，可直接体验完整示例。

::: preview https://hellouniapp.dcloud.net.cn/pages/component/rich-text/rich-text
> Template
```vue
<!-- 本示例未包含完整css，获取外链css请参考上文，在hello uni-app项目中查看 -->
<template>
	<view class="content">
		<page-head :title="title"></page-head>
		<view class="uni-padding-wrap">
			<view class="uni-title uni-common-mt">
				数组类型
				<text>\nnodes属性为Array</text>
			</view>
			<view class="uni-common-mt" style="background:#FFF; padding:20rpx;">
				<rich-text :nodes="nodes"></rich-text>
			</view>
			<view class="uni-title uni-common-mt">
				字符串类型
				<text>\nnodes属性为String</text>
			</view>
			<view class="uni-common-mt" style="background:#FFF; padding:20rpx;">
				<rich-text :nodes="strings"></rich-text>
			</view>
		</view>
	</view>
</template>
```
> Script
```vue
<script>
export default {
    data() {
        return {
            nodes: [{
                name: 'div',
                attrs: {
                    class: 'div-class',
                    style: 'line-height: 60px; color: red; text-align:center;'
                },
                children: [{
                    type: 'text',
                    text: 'Hello&nbsp;uni-app!'
                }]
            }],
            strings: '<div style="text-align:center;"><img src="https://bjetxgzv.cdn.bspapp.com/VKCEYUGU-uni-app-doc/d8590190-4f28-11eb-b680-7980c8a877b8.png"/></div>'
        }
    }
}
</script>
```
:::


**Tips**

- nodes 不推荐使用 String 类型，性能会有所下降。
- rich-text 组件内屏蔽所有节点的事件。所以如果内容中有链接、图片需要点击，则不能使用rich-text，此时可在[uni-app插件市场](https://ext.dcloud.net.cn/search?q=parse)搜索parse插件使用。app-nvue的rich-text组件支持链接图片点击。
- attrs 属性不支持 id ，支持 class 。
- name 属性大小写不敏感。
- 如果使用了不受信任的HTML节点，该节点及其所有子节点将会被移除。
- 非 App 平台 img 标签仅支持网络图片。
- 如果在自定义组件中使用 rich-text 组件，那么仅自定义组件的 css 样式对 rich-text 中的 class 生效。
- 使用 `itemclick` 时，如果发生节点嵌套，外层 `a标签` 优先级高。


# CSS

```css
display: flex; /* 使用flex布局 */

flex-direction: column; /* 纵轴显示 */

flex-wrap: wrap; /* 换行显示 */

/* （横轴）方向上的对齐方式 */
justify-content: space-between; /* space-between：均匀排列每个元素，首个元素放置于起点，末尾元素放置于终点 */

/* padding和border的值就不会在影响元素的宽高，相当于把padding和border的值都算在content里 */
box-sizing: border-box; /* 不会把盒子撑大 */

/* 设置第二个元素 */
text:nth-child(2) {
	color: #ccc;
	font-size: 28rpx;
}

/* 水平居中 */
display: block; /* 块元素 */
margin: 0 auto;

/* 删除线 */
text-decoration: line-through;

letter-spacing: 20px; /* 文字间隔 */

// ⽗级元素内部有⼦元素，如果给⼦元素添加margin-top样式，那么⽗级元素也会跟着下来，造成`外边距塌陷`
// 给⽗级元素添加overflow:hidden，就可以解决
overflow: hidden;
```