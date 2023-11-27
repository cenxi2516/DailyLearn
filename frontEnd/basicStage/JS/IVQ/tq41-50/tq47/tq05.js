// 实现Math.sign

const sign = (value) => {
    // 将value值转换为数值
    value = +value;
    // 若value为NaN，则返回NaN
    if (Number.isNaN(value)) return NaN;
    // 若value为0，则返回0
    if (value === 0) return 0;
    // 若value为正数，则返回1
    if (value > 0) return 1;
    // 若是value为负数，则返回-1
    return -1;
};
