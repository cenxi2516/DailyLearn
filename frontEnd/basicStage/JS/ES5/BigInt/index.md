# BigInt

> 1. `BigInt`是ES中的构造器，但不能使用`new`关键字调用，只能作为普通函数使用。
>
> 2. `BigInt`提供了一种表示大于`Number.MAX_SAFE_INTEGER`值的方法，可以表示任意大的整数。

## 创建BigInt类型的整数值

### 方式一，bigint字面量

> 在整数值的后面直接加`n`

```js
23n // bigint类型整数值
```

## 方式二，BigInt函数

> BigInt(整数值或字符串整数值)

```js
// 传递整数值，number ==> bigint
BigInt(1234); // 1234n

// 传递字符串整数值
BigInt('1234'); // 1234n
BigInt('0b111100');
BigInt('0x1212abc');
```

### BigInt类型转换为Number类型

> Number(bigint类型整数值)

```js
Number(10n); // 10
```



## BigInt类型整数值特点

1. 不能用于`Math`对象中的方法。
2. 不能与`Number`类型的数值混合运算，必须转换成同一类型运算。
3. `BigInt`转换为`Number`，超过`Number.MAX_SAFE_INTEGER`值，可能会丢失精度。
4. `BigInt`类型是有符号整数值，不支持无符号右移运算符(`>>>`)。
5. 不支持在`BigInt`类型整数值前加正号(`+`)。



## 类型信息

```js
typeof 1n; // 'bigint'
typeof BigInt(1); // 'bigint'
typeof BigInt('123'); // 'bigint'

typeof Object(1n); // 'object'
```



## 运算

> 1. `BigInt`都是有符号的，不支持`>>>`（无符号右移）。
> 2. [为了兼容asm.js](https://github.com/tc39/proposal-bigint/blob/master/ADVANCED.md#dont-break-asmjs)，`BigInt`不支持单目（`+`）运算。（在`BigInt`整数值前加`+`号）。
> 3. 对于 除(`/`)运算符，取整，丢失小数部分。

```js
+1n; // 不支持，会报语法错误

3n / 2n; // 1n
-3n / 2n; // -1n
```



## 比较

> `BigInt` 和 `Number`不是严格相等的，是宽松相等的。（值相等，类型不等）

```js
0n === 0; // false
0n == 0; // true
```

> `Number` 和 `BigInt`可以进行比较

```js
1n < 2; // true
2n < 1; // false
2n > 1; // true
2n >= 2; // true

0n === Object(0n); // false
0n == Object(0n); // true
Object(0n) === Object(0n); // false
Object(0n) == Object(0n); // false
```



> 两者也可以混合在一个数组内，并排序。(**不推荐**)

```js
const mixed = [4n, 6, -12n, 10, 4, 0, 0n];
mixed.sort(); // 将数组中每项临时转换为字符串，进行ASCII编码升序排序
```

## 条件

```
!!0n // false
!!1n // true
```



## 构造器

> `BigInt`构造器，只能当做普通函数使用，不能做为构造函数使用(通过`new`关键字调用)。

`BigInt(整数值 或 字符串整数值)`：创建`BigInt`类型的整数值。



## 静态方法

### BigInt.asIntN

> `BigInt.asIntN`静态方法，判断`BigInt`值是否在`[-2n ** (width - 1n), 2n ** (width - 1n) - 1n] `范围内的有符号整数。
>
> - 若是在，返回`BigInt`值。
> - 若是不在，返回溢出的`BigInt`值。
>
> **应用**：检测`BigInt`值是否在指定位数的算数范围内。

```js
// 扩展BigInt原型方法
BigInt.prototype.checkWithinBit = function(n){
  const bigintNum = this.valueOf();
  return BigInt.asIntN(n, bigintNum) === bigintNum;
};
```



### BigInt.asUintN

> `BigInt.asUintN`静态方法，判断`BigInt`值是否在`[0, 2n ** width - 1]`范围内的无符号整数。
>
> - 若是在，返回`BigInt`值。
> - 若是不在，返回溢出的`BigInt`值。
>
> **应用**：检测`BigInt`值是否在指定位数的算数范围内。

```js
// 扩展BigInt原型方法
BigInt.prototype.checkWithinSignBit = function(n){
  const bigintNum = this.valueOf();
  return BigInt.asUintN(n, bigintNum) === bigintNum;
};
```



## 实例方法

### BigInt.prototype.toString

> `BigInt.prototype.toString([radix])`：将`BigInt`值转换为指定基数的字符串值。
>
> **转换规则**：
>
> 1. `n`不是字符串的一部分。
> 2. `radix`取值为`[2, 36]`，默认值为10。
> 3. 负`BigInt`值，转换为2进制的字符串，格式`-二进制数值`。

```js
1234n.toString(); // '1234'
(-1234n).toString(); // '-1234'
3n.toString(2); // '11'
(-3n).toString(2); // '-11'

// 注意
-3n.toString(); // -3
// 3n.toString() ==> '3' ==> -'3' ==> -3
```

> 与`Number.prototype.toString([radix])`功能相同。



### BigInt.prototype.valueOf

> `BigInt.prototype.valueOf()` 返回`BigInt`对象的原始值。

```js
const bigintObj = Object(1n);
const bigintNum = bigintObj.valueOf();

console.log(typeof bigintNum, bigintNum);
```



## 使用建议

### 转化

> `BigInt` 转换为 `Number` 可能会损失精度，建议在值大于`Number.MAX_SAFE_INTEGER`时使用`BigInt`类型，并且`BigInt`不再转换为`Number`。
>
> - 判断当前整数是否在最大安全整数内：`Number.isSafeInteger`。



### 在JSON中使用

> 1. 默认情况下，任何`BigInt`值都不会在JSON中序列化。
> 2. 任何`BigInt`值使用`JSON.stringify()`都会引发`TypeError`。

如果需要`BigInt`值在JSON中序列化，可以实现`toJSON`方法：

```js
BigInt.prototype.toJSON = function(){
  return this.toString();
};
```

`BigInt`值使用`JSON.stringify()`序列化，会调用其`toJSON`方法。

```js
JSON.stringify(1n); // '1'
```





























