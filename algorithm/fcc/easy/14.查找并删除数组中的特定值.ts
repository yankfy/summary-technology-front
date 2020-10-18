/*
 * @Author: yankfy
 * @Date: 2020-10-18 23:35:48
 * @LastEditors: yankfy
 * @LastEditTime: 2020-10-18 23:44:03
 * @Description: 查找并删除数组的特定值
 * @FilePath: /Code/deep-learning/summary-technology-front/algorithm/fcc/easy/14.查找并删除数组中的特定值.ts
 */

function destroyer(arr, ...args) {
    var arg = Array.prototype.slice.call(arguments, 1);
    var newArr = arr.filter(function (item, index, arr) {
        return arg.indexOf(item) == -1;
    });
    return newArr;
}

destroyer([1, 2, 3, 1, 2, 3], 2, 3);