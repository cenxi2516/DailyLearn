# DataTransfer

> **DataTransfer**：https://developer.mozilla.org/zh-CN/docs/Web/API/DataTransfer
>
> **HTML拖放API**：https://developer.mozilla.org/zh-CN/docs/Web/API/HTML_Drag_and_Drop_API

- 拖拽的类型
- 拖拽的数据

## 拖拽源

> 拖拽源可以是文本、链接、图片、元素、（操作系统）文件等。
>
> **默认可拖拽源**：文本、链接（a元素）、图片(img元素)、（操作系统）文件。

### 设置元素可拖拽与不可拖拽

> **a元素**、**img元素**默认可拖拽。
>
> **draggable**是一个枚举属性，而非布尔属性。
>
> - **true**：表示可拖拽
> - **false**：表示不可拖拽
>
> 元素不可拖拽，但是元素内的文本能选中，则能拖拽。

```html
// 设置元素可拖拽
<div draggable="true"></div>

// 设置元素不可拖拽
<div draggable="false"></div>
```



## 拖拽事件

> - `dragover`事件中必须**阻止事件默认行为**，才会允许触发`drop`事件。
> - `drop`事件**阻止事件默认行为**，才能：
>   - 阻止`input`元素接收拖拽文本。
>   - 阻止某些元素链接打开。
> - 拖拽的所有事件都能**冒泡**。（**事件冒泡**）
> - 拖拽`操作系统文件`，不会触发`dragstart`和`dragend`事件。



### 拖拽项目事件

#### dragstart

> **触发时机**：鼠标按下未松开，开始移动那一瞬。
>
> **触发次数**：一次。
>
> **可以做那些事**：（拖拽初始化操作）。
>
> - 设置`effectAllowed`属性值，指定拖拽允许类型。
> - 设置拖拽数据。
> - 设置拖拽项目样式。
> - 设置拖拽图片。



#### drag

> **触发时机**：鼠标开始拖拽后。
>
> **触发次数**：每间隔一定毫秒数，触发一次，直到鼠标松开。



#### dragend

> **触发时机**：拖拽结束后触发。（**拖拽操作最后触发的事件**）
>
> **可以做那些事**：（拖拽后续处理）
>
> - 移除拖拽项目样式。
> - 判断拖拽流程是否走完（**drop事件是否触发**）。



### 目标项目事件

#### dragenter

> **触发时机**：鼠标进入目标项目。
>
> **可以做那些事**：
>
> - **给目标项目添加样式**。
> - **设置`dropEffect`属性值，指定拖拽类型**。
> - **判断是否是目标项目**
> - ...



#### dragover

> **触发时机**：鼠标进入目标项目后。
>
> **触发次数**：鼠标在目标项目中，每间隔一定毫秒数触发，直到鼠标离开目标项目或鼠标松开为止。
>
> **可以做那些事**：
>
> - **阻止事件默认行为，`drop`事件才会触发。**
> - **给目标项目添加样式。**
> - **设置`dropEffect`属性值，指定拖拽类型。**
> - **判断是否是目标项目**
> - ...



#### dragleave

>**触发时机**：鼠标离开目标项目时。
>
>**可以做那些事**：
>
>- **移除目标项目添加的样式。**



#### drop

> **触发时机**：在目标项目上松开鼠标。
>
> **可以做那些事**：（拖拽业务逻辑）
>
> - **阻止事件默认行为，避免某些元素的链接打开。**
> - **获取拖拽数据**
> - **清除拖拽数据。**
> - **业务逻辑**
> - ...



## DataTransfer实例属性

### effectAllowed

> **effectAllowed**属性，在**`dragstart`事件**中，**指定拖放操作`允许的类型`**。影响：
>
> - 拖放的鼠标效果。
> - 能否触发**drop事件**。
>
> **属性值**：
>
> - `none`: 不允许项目放下。不会**触发drop事件**。
> - `copy`：源项目拷贝。
> - `copyLink`：允许 `copy`或`link`。
> - `copyMove`：允许`copy`或`move`。
> - `link`：源项目与目标项目建立链接或联系。
> - `linkMove`：允许`link`或`move`。
> - `move`：源项目移动。
> - `all`：允许所有的操作类型。
> - `uninitialized`：未设置时的默认值，等同于`all`。

若是`effectAllowed`属性设置`none`，则不会触发`drop`事件。



### dropEffect

> **dropEffect属性**，在**`dragenter`**或**`dragover`事件**中，**指定拖放操作的类型**。影响：
>
> - 拖放的鼠标效果。
> - 能否触发**drop事件**。
>
> **属性值**：
>
> - `none`: 不允许项目放下。不会**触发drop事件**。
> - `copy`：源项目拷贝。
> - `link`：源项目与目标项目建立链接或联系。
> - `move`：源项目移动。

1. 若是`dropEffect`属性设置`none`，则不会触发`drop`事件。
2. `effectAllowed`属性值指定了`dropEffect`允许指定的操作类型。例如：

```markdown
effectAllowed属性值为: copyMove，则dropEffect属性值，只能指定：copy 或 move，否则drop事件不会触发。
```



#### 检测拖放操作是否成功

> 可以在**dragend事件**中，检测拖放操作是否成功，即：**是否成功触发drop事件**。

```js
const isDragSuccess = e => {
    const {
        effectAllowed,
        dropEffect
    } = e.dataTransfer;

    const isContainsAndEqual = new RegExp(dropEffect, 'i').test(effectAllowed);
    const isSupportAll = ['uninitialized', 'all'].includes(effectAllowed) && dropEffect !== 'none';

    return  isContainsAndEqual || isSupportAll;
};
```



### files

> **files属性**，表示拖拽操作中的**文件列表**。如果操作不包含文件，则此列表为空。(**FileList**)



### items

> **items属性**，只读，包含了拖拽操作中**所有数据传输项**。**获取数据项是异步的。**



### types

> **types属性**，只读，是一个字符串数组。包含拖拽操作中所有数据项的MIME格式。
>
> - **如果拖拽操作不包含数据**，则此数组列表为空。
> - **如果拖拽操作中包含任何文件**，则其中一个类型将是**Files**。



#### 检测拖拽操作中是否包含数据

```js
const isExistData = e => !!e.dataTransfer.types.length;
```



#### 检测拖拽操作中是否包含文件

```js
const isExistFileData = e => e.dataTransfer.types.includes('Files');
```



## DataTransfer实例方法

### setDragImage

> **setDragImage设置**拖拽图像，可以是：**img**、**canvas**、**其他元素**。
>
> **注意**：除**img元素外**，**canvas**、**其他元素**都需要加入到页面，才能作为拖拽图像。
>
> `setDragImage(拖拽图像, 鼠标在图像水平位置, 鼠标在图像垂直位置)`
>
> **注意**：图像需在`dragstart`事件之前设置好，在`dragstart`事件回调函数内直接设置拖拽图像即可

```js
const img = new Image();
img.src = '图像地址';

dragSource.addEventListener('dragstart', (e) => {
    e.dataTransfer.setDragImage(img, img.width / 2, img.height / 2); // 设置鼠标在图像中心位置
});
```



### setData

> **setData**设置**拖拽数据项（数据类型（MIME）和数据）**。`setData(format: DOMString, data: DOMString)`
>
> **注意**：
>
> - **数据类型是唯一的**，设置相同的数据类型会覆盖同一数据类型的数据。
> - **每项数据类型的数据，都为字符串类型**。
>
> **常用数据类型**：
>
> - `text/plain`：普通文本。
> - `text/html`：html文本。
> - `text/uri-list`：url文本。
> - ...

案例：设置相同数据类型的数据会覆盖。

```js
dragSource.addEventListener('dragstart', (e) => {
    e.dataTransfer.setData('text/plain', 'js');
    e.dataTransfer.setData('text/plain', 'css');
    // 最后 'text/plain' 类型的数据为：'css'
});
```



### getData

> **getData同步获取**指定类型的数据。`getData(format: DOMString)`
>
> **注意**：若是没有指定类型的数据，则返回一个空字符串。



### clearData

> **clearData**清除指定类型的数据或清空所有类型的数据。`clearData(format?: DOMString)`
>
> - `clearData()`：清除所有类型的数据。
> - `clearData(format: DOMString)`：清除指定类型的数据。











