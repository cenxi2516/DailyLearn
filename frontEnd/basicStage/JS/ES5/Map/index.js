const Entries = Symbol('Entries');
const isEqual = (a, b) => Object.is(a, b) || a === b;
const getIndex = (arr, key) => arr.findIndex(item => isEqual(item.key, key));

class MyMap {
    [Entries] = [];
    constructor(iterable = []) {
        for (const data of iterable) {
            if (typeof data !== 'object' || data === null) {
                throw new TypeError(`Iterator value ${data} is not an entry object`);
            }

            const {
                0: key,
                1: value
            } = data;

            this.set(key, value);
        }
    }

    has(key) {
        return getIndex(this[Entries], key) > -1;
    }

    set(key, value) {
        const index = getIndex(this[Entries], key);
        if (index > -1) {
            this[Entries][index].value = value;
        } else {
            this[Entries].push({
                key,
                value
            });
        }

        return this;
    }

    get(key) {
        const index = getIndex(this[Entries], key);
        if (index <= -1) return;

        return this[Entries][index].value;
    }

    delete(key) {
        const index = getIndex(this[Entries], key);
        if (index <= -1) return false;

        this[Entries].splice(index, 1);

        return true;
    }

    clear() {
        this[Entries].length = 0;
    }

    forEach(callback) {
        this[Entries].forEach(({
            key,
            value
        }) => callback(value, key, this));
    }

    *[Symbol.iterator]() {
        for (const {
                key,
                value
            } of this[Entries]) {
            yield [key, value];
        }
    }

    * keys() {
        for (const {
                key
            } of this[Entries]) {
            yield key;
        }
    }

    * values() {
        for (const {
                value
            } of this[Entries]) {
            yield value;
        }
    }

    get size() {
        return this[Entries].length;
    }
}

const MyMapSymbolIteratorDescriptor = Object.getOwnPropertyDescriptor(MyMap.prototype, Symbol.iterator);

Object.defineProperties(MyMap.prototype, {
    [Symbol.toStringTag]: {
        configurable: true,
        value: 'MyMap'
    },
    entries: MyMapSymbolIteratorDescriptor
});

const map = new Map([{
        0: 'a',
        1: 'b'
    },
    ['c', 'd'], {
        e: 'f',
        *[Symbol.iterator]() {
            const keyAndValues = Object.entries(this);
            for (const [key, value] of keyAndValues) {
                yield key;
                yield value;
            }
        }
    }
]);
console.log(map);
map.forEach((key, value, collection) => console.log(key, value, collection));

const myMap = new MyMap([{
        0: 'a',
        1: 'b'
    },
    ['c', 'd'], {
        e: 'f',
        *[Symbol.iterator]() {
            const keyAndValues = Object.entries(this);
            for (const [key, value] of keyAndValues) {
                yield key;
                yield value;
            }
        }
    },
]);
console.log(myMap);
myMap.forEach((key, value, collection) => console.log(key, value, collection));
