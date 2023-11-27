// A ?? B
console.log(null ? ? 0);
console.log(undefined ? ? 0);
console.log(0 ? ? 1);
console.log(NaN ? ? 1);
console.log(false ? ? 1);
console.log('' ? ? 1);

// A?.B、A?.()
var obj = {
    a: '',
    b: undefined,
    c: null,
    d: 0,
    e: false,
    f: NaN,
    g: function() {
        return 1
    }
};

console.log(obj?.a);
console.log(obj?.a?.length);
console.log(obj?.b?.length);
console.log(obj?.c?.length);
console.log(obj?.d?.toFixed?.(2));
console.log(obj?.e?.toString?.());
console.log(obj?.f?.toString?.());
console.log(obj?.f?.abc?.());

console.log(obj?.g?.());
