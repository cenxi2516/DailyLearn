/**
 * 实现Object.isFrozen，检测对象是否被冻结
 * @param  {Any} data 任何数据
 * @return {Any}      传递的实参值
 */
Object.myIsFrozen = (data) => {
    // 原始值，返回false
    if (!['object', 'function'].includes(typeof data) || data === null) return false;
    // 检测是否可密封
    if (!Object.isSealed(data)) return false;
    // 检测对象中除访问器属性外的所有属性描述符的writable是否为false
    const descriptors = Object.getOwnPropertyDescriptors(data);
    const allKeys = Reflect.ownKeys(data).filter(prop => !Object.hasOwn(descriptors[prop], 'set'));
    const isFrozen = allKeys.every(prop => !descriptors[prop].writable);

    return isFrozen;
};
