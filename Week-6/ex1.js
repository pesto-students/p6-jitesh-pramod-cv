function contiguousSubarray(arr){
    if (arr.length < 0){
        console.log('Error - Array is of zero lenght.')
        return -1;
    }
    max_sum =  0;
    current_max_sum = 0;
    for(var count=0; count < arr.length; count++){
        current_max_sum = current_max_sum + arr[count];
        if(current_max_sum > max_sum){
            max_sum = current_max_sum;
        }

        if(current_max_sum < 0 ){
            current_max_sum = 0
        }
    }

    return max_sum

}
