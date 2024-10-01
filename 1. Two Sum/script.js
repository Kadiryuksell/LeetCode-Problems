
var twoSum = function(nums, target) {
    
    const indexes = [];
    var isContinue= true;
    let i = 0;
   while(isContinue){
        
        for(let k=i+1; k < nums.length; k++){

            if(nums[i] + nums[k] === target){
                indexes.push(i);
                indexes.push(k);
                isContinue = false;
            }
        }
        i++;
    }

    return indexes;
};