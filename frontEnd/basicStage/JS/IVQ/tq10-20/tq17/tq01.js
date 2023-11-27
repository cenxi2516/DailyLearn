function a(){
	function b(){
		var bb = 234;
		console.log(aa);
		aa = 0;
	}
	var aa = 123;
	console.log(aa);
	b();
	console.log(aa);
}

var aa = 100;
a();
console.log(aa);
