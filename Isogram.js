const isIsogram = (str) =>{
  const lowerCased = str.toLowerCase()
    const result = lowerCased.split('').every((v,i)=>lowerCased.indexOf(v)===i)

  return result
}

console.log(isIsogram("ambidExtRously"));