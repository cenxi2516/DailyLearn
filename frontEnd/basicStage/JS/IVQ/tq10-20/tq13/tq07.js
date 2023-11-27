console.log(bar());

function bar() {
    foo = 10;

    function foo() {}
    var foo = 11;
    return foo;
}