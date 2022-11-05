const mathOperations = {
    sum: function(a,b) {
        return a + b;
    },
    diff: function(a,b) {
        return a - b;
    },
    product: function(a,b) {
        return a * b
    }
}

test('Testing methods in mathOperations',()=>{
    expect(mathOperations.sum(10, 10)).toEqual(20);
    expect(mathOperations.diff(10,3)).toEqual(13);
    expect(mathOperations.product(5,5)).toEqual(25);
})