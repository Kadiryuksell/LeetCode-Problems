
// Runtime: 102ms, 99.14%
// Memory 57.60 MB, 52.08%
var isPalindrome = function(x) {
    const numberStr = x.toString();
    const numberArray = numberStr.split("");
    let result = true;

    for(let i = 0; i < numberArray.length; i++){

        if(numberArray[i] !== numberArray[(numberArray.length - 1) - i]){
            result = false;
        }
    }
        return result;
};

// Runtime 137 ms, 46.04%
// Memory 58.68, 27.58%
var isPalindrome = function(x) {
    const numberArray = x.toString().split("");
    let result = true;

    for(let i = 0; i < numberArray.length; i++){

        if(numberArray[i] !== numberArray[(numberArray.length - 1) - i]){
            result = false;
        }
    }
        return result;
};

