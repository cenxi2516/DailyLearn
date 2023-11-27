function test() {
    var a = 123;
    console.log(eval('(function(){return a})();'));
    return new Function('return a')();
}

var a = 234;

console.log(test());
