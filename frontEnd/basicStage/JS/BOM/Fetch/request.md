## Request

## fetch基本使用

> 若是向`fetch`方法传递`url` 或 `config`实参，则在`fetch`方法内会创建一个`Request对象`。

```js
fetch(url[, config]);
```



## Request对象

> 若是向`fetch`方法传递 `Request对象`实参，则在`fetch`方法内不再创建`Request对象`。

```js
fetch(new Request(url[, config]));
```



### 参数([参考](./fetch.md))

| 参数         | 是否必需 | 数据类型 | 描述         |
| ------------ | -------- | -------- | ------------ |
| **`url`**    | 是       | 字符串   | **请求地址** |
| **`config`** | 否       | 对象     | **请求配置** |



### 克隆一个新的Request对象

```js
Request.prototype.clone();
```

**需要注意**：尽量保证每次请求都是一个新的`Request`对象。



### 案例

```js
const fetchProvince = async () => {
	const request = new Request('http://study.yuanjin.tech/api/local');
	// fetch返回结果是一个Promise对象，fulfilled状态下的状态数据为一个Response对象
	const response = await fetch(request);
	// Reponse对象的json()结果是一个Promise对象，fulfilled状态下的状态数据为一个Javascript对象
	const data = await response.json();

	return data;
};
```



































