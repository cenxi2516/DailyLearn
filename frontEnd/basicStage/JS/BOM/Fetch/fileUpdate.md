# 文件上传

流程：

1. 客户端将文件数据发送给服务器。
2. 服务器保存上传的文件数据。
3. 服务器响应给客户端一个文件访问地址。

> 测试地址：http://study.yuanjin.tech/api/upload
> 键的名称（表单域名称）：`imagefile`
>
> 请求方法：`POST`
>
> 请求的表单格式：`multipart/form-data`

请求体中必须包含一个键值对，键的名称是服务器要求的名称，值是文件数据。

> HTML5中，JS仍然无法随意的获取文件数据。但是可以获取到 input 元素中，被用户选中的文件数据。

可以利用 HTML5 提供的 **`FormData`** 构造函数来创建**请求体**。

```js
const formData = new FormData([formElement]);
```



## 案例：图片上传

HTML源码：

```html
<form name="image-upload" method="POST" enctype="multipart/form-data">
    <input type="file" name="imagefile" class="image-upload">
    <button>文件上传</button>
</form>
```

JS源码：

```js
const formElement = document.querySelector('form[name="image-upload"]');
const fileInput = document.querySelector('.image-upload');

const FileTypes = ['png', 'jpg', 'jpeg', 'gif', 'webp'];
const FileMaxSize = 5242880; // 5 * 1024 * 1024, 5M

const isSupportFileType = (fileType, FileTypes) => {
    const type = fileType.replace(/[a-z]+\//i, '').toLowerCase();

    if (FileTypes.includes(type)) return [true, ''];

    return [false, `仅支持${FileTypes.join('、')}格式的文件上传`];
};


formElement.addEventListener('submit', async (e) => {
    // 阻止事件默认行为
    if (e.cancelable && !e.defaultPrevented) e.preventDefault();

    // 获取文件列表中第一个文件
    const file = fileInput.files[0];

    // 检测是否选择上传的文件
    if (!file) return console.warn('请选择一个图片文件上传');

    const {
        name, // 文件名
        type, // 文件MIME
        size // 文件字节大小
    } = file;

    // 检测上传文件的格式是否支持
    const [supportFileType, FileTypeTip] = isSupportFileType(type, FileTypes);
    if (!supportFileType) return console.warn(FileTypeTip);

    // 检测上传文件的大小是否符合限制
    if (size > FileMaxSize) return console.warn(`${name}文件大于${(FileMaxSize / 1024 / 1024).toFixed(2)}M`);


    // 创建请求体
    const formData = new FormData(formElement);
    formData.set(fileInput.name, file);

    const response = await fetch('http://study.yuanjin.tech/api/upload', {
        method: 'POST',
        body: formData
    });

    const data = await response.json();
    console.log(data);

});
```



























