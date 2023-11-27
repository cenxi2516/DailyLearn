// 实现Math.max
const max = (...restArgs) => {
    // 若是未传递任何参数，则返回-Infinity
    if (!restArgs.length) return -Infinity;

    let maxValue = -Infinity; // 若是比-Infinity要大，则是最大值
    // 将传递的参数值转换为数值
    for (const value of restArgs) {
        const numValue = +value;
        // 若是转换为数值，为NaN，则返回NaN
        if (Number.isNaN(numValue)) return NaN;
        // 若是numValue比maxValue大，则将numValue赋值给maxValue
        numValue > maxValue && (maxValue = numValue);
    }

    return maxValue;
};
