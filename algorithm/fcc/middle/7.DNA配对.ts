/*A-T,C-G*/
function pairElement(str) {
    var arr=str.split("");
    var pairArr=arr.map(function(item,index,arr){
        var pair=[];
        var rules={"A":"T","T":"A","C":"G","G":"C"};
         pair.push(item,rules[item]);
         return pair;
    });
    return pairArr;
  }
  
console.log(pairElement("GCG"));