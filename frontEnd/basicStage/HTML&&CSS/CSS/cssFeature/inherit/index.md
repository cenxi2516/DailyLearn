# css继承性

> 1. css继承性
>    1. css继承定义
>    2. 那些css属性具有继承
> 2. css预设属性值



## css继承性

> **css继承：**指的是子元素会继承父元素的某些css属性。
>
> - 并不是所有的css属性都具有继承性。
> - 一般与字体、文本内容、列表相关的css属性具有继承性。而与盒子模型相关的css属性不具有继承性。
> - `font-`、`text-`、`line-`、`word-`、`letter-`、`color`、`list-style-`皆具有继承性。



## css预设属性值

> **css预设属性值：**`inherit`、`initial`、`unset`。
>
> - `inherit`：强制属性继承父元素对应属性的值，称之为强制继承。
> - `initial`：强制设置为属性初始值，称之为强制初始化。
> - `unset`：`inherit`和`initial`结合体。
>   - 若是css属性具有继承性，则相当于`inherit`。
>   - 若是css属性不具有继承性，则相当于`initial`。