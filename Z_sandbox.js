const add = (a,b) => {
    for(let i = 0; i < 9999999999; i++) {}

    return a + b
}

function memoize(fn, context) {
    const res = {};
    return function (...arg){
        let argCache = JSON.stringify(arg);
        if(!res[argCache]){
            res[argCache]  = fn.call(context || this, ...arg)
        } else{
            return res[argCache]
        }
    }
}

const calc = {
    total: 0,
    add(a){
        this.total += a;
        return this
    },
    multiply(a){
        this.total *= a;
        return this
    },

    subtract(a){
        this.total -= a;
        return this
    }
}



const result = calc.add(10).multiply(5).subtract(30).add(10)



// const arr1 = [1, 5, 3]
// const arr2 = [4, 2, 6]


// const mergeArrays = (nums1,m, nums2, n) => {
//     const mergedArr = []
//     let numItem1 = nums1[0]
//     let numItem2 = nums2[0]
//     while(nums1 || nums2){
//         if(!nums2 || nums1<nums2){
//             mergedArr.push(nums1)
//             numItem1 = nums1[m]
//             m++
//         } else {

//         }
//     }
// }

// console.log(mergeArrays(arr1, arr2));




// console.log(arr2.slice(0, 3));


const test1 = [-10,-10,-9,-9,-9,-8,-8,-7,-7,-7,-6,-6,-6,-6,-6,-6,-6,-5,-5,-5,-4,-4,-4,-3,-3,-2,-2,-1,-1,0,1,1,1,2,2,2,3,3,3,4,5,5,6,6,6,6,7,7,7,7,8,9,9,9,9,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0];


const test2 = [-10,-10,-9,-9,-9,-9,-8,-8,-8,-8,-8,-7,-7,-7,-7,-7,-7,-7,-7,-6,-6,-6,-6,-5,-5,-5,-5,-5,-4,-4,-4,-4,-4,-3,-3,-3,-2,-2,-2,-2,-2,-2,-2,-1,-1,-1,0,0,0,0,0,1,1,1,2,2,2,2,2,2,2,2,3,3,3,3,4,4,4,4,4,4,4,5,5,5,5,5,5,6,6,6,6,6,7,7,7,7,7,7,7,8,8,8,8,9,9,9,9]

 const res = [-10,-10,-10,-10,-9,-9,-9,-9,-9,-9,-9,-8,-8,-8,-8,-8,-8,-8,-7,-7,-7,-7,-7,-7,-7,-7,-7,-7,-7,-6,-6,-6,-6,-6,-6,-6,-6,-6,-6,-6,-5,-5,-5,-5,-5,-5,-5,-5,-4,-4,-4,-4,-4,-4,-4,-4,-3,-3,-3,-3,-3,-2,-2,-2,-2,-2,-2,-2,-2,-2,-1,-1,-1,-1,-1,0,0,0,0,0,0,1,1,1,1,1,1,2,2,2,2,2,2,2,2,2,2,2,3,3,3,3,3,3,3,4,4,4,4,4,4,4,4,5,5,5,5,5,5,5,5,6,6,6,6,6,6,6,6,6,7,7,7,7,7,7,7,7,7,7,7,8,8,8,8,8,9,9,9,9,9,9,9,9]

const merge = (nums1,m, nums2, n) => {
    let nums1Edit = nums1.slice(0, m);
    let nums2Edit = nums2.slice(0, n);
    let temp = nums1Edit.concat(nums2Edit).sort();
    for(let i = 0; i<temp.length; i++){
        nums1[i] = temp[i]
    }
   

    return nums1.sort((a,b) =>  a-b)
}

console.log(merge(test1, 55, test2, 99));