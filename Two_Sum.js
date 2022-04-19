// Given an array of integers nums and an integer target, return indices of the two numbers such that they add up to target.

// You may assume that each input would have exactly one solution, and you may not use the same element twice.

// You can return the answer in any order.

const twoSums = (nums, target) => {
const comp = new Map();
const len = nums.length;

for(let i = 0; i<len;i++) {
    if(comp[nums[i]] >= 0) {
        return [comp[nums[i]], i]
    }
    comp[target - nums[i]] = i
}
return []

}

console.log(twoSums([2,11,7,15],9)); 



const tooSum = (nums, target) => {
    const obj = {};
    for(let i = 0; i<nums.length; i++){
        if(obj[nums[i]] >=0){
            return [obj[nums[i]], i]
        }

        obj[target - nums[i]] = i
    }

    return []
}

console.log(tooSum([2,11,7,15],9)); 