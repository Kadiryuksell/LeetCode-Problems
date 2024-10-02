/**
 * @param {string[]} strs
 * @return {string}
 */
var longestCommonPrefix = function(strs) {

    if(strs.length === 1){
        return strs[0];
    }
let result = "";
for(let i =0; i < strs[0].length; i++){

    let currentChar = strs[0][i];

        for (let k = 1; k < strs.length; k++) {
       
            if(strs[k][i] !== currentChar){
                return result;
            }
        }

        result +=strs[0][i];
 }

 return result;
};