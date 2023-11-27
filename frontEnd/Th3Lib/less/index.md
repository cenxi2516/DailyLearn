# Less语法

> [中文官网](https://less.bootcss.com/)
>
> 在less中依然可以书写css语法。

## 快速入门

### 变量（Variables）

> **变量定义**：`@变量名: 值;`
>
> **变量特征**(feature)：
>
> - 具有作用域
> - 懒加载：可以先使用后定义。
>
> **变量使用**：`@变量名`

```less
@width: 10px;
@height: 20px;

#header {
    width: @width;
    height: @height;
}
```



### 混合（Mixins）

> **混合定义**：
>
> ```less
> .混合名() { // lessc编译后，会被删除
>     // css 样式
> }
> 
> .混合名 { 
>     // css 样式
> }
> 
> #混合名() { // lessc编译后，会被删除
>     // css样式
> }
> 
> #混合名 {
>     // css样式
> }
> ```
>
> **混合使用**：`.混合名()`

```less
.bordered {
    border-top: 1px dotted #000;
  	border-bottom: 2px solid #000;
}

.header {
    color: #f00;
    .bordered();
}
```



### 嵌套（Nesting）

>嵌套中`&`表示所有父级选择器的占位符。

```less
#header {
    color: #000;
    .navigation {
        font-size: 12px;
    }
    .logo {
        width: 300px;
    }
}

.clearfix {
    display: block;
    zoom: 1;
    
    &::after {
        content: '';
        display: block;
        clear: both;
        font-size: 0;
        height: 0;
        visibility: hidden;
    }
}
```



### 运算（Operations）

> **算术运算符**：`+`、`-`、`*`、`/`可以对任何**数字**、**颜色**或**变量**进行运算。
>
> **算术运算符在加、减或比较之前会进行单位换算。如果单位换算无效或失去意义，则忽略单位。**
>
> **计算的结果以最左侧操作数的单位类型为准。**

```less
@base: 5%;
@filter: @base * 2; // 10%
@other: @base + @filter; // 15%

@var: 50vh / 2;
@width: calc(50% + (@var - 20px)); // calc(50% + (25vh - 20px))
```





### 函数（Functions）

```less
@red: #f00;
@otherRed: darken(@red, 10%);
```



### 命名空间和访问符

```less
#bundle() {
    .button {
        display: block;
        border: 1px solid #000;
        background-color: #00f;
        &:hover {
            background-color: #fff;
        }
    }
}

.header a {
    color: #ff0;
    #bundle.button();
}
```



### 映射（Maps）

```less
#colors() {
    primary: #00f;
    secondary: #0f0;
}

.button {
    color: #colors[primary];
    border: 1px solid #colors[secondary];
}
```



### 作用域（Scope）

```less
@var: #f00;

#page {
    #header {
        color: @var;
    }
    @var: #f0f;
}
```



### 注释（Comments）

```less
// 单行注释

/*
	多行注释
*/
```



### 导入（Importing）

>可以导入less文件，也可以导入css文件。
>
>导入的文件是`.less`扩展名，则可以将扩展名省略掉。

```less
@import 'library'; // 导入 library.less
@import 'typo.css';
```





































