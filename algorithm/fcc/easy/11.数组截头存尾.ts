
function slasher(arr:Array<number>, howMany:number) {
    arr.splice(0,howMany);
    return arr;
  }
  console.log(slasher([1, 2, 3], 2));