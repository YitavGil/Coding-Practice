const containDuplicates = (nums) =>{
    let numObj = {};
    const len = nums.length
    for(let i = 0; i<len; i++){
        if(numObj[nums[i]] === undefined){
            numObj[nums[i]] = "not a valid number"
            
        } else{
            return true
        }
        console.log(numObj);
    }

    return false
}

console.log(containDuplicates([1,2,3,4,5,1]));


// Solution #2

// const containDuplicates = (nums) =>{
//     nums.sort((a,b) => {return b-a});
//     const len = nums.length
//     for(let i = 0; i<len; i++){
//         if(i > 0 && nums[i-1] === nums[i]) return true;
//     }
//     return false
// }