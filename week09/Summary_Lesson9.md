## Week 9 - Async

## Week 10 - Lesson

### JS Goodie - Array

**Slice**: create a sub array form start to end index

```javascript
// copy whole array
array.slice();
[1, 2, 3, 4].slice(); // result [1, 2, 3, 4]

// sub array from the start index until the end of the array
array.slice(startIndex);
[1, 2, 3, 4].slice(1); // result [2, 3, 4]

// sub array from the start index until the end index excluding the end index
array.slice(startIndex, endIndex);
[1, 2, 3, 4].slice(1, 3); // result [2, 3]
```

**Splice**: change the current array by modifying elements in the array by adding/ removing/ updating

```javascript
// adding elements to the array before the start index and remove 0 elements (move the original elements towards the end)
array.splice(startIndex, 0, ...elements);
[1, 2, 3, 4].slice(1, 0, "a", "b"); // array [1, 'a', 'b', 2, 3, 4] and return []

// removing elements from the array starting at the start position for number elements
array.splice(startIndex, numberElements);
[1, 2, 3, 4].slice(1, 2); // array [1, 4] and return [2, 3]

// updating elements of the array starting form the start index for number elements (if number elements is same es followed amount of elements else also removing or adding)
array.splice(startIndex, numberElements, ...elements);
[1, 2, 3, 4].slice(1, 2, "a", "b"); // array [1, 'a', 'b', 4] and return [2, 3]
```

### Async

**Callback**: predefine an event handler for a later use. The function will passed values to another function when the
event is triggered to execute the code.

```javascript
setInterval(() => {
    // doSomething();
}, 1000 / 5);
```

Events: use callbacks to execute code when an event is triggered. Possible events: keyboard/ mouse input

```javascript
window.onkeydown = (event) => {
    // doSomething();
};
```

**Promise** (Thenable): define that code will come to a result at some time. It has different state starting with
pending. A Promise callback always returns a further promise.

```javascript
fetch(/* async task */)
    .then((response) => /* code executed successfully */)
    .catch((err) => /* code threw error */);

// other notation
const processEven = i => new Promise(
    (resolve, reject) => {
        if (i % 2 === 0) {
            resolve(i);
        } else {
            reject(i);
        }
    }
);
```

Auto promotion: non promise return values are automatically saved in the parameter variable, and gets wrapped in a new
promise.

**Synchronous**: all tasks are executed in the code order after each other.

**Asynchronous**: tasks can execute parallel and the resulting order is not given.

**async/await**:

- async defines that the code in this function contains a await with asynchronous execution.
- await defines that the called function will wait until the promise is resolved or rejected.

```javascript
const foo = async (i) => {
    const x = await processEven(i).catch((err) => err);
    console.log("foo: " + x);
};
```