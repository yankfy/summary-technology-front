function truncateString(str, num) {

	if(str.length<=num){
		return str;
	}
	else{
		return (num<=3)?(str.slice(0,num)+"..."):(str.slice(0,num-3)+"...");
	}

}
console.log(truncateString("A-tisket a-tasket A green and yellow basket", 11));