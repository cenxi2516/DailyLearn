// Number(对象) ==> 数值
// String(对象) ==> 字符串
// 对象 * 数值 ==> 数值
// 对象 + 字符串 ==> 字符串
const obj2 = {
    valueOf() {
        console.log('valueOf');
        return 4;
    },
    toString() {
        console.log('toString');
        return '5';
    }
};

const num = Number(obj2);
const str = String(obj2);

console.log(num, typeof num);
console.log(str, typeof str);
console.log(obj2 * 2);
console.log(obj2 + '');
