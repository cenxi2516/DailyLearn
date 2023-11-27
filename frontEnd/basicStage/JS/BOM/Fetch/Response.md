# Response

> 服务器响应**`Response对象`**，可用于模拟服务器响应的`Response对象`。

```js
new Response(body[, config]);
```

## 参数

| 参数         | 是否必需 | 数据类型 | 描述           |
| ------------ | -------- | -------- | -------------- |
| **`body`**   | 是       |          | 响应体（数据） |
| **`config`** | 否       | 对象     | **响应配置**   |



### 案例：模拟请求超时响应

```js
const response = new Response('[]', {
    statusText: 'Request timed out, please try again',
    status: 404
});
```

