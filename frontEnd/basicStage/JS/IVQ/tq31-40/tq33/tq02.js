/**
 * 实现Object.isSealed()，是否被密封的
 * @param  {Any} data 任何数据
 * @return {Boolean}  true表示被密封的，false表示未被密封的
 */
Object.myIsSealed = (data) => {
    // 若是原始值，直接返回false，原始值不可变
    if (!['object', 'function'].includes(typeof data) || data === null) return false;
    // 判断是否可扩展以及原型能否被修改
    if (Object.isExtensible(data)) return false;
    // 判断对象中所有属性描述符的configurable是否都为false
    const descriptors = Object.getOwnPropertyDescriptors(data);
    const allKeys = Reflect.ownKeys(data);
    const isSealed = allKeys.every((prop) => !descriptors[prop].configurable);

    return isSealed;
};
