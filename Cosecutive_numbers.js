function firstNoneConsecutive(arr) {
    for (let i=0; i < arr.length; i++) {
        const curr = arr[i]
        const next = arr[i+1];

        if (curr + 1 !== next) {
            return next;
        }
    }

    return null;
}


//------------------------------------------------
// function firstNonConsecutive (arr) {
//     let result = arr.find(val, index) => val !== indx + arr[0];

//     return (Number.isInteger(result)) ? result : null;
// }
