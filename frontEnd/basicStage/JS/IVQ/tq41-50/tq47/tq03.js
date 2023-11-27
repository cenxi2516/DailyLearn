// 实现Math.abs

const abs = (value) => {
    // 将value值转换为数值
    value = +value;
    // 若是value值为NaN，则返回NaN
    if (Number.isNaN(value)) return NaN;

    return value < 0 ? -value : value;
};
