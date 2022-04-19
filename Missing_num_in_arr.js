const arr = [3,0,1]

var missingNumber = function(nums) {
    let numsSum = 0;
    let corrSum = 0;
    for (let i = 0; i < nums.length + 1; i++) {
        corrSum += i;
        numsSum += i < nums.length ? nums[i] : 0;
        
    }
    console.log(numsSum);
    console.log(corrSum);
    return corrSum - numsSum;
};

console.log(missingNumber(arr));