var merge = function(nums1, m, nums2, n) {
    
    if(nums1.length === 0) return nums2;
    if(nums2.length === 0) return nums1;

    let highIndex = m + n -1
    debugger;
    while(m > 0 && n > 0 ){


        if(nums1[m-1] > nums2[n-1] ){
            nums1[highIndex] = nums1[m-1];
            m--;
        }
        else {
            nums1[highIndex] = nums2[n-1];
            n--;
        }
        highIndex--;
    }

    while(n > 0){
        nums1[highIndex] = nums2[n-1]
        highIndex--;
        n--;
    }

    return nums1;
};

let nums1 = [4,5];
let m = 2;
let nums2 = [2,3];
let  n = 2;

console.log(merge(nums1,m,nums2,n));