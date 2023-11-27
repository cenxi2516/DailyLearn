Person.prototype = {
    name: 'a',
    sayName: function() {
    	// this指向
        console.log(this.name);
    }
};

function Person() {
    this.name = 'b';
}


var person = new Person();
person.sayName();
