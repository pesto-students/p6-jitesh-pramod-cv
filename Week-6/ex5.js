function pairDifference(arr, num){
    let first = arr[0];

    for( let x = 0 ; x <= arr.length; x++){
        if(arr.includes(arr[x] - num)){
            return 1;
        }
    }
    return 0
}

console.log(pairDifference([5, 10, 3, 2, 50, 80], 78))
console.log(pairDifference([5, 10, 3, 2, 50, 80], 77))
console.log(pairDifference([5, 10, 3, 2, 50, 80], 770))
console.log(pairDifference([-10,20], 20))
console.log(pairDifference([-10,20], 30))