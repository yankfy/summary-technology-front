let allStr = 'abcdefg';
let targetStr = 'efh';

function confirmEnding(str, target) {
    let length = target.length;
    return str.slice(-length) === targetStr;
}

console.log(confirmEnding(allStr, targetStr));