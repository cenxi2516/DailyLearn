// 实现Math.min方法
const min = (...restArgs) => {
    // 若是未传递任何参数，返回Infinity
    if (!restArgs.length) return Infinity;

    let minValue = Infinity; // 只要比Infinity小即为最小值
    // 将传递的值转换为数值
    for (const value of restArgs) {
        const numValue = +value;
        // 若是转换数值为NaN，则返回NaN
        if (Number.isNaN(numValue)) return NaN;
        // 若是numValue比minValue小，则将numValue赋值给minValue
        numValue < minValue && (minValue = numValue);
    }

    return minValue;
};
