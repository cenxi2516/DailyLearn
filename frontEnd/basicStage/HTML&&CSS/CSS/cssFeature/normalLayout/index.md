# 常规流

> **盒模型：**规定单个盒子的规则。
>
> **视觉格式化模型：**规定多个盒子在页面上的排列规则（布局规则）。

- 视觉格式化模型，将布局规则分为三种方式：常规流、浮动、定位。
- 所有元素，默认情况下，都属于常规流布局。



## 常规流布局

> 总体规则：块盒独占一行，行盒水平依次排列。

- **包含块：** 所有盒子都有它的包含块，包含块决定了盒子的活动区域（盒子的尺寸和位置）。

- 常规流布局、相对定位布局、浮动布局的盒子，包含块为距离盒子最近的父级块盒（行块盒）的内容盒。
- 固定定位布局的盒子，包含块为浏览器窗口（视口）。
- 绝对定位布局的盒子，包含块为距离盒子最近的、已定位的父级盒子的填充盒。若是所有的父级盒子都未定位，则包含块为页面首屏区域。



**块盒特性**：

- 块盒的总宽度（内容区宽度 + 填充区宽度 + 边框区宽度 + 外边距宽度）等于包含块的宽度。
- 若是块盒的总宽度小于包含块的宽度，则包含块的剩余宽度，由浏览器分配给`margin-right`。
- 盒模型所有尺寸的默认值：
  - `width: auto;`、`height: auto;`
  - 每个方向上的`padding`皆为0。
  - 每个方向上的`border`宽度皆为0。
  - 每个方向上的`margin`皆为0。
- 块盒在常规流下`width`值为`auto`，表示吸收包含块剩余宽度。
- 盒子在脱离常规流下`width`值为`auto`，表示自适应内容宽度。
- 块盒在常规流下`margin`值为`auto`，左右`margin`表示吸收包含块剩余宽度，上下`margin`为0。
- 块盒在常规流下同时设置`width` 和 `margin`的值为`auto`，由于`width`吸收包含块剩余宽度的优先级强于`margin`，因此`width`占用包含块所有剩余宽度，`margin`各个方向皆为0。
- 块盒在常规流下，`width`设置明确的宽度，左右`margin`设置为`auto`，则块盒在包含块活动区域内水平居中显示。
- 任何情况下，`height`值为`auto`，皆表示自适应内容高度（盒子的高度由内容决定）。



**百分比**：

- 任何情况下，`width`、`padding`、`margin`值为百分比，相对于包含块的宽度。
- 任何情况下，`height`值为百分比，相对于包含块的高度。
  - 若是包含块的高度是由子元素内容决定的（包含块`height`值为`auto`），则盒子的`height`设置百分比无效。
  - 若是包含块的高度不是由子元素内容决定的，则盒子的`height`设置百分比有效。
- 盒子的`font-size`值为百分比，相对于父盒子对应的属性。
- 盒子的`vertical-align`值为百分比，相对于当前盒子的`line-height`属性。
- 盒子的`border-radius`值为百分比，相对于当前盒子边框盒的宽度或高度。
- 盒子的`transform`中的`translate`值为百分比，相对于当前盒子边框盒的宽度或高度。
- 盒子的`background-position`值为百分比，相对于当前盒子填充盒的宽度或高度。（默认情况下盒子的`background-origin`值为`padding-box`）




