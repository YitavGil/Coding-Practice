const nums = [1,3,5,6]
const target = 5

var searchInsert = function(nums, target) {
   let left = 0;
   let right = nums.length

   while(left <= right){
       const midpoint = Math.floor((left+ right) / 2)
       if(nums[midpoint] === target){
           return midpoint
       }
       else if(nums[midpoint] < target){
           left++
       }else {
           right++
       }
   }
   return left

};


console.log(searchInsert(nums, target));