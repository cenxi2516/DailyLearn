# CSS
- css图形：cssGraph
- css技巧：cssTechnique
- css定位：cssPosition
- css属性：cssProperty
- css特征：cssFeature
- css布局：cssLayout
- css疑点：cssProblem
- css工具库：cssToolLib


## cssGraph（CSS图形）
- 三角形：triangle
- 圆和圆角：circle
- 椭圆：ellipse


## cssTechnique（CSS技巧）
- 多行文本垂直居中：multiTextCenter
- css权重与!important：important
- 两栏布局：twoColumnLayout
- margin塌陷和margin合并：marginBug
- float影响：floatEffect
	- 父盒子高度塌陷（父盒子计算高度不考虑浮动盒子的高度）
	- 后续标准流block元素会被层叠，后续文本流（文本、inline元素、inline复合元素）、table元素、BFC元素紧贴浮动流盒子显示。
- 文本溢出处理：textOverflow
	- 单行文本溢出
	- 多行文本溢出: 基于高度截断、基于行数截断
- 文本、行盒、行块盒在块盒中，除最后一行，两端对齐：justify
- utf-8字符：utf8Char


## cssPosition（CSS定位）
- 粘性定位：stickyPosition


## cssProperty（CSS属性）
- 向::before和::after伪元素中插入内容：content
- 定义引号的样式: quotes
- 断词规则：wordBreak
- 溢出处理：overflow
- 行高细节：lineHeightDetails
- 行高的取值：lineHeight
- 边框宽度：borderWidth
- 字体参考线：fontGuides
- 文字实际大小：fontRealSize
- 行盒和行块盒垂直对齐：verticalAlign
- 基线：baseline
- 设置开始到结束的方向：direction
- 设置文字书写的方向：writingMode
- 盒子阴影：boxShadow


## cssFeature（CSS特征）
- css层叠性：cascading
- css继承性：inherit
- css属性值的计算过程：cssPropertyComputed
- 盒模型：boxModel
- 常规流布局：normalLayout
- 浮动布局：floatLayout
- 定位布局：positionLayout
- 块级格式化上下文：bfc
- 浮动的细节规则：floatDetailsRule
- 堆叠上下文：stackContext

## cssLayout（CSS布局）
- 两栏布局: twoColumn
  - 侧边栏+主内容（浮动+BFC）：asideToMainBFC
  - 主内容+侧边栏（浮动+BFC）：mainToAsideBFC
  - 伪等高布局：pseudoContour
  - 等高布局（table+table-cell）：tableContour
  - 主内容优先加载：
  		- 方式一（绝对定位，缺点：无法实现等高布局，绝对定位盒子完全脱离常规流）：mainFirstLoadTh1
  		- 方式二（table与table-cell，缺点：无法实现侧边栏在左侧）：mainFirstLoadTh2
- 三栏布局：threeColumn
	- 左侧边栏+主内容+右侧边栏（浮动+BFC）：asideToMainToAsideBFC
- 后台页面布局：backgroundPage

## cssProblem（CSS疑点）
- body背景：bodyBackground
- img元素底部空白间隙：imgBottomSpace
- 图片资源失效，img元素特性：imgFeature
- 行盒中包含行块盒或可替换元素，行盒的高度：inlineHeight

## cssToolLib（CSS工具库）
- 重置样式表：reset.css

