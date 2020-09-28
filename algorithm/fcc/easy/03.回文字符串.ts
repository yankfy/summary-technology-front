function palindrome(str: string): boolean {
    let newStr = str.replace(/[^a-zA-Z0-9]/g, "").toLowerCase();
    return newStr.split('').reverse().join('') === newStr;
}

console.log(palindrome('aba abA'));
console.log(palindrome('aba 2a'));

