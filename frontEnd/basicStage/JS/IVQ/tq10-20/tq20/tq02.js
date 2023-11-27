var a = 5;
function test(){
	a = 0;
	console.log(a);
	console.log(this.a);
	var a;
	console.log(a);
}

test();
new test();
