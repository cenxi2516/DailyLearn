// 实现Math.trunc

const trunc = (value) => {
    // 将value值转换为数值
    value = +value;
    // 若是value值为NaN、Infinity、-Infinity，则直接返回
    if (!Number.isFinite(value)) return value;

    return value << 0;
};
