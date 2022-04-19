const pruductExeptSelf = (nums) => {
    let leftProduct = [];
    let rightProduct = [];
    let solution = [];
    const len = nums.length;

    //leftProduct
    for(let i = 0; i<len; i++){
        if(leftProduct === 0){
            leftProduct.push(1);
        } else{
            leftProduct.push(leftProduct[i-1]*nums[i-1])
        }
    }

    //leftProduct
    for(let i = len-1; i>-1; i--){
        if(rightProduct === 0){
            rightProduct.push(1);
        } else{
            rightProduct.unshift(rightProduct[0]*nums[i+1])
        }
    }

    //solution
    for(let i = 0; i<leftProduct.length; i++){
        solution.push(leftProduct[i]*rightProduct[i])
    }

    return solution
}