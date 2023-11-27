// 实现Number.isFinite
Number.myIsFinite = (value) => {
    // 若是value不是数值，则返回false
    if (typeof value !== 'number') return false;
    // 检测是否是NaN、Infinity、-Infinity
    return ![NaN, Infinity, -Infinity].includes(value);
};
