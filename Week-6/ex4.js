function maxProfit(arr){
    let max_profit = 0;
    let buyPrice = arr[0];
    let sellPrice = 0;

    if (arr.length < 0){
        console.log('Error - Array is of zero lenght.')
        return -1;
    }

    for(i = 1; i < arr.length; i++){
        if(arr[i] < buyPrice){
            buyPrice = arr[i]
        }

        if(arr[i] - buyPrice > max_profit){
            sellPrice = arr[i];
            max_profit = arr[i] - buyPrice;
        }
    }
    console.log('buy price - ' + buyPrice)
    console.log('sell price - ' + sellPrice)
    return max_profit;
}


