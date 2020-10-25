/*
 * @Author: yankfy
 * @Date: 2020-10-25 23:02:23
 * @LastEditors: yankfy
 * @LastEditTime: 2020-10-25 23:15:48
 * @Description: 合并两个数组的不重复元素组成新的数组
 * @FilePath: /Code/deep-learning/summary-technology-front/algorithm/fcc/middle/2.合并两个数组的不重复元素组成新的数组.js
 */
function diffArray(arr1, arr2) {

    var diff1 = arr1.filter(function (item, index, arr) {
        return !arr2.includes(item);
    });
    var diff2 = arr2.filter(function (item, index, arr) {
        return !arr1.includes(item);
    });
    return diff1.concat(diff2);
    return [...new Set([...arr1, ...arr2])]
}
console.log(diffArray([1, 2, 3, 5], [1, 2, 3, 4, 5]));