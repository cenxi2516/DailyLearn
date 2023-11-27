// 实现isNaN

function myIsNaN(value) {
    // 将value转换为数值
    value = +value;
    // 检测value是否是NaN
    return value !== value;
}
