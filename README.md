# vue-mint-scroll
基于 vue2.0 开发的一个轻量级、简单优雅的列表无缝滚动组件。

## Usage
```
npm i vue-mint-scroll --save
```

```js
import Vue from 'vue'
import MintScroll from 'vue-mint-scroll' // 加载组件

Vue.use(MintScroll) // 安装
```

## 简单使用
```html
<template>
    <div class="container">
        <div class="row">
            <div class="col-md-4"></div>
            <div class="col-md-4">
                <h2>vue-mint-scroll with vue2.0.x</h2>
                <div class="box">
                    <h4>文章列表</h4>
                    <mint-scroll speed="30">
                        <ul>
                          <li>要是能变成数组多好啊</li>
                          <li>类数组是不一定全部支持的</li>
                          <li>所以其后面可以直接调用数组具有的方法</li>
                          <li>表示数组的原型中的slice方法。注意</li>
                          <li>能调用call的只有方法，所以</li>
                          <li>参数表示真正调用slice的环境变</li>
                          <li>连接两个或更多的数组，并返回结果</li>
                          <li>删除并返回数组的第一个元素</li>
                          <li>从某个已有的数组返回选定的元素</li>
                          <li>把数组转换为字符串，并返回结果。</li>
                        </ul>
                    </mint-scroll>
                </div>
            </div>
            <div class="col-md-4"></div>
        </div>
    </div>
</template>
```

效果图：
![preview](/media/mint-scroll.gif)

## Licence
Copyright (c) 2016 [gongph](https://github.com/gongph)
