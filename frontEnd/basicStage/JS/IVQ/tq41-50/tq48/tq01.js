// 实现String.prototype.at(index)
/**
 * 处理索引值为负整数
 * @param  {Number} indexLen 索引值长度，例如：数组长度、字符串码元数量
 * @param  {Number} curIndex 当前索引值
 * @return {Number}          处理后索引值
 */
const indexProcess = (indexLen, curIndex) => {
    // curIndex为0或正整数, 则返回curIndex
    // curIndex为负整数，则返回indexLen + curIndex
    return curIndex >= 0 ? curIndex : indexLen + curIndex;
};

String.prototype.myAt = function(index) {
	return this[indexProcess(this.length, index)];
};
