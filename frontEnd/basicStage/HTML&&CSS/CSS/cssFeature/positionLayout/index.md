# 定位布局

> **定位**：手动控制元素在包含块活动区域内的精确位置。

设置**元素定位**css属性：`position`

属性值：`static`	|  `relative`	|  `absolute`	|  `fixed`  | `sticky`

- `static` ：默认值，静态定位（未定位）。
- `relative`：相对定位。
- `absolute`：绝对定位。
- `fixed`：固定定位。
- `sticky`：粘性定位。



设置**元素位置**css属性：`top`、 `right`	、`bottom`	、`left`	

**属性值**：`auto` | `<length>` | `<percentage>`	

**适用于**：元素的 `position` 属性值为非 `static` ，即为已定位的元素。

- `auto`：默认值，计算值。
- `<length>`：长度值，可以为负长度值。
- `<percentage>`：百分比，可以为负百分比，相对于包含块的宽度或高度。



设置**元素层叠级别**css属性：`z-index`

**属性值**：`auto` | `<integer>`	

**适用于**：已定位元素。

- `auto`：默认值，计算值。
- `<integer>`： 整数值，可以为负整数。



## 相对定位(relative)

**特征**：

- 相对**盒子自身**位置进行定位。
- 未脱离常规流，依然占据常规流位置。
- 不会更改`display`属性值。
- 包含块与常规流、粘性定位、浮动布局的元素一样，为距离元素最近的父级块盒的**内容盒**。
- 不会影响其他盒子布局。
- 从盒子`margin`位置开始计算定位位置值。(现位置`margin` 到  原位置`margin`，即为定位位置值)
- **定位位置值**：
  - `top` 、`right`、`bottom`、`left` 值为 `auto`时，`auto` 计算为0。
  - `top`、`bottom`设置其中一个值时，另一个值为`bottom=-top`。
  - `left`、`right`设置其中一个值时，另一个值为`right=-left`。
  - 同时设置`left`、`right`值时，水平方向上位置以`left`值为准，`right`为设置值。
  - 同时设置`top`、`bottom`值时，垂直方向上位置以`top`值为准，`bottom`为设置值。



**应用**：

- 盒子位置的微调。
- 提升盒子层叠级别。
- 指定绝对定位的包含块。



## 绝对定位(absolute)

**特征**：

- 脱离常规流，不占据常规流位置。
- 若是父盒子高度由盒子内容决定(`height: auto`)，则绝对定位的子盒子，会导致父盒子高度坍塌。触发父盒子的BFC，在父盒子高度计算时，也不会将绝对定位的子盒子高度计算进去，但会将浮动的子盒子高度计算进去。
- 皆为块盒（会更改`display`属性值为`block`）。
- **从绝对定位盒子的`margin`开始计算定位位置距离。**
- 绝对定位的盒子，一定不会浮动。(浮动的盒子，设置绝对定位，浮动会失效（将`float`设置为`none`）)
- **定位位置值**：
  - 总体规则：
    - 水平方向上：
      - `left + margin-left + 边框盒宽度 + margin-right + right = 包含块宽度`
      - 当`left、right、width、margin-left、margin-right`值为`auto`时，吸收包含块剩余宽度的优先级：`left/right > width > margin-left/margin-right`
    - 垂直方向上：
      - `top + margin-top + 边框盒高度 + margin-bottom + bottom = 包含块高度`
      - 当`top、bottom、height、margin-top、margin-bottom`值为`auto`时，吸收包含块剩余高度的优先级：`top/bottom > height > margin-top/margin-bottom  `
  - `top、right、bottom、left`值为`auto`时，会自动计算绝对定位元素在包含块内的位置值。
- **包含块**：绝对定位的元素是否存在定位的父级元素？
  - 存在，包含块为：距离绝对定位元素最近的且已定位的父级元素填充盒。
  - 不存在，包含块为：整个网页的首屏。





## 固定定位(fixed)

> **固定定位** 与 **绝对定位** 的区别在于**包含块的不同**，其他特征都一样。

- 脱离常规流，不占常规流位置。
- 若是父盒子的高度取决于盒子内容（`height: auto`），则固定定位的子盒子，会导致父盒子高度坍塌。触发父盒子的BFC，在计算父盒子高度时，也不会将固定定位的子盒子高度算进去，但会将浮动子盒子高度算进去。
- 皆为块盒（将`display`属性值设置为`block`）。
- 固定定位的盒子，一定不会浮动。（浮动盒子，设置固定定位，浮动失效（将`float`设置为`none`））
- **从固定定位盒子的`margin`开始计算定位位置的距离。**
- **定位位置**：
  - 总体规则：
    - 水平方向上：
      - `left + margin-left + 边框盒宽度 + margin-right + right = 包含块宽度`。
      - `left、right、width、margin-left、margin-right`值为`auto`时，吸收包含块剩余宽度的优先级：`left/right > width > margin-left/margin-right`。
    - 垂直方向上：
      - `top + margin-top + 边框盒高度 + margin-bottom + bottom = 包含块高度`。
      - `top、bottom、height、margin-top、margin-bottom`值为`auto`时，吸收包含块剩余高度的优先级：`top/bottom > height > margin-top/margin-bottom`。
  - `top、right、bottom、left`的值为`auto`，会自动计算固定定位的元素在包含块内的位置值。
- **包含块**：浏览器可视窗口（视口）。





## 粘性定位(sticky)

> **粘性定位** 与 **相对定位** 区别，在于：
>
> - 计算定位位置值的**起始位置**不同。
> - 计算定位位置值**参考对象**不同。
>
> 其他特征都相同。

- 未脱离常规流，依然占据常规流位置。

- 不能更改`display`属性值。

- 不影响其他元素的布局。

- 包含块与常规流、相对定位、浮动布局的元素一样，为距离元素最近的父级块盒的内容盒。

- **计算定位位置值的起始位置为盒子`border`。**

- 相对于盒子的包含块内容盒定位。

- **定位位置值**:

  - `right`、`bottom`属性设置无效。
  - 当`left`值 大于 `margin-left`值时，水平方向上盒子距离包含块内容盒的距离以`left`值为准。
  - 当`left`值 小于或等于 `margin-left`值时，水平方向上盒子距离包含块内容盒的距离以`margin-left`值为准。

  - 当盒子 `border`  到包含块内容盒顶部的距离 大于或等于 `top`时，`top`无效。
  - 当盒子 `border` 到包含块内容盒顶部的距离 将小于 `top`时，`top`有效，相对于包含块内容盒顶部定位。



## 总结

- 默认情况下，层叠级别：定位元素 > 未定位元素。
- 相对定位、粘性定位的元素，未脱离常规流，依然占据常规流位置。
- 绝对定位、固定定位的元素，脱离常规流，不占据常规流位置。当父盒子高度取决于盒子内容时，会导致父盒子高度坍塌。
- 绝对定位、固定定位的元素，一定是块盒，一定不会浮动。
- 相对定位、绝对定位、固定定位的元素，计算定位位置值的起始位置皆为`margin`。
- 粘性定位的元素，计算定位位置值的起始位置为`border`。

