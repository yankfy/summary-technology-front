// 实现数组扁平化
// let backArr: number[] = [];
// function patchArr(arr: (number | (number | (number | number[])[])[])[]) {
//     arr.forEach((element: (number | number[])) => {
//         if (Array.isArray(element)) {
//             patchArr(element)
//         } else {
//             backArr.push(element)
//         }
//     });
//     return backArr
// }
// console.log(patchArr(arr)) // => [1, 2, 3, 4, 5, 6]

// console.log(arr.flat(Infinity))

// const flatten = (arr, prev = []) => {
//     return arr.reduce((prev, next) => {
//         if (Array.isArray(next)) {
//             flatten(next, prev)
//         } else {
//             prev.push(next);
//         }
//         return prev
//     }, prev)
// }

const flatten = arr => {
    return arr.reduce((prev, next) => {
        return prev.concat(Array.isArray(next) ? flatten(next) : next);
        // if (Array.isArray(next)) {
        //     flatten(next)
        // } else {
        //     prev.push(next);
        // }
        // return prev
    }, [])
}

console.log(flatten(arr))
