const plaindrome = (str) => {
 const revStr = str.split("").reduce((rev, char) => char + rev , "");
 return revStr === str

}


console.log(plaindrome("abba"));







