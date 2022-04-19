const arr1 = [1, 3, 5, 7];
const arr2 = [2, 4, 6, 8];
let i = 1;
let j = 1;

const mergeSortedArrays = (arr1, arr2) => {
    const mergedArr = [];
    let arr1Item = arr1[0];
    let arr2Item = arr2[0]
    
    if(arr1.length === 0) return arr2;
    if(arr2.length === 0) return arr1;

    while(arr1Item || arr2Item){
        if(!arr2Item || arr1Item < arr2Item){
            mergedArr.push(arr1Item)
            arr1Item = arr1[i];
            i++
        }else{
            mergedArr.push(arr2Item)
            arr2Item = arr2[j];
            j++
        }

    }
    return mergedArr
}

console.log(mergeSortedArrays(arr1, arr2));


