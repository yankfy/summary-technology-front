let lowerCaseWord = "the quick brown fox jumped over the lazy dog";

function upperCaseWord(str: string) {
    let arr = str.split(' ')
    let ass = arr.map(item => { item.toLowerCase(); return item[0].toUpperCase() + item.slice(1) });
    return ass.join(" ");
}

console.log(upperCaseWord(lowerCaseWord))