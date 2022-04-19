const maxChar = (str) => {
    let obj = {};
    let max = 0
    let char = ""
    newArr = str.split("")
    for(const val of newArr){
       obj[val] = obj[val] + 1 || 1
    }
    for(const prop in obj)
}

console.log(maxChar("hello"));