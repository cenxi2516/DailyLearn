const obj = {
    a: 1,
    b: 2,
    [Symbol.for('c')]: 3
};

console.log(obj.a);
console.log(obj.b);
console.log(obj[Symbol.for('c')]);

console.log('a' in obj);
console.log('b' in obj);
console.log(Symbol.for('c') in obj);
console.log(String(Symbol.for('c')) in obj);
console.log(Object.getOwnPropertyDescriptor(obj, Symbol.for('c')));
console.log(Object.getOwnPropertyDescriptor(obj, String(Symbol.for('c'))));
