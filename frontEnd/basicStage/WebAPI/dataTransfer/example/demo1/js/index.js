let dragged;

/* 在可拖动的目标上触发的事件 */
const source = document.getElementById("draggable");
const isDraggable = dom => dom.draggable;

source.addEventListener("drag", (event) => {
    console.log("dragging");
});

source.addEventListener("dragstart", (event) => {
    // 保存被拖动元素的引用
    dragged = event.target;
    // 设置为半透明
    event.target.classList.add("dragging");
});

source.addEventListener("dragend", (event) => {
    // 拖动结束，重置透明度
    event.target.classList.remove("dragging");
});

/* 在放置目标上触发的事件 */
const target = document.getElementById("droptarget");
const isTargetArea = (targetDom, classname) => targetDom.classList.contains(classname);

target.addEventListener("dragover", (event) => {
    // 阻止默认行为以允许放置
    event.preventDefault();
});

target.addEventListener("dragenter", (event) => {
    // 在可拖动元素进入潜在的放置目标时高亮显示该目标
    if (isTargetArea(event.target, "dropzone")) {
        event.target.classList.add("dragover");
    }
});

target.addEventListener("dragleave", (event) => {
    // 在可拖动元素离开潜在放置目标元素时重置该目标的背景
    if (isTargetArea(event.target, "dropzone")) {
        event.target.classList.remove("dragover");
    }
});

target.addEventListener("drop", (event) => {
    // 阻止默认行为（会作为某些元素的链接打开）
    event.preventDefault();
    // 将被拖动元素移动到选定的目标元素中
    if (isTargetArea(event.target, "dropzone")) {
        event.target.classList.remove("dragover");
        dragged.parentNode.removeChild(dragged);
        event.target.appendChild(dragged);
    }
});
