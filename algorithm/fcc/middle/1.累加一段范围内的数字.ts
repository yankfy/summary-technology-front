/*
 * @Author: yankfy
 * @Date: 2020-10-20 23:30:16
 * @LastEditors: yankfy
 * @LastEditTime: 2020-10-20 23:37:13
 * @Description: 累加一段时间范围内的数字
 * @FilePath: /Code/deep-learning/summary-technology-front/algorithm/fcc/middle/1.累加一段范围内的数字.ts
 */
//累加一段范围内的数字
function sumAll(arr) {
    var max = Math.max.apply(null, arr); // 取数组中的最大值
    var min = Math.min.apply(null, arr);
    var newArr = [];
    var sum;
    for (var i = min; i <= max; i++) {
        newArr.push(i);

    }
    sum = newArr.reduce((prev, cur) => {
        return prev + cur;
    });

    return sum;
}
console.log(sumAll([1, 4]));