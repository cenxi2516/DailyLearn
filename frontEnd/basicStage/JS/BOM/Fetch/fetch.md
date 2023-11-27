# Fetch

> 测试地址：http://study.yuanjin.tech/api/local

使用 **`fetch`** 方法向服务器异步发送网络请求。

```js
// 方式一
fetch(url[, config]);

// 方式二
fetch(request);
```



## 参数

> 该函数有两个参数

| 参数         | 是否必需 | 数据类型 | 描述         |
| ------------ | -------- | -------- | ------------ |
| **`url`**    | 是       | 字符串   | **请求地址** |
| **`config`** | 否       | 对象     | **请求配置** |

### 请求配置对象

| 字段              | 数据类型 | 值                                                           | 描述                   |
| ----------------- | -------- | ------------------------------------------------------------ | ---------------------- |
| **`method`**      | 字符串   | `GET`（**默认值**）、`POST`、`PUT`、`HEAD`、`DELETE`、`OPTIONS`、`PATCH`等 | 请求方法               |
| **`headers`**     | 对象     |                                                              | 请求头                 |
| **`body`**        | 字符串   | 请求体内容，必须匹配请求头中的`Content-Type`                 |                        |
| **`mode`**        | 字符串   | - **`cors`**：**默认值**，支持跨域请求，会在请求头中加入 `origin` 和 `referer`字段。<br>- **`no-cors`**：跨域时可能会出现问题，不会在请求头中加入`origin` 和 `referer`字段。<br>- **`same-origin`**：不支持跨域请求，仅支持同源请求。 | 请求模式（涉及跨域）   |
| **`credentials`** | 字符串   | - **`omit`**：默认值，不携带 cookie。<br>- **`same-origin`**：请求同源地址时携带 cookie。<br/>- **`include`**：请求任何地址都携带 cookie。 | 如何携带凭据（cookie） |
| **`cache`**       | 字符串   | - **`default`**：**默认值**，表示 fetch 请求之前将检查下 http 的缓存。<br>- **`no-store`**：表示 fetch 请求将完全忽略 http 缓存的存在。这意味着请求之前将不再检查下 http 的缓存，拿到响应后，它也不会更新 http 缓存。<br/>- **`no-cache`**：如果存在缓存，那么 fetch 将发送一个条件查询请求 和 一个正常的请求，拿到响应后，它会更新 http 缓存。<br>- **`reload`**：表示 fetch 请求之前将忽略 http 缓存的存在，但是请求拿到响应后，它将主动更新 http 缓存。<br>- **`force-cache`**：表示 fetch 请求不顾一切的依赖缓存，即使缓存过期了，它依然从缓存中读取，除非没有任何缓存，那么它将发送一个正常的请求。<br>- **`only-if-cached`**：表示 fetch 请求不顾一切的依赖缓存，即使缓存过期了，它依然从缓存中读取。如果没有缓存，它将抛出往常错误（该设置仅在 `mode` 为 `same-origin`时有效）。 | 缓存模式               |



## 返回值

> `**fetch**` 方法返回一个 `Promise` 对象。

- 当收到服务器响应结果后：`Promise`进入`fulfilled`状态，状态数据为`Response`对象。
- 当发生网络错误（或其他导致无法完成交互的错误，例：中断请求、请求超时、不支持跨域）时，`Promise`进入`rejected`状态，状态数据为错误信息。

### Response对象



| 成员         | 描述                                                         |
| ------------ | ------------------------------------------------------------ |
| **`ok`**     | **布尔值**，当响应的状态码在`[200,299]`时为true，否则为false。 |
| **`status`** | **正整数值**，服务器响应的状态码                             |



**获取`Response`对象的响应数据**：

| 方式         | 数据格式       | 描述                                                         |
| ------------ | -------------- | ------------------------------------------------------------ |
| **`text()`** | **文本 **      | 从响应中读取文本流，将其读完，返回一个状态数据为**字符串**的**Promise对象** |
| **`blob()`** | **二进制文件** | 从响应中读取文件的原始数据，读完整个文件，返回一个状态数据为**Blob对象**的**Promise对象** |
| **`json()`** | **JSON**       | 从响应中读取JSON格式的数据，将其读完，返回一个状态数据为**Javascript对象**的**Promise对象** |



### 案例

```js
const fetchProvince = async () => {
	// fetch返回结果是一个Promise对象，fulfilled状态下的状态数据为一个Response对象
	const response = await fetch('http://study.yuanjin.tech/api/local');
	// Reponse对象的json()结果是一个Promise对象，fulfilled状态下的状态数据为一个Javascript对象
	const data = await response.json();

	return data;
};
```





















