// Creates a new array without modifieng the original
// Crate an array of even numbers
const numbers = [1, 2, 3, 4, 5, 6];
const even = numbers.filter(isEven)

function isEven(value) {
    return value % 2 === 0;
}

console.log(even)

//Having an array of objects, we want to check if a person is an adult:

const people = [
    {
        name: 'Florin',
        age: 26,
    }, 
    {
        name: 'Ivan',
        age: 18
    },
    {
        name: 'Jai',
        age: 15
    }

];

const adults = people.filter(person => person.age >= 18);

console.log(adults)

// Remove duplicates from an array:

const nums = [1, 2, 3, 2, 1, 3, 3, 4, 5, 6];

const uniqueNums = nums.filter((value, index, arr) => {
    return arr.indexOf(value) === index
});

console.log(uniqueNums)