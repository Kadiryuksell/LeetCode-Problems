var removeDuplicates = function(nums) {
    if(nums.length === 0) return 0;
    else if(nums.length === 1) return 1;

    let count = 0;
    let controlNumber = nums[count];
    
    for (let index = 0; index < nums.length; index++) {

        if(nums[index] !== controlNumber || index === 0){
            nums[count] = nums[index];
            controlNumber = nums[index];
            count++;
        }
    }
    
    return count++;
};


console.log(removeDuplicates([1,1,2]));