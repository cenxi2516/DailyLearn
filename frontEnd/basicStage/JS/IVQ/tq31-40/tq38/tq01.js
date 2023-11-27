function Person(){}
Person.prototype[Symbol.toStringTag] = 'Person';

const person = new Person();

console.log(typeof person);
console.log(person.toString());

Date.prototype[Symbol.toStringTag] = 'MyDate';
const date = new Date();

console.log(Object.prototype.toString.call(date));
