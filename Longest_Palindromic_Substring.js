const longestPalindrome = (str) => {
    if(str.length < 1 || str === null) return '';
    let longest = "";

    for(let i = 0; i< str.length; i++){
        let oddPalindrom = expandFromCenter(str, i, i);
        let evenPalindrom = expandFromCenter(str, i-1, i);

        if(oddPalindrom.length > longest.length){
            longest = oddPalindrom
        }
        if(evenPalindrom.length > longest.length){
            longest = evenPalindrom
        }
    }
    return longest
}

const expandFromCenter = (str, left, right) => {
    let i = 0;
    while(str[left-1] && str[left - 1] === str[right + 1]){
    i++;
    }  
    i-- 
    return str.slice(left - i, right + i +1)
}