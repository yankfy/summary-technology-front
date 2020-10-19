/*
 * @Author: yankfy
 * @Date: 2020-10-19 23:55:38
 * @LastEditors: yankfy
 * @LastEditTime: 2020-10-19 23:56:14
 * @Description: file content
 * @FilePath: /Code/deep-learning/summary-technology-front/algorithm/fcc/easy/15.定位数据插入的位置.ts
 */
function getIndexToIns(arr, num) {
    // Find my place in this sorted array.
    var index = 0;
    arr.sort(function (value1, value2) {
        return value1 - value2;
    });
    console.log(arr);
    while (num > arr[index++]) {
    }
    return index - 1;
}

console.log(getIndexToIns([40, 60], 50));