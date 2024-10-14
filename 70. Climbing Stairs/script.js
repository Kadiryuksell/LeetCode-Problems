var climbStairs = function(n) {
    if(n === 0) return 0;
    if(n === 1) return 1;
    if(n === 2) return 2;
    
    let firstStep = 1;
    let secondStep = 2;
    let sum = 0;

    for (let i = 3; i <= n; i++) {
        sum = firstStep + secondStep; 3 5
        firstStep = secondStep;  2 3
        secondStep = sum;  3 5

    }
    return secondStep;
};



0 1 1 2 3 5 8 13 21

f(n) = f(n-1) + f(n-2)