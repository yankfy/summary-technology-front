//从对象数组中查找拥有特殊键值的对象
function whereAreYou(collection, source) {
  let map = new Map;
  collection.forEach(element => {
    Object.keys(element).forEach(key => {
      map.set(JSON.stringify({
        [key]: element[key]
      }), element);
    })
  });
  console.log(new Array(map.get(JSON.stringify(source))))
  return new Array(map.get(JSON.stringify(source)));
}

whereAreYou([{
  first: "Romeo",
  last: null
}, {
  first: "Mercutio",
  last: null
}, {
  first: "Tybalt",
  last: "Capulet"
}], {
  last: null
});