// 一个不可扩展的空对象，也是被密封的，被冻结的。
const obj = Object.preventExtensions({});
console.log(Object.isExtensible(obj));
console.log(Object.isSealed(obj));
console.log(Object.isFrozen(obj));
console.log('==='.repeat(20));

// 一个不可扩展的对象，所有属性描述符的configurable都为false，则是被密封的
const obj1 = Object.preventExtensions({
    a: '1'
});
console.log(Object.isExtensible(obj1));
console.log(Object.isSealed(obj1));
Object.defineProperty(obj1, 'a', {
    configurable: false
});
console.log(Object.isSealed(obj1));
console.log('==='.repeat(20));

// 一个不可扩展的对象中，所有属性描述符的configurable为false，所有数据属性描述符的writable为false，则对象是被密封的，被冻结的
const b = 0;
const obj2 = Object.preventExtensions({
    a: 0,
    set b(val) {
        b = val;
    },
    get b() {
        return b;
    }
});
console.log(Object.isExtensible(obj2));
Object.defineProperties(obj2, {
    a: {
        configurable: false,
        writable: false
    },
    b: {
        configurable: false
    }
});
console.log(Object.isSealed(obj2));
console.log(Object.isFrozen(obj2));
