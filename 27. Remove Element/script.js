var removeElement = function(nums, val) {
    let count = 0;
    for (let index = 0; index < nums.length; index++) {
        if(nums[index] !== val){
            nums[count] = nums[index];
            count++;
        }
    }
return count;
};

