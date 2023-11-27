// 实现charAt
String.prototype.myCharAt = function(index = 0) {
    // index默认值为0
    // index不能为负整数
    // 若是index不在[0, codeLen -1]范围内，则返回空字符串
    return this[index] ?? '';
};
