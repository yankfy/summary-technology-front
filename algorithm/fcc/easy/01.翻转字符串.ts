function reverseString(str:string) {
    return str.split('').reverse().join();
}

let str: string = '12345';
console.log(reverseString(str));