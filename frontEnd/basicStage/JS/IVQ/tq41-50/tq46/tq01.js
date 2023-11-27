//	实现isFinite
function myIsFinite(value) {
    // 将value转换为数值
    value = +value;
    // 检测value是否是Infinity、-Infinity、NaN
    return ![Infinity, -Infinity, NaN].includes(value);
}
