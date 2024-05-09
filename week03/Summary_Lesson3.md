## Week 3 - Lesson

### JS Goodie Part II

**Log level**: Use to filter the logged outputs. Show all levels $≥ logLevel$

```javascript

// Literal constructs for Arrays and Objects as well as Property Access

//Array
let x = [1, 2, 3]; //square brackets

//Objects
let obj = {a: 1, b: 2, c: 3};     //curly braces //key-value pairs //keys are strings (cannot be anything else) //not a HashMap!!!  its a JS object

//Property Access
obj.a; //1 //dot notation //reading the value of a

obj.a = 2 //reassigning the value of a //writing the value of a

let z = "a";  // undefined
obj[z];  //reading the value of a
obj [z] = 2; //writing the value of a

obj // {a: 2, b: 2, c: 3}

// { a: 1, b: 2, c: 3 }  //object literal

// { [z]: 1, b: 2, c: 3} //computed property name //with bracket notation you can acccess to your property name through a string reference




```
### Snake_ADT

**Boolean**: expressed with functions and values

```javascript

const id = (x) => x;
const fst = (x) => (y) => x; //konst
const snd = (x) => (y) => y;

// true, false
const T = fst;
const F = snd;

// and, or, not
const and = (p) => (q) => p(q)(p);
const or = (p) => (q) => p(p)(q);
const not = (p) => p(F)(T);
```

**Accessor functions**: lazy until applied

- fst/ True
- snd/ False

**Datatype pair**: two-couple of values - immutable

```javascript
const pair = (a) => (b) => (ƒ) => f(a)(b);
const firstname = fst; // =p => p(T);
const lastname = snd; // =p => p(F);;

const person = pair("Dirk")("König");
name = pair(firstname) + " " + pair(lastname);
```

**Datatype triple**: three-couple of values - immutable

```javascript
const triple = (a) => (b) => (c) => pair(par(a)(b))(c);
const firstname = (p) => fst(fst(p));
const lastname = (p) => snd(fst(p));
const age = (p) => snd(p);

const person = triple("Dirk")("König")(50);
name = triple(firstname) + " " + triple(lastname) + ", Alter " + triple(age);
```

**Complement**: take one from two functions

```javascript
const left = (a) => (f) => (g) => f(x);
const right = (a) => (f) => (g) => g(x);
const either = (e) => (f) => (g) => e(f)(g);

//  with the eta reduction
const either = id;

//Special Case: Maybe

const nothing = left();
const just = right;
const maybe = either;
maybe (expressionThatMayGoWrong) (handleBad) (handleGood);
```