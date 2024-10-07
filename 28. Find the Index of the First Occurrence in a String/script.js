var strStr = function(haystack, needle) {

    let needleLength = needle.length -1;
    let count = 0;

    if(needleLength < 0 ) return -1;

    for (let index = 0; index < haystack.length; index++) {

        if(haystack[index] === needle[count]){
            count++;
        }
        else{
            index -= count;
            count = 0;
        }

        if(count === (needleLength + 1)){
            return index >= needleLength ? index - needleLength : needleLength - index; 
        }
    }
    return -1;
};

var haystack = "a"
var needle = "a"

console.log(strStr(haystack,needle));