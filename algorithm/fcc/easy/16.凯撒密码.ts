/*
 * @Author: yankfy
 * @Date: 2020-10-20 21:57:59
 * @LastEditors: yankfy
 * @LastEditTime: 2020-10-20 22:58:50
 * @Description: 凯撒密码
 * @FilePath: /Code/deep-learning/summary-technology-front/algorithm/fcc/easy/16.凯撒密码.ts
 */
function rot13(str) { // LBH QVQ VG!
    var newStr;
    var charCodeArr = [];//存储所有转换后的字符编码
    var charCode;
    for (var i = 0; i < str.length; i++) {
        charCode = str.charCodeAt(i);
        if (charCode >= 65 && charCode <= 90) {
            charCodeArr.push((charCode - 13) >= 65 ? (charCode - 13) : (90 - 65 - 13 + charCode + 1));//90-[13-(charCode-65)]+1
        } else {
            charCodeArr.push(charCode);
        }
    }

    return String.fromCharCode.apply(null, charCodeArr);
}

// Change the inputs below to test
rot13("SERR PBQR PNZC");