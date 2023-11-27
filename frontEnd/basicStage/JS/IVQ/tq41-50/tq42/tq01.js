'use strict'; // 全局严格模式

console.log(this);

function fn1(){
	console.log(this);
}

fn1();
