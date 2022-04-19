const anagrams = (strA, strB) => {
    const sortedA = strA.split('').sort().join('').toLowerCase();
    const sortedB = strB.split('').sort().join('').toLowerCase();

    return sortedA === sortedB
}


console.log(anagrams("danger", "garden"));


