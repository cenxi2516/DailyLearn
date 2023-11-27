function test(a, b) {
    console.log(a);
    console.log(b);
    var b = 234;
    console.log(b);
    a = 123;
    console.log(a);

    function a() {}
    var a;
    b = 234;
    var b = function() {};
    console.log(a);
    console.log(b);
}


test(1);