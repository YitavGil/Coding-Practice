const singleNumber = (nums) => {
    const numObj = {};
    for (const num of nums){
        numObj[num] = numObj[num] + 1 || 1
    }
    for(const props in numObj){
        if (numObj[props] === 1){
            return props
        }
    }
}

console.log(singleNumber([3,3,2,2,9]));

