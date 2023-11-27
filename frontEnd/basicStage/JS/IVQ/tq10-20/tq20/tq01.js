var str = 'abc';
str += 1;
var test = typeof(str);
if (test.length === 6) {
    test.sign = 'typeof的返回结果可能为string';
}
console.log(test.sign);
