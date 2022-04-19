const MaximumSubarray = (nums) => {
    let solution = nums[0];
    const len = nums.length;

    for(leti = 0; i<len; i++){
        nums[i] = Math.max(nums[i], nums[i] + nums[i-1])
        solution = Math.max(solution, nums[i])
    }
    return solution
}