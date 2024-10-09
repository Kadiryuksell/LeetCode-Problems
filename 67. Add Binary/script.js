// Solution 1
var addBinary = function(a, b) {

    let arrayA = [...a].map(Number);
    let arrayB = [...b].map(Number);
    let arrayALength = arrayA.length -1;
    let arrayBLength = arrayB.length -1;
    let controlBit = arrayALength >= arrayBLength ? true : false;
    let restrictiveLength = controlBit ? arrayALength - arrayBLength : arrayBLength - arrayALength;

    let sumArray = [];
    let carry = 0;

    if(arrayALength !== arrayBLength){
        while(restrictiveLength > 0){
            if(controlBit){
                arrayB.unshift(0)
                restrictiveLength--;
            }else{
                arrayA.unshift(0)
                restrictiveLength--;
            }
        }
    }

    for (let index = arrayA.length -1; index >= 0; index--) {
        if((arrayA[index] + carry + arrayB[index]) === 3){
            sumArray[index] = 1;
            carry = 1;
        }else if((arrayA[index] + carry + arrayB[index]) === 2){
            sumArray[index] = 0;
            carry = 1;
        }else if(arrayA[index] + arrayB[index] === 2 ){
            sumArray[index] = 0;
            carry = 1;
        }
        else if((arrayA[index] + carry + arrayB[index]) === 1){
            sumArray[index] = 1;
            carry = 0;
        }
        else if(arrayA[index] + arrayB[index] === 1){
            sumArray[index] = 1;
            carry = 0;
        }
        else{
            sumArray[index] = 0;
            carry = 0;
        }
    
    }

    if(carry === 1) sumArray.unshift(1);
    let str = "";
     str=sumArray.join("");

    return str;

};

// Solution 2
var addBinary = function(a, b) {

    let arrayA = [...a].map(Number);
    let arrayB = [...b].map(Number);
    let aLength = a.length -1;
    let bLength = b.length -1;
    let controlBit = aLength >= bLength ? true : false;
    let restrictiveLength = controlBit ? aLength - bLength : bLength - aLength;

    let sumArray = [];
    let carry = 0;

    if(aLength !== bLength){
        while(restrictiveLength > 0){
            if(controlBit){
                arrayB.unshift(0)
                restrictiveLength--;
            }else{
                arrayA.unshift(0)
                restrictiveLength--;
            }
        }
    }

    for (let index = arrayA.length -1; index >= 0; index--) {
        
        let binarySum =  arrayA[index] + arrayB[index] + carry;

        if(binarySum > 1){
            carry = 1;
            sumArray[index] = binarySum % 2;
        }
        else{
            carry = 0;
            sumArray[index] = binarySum;
        }
    
    }

    if(carry === 1) sumArray.unshift(1);

    return sumArray.join("");

};


