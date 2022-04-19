// Iterative solution
const fib = n => {
    const result = [0, 1];
    for(let i = 2; i <= n; i++){
        const a = result[i-1];
        const b = result[i-2];

        result.push(a+b);
    }
    return result
}



// Memoize function
function memoize(fn) {
    const cache = {};
    return function(...args){
        if (cache[args]){
            return cache[args];
            cache[args] = result
        }

        const result = fn.apply(this, args)
    }
}



// Slow Recursive solution
const slowFib = n => {
    if(n < 2) {
        return n
    }
    return slowFib(n-1) + slowFib(n-2)
    const fib = memoize(slowFib)
}

console.log(fib(8));

