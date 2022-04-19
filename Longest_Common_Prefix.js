const strs = ["flower","flow","flight"];
const bad = ['']


const longPreFx = (strs) => {
let prefix = '';
if(strs.length === 0) return prefix
for (let i = 0; i < strs[0].length; i++) {
    const char = strs[0][i];

    for (let j = 0; j < strs.length; j++) {
        if(strs[j][i] !== char) return prefix
        
    }
    
    prefix = prefix + char
    }
    return prefix
}


console.log(longPreFx(bad));