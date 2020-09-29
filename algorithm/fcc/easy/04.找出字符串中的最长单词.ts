let longWord = "The quick brown fox jumped over the lazy dog";

function findLongestWord(str) { 
    let len = 0;
    str.split(' ').forEach(item => {
        len = item.length > len ? item.length : len
    })
    return len;
}
console.log(findLongestWord(longWord));

// (Array.prototype as any).myMap = function (fn) {//ES5之前不支持数组迭代方法，自定义一个迭代方法
//     var ary = [];
//     if (Array.prototype.map) {//如果有原生迭代map方法就直接调用
//         ary = this.map(fn);
//     } else {
//         for (var i = 0; i < this.length; i++) {
//             ary[i] = fn.apply(null, [this[i], i, this]);
//         }
//     }
//     return ary;
// }

// function findLongestWord(str) {
//     var arr = str.split(" ");//将句子分割成数组
//     var lenArr = arr.myMap(function (item, index, array) {//使用map方法返回数组每项长度
//         return item.length;
//     });
//     return Math.max.apply(null, lenArr);//借用apply求最大值
// }
// console.log(findLongestWord("The quick brown fox jumped over the lazy dog"));