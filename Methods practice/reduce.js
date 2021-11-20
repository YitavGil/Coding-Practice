// Reduce method executes a callback function on every element in the array and return single output value

const numbers = [1, 2, 3, 4, 5, 6];

//reduce function parameters:
// const total = numbers.reduce(//!callbackFunction, inititalVal)

const total = numbers.reduce(sum, 0);
function sum(accumulator, value) {
    return accumulator + value;
}

console.log(total)

//Find max value 

const max = numbers.reduce(callback, -Infinity);

function callback(accumulator, value) {
    if (accumulator > value) {
        return accumulator;
    }
    else {
        return value;
    }
}

console.log(max);

// Using reduce on an array of objects

const store = [
    {
        name: 'laptop',
        price: 1000,
        count: 3,
    }, {
        name: 'desktop',
        price: 1500,
        count: 4,
    }, {
        name: 'phone',
        price: 500,
        count: 10,
    }
];

const totalValueStore = store.reduce((acc, item) => acc + (item.price * item.count), 0);

console.log(totalValueStore);