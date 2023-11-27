// 计算数组中，最大连续增长子序列的长度，例如：[1,2,3,4,1,2,3,4,5,1,2,3]，结果为5

const getMaxLenOfSeqGrowth = (arr) => {
    const {
        length
    } = arr;
    if (length <= 1) return length;

    let maxLen = 0,
        count = 1;

    for (let i = 0, len = length; i < len; i++) {
        if (arr[i] + 1 === arr[i + 1]) {
            count++;
        } else {
            if (count > maxLen) {
                maxLen = count;
            }
            count = 1;
        }
    }

    return maxLen;
}

console.log(getMaxLenOfSeqGrowth([1,2,3,4,1,2,3,4,5,1,2,3,6,7,90,98,99,0]));
