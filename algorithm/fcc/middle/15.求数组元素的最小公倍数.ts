//求数组元素的最小公倍数
/*依次求出前两个数的最小公倍数，并将求出的最小公倍数放入数组，重复前面的过程*/
function smallestCommons(arr) {
    let [maxNum,minNum] = [Math.max.apply(null,arr),Math.min.apply(null,arr)];
    let newArr=[];
    for (let i = minNum; i <=maxNum; i++) {
    	newArr.push(i);
    }
    //循环法求最小公倍数
    function scm(m,n){
    	let min=Math.min(m,n),max=Math.max(m,n);
    	let i=1;
    	while(i<=max){
    		let temp=min*i;
    		if(temp%max===0){
    			return temp;
    		}
    		i++;
    	}
    };

    let scms=newArr.reduce(function(prev,cur,index,arr){
        console.log(prev,cur)
    	return scm(prev,cur);
    },8);
    return scms;

}


console.log(smallestCommons([1,5]));
