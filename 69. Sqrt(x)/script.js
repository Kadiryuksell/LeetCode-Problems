var mySqrt = function(x) {
    let targetSqrt = true;
    let count = 0;
    debugger;
    while(targetSqrt){

        let floorSqrt = count * count;
        let topSqrt = (count + 1) * (count + 1);

        if(floorSqrt <= x  && x < topSqrt){
            return count;
        }

        count++;
    }
    return 0;
};

let x = 8;
console.log(mySqrt(x));