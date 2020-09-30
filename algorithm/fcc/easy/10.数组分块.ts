function chunkArrayInGroups(arr: Array<any>, num) {
    let newArr = [];
    let length = arr.length;
    if (num >= length) {
        newArr.push(arr);
    } else {
        for (let i = 0; i < length; i += num) {
            if (i + num > length) {
                newArr.push(arr.slice(i))
            } else {
                newArr.push(arr.slice(i, i + num))
            }
        }
    }
    return newArr;
}

console.log(chunkArrayInGroups(["a", "b", "c", "d", "a", "b", "c", "d", "a", "b", "c", "d", "a", "b", "c", "d"], 3));

