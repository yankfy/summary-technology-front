function findElement(arr, func) {
    var num=arr.filter(function(item,index,arr){
        return func(item);
    });
    return num[0];
  }
  
  console.log(findElement([1, 2, 3, 4], function(num){ return num % 2 === 0; }));