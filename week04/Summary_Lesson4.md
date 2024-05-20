## Week 4 - Lesson

### JS Goodie  - console log

```javascript

// console log with:
console.log("hi");

//console log with variable and values
console.log("x", 1, "y", 2, "z", 3); 

//console log with objects
const obj = { a: 1, b: 2, c: 3 };
console.log(obj); // { a: 1, b: 2, c: 3 }

//Shortcuts
const x  = 1 
const y = 2;
{x, y}  // { x: 1, y: 2 } reference to the object

console.log(x, y); // 1 2
console.log({x, y}); // { x: 1, y: 2 } create object with x and y as keys

//gather more information
console.dir({x, y}); 

//arreay with objects
const ary = [obj, obj, {x:3, y:5}]; //share same structure but inside of an array
console.log(ary); 

//tableview
console.table(ary);
```

**Log level**: Using to filter the logged outputs. Show all levels $≥ logLevel$

```javascript

// states of different  logging
const LEVEL_NONE = -1;
const LEVEL_ERROR = 0;
const LEVEL_WARN = 1;
const LEVEL_INFO = 2;
const LEVEL_LOG = 3;
const LEVEL_DEBUG = 4;

// Check for log level
let logLevel = LEVEL_LOG;
```

### Higher-order functions


```javascript
const times = a => b => a * b; // curryied function
const twoTimes = times(2);

// const times = (a, b) => a * b; error message as b is not defined
```

**Map**: execute a function or do a unary operation on each value, partial application

- outer type remains (array, object, function,...)
- inner type can change (string -> number,...) 
- number elements remains the same

```javascript

[1,2, 3].map( x => x * 2); // [2, 4, 6

[1,2,3].map( x => times(2)(x)); // [2, 4, 6]

//eta reduction
[1,2,3]. map(times(2)); // [2, 4, 6]

[1,2,3].map(twoTimes); // [2, 4, 6]]
```

**Filter**: remove elements not fitting to a condition, partial application

- outer type stays same (array, object, function,...)
- inner type stays same
- number elements can change

```javascript
const odd = (x) => x % 2 === 1; // last part is a Predicate (true or false)

dataStruc = [1, 2, 3];

dataStruc.filter((x) => x % 2 === 1);

// alpha transition
dataStruc.filter((x) => odd(x));
// eta reduction
dataStrucr.filter(odd);
```

**Reduce**:  do a binary operation on all elements, partial application

- outer type can disappear
- inner type can change (strings -> number,...)
- number elements can change

```javascript
const plus = (acc, cur) => acc + cur;

dataStruc = [1, 2, 3];

dataStruc.reduce((acc, cur) => acc + cur); // 6

// alpha transition
dataStruc.reduce(plus);

// with initial value 0
dataStruc.reduce(plus, 0);

[true, true, false].reduce((acc, cur) => acc && cur, true); // false

[true, true, true].reduce((acc, cur) => acc && cur, true); // true //implementation of every

[false, true, false].reduce((acc, cur) => acc ||  cur, false); // true

[false, false, false].reduce((acc, cur) => acc ||  cur, false); // false //implementation of some

```

**Initial value**: avoids error for empty lists, normally the neutral element of type operation

### Function types

**Literal scope (IIFE)**: (unnamed) function

```javascript
// definition
var varName = function optionalName() {
    // do something
};

// usage
varName();
// use as callback
callbackFunction(varName);
```

**Capturing scope (closure)**: private variables for functions, boxed functions

```javascript

// definition
const func = (function (parameterOuter) {
    let localVar = value;
    return function (parameterInner) {
        // do something
    };
})(argumentsOuter);

// usage
func(argumentsInner);
```

**Higher-order functions**: taking other functions as arguments or returns function

```javascript
// definition
function callbackFunction(callbackFunc) {
    // do somthing
}

// or
function callbackFunction2() {
    // do somthing
    return function;
}

// use
callbackFunction(functionName);
// or
callbackFunction2()(argsForFunction);
```

**Constructors (returning functions)**: creates a self-defined object, using keyword `new` in call

```javascript
// definition
function Object() {
    this.attribute = value;
}

// use
const obj = new Object();
```
