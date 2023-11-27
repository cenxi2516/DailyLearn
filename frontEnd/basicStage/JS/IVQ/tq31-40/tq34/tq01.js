/**
 * 实现Object.freeze，冻结对象
 * @param  {Any} data 任何数据
 * @return {Any}      传递实参数据
 */
Object.myFreeze = (data) => {
    // 若是原始值，返回原始值
    if (!['object', 'function'].includes(typeof data) || data === null) return data;
    // 对象被密封
    Object.seal(data);
    // 获取对象中所有属性
    const allKeys = Reflect.ownKeys(data);
    const descriptors = Object.getOwnPropertyDescriptors(data);
    // 过滤 writable已经为false，以及访问器属性
    const newDescriptor = {
        writable: false
    };
    const newDescriptors = allKeys.reduce((newDescriptors, prop) => {
        const descriptor = descriptors[prop];
        // 过滤访问器属性、不可写属性
        if (!(Object.hasOwn(descriptor, 'set') || !descriptor.writable)) newDescriptors[prop] = newDescriptor;

        return newDescriptors;
    }, {});

    console.log(newDescriptors);
    Object.defineProperties(data, newDescriptors);

    return data;
};
