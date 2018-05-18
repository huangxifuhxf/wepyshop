# wxParse-微信小程序富文本解析组件



## GitHub项目地址

https://github.com/icindy/wxParse

## 基本使用方法

* 1. Copy文件夹`wxParse`
```d
// 步骤1 把 wxParse 核心文件拷贝到项目中
- wxParse/
  -wxParse.js(必须存在)
  -html2json.js(必须存在)
  -htmlparser.js(必须存在)
  -showdown.js(必须存在)
  -wxDiscode.js(必须存在)
  -wxParse.wxml(必须存在)
  -wxParse.wxss(必须存在)
  -emojis(可选)
```

* 2. 引入必要文件

```javascript
// 步骤2.1 在使用的页面 JS 中导入 WxParse 模块
var WxParse = require('你的路径/wxParse/wxParse.js');
// 或
import WxParse from '你的路径/wxParse/wxParse.js'
```

```css
// 步骤2.2 在使用的页面 wxss 中导入 WxParse.css , 也可以在 app.wxss 全局导入
@import "你的路径/wxParse/wxParse.wxss";
```

* 3. 数据绑定
```js
// 步骤3. JS 数据绑定
var parseData = '<div>我是HTML代码</div>';
/**
* WxParse.wxParse(bindName , type, data, target,imagePadding)
* 1.bindName绑定的数据名(必填)
* 2.type可以为html或者md(必填)
* 3.data为传入的具体数据(必填)
* 4.target为Page对象,一般为this(必填)
* 5.imagePadding为当图片自适应是左右的单一padding(默认为0,可选)
*/
var that = this;
WxParse.wxParse('detailInfo', 'html', parseData, that, 0);
```

* 4. 模版引用
```xml
<!-- 步骤4. 引入 WXML 模板 -->
<import src="你的路径/wxParse/wxParse.wxml"/>
<!-- 这里data中article为bindName -->
<template is="wxParse" data="{{wxParseData:detailInfo.nodes}}"></template>
```

