/**
 * 圣杯模式继承
 */
const inherit = (() => {
	// 中间构造器
    const F = function() {};
    return (ChildClass, ParentClass) => {
        F.prototype = ParentClass.prototype;
        ChildClass.prototype = new F();
        // 避免原型链污染，影响属性描述符其他属性的默认值
        const descriptor = Object.create(null);
        descriptor.value = ChildClass;
        Object.defineProperty(ChildClass.prototype, 'constructor', descriptor);
    };
})();
