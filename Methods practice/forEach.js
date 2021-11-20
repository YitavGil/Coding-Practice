//forEach method is used when I want to activate a function on all items in the array

//ex1: show the index of each item 
const numbers = [1,2,3,4,5];
numbers.forEach(consoleLogItems)

function consoleLogItems (item, index, arr) {
    console.log('a[' + index + '] = ' + item)
}


//sum the items in the array
let sum = 0;
numbers.forEach(item => {
    sum += item;
})

console.log(sum)


//how many times a letter apears in an array
const letters = ['a', 'b', 'c', 'c', 'c','d', 'd']
let count = {};
letters.forEach(item => {
   count[item] = count[item] ? count[item] + 1 : 1
});

console.log(count)