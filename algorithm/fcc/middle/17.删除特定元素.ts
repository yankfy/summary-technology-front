// 删除特定元素
function dropElements(arr: number[], func: (number: number) => boolean): number[] {
  while (func(arr[0]) == false) {
    arr.shift();
  }
  return arr;
}

console.log(dropElements([4, 6, 2, 8], (n: number) => n < 3));
