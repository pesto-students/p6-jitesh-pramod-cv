function get3NumbersDifference(A,sum)
    {
        arr_size = A.length;
        diff_array = [];
        let curr_sum = sum - A[0];
        console.log('------ A[0] ' + curr_sum)
        for (let i = 1; i <  arr_size; i++) {
            diff = Math.abs(curr_sum - A[i]);
                diff_array.push(curr_sum - A[i])
        }
        console.log('sdsdsds ' + diff_array)
        return diff_array.sort()[0]
    }

console.log('-------' + get3NumbersDifference([-1,2,1,-4], 1))