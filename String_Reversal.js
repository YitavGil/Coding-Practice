// Possible solution #1
const reverse = (str) => {
    return str.split("").reverse().join("");
}

// console.log(reverse("Greetings!"));


// Possible solution #2
const reverseTwo = (str) => {
    let reversed = '';

    for(let char of str) {
        reversed = char + reversed
    }

    return reversed
}

// console.log(reverseTwo("Works"));

// Possible solution #3
const reverseThree = (str) => {
   return str.split("").reduce((reversed, char) => char + reversed, "")
}

console.log(reverseThree("this is amazing"));