function pairDifference(arr, num){
    let first = arr[0];
    if (arr.length < 0){
        console.log('Error - Array is of zero lenght.')
        return -1;
    }
    if(num <= 0){
        console.log('Error - Num cannot be zero.')
        return -1
    }

    for( let x = 0 ; x <= arr.length; x++){
        if(arr.includes(arr[x] - num)){
            return 1;
        }
    }
    return 0
}
