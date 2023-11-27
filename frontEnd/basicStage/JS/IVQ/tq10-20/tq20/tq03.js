function Person(name, age, sex) {
    var a = 0;
    this.name = name;
    this.age = age;
    this.sex = sex;

    function sss() {
        a++;
        console.log(a);
    }

    this.say = sss;
}

var oPerson = new Person();
oPerson.say();
oPerson.say();
var oPerson1 = new Person();
oPerson1.say();
