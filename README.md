## vue-table-export
一个轻量级、使用简单的表格导出插件。压缩后仅有 7k。

## 使用
目前仅支持全局引入
```html
<script src="./dist/vue-table-export.js" type="text/javascript"></script>
```

## 依赖
- xlsx
- blob
- FileSaver
- vue（2.0以上版本）
- bootstrap(可选依赖。组件样式默认依赖的是 bootstrapCSS)

组件所依赖的文件都在 `dist` 目录。

## 示例
全局引入
```html
<script src="./dist/xlsx.core.min.js" type="text/javascript"></script>
<script src="./dist/blob-util.min.js" type="text/javascript"></script>
<script src="./dist/FileSaver.min.js" type="text/javascript"></script>

<script src="//cdn.bootcss.com/vue/2.0.5/vue.min.js"></script>

<!-- 组件 -->
<script src="./dist/vue-table-export.js" type="text/javascript"></script>
```

```html
...
<body>
<div id="app">
    <table-export 
        :data="this.data" 
        :columns="['编号', '姓名', '年龄', '生日']"
        filename="userInfo" 
        button-text="导出Excel" 
        class-name="btn-success">
    </table-export>
</div>
<script type="text/javascript">
    new Vue ({
        el: '#app',
        data: {
            data: [
                ['1', '潘金莲', 20, '1991-12-24'],
                ['2', '武大郎', 41, '1889/02/12'],
            ]
        },
        components: {
            'table-export': TableExport
        }
    }) 
</script>
</body>
...
```

## API
以下是组件所有的参数列表：
|Props|类型|默认值|必填|描述
|-----|----|------|----|
| :data | Array | `[]` | 是 | 一个二维数组，表示要导出的数据。 |
| :column s| Array | `[]` | 否 | 表格头部，用来做为 Excel 的头部。
| filename | String | `时间戳` | 否 | 文件名。缺省值为当前时间的时间戳。
| button-text | String | `导出Excel` | 否 | 按钮文本。
| class-name | String | `btn-success` | 否 | 按钮样式。

## LICENSE
copyright（c）2016 [gongph](https://github.com/gongph)