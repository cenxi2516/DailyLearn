/**
 * 实现Object.prototype.propertyIsEnumerable
 * 检测指定属性是否是对象自身可枚举属性
 * @param  {Any} prop 字符串值或Symbol值
 * @return {Boolean}      true表示对象自身属性可枚举，false表示对象自身不存在或不可枚举
 */
Object.prototype.myPropertyIsEnumerable = function(prop) {
    'use strict';
    // 若是this指向为null或undefined，则报TypeError
    if ([null, undefined].includes(this)) throw new TypeError('Cannot convert undefined or null to object');
    // 将prop转换为字符串
    prop = String(prop);
    // 检测this自身中是否存在prop
    if (!Object.hasOwn(this, prop)) return false;

    const {
        enumerable
    } = Object.getOwnPropertyDescriptor(this, prop);

    return !!enumerable;
};
