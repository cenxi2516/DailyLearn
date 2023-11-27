function MyClass() {}

Object.defineProperty(MyClass.prototype, 'x', {
    set(val) {
        this._x = val;
    },
    get() {
        return this._x;
    }
});


const objA = new MyClass();
const objB = new MyClass();

objA.x = 1;
console.log(objB.x);
