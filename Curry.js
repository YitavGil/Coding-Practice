const sum1 = (a) =>{
    return  (b)=> {
        return a+b
    }
}

const cl = sum1(5) // refers to "a"
const ans = cl(6) // refers to "b"
console.log(ans);

//One line solution:
const sum2 = a => b => a+b

// two at the same time

const add = (num1, num2) => {
    if(num1 && num2) {
        return num1 + num2
    }else {
        return function(num3){
            return num1 + num3
        }
    }
}

console.log(add(1)(4))


// Infinite Currying
function add1(a){
    return function (b) {
        if(b) return add(a + b);
        return a;
    };
}

