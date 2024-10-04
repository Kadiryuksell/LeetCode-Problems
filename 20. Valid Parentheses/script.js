var isValid = function(s) {
    
    let Stack = [];
    const matchingBracketsMap = { 
        ')': '(',
        '}': '{',
        ']': '['
      };

      for (let char of s) {
        
        if(char === "(" || char === "{" || char === "["){
                Stack.push(char);
        }
        else if(char === ")" || char === "}" || char === "]"){
                let lastPopParentheses = Stack.pop();

                if(lastPopParentheses !== matchingBracketsMap[char]){
                    return false
                }
        }
    }

    return Stack.length === 0;
};

