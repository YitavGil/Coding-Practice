const findMin = (nums) => {
    return Math.min(...nums) //! O(n)
}


const findMin2 = (nums) => {
    let left = 0;
    let right = nums.length - 1;

    while( left < right){
        let midPoint = Math.floor(left + right) / 2;
        if(nums[midPoint] > nums[right]){
            left = midPoint + 1;
        } else {
            right = midPoint
        }
    }

    return nums[left]
}