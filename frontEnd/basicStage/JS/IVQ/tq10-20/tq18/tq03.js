function test(){
	var num = 100;
	function a(){
		num++;
		console.log(num)
	}

	function b(){
		num--;
		console.log(num);
	}

	return [a, b];
}

var myArr = test();
myArr[0]();
myArr[1]();
