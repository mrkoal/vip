# 通用规范

1. 缩进使用 4 个空格
2. 文件使用 utf-8 without BOM 储存

# 制作规范

## HTML 缩写规范

### 标签属性使用小写

    // 不推荐
    <a HREF="#">vip</a>

    // 推荐
    <a href="#">vip</a>

### 移除行末的空格

行末的空格是多余的，而且影响文件对比。

    // 不推荐
    <p>Trailing whitespace</p>...

    // 推荐
    <p>Trailing whitespace</p>

### TODO 协作

格式为 `TODO(人名)：要做的事`，适当的 `TODO` 能方便的协调工作。

    <!-- TODO(畅临)：li.nav-item 的高亮状态类为 `nav-item-current` -->
    <ul class="nav">
        <li class="nav-item nav-item-current">home</li>
        <li class="nav-item">about</li>
    </ul>

### DOCTYPE

统一使用 HTML5 的 DOCTYPE。

    <!doctype html>

在此前提下，规定自闭合标签不用写 `/`，但其它需写上闭合标签。

    // 不推荐
    <meta charset="utf-8" />
    <p>文本

    // 推荐
    <meta charset="utf-8">
    <p>文本</p>

### 使用 UTF-8 声明页面

除非历史原因，不然使用 utf-8 声明页面

    // 不推荐
    <meta charset="gb2312">

    // 推荐
    <meta charset="utf-8">

### 多媒体元素降级处理

对多媒体元素，如 `canvas`、`videos`、`images`，添加上 `alt` 属性描述。

    // 不推荐
    <img src="#">

    // 推荐
    <img src="#" alt="属性描述">

### 引用类型

省略 CSS 和 JavaScript 的引用类型（除非引用的不是这两者）。在 HTML5 中，默认是使用 `text/css` 和 `text/javascript`，因此声明是多余的，且对较旧的浏览器也适用。

    // 不推荐
    <link rel="stylesheet" href="vip.css" type="text/css">
    <script src="vip.js" type="text/javascript"></script>

    // 推荐
    <link rel="stylesheet" href="vip.css">
    <script src="vip.js"></script>

### 使用双引号

    // 不推荐
    <a href='#'>vip</a>

    // 推荐
    <a href="#">vip</a>

## CSS 缩写规范

*使用 [Stylus](//learnboost.github.io/stylus/) 缩写 CSS*

### 语义化命名

命名应该是该元素的功能或通用的名称。

    // 不推荐
    .button-1 {}
    .button-blue {}

    // 推荐
    .button-info {}
    .button-primary {}

### 命名风格

越简越好，但前提是足够表达涵义，既能有助于理解，也能提高代码效率。

    // 不推荐
    .navigation {}
    .hd {}

    // 推荐
    .nav {}
    .header {}

使用中杠/连接号来进行组合命名

    // 不推荐
    .navitem {}
    .navItem {}
    .nav_item {}

    // 推荐
    .nav-item {}

### 类选择器

避免同时使用标签、id 和 class 作为定位一个元素选择器，尽量减少选择器的层级。

    // 不推荐
    ul.nav {}
    .nav .nav-item .nav-subitem .nav-link {}

    // 推荐
    .nav {...}
    .nav-subitem-link {}

# HACKS

尽管无可避免在处理兼容问题上使用到各种各样的 hacks，但是良好的结构能避免部分问题的出现。

尽量避免使用 **CSS Filters**。

### 尽量连写

适当的使用属性连写，提高代码可读性和效率。

    // 不推荐
    font-weight: bold;
    font-size: 12px;
    line-height: 1.5;
    font-family: arial;

    // 推荐
    font: 700 12px/1.5 arial;

### 0 和单位

属性值为 0 的情况下，可省略单位。

    // 不推荐
    margin: 0px;

    // 推荐
    margin: 0;

### 小数点

小数点前的 0 可省略。

    // 不推荐
    padding: 0.8em;

    // 推荐
    padding: .8em;

### 十六进制

可能的情况下用 3 个字符来表达 6 个字符的信息。

    // 不推荐
    color: #aabbcc;

    // 推荐
    color: #abc;

### URL 的引用

忽略括号中的引号 「""」或「''」。

    // 不推荐
    background-image: url("vip.png");
    background-image: url('vip.png');

    // 推荐
    background-image: url(vip.png);

### 属性名分隔

属性与属性值之间使用一个空格来进行分隔，位于冒号之后。

    // 不推荐
    .nav {
        display:block;
    }

    // 推荐
    .nav {
        display: block;
    }

### 选择器和声明分离

选择器和声明应各占一行，多个选择器的情况下，每个选择器各占一行。

    // 不推荐
    h1, h2, h3 {
        font-weight: 700;
    }

    // 推荐
    h1,
    h2,
    h3 {
        font-weight: 700;
    }

声明与第一个大括号「{」之前应有一个空格。

    // 不推荐
    h1{
        font-weight: 700;
    }

    h1
    {
        font-weight: 700;
    }

    // 推荐
    h1 {
        font-weight: 700;
    }

### 规则分离

每个声明里的规则都应该各占一行。

    // 不推荐
    .nav {
        display: block;width: 100px;height: 100px;
    }

    // 推荐
    .nav {
        display: block;
        width: 100px;
        height: 100px;
    }

### 注释

请编写简明的注释，且注明模块中的各种状态；若模块中存在继承，请务必注明。
