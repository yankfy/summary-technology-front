function uniteUnique(arr,...arg) {
	let result=[];
	result=arg.reduce(function(prev,cur,index,arg){
		for (var i = 0; i < cur.length; i++) {
			if (prev.indexOf(cur[i])==-1) {
				prev.push(cur[i]);
			}
		}
		return prev;
	});
  return result;
}

console.log(uniteUnique([1, 3, 2], [5, 2, 1, 4], [2, 1]));