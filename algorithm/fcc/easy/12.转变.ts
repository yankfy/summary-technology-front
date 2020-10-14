function mutation(arr: Array<string>) {
    var first = arr[0].toLowerCase();
    var second = arr[1].toLowerCase();
    for (var i = 0; i < second.length; i++) {
        if (first.indexOf(second[i]) === -1) {
            return false;
        }
    }
    return true;
}

console.log(mutation(["hello", "hel"]));