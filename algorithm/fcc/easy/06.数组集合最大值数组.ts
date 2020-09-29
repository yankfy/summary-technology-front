let arr = [[4, 5, 1, 3], [13, 27, 18, 26], [32, 35, 37, 39], [1000, 1001, 857, 1]];

function largest(arr:Array<any>) {
   return arr.map(item=>Math.max.apply(null,item)) // 获取数组中的最大值
}

console.log(largest(arr))