# Headers

> **`Headers`**分为请求头、响应头。在`Request对象`、`Response对象`中皆存在`headers`属性

```js
new Headers([config]);
```



## Headers对象

**Headers实例方法**：

| 方法                     | 描述 |
| ------------------------ | ---- |
| **`get(key)`**           |      |
| **`set(key, value)`**    |      |
| **`has(key)`**           |      |
| **`delete(key)`**        |      |
| **`append(key, value)`** |      |
| **`keys()`**             |      |
| **`values()`**           |      |
| **`entries()`**          |      |
| **`forEach`**            |      |
| **`getSetCookie()`**     |      |



### 案例

```js
const fetchProvince = async () => {
    const headers = new Headers({
        'Content-Type': 'application/json'
    });
	const request = new Request('http://study.yuanjin.tech/api/local', {
        headers
    });
	// fetch返回结果是一个Promise对象，fulfilled状态下的状态数据为一个Response对象
	const response = await fetch(request);
	// Reponse对象的json()结果是一个Promise对象，fulfilled状态下的状态数据为一个Javascript对象
	const data = await response.json();

	return data;
};

```

