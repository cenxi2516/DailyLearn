// 实现Math.cbrt
const cbrt = (value) => {
    // 将value转换为数值
    value = +value;
    // 若是value值为NaN、Infinity、-Infinity，则返回
    if (!Number.isFinite(value)) return value;

    const calcResult = Math.abs(value) ** (1 / 3);
    // 一个正值的立方根为正数，一个负数的立方根为负值，0的立方根为0
    return value <= 0 ? -calcResult : calcResult;
};
