function spinWords(string){
    let result = string.split(" ").map((item) => {
     return item.length >= 5 ? item.split("").reverse().join("") : item 
    });
    result.toString(" ")
    return result;
  }

  console.log(spinWords("Hello I like to eat apples"))