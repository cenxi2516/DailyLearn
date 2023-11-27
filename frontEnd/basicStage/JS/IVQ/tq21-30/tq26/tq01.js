// 非严格模式下，实现bind
Function.prototype.myBind = function(thisArgs, ...restArg) {
    // this指向调用bind的函数
    const fn = this;
    // 返回一个新的函数
    const newFn = function(...newFnRestArg) {
        const allRestArg = [...restArg, ...newFnRestArg];
        // 若是传递null 或 undefined则不改变函数内this指向
        if ([null, undefined].includes(thisArgs)) return fn(...allRestArg);
        // 若是原始值，则转换为对应的包装类对象。引用值，则是地址拷贝赋值。
        thisArgs = Object(thisArgs);
        // 将fn添加到this指向的对象中
        const fnSym = Symbol('__fn__'); // 为避免影响到对象
        thisArgs[fnSym] = fn;
        // 执行函数，得到执行结果
        const result = thisArgs[fnSym](...allRestArg);
        // 将[fnSym]从对象中移除
        delete thisArgs[fnSym];

        // 返回函数执行结果
        return result;
    };

    return newFn;
};

// 实现call
Function.prototype.myCall = function(thisArgs, ...restArg) {
    return this.myBind(thisArgs)(...restArg);
};

// 实现apply
Function.prototype.myApply = function(thisArgs, likeArr){
	return this.myBind(thisArgs)(...Array.from(likeArr));
};
