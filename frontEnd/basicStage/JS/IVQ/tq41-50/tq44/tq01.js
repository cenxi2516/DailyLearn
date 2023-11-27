// Number(对象) ==> 数值
// String(对象) ==> 字符串
// 对象 * 数值   ==> 数值
// 对象 + 字符串 ==> 字符串
const obj1 = {
    [Symbol.toPrimitive]() {
        console.log(Symbol.toPrimitive);
        return 1;
    },
    valueOf() {
        console.log('valueOf');
        return 2;
    },
    toString() {
        console.log('toString');
        return '3';
    }
};

const num = Number(obj1);
const str = String(obj1);

console.log(num, typeof num);
console.log(str, typeof str);
console.log(obj1 * 2);
console.log(obj1 + '');
