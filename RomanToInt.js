const romatToInt = (str) =>{
    const sym = { 
        'I': 1,
        'V': 5,
        'X': 10,
        'L': 50,
        'C': 100,
        'D': 500,
        'M': 1000
    }

    let result = 0
    const len = str.length
    for(let i = 0; i<len; i++){
        const curr = sym[s[i]];
        const next = sym[s[i+1]]

        if(curr < next){
            result += next - curr
            i++
        }
        else {
            result += curr
        }
    }

    return result
}


