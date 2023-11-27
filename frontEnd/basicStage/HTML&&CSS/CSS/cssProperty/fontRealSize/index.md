# 文字实际大小

> `fonst-size`设置的是字体相对大小。

文字顶边到文字底边的距离，是**文字的实际大小**，这块区域称为**内容区(content-area)**。

文字背景会覆盖文字content-area区域。

文字的实际大小计算：

```
文字实际大小 = (字体的实际大小 / 字体的相对大小) * font-size;
```

![content-area](./imgs/content-area.png)