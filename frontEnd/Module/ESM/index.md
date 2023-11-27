# ESM

> **CommonJS**
>
> **标准类型**：社区规范
>
> **支持环境**：node
>
> **依赖类型**：动态依赖
>
> **如何导出**：
>
> ```js
> module.exports = 导出的值;
> ```
>
> **如何导入**：
>
> ```js
> require('模块路径'); // 函数返回模块导出的值
> ```



## ES Module

> **标准类型**：官方标准
>
> **支持环境**：node、浏览器
>
> **依赖类型**：静态依赖、动态依赖

- 模块中定义的所有变量、函数、类，都不会污染全局变量，以及其他模块。

- 模块初次导入时，会运行模块中的代码，并缓存模块导出的结果。往后再次模块导入时，不再运行模块中代码，直接使用缓存中模块导入结果。（**模块导入会缓存，每个模块仅运行一次**）

- 每个模块最终导出一个**`Module`对象**。

  - **默认导出**，一个模块至多一个。
  - **具名导出**，一个模块不限。

  ```json
  // Module 对象
  {
  	default: 默认导出值,
  	a: 具名导出a的值,
  	b: 具名导出b的值,
  	...
  }

- **模块导出的语法，必须是顶级代码**。即：不能在代码块中出现模块导出。
- **模块导入**分为**静态导入**和**动态导入**。（模块初次导入会缓存）
  - 静态导入（静态依赖）：模块导入语法必须出现在模块最开始。（**同步**）
  - 动态导入（动态依赖）：`import('模块路径')`为一个函数，可以出现在任意位置。返回**Promise对象**，fulfilled状态数据为**模块导出的`Module`对象**。（**异步**）



### 浏览器支持模块化

```html
<script src="模块路径" type="module"></script>
```



### 模块导出

**ES Module**分为两种导出方式：

- **具名导出**（普通导出），可以导出多个。
- **默认导出**，只能导出一个。

**一个模块可以同时存在两种导出方式，最终会合并为一个「对象」导出**。

1. **模块常用导出**

```js
export const a = 1; // 具名导出a
export function b(){} // 具名导出b
export const c = () => {}; // 具名导出c
export class Person {} // 具名导出Person
export default {}; // 默认导出

// 最终合并成一个Module对象导出：
{
    a: 1,
    b: function(){},
    c: () => {},
    Person: class {},
    default: {}
}
```

2. **模块其他导出**

```js
const a = 2;
export {a}; // 具名导出a

const b = 3;
export {b as temp}; // 具名导出temp

const c = 4, e = 5, f = 6;
export {c as default, e, f}; // 默认导出 + 具名导出

// 最后导出一个Module对象
{
    a: 2,
    temp: 3,
    default: 4,
    e: 5,
    f: 6
}
```



### 模块导入

**ES Module**分为两种模块导入：

- **静态导入**：仅能出现在模块最开始位置，**同步导入**。（会阻塞后续代码执行，直到获取到模块导出。）
- **动态导入**：使用`import('模块路径')`函数**异步导入**。

#### 静态导入

```js
// 仅运行一次该模块，不导入任何内容
import '模块路径';

//常用 导入属性a、b，放到常量a、b中，a => a，b => b
import {a, b} from '模块路径';

//常用 导入属性default，放入常量c中，default => c
import c from '模块路径';

//常用 导入属性default、a、b，放入常量c、a、b中，default => c, a => a, b => b
import c, {a, b} from '模块路径';

//常用 将模块对象放入常量obj中
import * as obj from '模块路径';

// 导入属性a、b，放到常量temp1、temp2中
import {a as temp1, b as temp2} from '模块路径';

// 导入属性default，放入常量a中，default是关键字，不能作为标识符，必须定义别名
import {default as a} from '模块路径';

// 导入属性default、b，放入常量a、b中
import {default as a, b} from '模块路径';
```





#### 动态导入

`import('模块路径')`函数返回一个Promise对象，fulfilled状态数据为模块导出的对象。

```js
const obj = import('模块路径');

obj.then(module => {
    // module, 模块导出的数据
}).catch(reason => {
    // 模块导出异常
});
```

















