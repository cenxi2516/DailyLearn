/**
 * 实现Number.isNaN
 * @param  {Number} num 数值
 * @return {Boolean}     true表示是NaN，false表示不是NaN
 */
Number.myIsNaN = (num) => {
    // 非数值，直接返回false
    if (typeof num !== 'number') return false;

    return num !== num;
};
