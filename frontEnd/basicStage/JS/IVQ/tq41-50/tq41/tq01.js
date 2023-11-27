/**
 * 模拟实现isNaN
 * @param  {Any} data 任何值
 * @return {Boolean}      true表示是NaN，false表示不是NaN
 */
const myIsNaN = (data) => {
    data = +data;

    return data !== data;
};
