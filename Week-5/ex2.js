
function vowelCount(str){
    let map = new Map();
    const vowels = ['a','e','i','o','u','A','E','I','O','U']
    for (const char of str) {
        if (vowels.includes(char)){
           if (map.has(char)){
                map.set(char, map.get(char) + 1)
            }else{
                map.set(char, 1)
            }
        }
    }
    return map;
}

console.log(vowelCount("qwqwsdfxzaeiouAEIOUaeiouAEIOUaeiouAEIOUaeiouAEIOU"))