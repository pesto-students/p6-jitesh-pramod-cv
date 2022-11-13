function sortArray012(arr){
    var std_arr = [0,1,2];
    var final_array = [];

    for (i = 0; i < std_arr.length; i++){
        for(cnt = 0 ; cnt< arr.length; cnt++){
            if(std_arr[i] === arr[cnt]){
                final_array.push(std_arr[i])
            }
        }
    }

    return final_array

}

console.log('Sortted array of [0, 2, 1, 2, 0] is ' + sortArray012([0, 2, 1, 2, 0,0, 2, 1, 2, 0,0, 2, 1, 2, 0,0, 2, 1, 2, 0,0, 2, 1, 2, 0,0, 2, 1, 2, 0,0, 2, 1, 2, 0]))