```
Exercise 3.3
function createIncrement() {
	let count=0;
  function increment() {
  	count++;
   }
   let message=`Count is ${count}`;
   function log() {
   	console.log(message);
    }
    return[increment,log];
  }
  const[increment,log] = createIncrement();
  increment();
  increment();
  increment();
  log()

```
Explaination
When `createIncrement` function is called, function `log` and function ` increment` is returned.

Then the `increment` function is called 3 times , where in the `count` is incrmented 3 times. But this does not get reflected in  variable `message` as its not is scope.

when the function `log` is called, `message` is printing which has count intialized to 0 only as increments which happedn in previous steps were not in scope for the `let message`.
