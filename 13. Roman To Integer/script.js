
//Solution 1
var romanToInt = function(s) {
 
let romanNumberArray = s.split("");
   
let I = 1;
let V = 5;
let X = 10;
let L = 50;
let C = 100;
let D = 500;
let M = 1000;

let count=0;
debugger;
for(let i = 0; i < romanNumberArray.length; i++){

    if(romanNumberArray[i] == "I"){
        
        if(romanNumberArray[i+1] == "V"){
            count += V-I;
            i++;
        }
        else if(romanNumberArray[i+1] == "X"){
            count += X-I;
            i++;
        }
        else{
            count++;
        }
    }

    else if(romanNumberArray[i] == "X"){

         if(romanNumberArray[i + 1] == "L"){
                count += L-X;
                i++;
        }
        else if(romanNumberArray[i+1] == "C"){
            count += C-X;
            i++;
        }
        else{
            count +=X;
        }
    }

    else if(romanNumberArray[i] == "C"){

        if(romanNumberArray[i + 1] == "D"){
               count += D-C;
               i++;
       }
       else if(romanNumberArray[i+1] == "M"){
           count += M-C;
           i++;
       }
       else{
           count +=C;
       }
   }

    else if (romanNumberArray[i] == "V"){
        count +=V;
    }

    else if (romanNumberArray[i] == "L"){
        count +=L;
    }

    else if (romanNumberArray[i] == "D"){
        count +=D;
    }
    else if (romanNumberArray[i] == "M"){
        count +=M;
    }

}
debugger;
console.log(count);
   };

   var deneme = "MCMXCIV";

   romanToInt(deneme);

   // Solution 2
   
   var romanToInt = function(s) {
 
    const romanMap = {
        "I":1,
        "V":5,
        "X":10,
        "L":50,
        "C":100,
        "D":500,
        "M":1000
    };
       debugger;
    let count = 0; 
    for(let i = 0; i < s.length; i++){

        if(romanMap[s[i]] < romanMap[s[i+1]]){
            count -= romanMap[s[i]];
        }
        else{
            count += romanMap[s[i]];
        }

    }
       };