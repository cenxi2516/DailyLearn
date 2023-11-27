// 最新继承
const inherit = (ChildClass, ParentClass) => {
    Object.setPrototypeOf(ChildClass.prototype, ParentClass.prototype);
};
