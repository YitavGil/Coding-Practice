const pyramid = (n) => {
    const midpoint = Math.floor((2*n - 1) / 2)
    for(let row = 0; row < n; row++) {
        let stair = "";

        for(let column = 0; column < 2 * n - 1; column++){
            if (midpoint - row <= column && midpoint + row >= column) {
                stair += '#'
            } else {
                stair += " "
            }
        }
        console.log(stair);
    }
   
}

// pyramid(5)



const buildPyramid = (num) => {
    const newNum = Math.ceil(num/2);
  

   const hash = '#'.repeat(num).split('');
   hash.forEach((num, index) => {
    if(index === 2){
     num[2] = '*'
    }
})
    return hash

}
console.log(buildPyramid(5));
