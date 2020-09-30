function repeatStr(str, num) {
    let newStr = '';
    for (let i = 0; i < num; i++){
        newStr += str;
    }
    return newStr;
}

console.log(repeatStr('abc',3))