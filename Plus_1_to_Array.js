// example: input - [1,2,3]; output - [1,2,4];
//example 2: input - [1,2,9]; output - [1,3,0];


const plusOne = function(digits) {
    for (i = digits.length - 1; i >= 0; i--  ) {
        if ( digits[i] < 9) {
            digits[i] += 1;
            return digits; 
        }
        else {
            digits[i] = 0;
        }
    }
    digits.unshift(1);
    return digits;
}
console.log(plusOne([1,9,9,9]))
