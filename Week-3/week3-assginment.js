function memoize(func) { 
    const mem = new Map(); 
    return function (...args) {
        var args_keys = args.join(',');
        if(!mem.has(args_keys))
            mem.set(args_keys,func(...args)) 
        return mem.get(args_keys);
    }

};

function add(a, b ) {
    console.log('I was called');
    return a + b
}

const memoizeAdd = memoize(add); // add + cache

function time (func) {
    console.time();
    func()
    console.timeEnd();
}

time(()=> console.log(memoizeAdd(100,100)));
time(()=> console.log(memoizeAdd(100,100)));