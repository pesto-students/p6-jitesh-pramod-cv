var Fib = (n) => ({
    [Symbol.iterator]() {
        var first = 1, second = 1; counter=0;
        return {
            next: () => {
                if(counter++ < n){
                    var nextValue = 0
                    nextValue = first
                    first = second;
                    second = second + nextValue;
                    return { value: nextValue, done: false };
                }else{
                    return { value: nextValue, done: true };
                }


            }
        }
    }
});

for (let num of Fib(7)){
    console.log(num)
}