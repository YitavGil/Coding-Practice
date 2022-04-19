const input = [1,1,2]

const removeDuplicates = (nums) => {
    let obj = {}
  for(let num of nums){
      obj[num] = true
  }
   
  const b = Object.keys(obj);
  return b
};


console.log(removeDuplicates(input));


