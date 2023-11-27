/**
 * 实现Object.seal，密封对象
 * @param  {Any} data 任何数据
 * @return {Any}      返回传递的参数
 */
Object.mySeal = (data) => {
    // 原始值，返回原始值， 不做任何处理
    if (!['object', 'function'].includes(typeof data) || data === null) return data;
    // 阻止对象不可扩展，同时不允许修改原型
    Reflect.preventExtensions(data);
    // 将对象中所有属性描述符的configurable设置为false
    // 获取对象中所有属性的描述符
    const descriptors = Object.getOwnPropertyDescriptors(data);
    // 过滤属性的configurable为false，修改会引发错误
    const allKeys = Reflect.ownKeys(data);
    const newDescriptor = {
        configurable: false
    };
    const newDescriptors = allKeys.reduce((newDescriptors, prop) => {
        const descriptor = descriptors[prop];
        if (descriptor.configurable) newDescriptors[prop] = newDescriptor;
        return newDescriptors;
    }, {});
    // 修改属性描述符的configurable为false
    Object.defineProperties(data, newDescriptors);

    return data;
};
