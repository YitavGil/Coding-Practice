function squareDigits(num){
    return (num + '').split('').map(num => num * num).join("")
    }
    
    
  
  console.log(squareDigits(2112))