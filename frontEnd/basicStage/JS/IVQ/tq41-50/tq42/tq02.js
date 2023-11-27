console.log(this);

function fn1() {
	'use strict'; // 函数环境内严格模式
	console.log(this);
}

function fn2(){
	console.log(this);
}

fn1();
fn2();
