var val = window.foo || (window.foo = 'bar');

console.log(window.foo);
console.log(val);