// Solution 1
var plusOne = function(digits) {
    let carry = 1;

    let digitsLength = digits.length - 1;
    if(digits[digitsLength] < 9 ){
        digits[digitsLength] = digits[digitsLength] + carry;
        return digits;
    }
   
    for (let index = digitsLength; index >= 0; index--) {
        
        if(digits[index] === 9){
            digits[index] = 0;
        }else{
            digits[index] = digits[index] + carry;
            return digits;
        }
    }

    let overflow = [1,...digits];
    return overflow;
};

// Solution 2
var plusOne = function(digits) {
    let carry = 1;
    let digitsLength = digits.length - 1;

    for (let index = digitsLength; index >= 0; index--) {
        digits[index] += carry;

        if(digits[index] === 10){
            digits[index] = 0;
        }else{
            carry = 0;
            break;
        }
    }

    if(carry === 1){
        digits.unshift(carry);
    }

    return digits;
};
