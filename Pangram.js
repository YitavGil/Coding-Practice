const abc = 'abcdefghijklmnopqrstuvwxyz'

const isPangram = (str) => {
const processString = [...new Set(str.toLowerCase().split(' ').join(''))].sort().join('')
return str === processString
}
