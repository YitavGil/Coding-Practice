//preforms a function on the array's item but => do not change the original array. We must create a new one

const numbers = [1, 2, 3, 4, 5];

const numberDouble = numbers.map(double);

function double(value) {
    return value * 2;
}
 console.log(numberDouble)


 //!----------------------------------------

const products = [
    {
        name: 'laptop',
        price: 1000,
        count: 5,
    }, {
        name: 'desktop',
        price: 1500,
        count: 2,
    }, {
        name: 'phone',
        price: 500,
        count: 10,
    }
];
// Total worth of products: 
// Return an array:
const totalProductsValue = products.map(item => item.price * item.count);


console.log(totalProductsValue)

//Return array of objects
const totalProductsValueObj = products.map(item => ({  name: item.name,
     totalValue: item.price * item.count
    }));


console.log(totalProductsValueObj)

//Convert an array of strings to an array of numbers:

const numStrings = ['1', '2', '3', '4'];

const convertToNums = numStrings.map(item => Number(item));

console.log(convertToNums)