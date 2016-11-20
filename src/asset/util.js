// 删除元素
Array.prototype.remove = function(value) {
    this.splice(this.indexOf(value), 1)
};
// 是否存在指定元素
Array.prototype.exist = function(value) {
    return this.some(val => val === value)
};