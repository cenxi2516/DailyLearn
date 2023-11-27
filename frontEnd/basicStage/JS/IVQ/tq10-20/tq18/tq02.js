function a(){
	var num = 100;
	function b(){
		num++;
		console.log(num);
	}

	return b;
}


var demo = a();
demo();
demo();
