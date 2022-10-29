```
function createStack() {
  var items = [];
  return {
    push(item) {
    	items.push(item);
    },
    pop() {
    	return items.pop();
    },
    getListItems(){
    	return items; 
    }
  };
}

const stack=createStack();
stack.push(10);
stack.push(5);
console.log(stack.pop());
console.log(stack.items)
console.log(stack.listItems)
```
## Explaination
* Moving the variable `items` out of return block makes it not accessible to calling function. Thus its encapsulated, we need to access `items` via getter method `getListItems()`
