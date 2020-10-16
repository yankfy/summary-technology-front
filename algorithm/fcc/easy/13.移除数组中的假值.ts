function bouncer(arr) {
	var newArr=arr.filter(function(item,index,arr){
		return new Boolean(item)!=false;
	});
	
	return newArr;
}

console.log(bouncer([7, "ate", "", false, 9]));