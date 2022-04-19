//Get Last kid

const getLastKid = (n, k, i) => {
    if(k > n){
        return i+(k%n) - 1
    } else {
        return k + i - 1
    }
}

const getTheLastPosition = (kids, toys, startPosition) => toys % kids + startPosition-1 || kids

console.log(getLastKid(5, 3, 1));