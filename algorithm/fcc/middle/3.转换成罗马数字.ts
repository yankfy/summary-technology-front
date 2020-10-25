function convertToRoman2(num) {
    var symbols = [
        ["", "I", "II", "III", "IV", "V", "VI", "VII", "VIII", "IX"], // 0
        ["", "X", "XX", "XXX", "XL", "L", "LX", "LXX", "LXXX", "XC"], // 1
        ["", "C", "CC", "CCC", "CD", "D", "DC", "DCC", "DCCC", "CM"], // 2
        ["", "M", "MM", "MMM", "", "", "", "", "", "", ""] // 3
    ]; 
    var roman = symbols[3][Math.floor(num / 1000)]
        + symbols[2][Math.floor(num % 1000 / 100)]
        + symbols[1][Math.floor(num % 100 / 10)]
        + symbols[0][Math.floor(num % 10)];
    return roman;
}


console.log(convertToRoman2(36));