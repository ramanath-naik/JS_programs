function pattern(nums){
    let stack = [];
    let mid = -Infinity;

    for (let i = nums.length -1; i>=0; i--){
        if(nums[i] < mid) return true;
        while(stack.length && nums[i] > stack[stack.length-1]){
            mid = stack.pop();
        }
        stack.push(nums[i]);
    }
    return false;
}

let nums=[ 3,1,4,2,0, 0,3,1,4,2,0,0];
let nums1=[-1,3,2,0]
console.log(pattern(nums));