"use strict";
exports.__esModule = true;
exports.tests = void 0;
var obj = {
    name: "oleg",
    age: 23,
    value: function () {
        return "".concat(this.name, " - ").concat(this.age);
    }
};
function squareSomething(numb) {
    return Math.pow(numb, 2);
}
function tests(func) {
    console.log(func(3));
}
exports.tests = tests;
function mergeTwoLists(list1, list2) {
    var arr = list1;
    return arr;
}
console.log(mergeTwoLists([1, 23, 34], [1, 23, 4]));
