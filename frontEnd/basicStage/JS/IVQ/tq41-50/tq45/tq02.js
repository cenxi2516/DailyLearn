// 实现Number.isNaN
Number.myIsNaN = (value) => {
    // 若不是数值，则返回false
    if (typeof value !== 'number') return false;
    // 检测是否是NaN
    return value !== value;
};
