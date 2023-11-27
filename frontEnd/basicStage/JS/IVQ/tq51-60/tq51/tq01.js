const str = 'abcgheijkefmn';
const substr = 'eik';


const indexOf = (str, substr, start = 0) => {
    const lenj = str.length,
        leni = substr.length;
    let index = -1;

    for (let i = 0; i < leni; i++) {
        const subChar = substr[i];

        for (let j = start; j < lenj; j++) {
            const strChar = str[j];
            if (i === 0) {
                if (subChar === strChar) {
                    index = j;
                    start = j + 1;
                    break;
                }
            } else {
                if (subChar !== strChar) {
                	start = index + 1;
                    i = -1;
                    index = -1;
                } else {
                	start = j + 1;
                }
                break;
            }
        }

        if (i === 0 && index <= -1) return -1;
    }

    return index;
};


console.log(indexOf(str,substr));
