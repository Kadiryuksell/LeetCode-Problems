var lengthOfLastWord = function(s) {
    if(s.length === 0) return 0;

    let count = 0;
    for (let index = s.length - 1; index >= 0; index--) {
        
        if(s[index] !==" "){
            count++;
            if(s[index -1] === " " || index === 0){
                return count;
            }
        }
    }
};
