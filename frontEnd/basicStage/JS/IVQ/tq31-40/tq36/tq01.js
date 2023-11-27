/**
 * 实现Object.prototype.isPrototypeOf
 * 检测一个对象是否在另一个对象的原型链中
 * @param  {Any} obj 任何数据
 * @return {Boolean}     存在返回true，不存在返回false
 */
Object.prototype.myIsPrototypeOf = function(obj) {
    'use strict';
    // 原始值，直接返回false
    if (!['object', 'function'].includes(typeof obj) || obj === null) return false;
    // this为undefined或null，则报TypeError
    if ([null, undefined].includes(this)) throw new TypeError('Cannot convert undefined or null to object');
    // 原型查找
    let curPrototype = obj;
    while (curPrototype = Object.getPrototypeOf(curPrototype)) {
        if (this === curPrototype) return true;
    }

    return false;
};
