// Number(对象) ==> 数值
// String(对象) ==> 字符串
// 对象 * 数值 ==> 数值
// 对象 + 字符串 ==> 字符串
const obj3 = {
    valueOf() {
    	console.log('valueOf');
        return this;
    },
    toString() {
    	console.log('toString');
        return '6';
    }
};

const num = Number(obj3);
const str = String(obj3);

console.log(num, typeof num);
console.log(str, typeof str);
console.log(obj3 * 2);
console.log(obj3 + '');
