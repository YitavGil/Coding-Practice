//Recursive solution
const gcd = (num1, num2) => {
    if(num2 === 0){
        return num1
    } else {
        const reminder = num1 % num2;
        return gcd(num2, reminder)
    }
}

const check = 12 % 18;

console.log(gcd(18, 12));
console.log(gcd(12, 18));



const greatestCommonDivider = (num1, num2) => {
    let min = Math.min(x,y);
    let max = min === x ? y : x;

    if(max % min){
        return min
    } else {
        let mid = Math.floor(max/2);
        let divider = mid;
        for(let i = mid; i>0; i--){
            if(max % i === 0 && min % i === 0) {
                divider = i
            }
        }
        return divider
    }

}