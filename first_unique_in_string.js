function firstUniqueChar(s) {
    const characterCount = {}; // {h:1, e: 1, l: 2, o: 1}

    //fill out character count object
    for (let i = 0; i < s.length; i++) {
        const char = s[i];
        characterCount[char] = characterCount[char] + 1 || 1;
    }
    for (let i = 0; i < s.length; i++) {
        const char = s[i];
       if (characterCount[char] === 1) {
           return i;
       }
    }
    return -1
    
}

console.log(firstUniqueChar("hello"));


