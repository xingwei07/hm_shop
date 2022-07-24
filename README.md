# uni-app 基础教程

## uni-app的基本使用

课程介绍：

基础部分：

+ 环境搭建
+ 页面外观配置
+ 数据绑定
+ uni-app的生命周期
+ 组件的使用
+ uni-app中样式学习
+ 在uni-app中使用字体图标和开启scss
+ 条件注释跨端兼容
+ uni中的事件
+ 导航跳转
+ 组件创建和通讯，及组件的生命周期
+ uni-app中使用uni-ui库

项目：黑马商城项目

### uni-app介绍 

[官方网页](https://uniapp.dcloud.io/resource)

`uni-app` 是一个使用 [Vue.js](https://vuejs.org/) 开发所有前端应用的框架，开发者编写一套代码，可发布到iOS、Android、H5、以及各种小程序（微信/支付宝/百度/头条/QQ/钉钉）等多个平台。

即使不跨端，`uni-app`同时也是更好的小程序开发框架。

具有vue和微信小程序的开发经验，可快速上手uni-app

为什么要去学习uni-app？

相对开发者来说，减少了学习成本，因为只学会uni-app之后，即可开发出iOS、Android、H5、以及各种小程序的应用，不需要再去学习开发其他应用的框架，相对公司而言，也大大减少了开发成本。

### 环境搭建

安装编辑器HbuilderX  [下载地址](https://www.dcloud.io/hbuilderx.html)

HBuilderX是通用的前端开发工具，但为`uni-app`做了特别强化。

下载App开发版，可开箱即用

安装微信开发者工具 [下载地址](https://developers.weixin.qq.com/miniprogram/dev/devtools/download.html)

### 利用HbuilderX初始化项目

+ 点击HbuilderX菜单栏文件>项目>新建

+ 选择uni-app,填写项目名称，项目创建的目录

  ![](./images/create.jpg)


### 运行项目

在菜单栏中点击运行，运行到浏览器，选择浏览器即可运行

在微信开发者工具里运行：进入hello-uniapp项目，点击工具栏的运行 -> 运行到小程序模拟器 -> 微信开发者工具，即可在微信开发者工具里面体验uni-app

在微信开发者工具里运行：进入hello-uniapp项目，点击工具栏的运行 -> 运行到手机或模拟器 -> 选择调式的手机

**注意：**

+ 如果是第一次使用，需要先配置小程序ide的相关路径，才能运行成功
+ 微信开发者工具在设置中安全设置，服务端口开启


### 介绍项目目录和文件作用

`pages.json` 文件用来对 uni-app 进行全局配置，决定页面文件的路径、窗口样式、原生的导航栏、底部的原生tabbar 等

`manifest.json` 文件是应用的配置文件，用于指定应用的名称、图标、权限等。

`App.vue`是我们的跟组件，所有页面都是在`App.vue`下进行切换的，是页面入口文件，可以调用应用的生命周期函数。

`main.js`是我们的项目入口文件，主要作用是初始化`vue`实例并使用需要的插件。

`uni.scss`文件的用途是为了方便整体控制应用的风格。比如按钮颜色、边框风格，`uni.scss`文件里预置了一批scss变量预置。

```unpackage``` 就是打包目录，在这里有各个平台的打包文件

```pages``` 所有的页面存放目录

```static``` 静态资源目录，例如图片等

```components``` 组件存放目录

为了实现多端兼容，综合考虑编译速度、运行性能等因素，`uni-app` 约定了如下开发规范：

- 页面文件遵循 [Vue 单文件组件 (SFC) 规范](https://vue-loader.vuejs.org/zh/spec.html)
- 组件标签靠近小程序规范，详见[uni-app 组件规范](https://uniapp.dcloud.io/component/README)
- 接口能力（JS API）靠近微信小程序规范，但需将前缀 `wx` 替换为 `uni`，详见[uni-app接口规范](https://uniapp.dcloud.io/api/README)
- 数据绑定及事件处理同 `Vue.js` 规范，同时补充了App及页面的生命周期
- 为兼容多端运行，建议使用flex布局进行开发

## 全局配置和页面配置

### 通过globalStyle进行全局配置

用于设置应用的状态栏、导航条、标题、窗口背景色等。[详细文档](https://uniapp.dcloud.io/collocation/pages?id=globalstyle)

| 属性                           | 类型       | 默认值     | 描述                                       |
| ---------------------------- | -------- | ------- | ---------------------------------------- |
| navigationBarBackgroundColor | HexColor | #F7F7F7 | 导航栏背景颜色（同状态栏背景色）                         |
| navigationBarTextStyle       | String   | white   | 导航栏标题颜色及状态栏前景颜色，仅支持 black/white          |
| navigationBarTitleText       | String   |         | 导航栏标题文字内容                                |
| backgroundColor              | HexColor | #ffffff | 窗口的背景色                                   |
| backgroundTextStyle          | String   | dark    | 下拉 loading 的样式，仅支持 dark / light          |
| enablePullDownRefresh        | Boolean  | false   | 是否开启下拉刷新，详见[页面生命周期](https://uniapp.dcloud.io/use?id=%e9%a1%b5%e9%9d%a2%e7%94%9f%e5%91%bd%e5%91%a8%e6%9c%9f)。 |
| onReachBottomDistance        | Number   | 50      | 页面上拉触底事件触发时距页面底部距离，单位只支持px，详见[页面生命周期](https://uniapp.dcloud.io/use?id=%e9%a1%b5%e9%9d%a2%e7%94%9f%e5%91%bd%e5%91%a8%e6%9c%9f) |

### 创建新的message页面

右键pages新建message目录，在message目录下右键新建.vue文件,并选择基本模板

```html
<template>
	<view>
		这是信息页面
	</view>
</template>

<script>
</script>

<style>
</style>
```

### 通过pages来配置页面

| 属性    | 类型     | 默认值  | 描述                                       |
| ----- | ------ | ---- | ---------------------------------------- |
| path  | String |      | 配置页面路径                                   |
| style | Object |      | 配置页面窗口表现，配置项参考 [pageStyle](https://uniapp.dcloud.io/collocation/pages?id=style) |

pages数组数组中第一项表示应用启动页

```html
"pages": [ 、
		{
			"path":"pages/message/message"
		},
		{
			"path": "pages/index/index",
			"style": {
				"navigationBarTitleText": "uni-app"
			}
		}
	]
```

通过style修改页面的标题和导航栏背景色，并且设置h5下拉刷新的特有样式

```js
"pages": [ //pages数组中第一项表示应用启动页，参考：https://uniapp.dcloud.io/collocation/pages
    {
        "path":"pages/message/message",
        "style": {
            "navigationBarBackgroundColor": "#007AFF",
            "navigationBarTextStyle": "white",
            "enablePullDownRefresh": true,
            "disableScroll": true,
            "h5": {
                "pullToRefresh": {
                    "color": "#007AFF"
                }
            }
        }
    }
]
```
### 配置tabbar

如果应用是一个多 tab 应用，可以通过 tabBar 配置项指定 tab 栏的表现，以及 tab 切换时显示的对应页。

**Tips**

- 当设置 position 为 top 时，将不会显示 icon
- tabBar 中的 list 是一个数组，只能配置最少2个、最多5个 tab，tab 按数组的顺序排序。

**属性说明：**

| 属性              | 类型       | 必填   | 默认值    | 描述                                 | 平台差异说明             |
| --------------- | -------- | ---- | ------ | ---------------------------------- | ------------------ |
| color           | HexColor | 是    |        | tab 上的文字默认颜色                       |                    |
| selectedColor   | HexColor | 是    |        | tab 上的文字选中时的颜色                     |                    |
| backgroundColor | HexColor | 是    |        | tab 的背景色                           |                    |
| borderStyle     | String   | 否    | black  | tabbar 上边框的颜色，仅支持 black/white      | App 2.3.4+ 支持其他颜色值 |
| list            | Array    | 是    |        | tab 的列表，详见 list 属性说明，最少2个、最多5个 tab |                    |
| position        | String   | 否    | bottom | 可选值 bottom、top                     | top 值仅微信小程序支持      |

其中 list 接收一个数组，数组中的每个项都是一个对象，其属性值如下：

| 属性               | 类型     | 必填   | 说明                                       |
| ---------------- | ------ | ---- | ---------------------------------------- |
| pagePath         | String | 是    | 页面路径，必须在 pages 中先定义                      |
| text             | String | 是    | tab 上按钮文字，在 5+APP 和 H5 平台为非必填。例如中间可放一个没有文字的+号图标 |
| iconPath         | String | 否    | 图片路径，icon 大小限制为40kb，建议尺寸为 81px * 81px，当 postion 为 top 时，此参数无效，不支持网络图片，不支持字体图标 |
| selectedIconPath | String | 否    | 选中时的图片路径，icon 大小限制为40kb，建议尺寸为 81px * 81px ，当 postion 为 top 时，此参数无效 |

案例代码：

```js
"tabBar": {
    "list": [
        {
            "text": "首页",
            "pagePath":"pages/index/index",
            "iconPath":"static/tabs/home.png",
            "selectedIconPath":"static/tabs/home-active.png"
        },
        {
            "text": "信息",
            "pagePath":"pages/message/message",
            "iconPath":"static/tabs/message.png",
            "selectedIconPath":"static/tabs/message-active.png"
        },
        {
            "text": "我们",
            "pagePath":"pages/contact/contact",
            "iconPath":"static/tabs/contact.png",
            "selectedIconPath":"static/tabs/contact-active.png"
        }
    ]
}
```

### condition启动模式配置

启动模式配置，仅开发期间生效，用于模拟直达页面的场景，如：小程序转发后，用户点击所打开的页面。

**属性说明：**

| 属性      | 类型     | 是否必填 | 描述                 |
| ------- | ------ | ---- | ------------------ |
| current | Number | 是    | 当前激活的模式，list节点的索引值 |
| list    | Array  | 是    | 启动模式列表             |

**list说明：**

| 属性    | 类型     | 是否必填 | 描述                                       |
| ----- | ------ | ---- | ---------------------------------------- |
| name  | String | 是    | 启动模式名称                                   |
| path  | String | 是    | 启动页面路径                                   |
| query | String | 否    | 启动参数，可在页面的 [onLoad](https://uniapp.dcloud.io/use?id=%e9%a1%b5%e9%9d%a2%e7%94%9f%e5%91%bd%e5%91%a8%e6%9c%9f) 函数里获得 |

## 组件的基本使用

uni-app提供了丰富的基础组件给开发者，开发者可以像搭积木一样，组合各种组件拼接称自己的应用

uni-app中的组件，就像 `HTML` 中的 `div` 、`p`、`span` 等标签的作用一样，用于搭建页面的基础结构

### text文本组件的用法

#### 001 - text 组件的属性

|     属性     |   类型    |  默认值  |  必填  |                说明                |
| :--------: | :-----: | :---: | :--: | :------------------------------: |
| selectable | boolean | false |  否   |              文本是否可选              |
|   space    | string  |   .   |  否   | 显示连续空格，可选参数：`ensp`、`emsp`、`nbsp` |
|   decode   | boolean | false |  否   |               是否解码               |

- `text` 组件相当于行内标签、在同一行显示
- 除了文本节点以外的其他节点都无法长按选中

#### 002 - 代码案例

```html
<view>
  <!-- 长按文本是否可选 -->
  <text selectable='true'>来了老弟</text>
</view>

<view>
  <!-- 显示连续空格的方式 -->
  <view>
    <text space='ensp'>来了  老弟</text>
  </view>
  <view>
    <text space='emsp'>来了  老弟</text>
  </view>
  <view>
    <text space='nbsp'>来了  老弟</text>
  </view>
</view>

<view>
  <text>skyblue</text>
</view>

<view>
  <!-- 是否解码 -->
  <text decode='true'>&nbsp; &lt; &gt; &amp; &apos; &ensp; &emsp;</text>
</view>
```

### view视图容器组件的用法

> View 视图容器， 类似于 HTML 中的 div

#### 001 - 组件的属性

![](./images/2view.png)

#### 002 - 代码案例

```html
<view class="box2" hover-class="box2_active">
  <view class='box1' hover-class='active' hover-stop-propagation :hover-start-time="2000" :hover-stay-time='2000'>

  </view>
</view>
```

### button按钮组件的用法

#### 001 - 组件的属性

|   属性名    |   类型    |   默认值   |        说明         |
| :------: | :-----: | :-----: | :---------------: |
|   size   | String  | default |       按钮的大小       |
|   type   | String  | default |      按钮的样式类型      |
|  plain   | Boolean |  false  |   按钮是否镂空，背景色透明    |
| disabled | Boolean |  false  |       是否按钮        |
| loading  | Boolean |  false  | 名称是否带 loading t图标 |

- `button` 组件默认独占一行，设置 `size` 为 `mini` 时可以在一行显示多个

#### 002 - 案例代码

```html
<button size='mini' type='primary'>前端</button>

<button size='mini' type='default' disabled='true'>前端</button>

<button size='mini' type='warn' loading='true'>前端</button>
```

### image组件的使用

[image](https://uniapp.dcloud.io/component/image?id=image)

图片。

| 属性名  | 类型     | 默认值           | 说明         | 平台差异说明 |
| ---- | ------ | ------------- | ---------- | ------ |
| src  | String |               | 图片资源地址     |        |
| mode | String | 'scaleToFill' | 图片裁剪、缩放的模式 |        |

**Tips**

- `<image>` 组件默认宽度 300px、高度 225px；
- `src` 仅支持相对路径、绝对路径，支持 base64 码；
- 页面结构复杂，css样式太多的情况，使用 image 可能导致样式生效较慢，出现 “闪一下” 的情况，此时设置 `image{will-change: transform}` ,可优化此问题。

## uni-app中的样式

+ rpx 即响应式px，一种根据屏幕宽度自适应的动态单位。以750宽的屏幕为基准，750rpx恰好为屏幕宽度。屏幕变宽，rpx 实际显示效果会等比放大。

+ 使用`@import`语句可以导入外联样式表，`@import`后跟需要导入的外联样式表的相对路径，用`;`表示语句结束

+ 支持基本常用的选择器class、id、element等

+ 在 `uni-app` 中不能使用 `*` 选择器。

+ `page` 相当于 `body` 节点

+ 定义在 App.vue 中的样式为全局样式，作用于每一个页面。在 pages 目录下 的 vue 文件中定义的样式为局部样式，只作用在对应的页面，并会覆盖 App.vue 中相同的选择器。

+ `uni-app` 支持使用字体图标，使用方式与普通 `web` 项目相同，需要注意以下几点：

  - 字体文件小于 40kb，`uni-app` 会自动将其转化为 base64 格式；

  - 字体文件大于等于 40kb， 需开发者自己转换，否则使用将不生效；

  - 字体文件的引用路径推荐使用以 ~@ 开头的绝对路径。

    ```
     @font-face {
         font-family: test1-icon;
         src: url('~@/static/iconfont.ttf');
     }
    ```

+ 如何使用scss或者less

## uni-app中的数据绑定

在页面中需要定义数据，和我们之前的vue一摸一样，直接在data中定义数据即可

```js
export default {
  data () {
    return {
      msg: 'hello-uni'
    }
  }
}
```

### 插值表达式的使用

+ 利用插值表达式渲染基本数据

  ```html
  <view>{{msg}}</view>
  ```

+ 在插值表达式中使用三元运算

  ```html
  <view>{{ flag ? '我是真的':'我是假的' }}</view>
  ```

+ 基本运算

  ```html
  <view>{{1+1}}</view>
  ```


### v-bind动态绑定属性

在data中定义了一张图片，我们希望把这张图片渲染到页面上

```js
export default {
  data () {
    return {
      img: 'http://destiny001.gitee.io/image/monkey_02.jpg'
    }
  }
}
```

利用v-bind进行渲染

```html
<image v-bind:src="img"></image>
```

还可以缩写成:

```html
<image :src="img"></image>
```

### v-for的使用

data中定以一个数组，最终将数组渲染到页面上

```js
data () {
  return {
    arr: [
      { name: '刘能', age: 29 },
      { name: '赵四', age: 39 },
      { name: '宋小宝', age: 49 },
      { name: '小沈阳', age: 59 }
    ]
  }
}
```

利用v-for进行循环

```js
<view v-for="(item,i) in arr" :key="i">名字：{{item.name}}---年龄：{{item.age}}</view>
```

## uni中的事件

### 事件绑定

在uni中事件绑定和vue中是一样的，通过v-on进行事件的绑定，也可以简写为@

```html
<button @click="tapHandle">点我啊</button>
```

事件函数定义在methods中

```js
methods: {
  tapHandle () {
    console.log('真的点我了')
  }
}
```

### 事件传参

- 默认如果没有传递参数，事件函数第一个形参为事件对象

  ```
  // template
  <button @click="tapHandle">点我啊</button>
  // script
  methods: {
    tapHandle (e) {
      console.log(e)
    }
  }
  ```

- 如果给事件函数传递参数了，则对应的事件函数形参接收的则是传递过来的数据

  ```
  // template
  <button @click="tapHandle(1)">点我啊</button>
  // script
  methods: {
    tapHandle (num) {
      console.log(num)
    }
  }
  ```

- 如果获取事件对象也想传递参数

  ```
  // template
  <button @click="tapHandle(1,$event)">点我啊</button>
  // script
  methods: {
    tapHandle (num,e) {
      console.log(num,e)
    }
  }
  ```

## uni的生命周期

### 应用的生命周期

生命周期的概念：一个对象从创建、运行、销毁的整个过程被成为生命周期。

生命周期函数：在生命周期中每个阶段会伴随着每一个函数的触发，这些函数被称为生命周期函数

`uni-app` 支持如下应用生命周期函数：

| 函数名      | 说明                           |
| -------- | ---------------------------- |
| onLaunch | 当`uni-app` 初始化完成时触发（全局只触发一次） |
| onShow   | 当 `uni-app` 启动，或从后台进入前台显示    |
| onHide   | 当 `uni-app` 从前台进入后台          |
| onError  | 当 `uni-app` 报错时触发            |

### 页面的生命周期

`uni-app` 支持如下页面生命周期函数：

| 函数名      | 说明                                       | 平台差异说明 | 最低版本 |
| -------- | ---------------------------------------- | ------ | ---- |
| onLoad   | 监听页面加载，其参数为上个页面传递的数据，参数类型为Object（用于页面传参），参考[示例](https://uniapp.dcloud.io/api/router?id=navigateto) |        |      |
| onShow   | 监听页面显示。页面每次出现在屏幕上都触发，包括从下级页面点返回露出当前页面    |        |      |
| onReady  | 监听页面初次渲染完成。                              |        |      |
| onHide   | 监听页面隐藏                                   |        |      |
| onUnload | 监听页面卸载                                   |        |      |

## 下拉刷新

### 开启下拉刷新

在uni-app中有两种方式开启下拉刷新

+ 需要在 `pages.json` 里，找到的当前页面的pages节点，并在 `style` 选项中开启 `enablePullDownRefresh`
+ 通过调用uni.startPullDownRefresh方法来开启下拉刷新


#### 通过配置文件开启

创建list页面进行演示

```html
<template>
	<view>
		杭州学科
		<view v-for="(item,index) in arr" :key="index">
			{{item}}
		</view>
	</view>
</template>

<script>
	export default {
		data () {
			return {
				arr: ['前端','java','ui','大数据']
			}
		}
	}
</script>

<style>
</style>
```

通过pages.json文件中找到当前页面的pages节点，并在 `style` 选项中开启 `enablePullDownRefresh`

```js
{
  "path":"pages/list/list",
    "style":{
      "enablePullDownRefresh": true
    }
}
```

#### 通过API开启

[api文档](https://uniapp.dcloud.io/api/ui/pulldown)

```html
uni.startPullDownRefresh()
```

### 监听下拉刷新

通过onPullDownRefresh可以监听到下拉刷新的动作

```js
export default {
  data () {
    return {
      arr: ['前端','java','ui','大数据']
    }
  },
  methods: {
    startPull () {
      uni.startPullDownRefresh()
    }
  },
  onPullDownRefresh () {
    console.log('触发下拉刷新了')
  }
}
```

### 关闭下拉刷新

uni.stopPullDownRefresh()

停止当前页面下拉刷新。

案例演示

```html
<template>
	<view>
		<button type="primary" @click="startPull">开启下拉刷新</button>
		杭州学科
		<view v-for="(item,index) in arr" :key="index">
			{{item}}
		</view>
	</view>
</template>
<script>
	export default {
		data () {
			return {
				arr: ['前端','java','ui','大数据']
			}
		},
		methods: {
			startPull () {
				uni.startPullDownRefresh()
			}
		},
		
		onPullDownRefresh () {
			this.arr = []
			setTimeout(()=> {
				this.arr = ['前端','java','ui','大数据']
				uni.stopPullDownRefresh()
			}, 1000);
		}
	}
</script>
```

## 上拉加载

通过在pages.json文件中找到当前页面的pages节点下style中配置onReachBottomDistance可以设置距离底部开启加载的距离，默认为50px

通过onReachBottom监听到触底的行为

```js
<template>
	<view>
		<button type="primary" @click="startPull">开启下拉刷新</button>
		杭州学科
		<view v-for="(item,index) in arr" :key="index">
			{{item}}
		</view>
	</view>
</template>
<script>
	export default {
		data () {
			return {
				arr: ['前端','java','ui','大数据','前端','java','ui','大数据']
			}
		},
		onReachBottom () {
			console.log('触底了')
		}
	}
</script>

<style>
	view{
		height: 100px;
		line-height: 100px;
	}
</style>
```

## 网络请求

在uni中可以调用uni.request方法进行请求网络请求

需要注意的是：在小程序中网络相关的 API 在使用前需要配置域名白名单。

**uni.request**

- url：请求的接口地址
- data：请求的参数
- header：设置请求的Header
- method：GET
- timeout：超时时间
- dataType：默认json，如果设置的为json，会尝试对返回的数据做一次JSON.parse
- responseType：设置响应的数据类型。合法值：text、arraybuffer
- sslVerify：验证 ssl 证书。默认true
- withCredentials：跨域请求时是否携带凭证（cookies）。默认fslse
- success：收到开发者服务器成功返回的回调函数
- fail：接口调用失败的回调函数
- complete：接口调用结束的回调函数（调用成功、失败都会执行）

```js
uni.request({
	url: 'https://api-hmugo-web.itheima.net/api/public/v1/home/swiperdata',
	success(res) {
		console.log(res)
	}
})
```

**发送get请求**

```js
<template>
	<view>
		<button @click="sendGet">发送请求</button>
	</view>
</template>
<script>
	export default {
		methods: {
			sendGet () {
				uni.request({
					url: 'http://localhost:8082/api/getlunbo',
					success(res) {
						console.log(res)
					}
				})
			}
		}
	}
</script>
```

**发送post请求**

## 数据缓存

### **uni.setStorage**

[官方文档](https://uniapp.dcloud.io/api/storage/storage?id=setstorage)

> 将数据存储在本地缓存中指定的 key 中，会覆盖掉原来该 key 对应的内容，这是一个异步接口。

- key：本地缓存中的指定的 key。类型：String，必填
- data：需要存储的内容，只支持原生类型、及能够通过 JSON.stringify 序列化的对象。类型：Any，必填
- success：接口调用成功的回调函数类型：Function
- fail：接口调用失败的回调函数	类型：Function
- complete：接口调用结束的回调函数（调用成功、失败都会执行）类型：Function

```js
uni.setStorage({
	key: 'id',
	data: 80,
	success() {
		console.log("存储成功")
	}
})
```

### uni.setStorageSync

>  将 data 存储在本地缓存中指定的 key 中，会覆盖掉原来该 key 对应的内容，这是一个同步接口。

- key：本地缓存中的指定的 key。类型：String，必填
- data：需要存储的内容，只支持原生类型、及能够通过 JSON.stringify 序列化的对象。类型：Any，必填

```js
uni.setStorageSync('id', 100)
```

### uni.getStorage

>  从本地缓存中异步获取指定 key 对应的内容。

- key：本地缓存中的指定的 key。类型：String，必填
- success：接口调用成功的回调函数类型：Function，必填，res = {data: key对应的内容}
- fail：接口调用失败的回调函数	类型：Function
- complete：接口调用结束的回调函数（调用成功、失败都会执行）类型：Function

```js
uni.getStorage({
	key: 'id',
	success(res) {
		console.log("获取成功", res)
	}
})
```

### uni.getStorageSync

>  从本地缓存中同步获取指定 key 对应的内容。

- key：本地缓存中的指定的 key。类型：String，必填

```js
console.log(uni.getStorageSync('id'))
```

### uni.removeStorage

> 从本地缓存中异步移除指定 key。

- key：本地缓存中的指定的 key。类型：String，必填
- success：接口调用成功的回调函数类型：Function，必填
- fail：接口调用失败的回调函数	类型：Function
- complete：接口调用结束的回调函数（调用成功、失败都会执行）类型：Function

```js
uni.removeStorage({
	key: 'id',
	success() {
		console.log('移除成功')
	}
})
```

### uni.removeStorageSync

>  从本地缓存中同步移除指定 key。

- key：本地缓存中的指定的 key。类型：String，必填

```js
uni.removeStorageSync('id')
```

## 上传图片、预览图片

### 上传图片

> uni.chooseImage方法从本地相册选择图片或使用相机拍照。

#### 参数说明

- count：最多可以选择的图片张数，默认9。类型：Number
- sizeType：original 原图，compressed 压缩图，默认二者都有。类型：Array<String>
- extension：根据文件拓展名过滤，每一项都不能是空字符串。默认不过滤。类型：Array<String>
- sourceType：album 从相册选图，camera 使用相机，默认二者都有。如需直接开相机或直接选相册，请只使用一个选项。类型：Aray<String>
- crop：图像裁剪参数，设置后 sizeType 失效。类型：Object
- success：成功则返回图片的本地文件路径列表 tempFilePaths。类型：Function，必填
- fail：接口调用失败的回调函数。类型：Function
- complete：接口调用结束的回调函数（调用成功、失败都会执行）。类型：Function

#### crop 参数说明

- quality：取值范围为1-100，数值越小，质量越低（仅对jpg格式有效）。默认值为80。类型：Function
- width：裁剪的宽度，单位为px，用于计算裁剪宽高比。类型：Function，必填
- height：裁剪的高度，单位为px，用于计算裁剪宽高比。类型：Function，必填
- resize：是否将width和height作为裁剪保存图片真实的像素值。默认值为true。注：设置为false时在裁剪编辑界面显示图片的像素值，设置为true时不显示。类型：Function

> - count 值在 H5 平台的表现，基于浏览器本身的规范。目前测试的结果来看，只能限制单选/多选，并不能限制数量。并且，在实际的手机浏览器很少有能够支持多选的。
> - sourceType 值在 H5 平台根据浏览器的不同而表现不同，一般不可限制仅使用相册，部分浏览器也无法限制是否使用相机。
> - 可以通过用户授权API来判断用户是否给应用授予相册或摄像头的访问权限
> - App端如需选择非媒体文件，可在插件市场搜索文件选择 (opens new window)，其中Android端可以使用Native.js，无需原生插件，而iOS端需要原生插件。
> - 选择照片大多为了上传，uni ui封装了更完善的uni-file-picker组件 (opens new window)，文件选择、上传到uniCloud的免费存储和cdn中，一站式集成。强烈推荐使用。

**注：文件的临时路径，在应用本次启动期间可以正常使用，如需持久保存，需在主动调用 uni.saveFile，在应用下次启动时才能访问得到。**

#### success 返回参数说明

- tempFilePaths：图片的本地文件路径列表。类型：Array<String>
- tempFiles：图片的本地文件列表，每一项是一个 File 对象。类型：Array<Object>、Array<File>

#### File 对象结构如下

- path：本地文件路径。类型：String
- size：本地文件大小，单位：B。类型：Number
- name：包含扩展名的文件名称，仅H5支持。类型：String
- type：文件类型，仅H5支持。类型：String

```js
uni.chooseImage({
	count: 5,
	success: res => {
		console.log('上传成功', res)
		console.log(this) // Vue实例
	}
})

uni.chooseImage({
	count: 5,
	success(res) {
		console.log('上传成功', res)
		console.log(this) // 回调函数
	}
})
```

### 预览图片uni.previewImage(OBJECT)

#### 参数说明

- current：current 为当前显示图片的链接/索引值，不填或填写的值无效则为 urls 的第一张。类型：String/Number
- urls：需要预览的图片链接列表。类型：Array<String>
- indicator：图片指示器样式，可取值："default" - 底部圆点指示器； "number" - 顶部数字指示器； "none" - 不显示指示器。类型：String（App）
- loop：是否可循环预览，默认值为 false。类型：Boolean（App）
- longPressActions：长按图片显示操作菜单，如不填默认为保存相册。类型：Object（App 1.9.5+）
- success：成功则返回图片的本地文件路径列表 tempFilePaths。类型：Function，必填
- fail：接口调用失败的回调函数。类型：Function
- complete：接口调用结束的回调函数（调用成功、失败都会执行）。类型：Function

```js
uni.previewImage({
	current: index, // 当前显示图片的链接/索引值
	urls: this.imgArr, // 需要预览的图片链接列表
	loop: true, // 循环
	indicator: 'number' // 底部指示器
})
```

## 条件注释实现跨段兼容

> 条件编译是用特殊的注释作为标记，在编译时根据这些特殊的注释，将注释里面的代码编译到不同平台。

**写法：**以 #ifdef 加平台标识 开头，以 #endif 结尾。

- #ifdef：if defined 仅在某平台存在
- #ifndef：if not defined 除了某平台均存在

平台标识

| 值          | 平台                             | 参考文档                                     |
| ---------- | ------------------------------ | ---------------------------------------- |
| VUE3   | HBuilderX 3.2.0+                          | 详情(opens new window) |
| APP-PLUS   | 5+App                          | [HTML5+ 规范](http://www.html5plus.org/doc/) |
| APP-PLUS-NVUE或APP-NVUE   | App nvue                          |  |
| H5         | H5                             |                                          |
| MP-WEIXIN  | 微信小程序                          | [微信小程序](https://developers.weixin.qq.com/miniprogram/dev/api/) |
| MP-ALIPAY  | 支付宝小程序                         | [支付宝小程序](https://docs.alipay.com/mini/developer/getting-started) |
| MP-BAIDU   | 百度小程序                          | [百度小程序](https://smartprogram.baidu.com/docs/develop/tutorial/codedir/) |
| MP-TOUTIAO | 头条小程序                          | [头条小程序](https://developer.toutiao.com/dev/cn/mini-app/develop/framework/basic-reference/introduction) |
| MP-LARK   | 飞书小程序                          |  |
| MP-QQ      | QQ小程序                          | （目前仅cli版支持） |
| MP-KUAISHOU   | 快手小程序                          |  |
| MP-JD   | 京东小程序                          |  |
| MP-360   | 360小程序                          |  |
| QUICKAPP-WEBVIEW | 快应用通用(包含联盟、华为) |  |
| QUICKAPP-WEBVIEW-UNION | 快应用联盟 |  |
| QUICKAPP-WEBVIEW-HUAWEI | 快应用华为 |  |

### 组件的条件注释

代码演示

```html
<!-- #ifdef H5 -->
<view>
  h5页面会显示
</view>
<!-- #endif -->
<!-- #ifdef MP-WEIXIN -->
<view>
  微信小程序会显示
</view>
<!-- #endif -->
<!-- #ifdef APP-PLUS -->
<view>
  app会显示
</view>
<!-- #endif -->
```

### api的条件注释

代码演示

```js
onLoad () {
  //#ifdef MP-WEIXIN
  console.log('微信小程序')
  //#endif
  //#ifdef H5
  console.log('h5页面')
  //#endif
}
```

### 样式的条件注释

代码演示

```css
/* #ifdef H5 */
view{
  height: 100px;
  line-height: 100px;
  background: red;
}
/* #endif */
/* #ifdef MP-WEIXIN */
view{
  height: 100px;
  line-height: 100px;
  background: green;
}
/* #endif */
```

## uni中的导航跳转

### navigator 声明式导航

> 页面跳转
> 该组件类似HTML中的<a>组件，但只能跳转本地页面。目标页面必须在pages.json中注册。

- url：应用内的跳转链接，值为相对路径或绝对路径，如："../first/first"，"/pages/first/first"，注意不能加 .vue 后缀。类型：String
- open-type：跳转方式。类型：String，默认：navigate
- delta：当 open-type 为 'navigateBack' 时有效，表示回退的层数

#### open-type 参数说明

- navigate：
- switchTab：跳转至TabBar页面
- redirect：会把当前页面关闭后再进行跳转，无法返回

navigator详细文档：[文档地址](https://uniapp.dcloud.io/component/navigator)

```html
<navigator url="/pages/demo/uploadImage">跳转至非TabBar页面</navigator>
<navigator url="/pages/demo/uploadImage" open-type="switchTab">跳转至TabBar页面</navigator>
```

### 编程式导航

[文档地址]( [uni.navigateTo](https://uniapp.dcloud.io/api/router?id=navigateto))

#### uni.navigateTo(OBJECT) 普通跳转

>  保留当前页面，跳转到应用内的某个页面，使用`uni.navigateBack`可以返回到原页面。

- url：需要跳转的应用内`非 tabBar 的页面`的路径 , 路径后`可以带参数`。参数与路径之间使用`?分隔`，参数键与参数值用=相连，不同参数用&分隔；如 'path?key=value&key2=value2'，path为下一个页面的路径，下一个页面的onLoad函数可得到传递的参数。参数：String，必填
- animationType：窗口显示的动画效果。参数：String
- animationDuration：窗口动画持续时间，单位为 ms。参数：Number
- events：页面间通信接口，用于监听`被打开页面发送到当前页面`的数据。。参数：Object
- success：接口调用成功的回调函数。参数：Function
- fail：接口调用失败的回调函数。参数：Function
- complete：接口调用结束的回调函数（调用成功、失败都会执行）。参数：Function

```js
uni.navigateTo({
	url: '/pages/demo/uploadImage'
})
```

#### 通过switchTab跳转到tabbar页面

> 跳转到 tabBar 页面，并`关闭`其他`所有非 tabBar 页面`

**注意**： 如果调用了 uni.preloadPage(OBJECT) (opens new window)不会关闭，仅触发生命周期 onHide

- url：需要跳转的 tabBar 页面的路径（需在 pages.json 的 tabBar 字段定义的页面），路径后不能带参数。参数：String，必填
- success：接口调用成功的回调函数。参数：Function
- fail：接口调用失败的回调函数。参数：Function
- complete：接口调用结束的回调函数（调用成功、失败都会执行）。参数：Function

```js
uni.switchTab({
	url: '/pages/demo/uploadImage'
})
```

#### uni.redirectTo(OBJECT)

> `关闭当前页面`，跳转到应用内的某个页面。

- url：需要跳转的 tabBar 页面的路径（需在 pages.json 的 tabBar 字段定义的页面），路径后不能带参数。参数：String，必填
- success：接口调用成功的回调函数。参数：Function
- fail：接口调用失败的回调函数。参数：Function
- complete：接口调用结束的回调函数（调用成功、失败都会执行）。参数：Function

```js
uni.redirectTo({
	url: '/pages/demo/uploadImage'
})
```

### 导航跳转传递参数

```js
<!-- 声明式导航 -->
<navigator url="/pages/demo/uploadImage?id=80&age=19">跳转至非TabBar页面</navigator>

<!-- 编程式导航 -->
uni.navigateTo({
	url: '/pages/demo/uploadImage?id=80&age=19'
})

<!-- 接收参数 -->
uni.navigateTo({
	url: '/pages/demo/uploadImage?id=80&age=19'
})
```

## uni-app中组件的创建

在uni-app中，可以通过创建一个后缀名为vue的文件，即创建一个组件成功，其他组件可以将该组件通过impot的方式导入，在通过components进行注册即可

+ 创建login组件，在component中创建login目录，然后新建login.vue文件

  ```html
  <template>
  	<view>
  		这是一个自定义组件
  	</view>
  </template>

  <script>
  </script>

  <style>
  </style>
  ```

+ 在其他组件中导入该组件并注册

  ```
  import login from "@/components/test/test.vue"
  ```

+ 注册组件

  ```js
  components: {test}
  ```

+ 使用组件

  ```
  <test></test>
  ```


### 组件的生命周期函数

| beforeCreate  | 在实例初始化之后被调用。[详见](https://cn.vuejs.org/v2/api/#beforeCreate) |              |
| ------------- | ------------------------------------------------------------ | ------------ |
| created       | 在实例创建完成后被立即调用。[详见](https://cn.vuejs.org/v2/api/#created) |              |
| beforeMount   | 在挂载开始之前被调用。[详见](https://cn.vuejs.org/v2/api/#beforeMount) |              |
| mounted       | 挂载到实例上去之后调用。[详见](https://cn.vuejs.org/v2/api/#mounted) 注意：此处并不能确定子组件被全部挂载，如果需要子组件完全挂载之后在执行操作可以使用`$nextTick`[Vue官方文档](https://cn.vuejs.org/v2/api/#Vue-nextTick) |              |
| beforeUpdate  | 数据更新时调用，发生在虚拟 DOM 打补丁之前。[详见](https://cn.vuejs.org/v2/api/#beforeUpdate) | 仅H5平台支持 |
| updated       | 由于数据更改导致的虚拟 DOM 重新渲染和打补丁，在这之后会调用该钩子。[详见](https://cn.vuejs.org/v2/api/#updated) | 仅H5平台支持 |
| beforeDestroy | 实例销毁之前调用。在这一步，实例仍然完全可用。[详见](https://cn.vuejs.org/v2/api/#beforeDestroy) |              |
| destroyed     | Vue 实例销毁后调用。调用后，Vue 实例指示的所有东西都会解绑定，所有的事件监听器会被移除，所有的子实例也会被销毁。[详见](https://cn.vuejs.org/v2/api/#destroyed) |              |

## 组件的通讯

### 父组件给子组件传值

通过props来接受外界传递到组件内部的值

```
<template>
	<view>
		这是一个自定义组件 {{msg}}
	</view>
</template>

<script>
	export default {
		props: ['msg']
	}
</script>

<style>
</style>
```

其他组件在使用login组件的时候传递值

```
<template>
	<view>
		<test :msg="msg"></test>
	</view>
</template>

<script>
	import test from "@/components/test/test.vue"
	export default {
		data () {
			return {
				msg: 'hello'
			}
		},
		
		components: {test}
	}
</script>
```

### 子组件给父组件传值

通过$emit触发事件进行传递参数

```html
<template>
	<view>
		这是一个自定义组件 {{msg}}
		<button type="primary" @click="sendMsg">给父组件传值</button>
	</view>
</template>

<script>
	export default {
		data () {
			return {
				status: '打篮球'
			}
		},
		props: {
			msg: {
				type: String,
				value: ''
			}
		},
		methods: {
			sendMsg () {
				this.$emit('myEvent',this.status)
			}
		}
	}
</script>
```

父组件定义自定义事件并接收参数

```html
<template>
	<view>
		<test :msg="msg" @myEvent="getMsg"></test>
	</view>
</template>
<script>
	import test from "@/components/test/test.vue"
	export default {
		data () {
			return {
				msg: 'hello'
			}
		},
		methods: {
			getMsg (res) {
				console.log(res)
			}
		},
		
		components: {test}
	}
</script>
```

### 兄弟组件通讯

## API

### 设备

#### 拨打电话

##### uni.makePhoneCall(OBJECT)

拨打电话。

**OBJECT 参数说明**

| 参数名      | 类型     | 必填 | 说明                                             |
| :---------- | :------- | :--- | :----------------------------------------------- |
| phoneNumber | String   | 是   | 需要拨打的电话号码                               |
| success     | Function | 否   | 接口调用成功的回调                               |
| fail        | Function | 否   | 接口调用失败的回调函数                           |
| complete    | Function | 否   | 接口调用结束的回调函数（调用成功、失败都会执行） |

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

| 参数名     | 类型                | 必填 | 说明                                                         | 平台差异说明                              |
| :--------- | :------------------ | :--- | :----------------------------------------------------------- | :---------------------------------------- |
| count      | Number              | 否   | 最多可以选择的图片张数，默认9                                | 见下方说明                                |
| sizeType   | Array&lt;String&gt; | 否   | original 原图，compressed 压缩图，默认二者都有               | App、微信小程序、支付宝小程序、百度小程序 |
| extension  | Array&lt;String&gt; | 否   | 根据文件拓展名过滤，每一项都不能是空字符串。默认不过滤。     | H5(HBuilder X2.9.9+)                      |
| sourceType | Array&lt;String&gt; | 否   | album 从相册选图，camera 使用相机，默认二者都有。如需直接开相机或直接选相册，请只使用一个选项 |                                           |
| crop       | Object              | 否   | 图像裁剪参数，设置后 sizeType 失效                           | App 3.1.19+                               |
| success    | Function            | 是   | 成功则返回图片的本地文件路径列表 tempFilePaths               |                                           |
| fail       | Function            | 否   | 接口调用失败的回调函数                                       | 小程序、App                               |
| complete   | Function            | 否   | 接口调用结束的回调函数（调用成功、失败都会执行）             | &nbsp;                                    |

**crop 参数说明**

| 参数名  | 类型    | 必填 | 说明                                                         | 平台差异说明 |
| :------ | :------ | :--- | :----------------------------------------------------------- | :----------- |
| quality | Number  | 否   | 取值范围为1-100，数值越小，质量越低（仅对jpg格式有效）。默认值为80。 |              |
| width   | Number  | 是   | 裁剪的宽度，单位为px，用于计算裁剪宽高比。                   |              |
| height  | Number  | 是   | 裁剪的高度，单位为px，用于计算裁剪宽高比。                   |              |
| resize  | Boolean | 否   | 是否将width和height作为裁剪保存图片真实的像素值。默认值为true。注：设置为false时在裁剪编辑界面显示图片的像素值，设置为true时不显示 |              |

**Tips**

- count 值在 H5 平台的表现，基于浏览器本身的规范。目前测试的结果来看，只能限制单选/多选，并不能限制数量。并且，在实际的手机浏览器很少有能够支持多选的。
- sourceType 值在 H5 平台根据浏览器的不同而表现不同，一般不可限制仅使用相册，部分浏览器也无法限制是否使用相机。
- 可以通过用户授权API来判断用户是否给应用授予相册或摄像头的访问权限[https://uniapp.dcloud.io/api/other/authorize](https://uniapp.dcloud.io/api/other/authorize)
- App端如需选择非媒体文件，可在插件市场搜索[文件选择](https://ext.dcloud.net.cn/search?q=文件选择)，其中Android端可以使用Native.js，无需原生插件，而iOS端需要原生插件。
- 选择照片大多为了上传，uni ui封装了更完善的[uni-file-picker组件](https://ext.dcloud.net.cn/plugin?id=4079)，文件选择、上传到uniCloud的免费存储和cdn中，一站式集成。强烈推荐使用。


**注：文件的临时路径，在应用本次启动期间可以正常使用，如需持久保存，需在主动调用 [uni.saveFile](api/file/file?id=savefile)，在应用下次启动时才能访问得到。**

**success 返回参数说明**

| 参数          | 类型                                   | 说明                                       |
| :------------ | :------------------------------------- | :----------------------------------------- |
| tempFilePaths | Array&lt;String&gt;                    | 图片的本地文件路径列表                     |
| tempFiles     | Array&lt;Object&gt;、Array&lt;File&gt; | 图片的本地文件列表，每一项是一个 File 对象 |

**File 对象结构如下**

| 参数 | 类型   | 说明                           |
| :--- | :----- | :----------------------------- |
| path | String | 本地文件路径                   |
| size | Number | 本地文件大小，单位：B          |
| name | String | 包含扩展名的文件名称，仅H5支持 |
| type | String | 文件类型，仅H5支持             |

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

| 参数名           | 类型                | 必填         | 说明                                                         | 平台差异说明 |
| :--------------- | :------------------ | :----------- | :----------------------------------------------------------- | :----------- |
| current          | String/Number       | 详见下方说明 | 详见下方说明                                                 |              |
| urls             | Array&lt;String&gt; | 是           | 需要预览的图片链接列表                                       |              |
| indicator        | String              | 否           | 图片指示器样式，可取值："default" - 底部圆点指示器； "number" - 顶部数字指示器； "none" - 不显示指示器。 | App          |
| loop             | Boolean             | 否           | 是否可循环预览，默认值为 false                               | App          |
| longPressActions | Object              | 否           | 长按图片显示操作菜单，如不填默认为**保存相册**               | App 1.9.5+   |
| success          | Function            | 否           | 接口调用成功的回调函数                                       |              |
| fail             | Function            | 否           | 接口调用失败的回调函数                                       |              |
| complete         | Function            | 否           | 接口调用结束的回调函数（调用成功、失败都会执行）             | &nbsp;       |

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

| 参数      | 类型                | 必填 | 说明                                             |
| :-------- | :------------------ | :--- | :----------------------------------------------- |
| itemList  | Array&lt;String&gt; | 是   | 按钮的文字数组                                   |
| itemColor | String              | 否   | 按钮的文字颜色，字符串格式，默认为"#000000"      |
| success   | Function            | 否   | 接口调用成功的回调函数，详见返回参数说明         |
| fail      | Function            | 否   | 接口调用失败的回调函数                           |
| complete  | Function            | 否   | 接口调用结束的回调函数（调用成功、失败都会执行） |

**success 返回参数说明**

| 参数     | 类型   | 说明                     |
| :------- | :----- | :----------------------- |
| index    | Number | 用户长按图片的索引值     |
| tapIndex | Number | 用户点击按钮列表的索引值 |

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

|      App      |      H5       | 微信小程序 | 支付宝小程序 | 百度小程序 | 字节跳动小程序 | 飞书小程序 | QQ小程序 | 快手小程序 | 京东小程序 |
| :-----------: | :-----------: | :--------: | :----------: | :--------: | :------------: | :--------: | :------: | :--------: | :--------: |
| √ `(3.2.15+)` | √ `(3.2.15+)` |     x      |      x       |     x      |       x        |     x      |    x     |     x      |     x      |

**OBJECT 参数说明**

| 参数名   | 类型     | 必填 | 说明                                             |
| :------- | :------- | :--- | :----------------------------------------------- |
| success  | Function | 否   | 接口调用成功的回调函数                           |
| fail     | Function | 否   | 接口调用失败的回调函数                           |
| complete | Function | 否   | 接口调用结束的回调函数（调用成功、失败都会执行） |

##### uni.getImageInfo(OBJECT)

获取图片信息。

小程序下获取网络图片信息需先配置download域名白名单才能生效。

**平台差异说明**

| App  |  H5  | 微信小程序 | 支付宝小程序 | 百度小程序 | 字节跳动小程序、飞书小程序 | QQ小程序 | 快手小程序 | 京东小程序 |
| :--: | :--: | :--------: | :----------: | :--------: | :------------------------: | :------: | :--------: | :--------: |
|  √   |  √   |     √      |      √       |     √      |             √              |    √     |     √      |     √      |

**OBJECT 参数说明**

| 参数名   | 类型     | 必填 | 说明                                                         |
| :------- | :------- | :--- | :----------------------------------------------------------- |
| src      | String   | 是   | 图片的路径，可以是相对路径，临时文件路径，存储文件路径，网络图片路径 |
| success  | Function | 否   | 接口调用成功的回调函数                                       |
| fail     | Function | 否   | 接口调用失败的回调函数                                       |
| complete | Function | 否   | 接口调用结束的回调函数（调用成功、失败都会执行）             |

**success 返回参数说明**

| 参数名      | 类型   | 说明                         | 平台差异说明            |
| :---------- | :----- | :--------------------------- | :---------------------- |
| width       | Number | 图片宽度，单位px             |                         |
| height      | Number | 图片高度，单位px             |                         |
| path        | String | 返回图片的本地路径           |                         |
| orientation | String | 返回图片的方向，有效值见下表 | App、小程序、京东小程序 |
| type        | String | 返回图片的格式               | App、小程序、京东小程序 |

**orientation 参数说明**

| 枚举值         | 说明                |
| :------------- | :------------------ |
| up             | 默认                |
| down           | 180度旋转           |
| left           | 逆时针旋转90度      |
| right          | 顺时针旋转90度      |
| up-mirrored    | 同up，但水平翻转    |
| down-mirrored  | 同down，但水平翻转  |
| left-mirrored  | 同left，但垂直翻转  |
| right-mirrored | 同right，但垂直翻转 |

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

| App  |  H5  | 微信小程序 | 支付宝小程序 | 百度小程序 | 字节跳动小程序、飞书小程序 | QQ小程序 | 快手小程序 | 京东小程序 |
| :--: | :--: | :--------: | :----------: | :--------: | :------------------------: | :------: | :--------: | :--------: |
|  √   |  x   |     √      |      √       |     √      |             √              |    √     |     √      |     √      |

**OBJECT 参数说明**

| 参数名   | 类型     | 必填 | 说明                                                         |
| :------- | :------- | :--- | :----------------------------------------------------------- |
| filePath | String   | 是   | 图片文件路径，可以是临时文件路径也可以是永久文件路径，不支持网络图片路径 |
| success  | Function | 否   | 接口调用成功的回调函数                                       |
| fail     | Function | 否   | 接口调用失败的回调函数                                       |
| complete | Function | 否   | 接口调用结束的回调函数（调用成功、失败都会执行）             |

**success 返回参数说明**

| 参数名 | 类型   | 说明                                     |
| :----- | :----- | :--------------------------------------- |
| path   | String | 保存到相册的图片路径，仅 App 3.0.5+ 支持 |
| errMsg | String | 调用结果                                 |

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

| App  |  H5  | 微信小程序 | 支付宝小程序 |       百度小程序       | 字节跳动小程序、飞书小程序 | QQ小程序 | 快手小程序 | 京东小程序 |
| :--: | :--: | :--------: | :----------: | :--------------------: | :------------------------: | :------: | :--------: | :--------: |
|  √   |  x   |     √      |      √       | √(基础库版本>=3.110.3) |             √              |    √     |     √      |     √      |

**OBJECT 参数说明**

| 属性     | 类型     | 默认值 | 必填 | 说明                                                         | 平台差异说明 |
| :------- | :------- | :----- | :--- | :----------------------------------------------------------- | :----------- |
| src      | String   |        | 是   | 图片路径，图片的路径，可以是相对路径、临时文件路径、存储文件路径 |              |
| quality  | Number   | 80     | 否   | 压缩质量，范围0～100，数值越小，质量越低，压缩率越高（仅对jpg有效） |              |
| width    | String   | auto   | 否   | 缩放图片的宽度，支持像素值（如"100px"）、百分比（如"50%"）、自动计算（如"auto"，即根据width与源图宽的缩放比例计算，若未设置width则使用源图宽度） | App 3.0.0+   |
| height   | String   | auto   | 否   | 缩放图片的高度，支持像素值（如"100px"）、百分比（如"50%"）、自动计算（如"auto"，即根据height与源图高的缩放比例计算，若未设置height则使用源图高度） | App 3.0.0+   |
| rotate   | Number   | 0      | 否   | 旋转度数，范围0～360                                         | App 3.0.0+   |
| success  | Function |        | 否   | 接口调用成功的回调函数                                       |              |
| fail     | Function |        | 否   | 接口调用失败的回调函数                                       |              |
| complete | Function |        | 否   | 接口调用结束的回调函数（调用成功、失败都会执行）             |              |

**success 返回参数说明**

| 属性         | 类型   | 说明                     |
| :----------- | :----- | :----------------------- |
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

| 属性名                         | 类型        | 默认值            | 说明                                                         | 平台差异说明                                                 |
| :----------------------------- | :---------- | :---------------- | :----------------------------------------------------------- | :----------------------------------------------------------- |
| indicator-dots                 | Boolean     | false             | 是否显示面板指示点                                           |                                                              |
| indicator-color                | Color       | rgba(0, 0, 0, .3) | 指示点颜色                                                   |                                                              |
| indicator-active-color         | Color       | #000000           | 当前选中的指示点颜色                                         |                                                              |
| active-class                   | String      |                   | swiper-item 可见时的 class                                   | 支付宝小程序                                                 |
| changing-class                 | String      |                   | acceleration 设置为 {{true}} 时且处于滑动过程中，中间若干屏处于可见时的class | 支付宝小程序                                                 |
| autoplay                       | Boolean     | false             | 是否自动切换                                                 |                                                              |
| current                        | Number      | 0                 | 当前所在滑块的 index                                         |                                                              |
| current-item-id                | String      |                   | 当前所在滑块的 item-id ，不能与 current 被同时指定           | 支付宝小程序不支持                                           |
| interval                       | Number      | 5000              | 自动切换时间间隔                                             |                                                              |
| duration                       | Number      | 500               | 滑动动画时长                                                 | app-nvue不支持                                               |
| circular                       | Boolean     | false             | 是否采用衔接滑动，即播放到末尾后重新回到开头                 |                                                              |
| vertical                       | Boolean     | false             | 滑动方向是否为纵向                                           |                                                              |
| previous-margin                | String      | 0px               | 前边距，可用于露出前一项的一小部分，接受 px 和 rpx 值        | app-nvue、字节跳动小程序、飞书小程序不支持                   |
| next-margin                    | String      | 0px               | 后边距，可用于露出后一项的一小部分，接受 px 和 rpx 值        | app-nvue、字节跳动小程序、飞书小程序不支持                   |
| acceleration                   | Boolean     | false             | 当开启时，会根据滑动速度，连续滑动多屏                       | 支付宝小程序                                                 |
| disable-programmatic-animation | Boolean     | false             | 是否禁用代码变动触发 swiper 切换时使用动画。                 | 支付宝小程序                                                 |
| display-multiple-items         | Number      | 1                 | 同时显示的滑块数量                                           | app-nvue、支付宝小程序不支持                                 |
| skip-hidden-item-layout        | Boolean     | false             | 是否跳过未显示的滑块布局，设为 true 可优化复杂情况下的滑动性能，但会丢失隐藏状态滑块的布局信息 | App、微信小程序、京东小程序                                  |
| disable-touch                  | Boolean     | false             | 是否禁止用户 touch 操作                                      | App 2.5.5+、H5 2.5.5+、支付宝小程序、字节跳动小程序与飞书小程序（只在初始化时有效，不能动态变更） |
| touchable                      | Boolean     | true              | 是否监听用户的触摸事件，只在初始化时有效，不能动态变更       | 字节跳动小程序与飞书小程序（uni-app 2.5.5+ 推荐统一使用 disable-touch） |
| easing-function                | String      | default           | 指定 swiper 切换缓动动画类型，有效值：default、linear、easeInCubic、easeOutCubic、easeInOutCubic | 微信小程序、快手小程序、京东小程序                           |
| @change                        | EventHandle |                   | current 改变时会触发 change 事件，event.detail = {current: current, source: source} |                                                              |
| @transition                    | EventHandle |                   | swiper-item 的位置发生改变时会触发 transition 事件，event.detail = {dx: dx, dy: dy}，支付宝小程序暂不支持dx, dy | App、H5、微信小程序、支付宝小程序、字节跳动小程序、飞书小程序、QQ小程序、快手小程序 |
| @animationfinish               | EventHandle |                   | 动画结束时会触发 animationfinish 事件，event.detail = {current: current, source: source} | 字节跳动小程序与飞书小程序不支持                             |

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

| 值             | 说明         |
| :------------- | :----------- |
| default        | 默认缓动函数 |
| linear         | 线性动画     |
| easeInCubic    | 缓入动画     |
| easeOutCubic   | 缓出动画     |
| easeInOutCubic | 缓入缓出动画 |


#### swiper-item

仅可放置在 ``<swiper>`` 组件中，宽高自动设置为100%。注意：宽高100%是相对于其父组件，不是相对于子组件，不能被子组件自动撑开。

| 属性名  | 类型   | 默认值 | 说明                    |
| :------ | :----- | :----- | :---------------------- |
| item-id | String |        | 该 swiper-item 的标识符 |

**示例** [查看演示](https://hellouniapp.dcloud.net.cn/pages/component/swiper/swiper)

### map

地图组件。

地图组件用于展示地图，而定位API只是获取坐标，请勿混淆两者。

**平台差异说明**

| App  |  H5  | 微信小程序 | 支付宝小程序 | 百度小程序 | 字节跳动小程序、飞书小程序 | QQ小程序 | 快应用 | 360小程序 | 快手小程序 | 京东小程序 |
| :--: | :--: | :--------: | :----------: | :--------: | :------------------------: | :------: | :----: | :-------: | :--------: | :--------: |
|  √   |  √   |     √      |      √       |     √      |           1.63+            |  1.9.0+  |   √    |     x     |     x      |     √      |

**地图服务商说明**

| 地图服务商 | App  |   H5    | 微信小程序 |
| :--------: | :--: | :-----: | :--------: |
|    高德    |  √   |         |            |
|   Goolge   | 3.4+ | 3.2.10+ |            |
|    腾讯    |      |    √    |     √      |


#### 属性说明

| 属性名             | 类型              | 默认值 | 说明                                                         | 平台差异说明                                                 |
| :----------------- | :---------------- | :----- | :----------------------------------------------------------- | :----------------------------------------------------------- |
| longitude          | Number            |        | 中心经度                                                     |                                                              |
| latitude           | Number            |        | 中心纬度                                                     |                                                              |
| scale              | Number            | 16     | 缩放级别，取值范围为3-20                                     | 高德地图缩放比例与微信小程序不同                             |
| theme              | String            | normal | 主题（satellite 或 normal）只在初始化时有效，不能动态变更（仅Android支持） | 京东小程序                                                   |
| min-scale          | Number            | 3      | 最小缩放级别                                                 | App-nvue 3.1.0+、微信小程序2.13+                             |
| max-scale          | Number            | 20     | 最大缩放级别                                                 | App-nvue 3.1.0+、微信小程序2.13+                             |
| layer-style        | Number/String     | 1      | 个性化地图                                                   | App-nvue 3.1.0+、微信小程序2.13+                             |
| markers            | Array             |        | 标记点                                                       |                                                              |
| polyline           | Array             |        | 路线                                                         | 飞书小程序不支持                                             |
| circles            | Array             |        | 圆                                                           |                                                              |
| controls           | Array             |        | 控件                                                         |                                                              |
| include-points     | Array             |        | 缩放视野以包含所有给定的坐标点                               | App-nvue 2.1.5+、微信小程序、H5、百度小程序、支付宝小程序、京东小程序 |
| enable-3D          | Boolean           | false  | 是否显示3D楼块                                               | App-nvue 2.1.5+、微信小程序2.3.0                             |
| show-compass       | Boolean           | false  | 是否显示指南针                                               | App-nvue 2.1.5+、微信小程序2.3.0                             |
| enable-zoom        | Boolean           | true   | 是否支持缩放                                                 | App-nvue 2.1.5+、微信小程序2.3.0                             |
| enable-scroll      | Boolean           | true   | 是否支持拖动                                                 | App-nvue 2.1.5+、微信小程序2.3.0                             |
| enable-rotate      | Boolean           | false  | 是否支持旋转                                                 | App-nvue 2.1.5+、微信小程序2.3.0                             |
| enable-overlooking | Boolean           | false  | 是否开启俯视                                                 | App-nvue 2.1.5+、微信小程序2.3.0                             |
| enable-satellite   | Boolean           | false  | 是否开启卫星图                                               | App-nvue 2.1.5+、微信小程序2.7.0                             |
| enable-traffic     | Boolean           | false  | 是否开启实时路况                                             | App-nvue 2.1.5+、微信小程序2.7.0                             |
| enable-poi         | Boolean           | false  | 是否展示 POI 点                                              | App-nvue 3.1.0+                                              |
| enable-building    | Boolean           | false  | 是否展示建筑物                                               | App-nvue 3.1.0+ 支持 (**废除原enable-3D属性 高德地图默认开启建筑物就是3D无法设置**) |
| show-location      | Boolean           |        | 显示带有方向的当前定位点                                     | 微信小程序、H5、百度小程序、支付宝小程序、京东小程序         |
| polygons           | Array.`<polygon>` |        | 多边形                                                       | App-nvue 2.1.5+、App-vue 3.4.3+、H5 3.4.3+、微信小程序、百度小程序、支付宝小程序 |
| enable-indoorMap   | Boolean           | false  | 是否展示室内地图                                             | App-nvue 3.1.0+                                              |
| @markertap         | EventHandle       |        | 点击标记点时触发，e.detail = {markerId}                      | App-nvue 2.3.3+、H5、微信小程序 （App和H5平台需要指定 marker 对象属性 id） |
| @labeltap          | EventHandle       |        | 点击label时触发，e.detail = {markerId}                       | 微信小程序2.9.0                                              |
| @callouttap        | EventHandle       |        | 点击标记点对应的气泡时触发，e.detail = {markerId}            |                                                              |
| @controltap        | EventHandle       |        | 点击控件时触发，e.detail = {controlId}                       |                                                              |
| @regionchange      | EventHandle       |        | 视野发生变化时触发                                           | 微信小程序、H5、百度小程序、支付宝小程序、京东小程序         |
| @tap               | EventHandle       |        | 点击地图时触发; App-nvue、微信小程序2.9支持返回经纬度        |                                                              |
| @updated           | EventHandle       |        | 在地图渲染更新完成时触发                                     | 微信小程序、H5、百度小程序                                   |
| @anchorpointtap    | EventHandle       |        | 点击定位标时触发，e.detail = {longitude, latitude}           | App-nvue 3.1.0+、微信小程序2.13+                             |
| @poitap            | EventHandle       |        | 点击地图poi点时触发，e.detail = {name, longitude, latitude}  | 微信小程序2.3.0+                                             |

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

| 属性          | 说明                                 | 类型   | 必填 | 备注                                                         | 平台差异说明                                                 |
| :------------ | :----------------------------------- | :----- | :--- | :----------------------------------------------------------- | :----------------------------------------------------------- |
| id            | 标记点id                             | Number | 是   | marker点击事件回调会返回此id。建议为每个marker设置上Number类型id，保证更新marker时有更好的性能。最大限制9位数 |                                                              |
| latitude      | 纬度                                 | Number | 是   | 浮点数，范围 -90 ~ 90                                        |                                                              |
| longitude     | 经度                                 | Number | 是   | 浮点数，范围 -180 ~ 180                                      |                                                              |
| title         | 标注点名                             | String | 否   | 点击时显示，callout存在时将被忽略                            | App-nvue 2.1.5+、微信小程序、H5、支付宝小程序、百度小程序、京东小程序 |
| iconPath      | 显示的图标                           | String | 是   | 项目目录下的图片路径，支持相对路径写法，以'/'开头则表示相对小程序根目录；也支持临时路径 |                                                              |
| rotate        | 旋转角度                             | Number | 否   | 顺时针旋转的角度，范围 0 ~ 360，默认为 0                     | App-nvue 2.1.5+、微信小程序、支付宝小程序、百度小程序、京东小程序 |
| alpha         | 标注的透明度                         | Number | 否   | 默认1，无透明，范围 0 ~ 1                                    | App-nvue 2.1.5+、微信小程序、支付宝小程序、百度小程序、京东小程序 |
| width         | 标注图标宽度                         | Number | 否   | 默认为图片实际宽度                                           | App-nvue 2.1.5+、微信小程序、H5、支付宝小程序、百度小程序、京东小程序 |
| height        | 标注图标高度                         | Number | 否   | 默认为图片实际高度                                           | App-nvue 2.1.5+、微信小程序、H5、支付宝小程序、百度小程序、京东小程序 |
| callout       | 自定义标记点上方的气泡窗口           | Object | 否   | 支持的属性见下表，可识别换行符。                             | App-nvue 2.1.5+、微信小程序、支付宝小程序、百度小程序、京东小程序 |
| label         | 为标记点旁边增加标签                 | Object | 否   | 支持的属性见下表，可识别换行符。                             | App-nvue 2.1.5+、微信小程序、H5、App、百度小程序             |
| anchor        | 经纬度在标注图标的锚点，默认底边中点 | Object | 否   | {x, y}，x表示横向(0-1)，y表示竖向(0-1)。{x: .5, y: 1} 表示底边中点 | App-nvue 2.1.5+、微信小程序、H5、百度小程序、京东小程序      |
| clusterId     | 自定义点聚合簇效果时使用             | Number | 否   |                                                              | App-nvue 3.1.0+、微信小程序                                  |
| customCallout | 自定义气泡窗口                       | Object | 否   |                                                              | app暂时不支持、微信小程序                                    |
| aria-label    | 无障碍访问，（属性）元素的额外描述   | String | 否   |                                                              | App-nvue 3.1.0+、微信小程序                                  |

**marker 上的气泡 callout**

| 属性         | 说明                                      | 类型   | 平台差异说明                                            |
| :----------- | :---------------------------------------- | :----- | :------------------------------------------------------ |
| content      | 文本                                      | String | App-nvue 2.1.5+、微信小程序、H5、百度小程序、京东小程序 |
| color        | 文本颜色                                  | String | App-nvue 2.1.5+、微信小程序、H5、百度小程序、京东小程序 |
| fontSize     | 文字大小                                  | Number | App-nvue 2.1.5+、微信小程序、H5、百度小程序、京东小程序 |
| borderRadius | callout边框圆角                           | Number | App-nvue 2.1.5+、微信小程序、H5、百度小程序、京东小程序 |
| borderWidth  | 边框宽度                                  | Number | 京东小程序                                              |
| borderColor  | 边框颜色                                  | String | 京东小程序                                              |
| bgColor      | 背景色                                    | String | App-nvue 2.1.5+、微信小程序、H5、百度小程序、京东小程序 |
| padding      | 文本边缘留白                              | Number | App-nvue 2.1.5+、微信小程序、H5、百度小程序、京东小程序 |
| display      | 'BYCLICK':点击显示; 'ALWAYS':常显         | String | App-nvue 2.1.5+、微信小程序、H5、百度小程序、京东小程序 |
| textAlign    | 文本对齐方式。有效值: left, right, center | String | App-nvue 2.1.5+、微信小程序、百度小程序、京东小程序     |

**marker 上的标签 label**

| 属性          | 说明                                      | 类型    | 平台差异说明                                |
| :------------ | :---------------------------------------- | :------ | :------------------------------------------ |
| content       | 文本                                      | String  |                                             |
| color         | 文本颜色                                  | String  | App-nvue 2.1.5+、微信小程序、H5、百度小程序 |
| fontSize      | 文字大小                                  | Number  | App-nvue 2.1.5+、微信小程序、H5、百度小程序 |
| x             | label的坐标，原点是 marker 对应的经纬度   | Number  | H5、百度小程序                              |
| y             | label的坐标，原点是 marker 对应的经纬度   | Number  | H5、百度小程序                              |
| anchorX       | label的坐标，原点是 marker 对应的经纬度   | Number  | App-nvue 2.1.5+、微信小程序                 |
| anchorY       | label的坐标，原点是 marker 对应的经纬度   | Number  | App-nvue 2.1.5+、微信小程序                 |
| borderWidth   | 边框宽度                                  | Number  | 微信小程序、百度小程序                      |
| borderColor   | 边框颜色                                  | String  | 微信小程序、百度小程序                      |
| borderRadius  | 边框圆角                                  | Number  | App-nvue 2.1.5+、微信小程序、百度小程序     |
| bgColor       | 背景色                                    | String  | App-nvue 2.1.5+、微信小程序、百度小程序     |
| padding       | 文本边缘留白                              | Number  | App-nvue 2.1.5+、微信小程序、百度小程序     |
| textAlign     | 文本对齐方式。有效值: left, right, center | String  | App-nvue 2.1.5+、微信小程序、百度小程序     |
| customCallout | 自定义气泡窗口                            | Object  | App暂时不支持、微信小程序                   |
| aria-label    | 无障碍访问，（属性）元素的额外描述        | String  | App-nvue 3.1.0+、微信小程序                 |
| joinCluster   | 是否参与点聚合                            | Boolean | App-nvue 3.1.0+、微信小程序                 |

#### 点聚合

当地图上需要展示的标记点 marker 过多时，可能会导致界面上 marker 出现压盖，展示不全，并导致整体性能变差。针对此类问题，推出点聚合能力。

使用流程如下：

[MapContext.initMarkerCluster](/api/location/map?id=createmapcontext) 对聚合点进行初始化配置（可选）；
[MapContext.addMarkers](/api/location/map?id=createmapcontext) 指定参与聚合的 marker；
MapContext.on('markerClusterCreate', callback) 触发时，通过 [MapContext.addMarkers](/api/location/map?id=createmapcontext) 更新聚合簇的样式 （可选）；
[MapContext.removeMarkers](/api/location/map?id=createmapcontext) 移除参与聚合的 marker；

#### polyline

指定一系列坐标点，从数组第一项连线至最后一项

| 属性          | 说明                         | 类型    | 必填  | 备注                                            | 平台差异说明                                                 |
| :------------ | :--------------------------- | :------ | :---- | :---------------------------------------------- | :----------------------------------------------------------- |
| points        | 经纬度数组                   | Array   | 是    | [{latitude: 0, longitude: 0}]                   |                                                              |
| color         | 线的颜色                     | String  | 否    | 8位十六进制表示，后两位表示alpha值，如：#0000AA |                                                              |
| width         | 线的宽度                     | Number  | 否    |                                                 |                                                              |
| dottedLine    | 是否虚线                     | Boolean | 否    | 默认false                                       | App-nvue 2.1.5+、微信小程序、H5、百度小程序、支付宝小程序、京东小程序 |
| arrowLine     | 带箭头的线                   | Boolean | 否    | 默认false，微信小程序开发者工具暂不支持该属性   | App-nvue 2.1.5+、微信小程序、百度小程序、京东小程序          |
| arrowIconPath | 更换箭头图标                 | String  | 否    | 在arrowLine为true时生效                         | App-nvue 2.1.5+、微信小程序、百度小程序、京东小程序          |
| borderColor   | 线的边框颜色                 | String  | 否    |                                                 | 微信小程序、H5、百度小程序、京东小程序                       |
| borderWidth   | 线的厚度                     | Number  | 否    |                                                 | 微信小程序、H5、百度小程序、京东小程序                       |
| colorList     | 彩虹线                       | Array   | false | 存在时忽略 color 值                             | App-nvue 3.1.0+、微信小程序                                  |
| level         | 压盖关系，默认为 abovelabels | String  | false |                                                 | 微信小程序                                                   |

 **注意事项** 

- App-nvue 当 arrowLine 为 true 时，显示的是带箭头的图片拼接的线 color 值会被忽略，替换箭头图片的方法[参考文档](https://ask.dcloud.net.cn/article/37901) 

#### polygon

指定一系列坐标点，根据 points 坐标数据生成闭合多边形

| 属性        | 说明                         | 类型   | 必填  | 备注                          |
| :---------- | :--------------------------- | :----- | :---- | :---------------------------- |
| points      | 经纬度数组                   | array  | 是    | [{latitude: 0, longitude: 0}] |
| strokeWidth | 描边的宽度                   | Number | 否    |                               |
| strokeColor | 描边的颜色                   | String | 否    | 十六进制                      |
| fillColor   | 填充颜色                     | String | 否    | 十六进制                      |
| zIndex      | 设置多边形 Z 轴数值          | Number | 否    |                               |
| level       | 压盖关系，默认为 abovelabels | String | false | 微信小程序                    |

#### circles

在地图上显示圆

| 属性        | 说明                         | 类型   | 必填  | 备注                                            |
| :---------- | :--------------------------- | :----- | :---- | :---------------------------------------------- |
| latitude    | 纬度                         | Number | 是    | 浮点数，范围 -90 ~ 90                           |
| longitude   | 经度                         | Number | 是    | 浮点数，范围 -180 ~ 180                         |
| color       | 描边的颜色                   | String | 否    | 8位十六进制表示，后两位表示alpha值，如：#0000AA |
| fillColor   | 填充颜色                     | String | 否    | 8位十六进制表示，后两位表示alpha值，如：#0000AA |
| radius      | 半径                         | Number | 是    |                                                 |
| strokeWidth | 描边的宽度                   | Number | 否    | &nbsp;                                          |
| level       | 压盖关系，默认为 abovelabels | String | false | 微信小程序                                      |

#### controls

在地图上显示控件，控件不随着地图移动

| 属性      | 说明             | 类型    | 必填 | 备注                                                         |
| :-------- | :--------------- | :------ | :--- | :----------------------------------------------------------- |
| id        | 控件id           | Number  | 否   | 在控件点击事件回调会返回此id                                 |
| position  | 控件在地图的位置 | Object  | 是   | 控件相对地图位置                                             |
| iconPath  | 显示的图标       | String  | 是   | 项目目录下的图片路径，支持相对路径写法，以'/'开头则表示相对项目根目录；也支持临时路径 |
| clickable | 是否可点击       | Boolean | 否   | 默认不可点击                                                 |

**position**

| 属性   | 说明                 | 类型   | 必填 | 备注           |
| :----- | :------------------- | :----- | :--- | :------------- |
| left   | 距离地图的左边界多远 | Number | 否   | 默认为0        |
| top    | 距离地图的上边界多远 | Number | 否   | 默认为0        |
| width  | 控件宽度             | Number | 否   | 默认为图片宽度 |
| height | 控件高度             | Number | 否   | 默认为图片高度 |

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

| 属性       | 说明                | 高德是否支持 | google地图是否支持    |
| :--------- | :------------------ | :----------- | :-------------------- |
| subkey     | 个性化地图使用的key | 不支持       | 不支持                |
| show-scale | 显示比例尺          | 已支持       | 不支持                |
| enable-poi | 是否展示 POI 点     | 已支持       | 不支持                |
| labeltap   | 点击label时触发     | 已支持       | Android支持iOS不支持  |
| poitap     | 点击地图poi点时触发 | 已支持       | Android不支持 iOS支持 |

##### marker

| 属性  | 说明                 | 高德是否支持 | google地图是否支持    |
| :---- | :------------------- | :----------- | :-------------------- |
| label | 为标记点旁边增加标签 | 已支持       | Android支持 iOS不支持 |

##### marker 上的气泡 callout

| 属性    | 说明                              | 高德是否支持 | google地图是否支持             |
| :------ | :-------------------------------- | :----------- | :----------------------------- |
| display | 'BYCLICK':点击显示; 'ALWAYS':常显 | 已支持       | Android支持iOS只支持 'BYCLICK' |

##### marker 上的自定义气泡 customCallout

| 属性    | 说明                              | 高德是否支持 | google地图是否支持             |
| :------ | :-------------------------------- | :----------- | :----------------------------- |
| display | 'BYCLICK':点击显示; 'ALWAYS':常显 | 已支持       | Android支持iOS只支持 'BYCLICK' |

##### polyline

| 属性          | 说明         | 高德是否支持 | google地图是否支持      |
| :------------ | :----------- | :----------- | :---------------------- |
| colorList     | 彩虹线       | 已支持       | Android不支持 iOS支持   |
| dottedLine    | 是否虚线     | 已支持       | Android已支持 iOS不支持 |
| arrowLine     | 带箭头的线   | 已支持       | Android不支持 iOS支持   |
| arrowIconPath | 更换箭头图标 | 已支持       | Android不支持 iOS支持   |

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

| 属性名                  | 类型          | 默认值  | 说明                                                         | 平台差异说明                                |
| :---------------------- | :------------ | :------ | :----------------------------------------------------------- | :------------------------------------------ |
| scroll-x                | Boolean       | false   | 允许横向滚动                                                 |                                             |
| scroll-y                | Boolean       | false   | 允许纵向滚动                                                 |                                             |
| upper-threshold         | Number/String | 50      | 距顶部/左边多远时（单位px），触发 scrolltoupper 事件         |                                             |
| lower-threshold         | Number/String | 50      | 距底部/右边多远时（单位px），触发 scrolltolower 事件         |                                             |
| scroll-top              | Number/String |         | 设置竖向滚动条位置                                           |                                             |
| scroll-left             | Number/String |         | 设置横向滚动条位置                                           |                                             |
| scroll-into-view        | String        |         | 值应为某子元素id（id不能以数字开头）。设置哪个方向可滚动，则在哪个方向滚动到该元素 |                                             |
| scroll-with-animation   | Boolean       | false   | 在设置滚动条位置时使用动画过渡                               |                                             |
| enable-back-to-top      | Boolean       | false   | iOS点击顶部状态栏、安卓双击标题栏时，滚动条返回顶部，只支持竖向 | app-nvue，微信小程序                        |
| show-scrollbar          | Boolean       | false   | 控制是否出现滚动条                                           | App-nvue 2.1.5+                             |
| refresher-enabled       | Boolean       | false   | 开启自定义下拉刷新                                           | H5、app-vue 2.5.12+,微信小程序基础库2.10.1+ |
| refresher-threshold     | Number        | 45      | 设置自定义下拉刷新阈值                                       | H5、app-vue 2.5.12+,微信小程序基础库2.10.1+ |
| refresher-default-style | String        | "black" | 设置自定义下拉刷新默认样式，支持设置 black，white，none，none 表示不使用默认样式 | H5、app-vue 2.5.12+,微信小程序基础库2.10.1+ |
| refresher-background    | String        | "#FFF"  | 设置自定义下拉刷新区域背景颜色                               | H5、app-vue 2.5.12+,微信小程序基础库2.10.1+ |
| refresher-triggered     | Boolean       | false   | 设置当前下拉刷新状态，true 表示下拉刷新已经被触发，false 表示下拉刷新未被触发 | H5、app-vue 2.5.12+,微信小程序基础库2.10.1+ |
| enable-flex             | Boolean       | false   | 启用 flexbox 布局。开启后，当前节点声明了 display: flex 就会成为 flex container，并作用于其孩子节点。 | 微信小程序 2.7.3                            |
| scroll-anchoring        | Boolean       | false   | 开启 scroll anchoring 特性，即控制滚动位置不随内容变化而抖动，仅在 iOS 下生效，安卓下可参考 CSS overflow-anchor 属性。 | 微信小程序 2.8.2                            |
| @scrolltoupper          | EventHandle   |         | 滚动到顶部/左边，会触发 scrolltoupper 事件                   |                                             |
| @scrolltolower          | EventHandle   |         | 滚动到底部/右边，会触发 scrolltolower 事件                   |                                             |
| @scroll                 | EventHandle   |         | 滚动时触发，event.detail = {scrollLeft, scrollTop, scrollHeight, scrollWidth, deltaX, deltaY} | &nbsp;                                      |
| @refresherpulling       | EventHandle   |         | 自定义下拉刷新控件被下拉                                     | H5、app-vue 2.5.12+,微信小程序基础库2.10.1+ |
| @refresherrefresh       | EventHandle   |         | 自定义下拉刷新被触发                                         | H5、app-vue 2.5.12+,微信小程序基础库2.10.1+ |
| @refresherrestore       | EventHandle   |         | 自定义下拉刷新被复位                                         | H5、app-vue 2.5.12+,微信小程序基础库2.10.1+ |
| @refresherabort         | EventHandle   |         | 自定义下拉刷新被中止                                         | H5、app-vue 2.5.12+,微信小程序基础库2.10.1+ |

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

| 属性名             | 类型           | 默认值 | 说明                                                         | 平台兼容                                                     |
| :----------------- | :------------- | :----- | :----------------------------------------------------------- | :----------------------------------------------------------- |
| nodes              | Array / String | []     | 节点列表 / HTML String                                       |                                                              |
| space              | string         |        | 显示连续空格                                                 | App、H5、微信基础库2.4.1+[详见](https://developers.weixin.qq.com/miniprogram/dev/component/rich-text.html)、QQ小程序、字节小程序、快手小程序[详见](https://mp.kuaishou.com/docs/develop/components/basicComponents/richText.html) |
| selectable         | Boolean        | true   | 富文本是否可以长按选中，可用于复制，粘贴等场景               | 百度小程序（仅真机支持，基础库 3.150.1 以下版本默认为 false） |
| image-menu-prevent | Boolean        | false  | 阻止长按图片时弹起默认菜单（将该属性设置为image-menu-prevent或image-menu-prevent="true"），只在初始化时有效，不能动态变更；若不想阻止弹起默认菜单，则不需要设置此属性 | 百度小程序                                                   |
| preview            | Boolean        |        | 富文本中的图片是否可点击预览。在不设置的情况下，若 rich-text 未监听点击事件，则默认开启。未显示设置 preview 时会进行点击默认预览判断，建议显示设置 preview | 百度小程序                                                   |
| @itemclick         | EventHandle    |        | 拦截点击事件（只支持 `a`、`img`标签），返回当前node信息 `event.detail={node}` | H5 (3.2.13+)、App-Vue (3.2.13+)                              |

#### nodes

nodes 值为 HTML String 时，在组件内部将自动解析为节点列表，推荐直接使用 Array 类型避免内部转换导致的性能下降。App-nvue 和支付宝小程序不支持 HTML String 方式，仅支持直接使用节点列表即 Array 类型，如要使用 HTML String，则需自己将 HTML String 转化为 nodes 数组，可使用 [html-parser](https://github.com/dcloudio/hello-uniapp/blob/master/common/html-parser.js) 转换。

节点列表内的节点现支持两种类型，通过 type 来区分，分别是元素节点和文本节点，默认是元素节点，在富文本区域里显示的 HTML 节点。

**元素节点：type = node**

| 属性     | 说明       | 类型   | 必填 | 备注                                     |
| :------- | :--------- | :----- | :--- | :--------------------------------------- |
| name     | 标签名     | String | 是   | 支持部分受信任的 HTML 节点               |
| attrs    | 属性       | Object | 否   | 支持部分受信任的属性，遵循 Pascal 命名法 |
| children | 子节点列表 | Array  | 否   | 结构和 nodes 一致                        |

**文本节点：type = text**

| 属性 | 说明 | 类型   | 必填 | 备注          |
| :--- | :--- | :----- | :--- | :------------ |
| text | 文本 | String | 是   | 支持 entities |

#### 受信任的HTML节点及属性

全局支持 class 和 style 属性，**不支持 id 属性**。

| 节点       | 属性                            |
| :--------- | :------------------------------ |
| a          |                                 |
| abbr       |                                 |
| b          |                                 |
| blockquote |                                 |
| br         |                                 |
| code       |                                 |
| col        | span，width                     |
| colgroup   | span，width                     |
| dd         |                                 |
| del        |                                 |
| div        |                                 |
| dl         |                                 |
| dt         |                                 |
| em         |                                 |
| fieldset   |                                 |
| h1         |                                 |
| h2         |                                 |
| h3         |                                 |
| h4         |                                 |
| h5         |                                 |
| h6         |                                 |
| hr         |                                 |
| i          |                                 |
| img        | alt，src，height，width         |
| ins        |                                 |
| label      |                                 |
| legend     |                                 |
| li         |                                 |
| ol         | start，type                     |
| p          |                                 |
| q          |                                 |
| span       |                                 |
| strong     |                                 |
| sub        |                                 |
| sup        |                                 |
| table      | width                           |
| tbody      |                                 |
| td         | colspan，height，rowspan，width |
| tfoot      |                                 |
| th         | colspan，height，rowspan，width |
| thead      |                                 |
| tr         |                                 |
| ul         | &nbsp;                          |

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

#### uni-ui的使用

[uni-ui文档](https://uniapp.dcloud.io/component/README?id=uniui)

1、进入Grid宫格组件

2、使用HBuilderX导入该组件

3、导入该组件

```html
import uniGrid from "@/components/uni-grid/uni-grid.vue"
import uniGridItem from "@/components/uni-grid-item/uni-grid-item.vue"
```

4、注册组件

```html
components: {uniGrid,uniGridItem}
```

5、使用组件

```html
<uni-grid :column="3">
  <uni-grid-item>
    <text class="text">文本</text>
  </uni-grid-item>
  <uni-grid-item>
    <text class="text">文本</text>
  </uni-grid-item>
  <uni-grid-item>
    <text class="text">文本</text>
  </uni-grid-item>
</uni-grid>
```

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

