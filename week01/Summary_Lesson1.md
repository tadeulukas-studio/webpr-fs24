## Week 1 - Functions

### General

Important Information : JavaScript has no compiler!

Example: 

```javascript
function fun1()    { return 1; } //calling a function without any parameters

document.writeln(fun1() === 1) //testing a function without any arguments, bsp. fun1(42) === 1
document.writeln( fun1(42) === 1 ); //returns true as there is no compiler involved
```


**Function**: Function is only a reference and not an actual function. It does not know how many parameters are wanted\
\
**Parameter**: Variables in the definition of a function

```javascript
function foo(parameter1, parameter2) {
    /* Code */
}
```

**Argument**: Variables specified within a function's definition

```javascript
foo(argument1, argument2);
```

\
**Function calls**: Functions can be called with any number of parameters. If there are too many arguments provided, only the first ones are gonna be used. In case they are less arguments passed then the unused parameters are undefined (as they have no value)
```javascript
function foo(parameter) {
    /* Code */
}

foo(); // parameter is undefined / no arguments 
foo(argument); // parameter is the argument
foo(argument1, argument2); // parameter is argument1 and argument2 is ignored
```

**Function return**: Functions need a return statement otherwise the return value is undefined

```javascript
function foo() {
    /* Code without return value */
}

let variable1 = foo(); // variable1 is undefined

function foo() {
    /* Code */
    return value;
}

let variable2 = foo(); // variable 2 is assigned value
```

\
**Function as constant or let**: Function can be saved in variables as a definition or used function. 
Being a constant means that it is not possible to reassigned the constant.

Difference to const and let: Two variables a and bare declared with the const keyword. These are constant values and cannot be changed. 
The variable c is declared with the let keyword. The value c can be changed.

```javascript
// definition new function
let fun = function (parameter1, parameter2) {
    /* Code */
};

// define used function
let fun2 = foo(argument1, argument2);

// use of new function
fun(argument1, argument2);

// use of used function
fun2;
```

**Override (Method Overloading)**: Function or Variables with the same name override each other even if the parameters are different.
The name can only refer to one thing.

```javascript
// here is no foo defined
function foo() {
    /* Code */
}

foo(); // foo with no parameters is called

function foo(parameters) {
    /* Code */
}

foo(); //  foo with the parameter is called

let foo = value;
foo(); // here foo as a constant is called with error because is not a function
```

\
**Arrow style (Lambda)**: Another Method to define functions, similar to Lambdas in Java

```javascript

// define
let foo = (parameter1, parameter2) => expression;
let foo2 = (parameter) => {
    /* Code*/
};
```

**Currying style**: Currying is a technique in functional programming where a function with multiple arguments is transformed into a sequence of functions, each with a single argument.
Functions pass variables to other functions.  One function can only have one parameter/argument

```javascript
// define
const foo = (parameter1) => (parameter2) => expression;

// usage
foo(argument1)(argument2);
```

## Further Input - Video Lambda Calculus I 

**Lambda syntax**:

```javascript
// definition
expression:: = variable     // identifier
    | expression
expression   // application
| λ
variable.expression // abstraction
| (expression)            // grouping

// abstraction
λ
parameters.expression // lambda notation
parameters => expression // js notation
```

**Variables**: all immutable\
**Functions**: all unary => curry functions

```javascript
ƒab = f(a)(b)
(ƒa)
b = (f(a))(b)
ƒ(ab) = f(a(b))
```

**Lambda rule**: tries to bind as much as possible to the right side

```javascript
λa.bx = a => b(x)
(λa.b)
x = (a => b)(x)
λa.λb.x = λab.x = a => b => x
```

**β-reduction**: replace variables on the left side with expression form the right side. Start from the inside and go
out

```javascript
((λa.a)
λb.λc.b
)
(x)
λe.ƒ
(λb.λc.b)(x)
λe.ƒ
(λc.x)
λe.ƒ
x // beta normal form
```

**Combinator**: lambda functions

- Idiot/ Identity: `I = x => x` with lambda `λa.a` for id
- Mockingbird: `M = f => f(f)` with lambda `λƒ.ƒƒ`
- Kestrel: `K = a => b => a` with lambda `λab.a` for `const`
- Kite: `KI = CK = a => b => b` with lambda `λab.b` for const id
- Cardinal: `C = f => a => b => f(b)(a)` with lambda `λƒab.ƒba` for flip

**Church Encondins: Boolean operations**:

- TRUE: `T = K = λab.a` with javascript `a => b => a`
- FALSE: `F = KI = λab.b` with javascript `a => b => b`
- Negation: `NOT = C = λp.pFT` with javascript `!p = p => p(F)(T)`
- Conjunction: `AND = λpq.pqF` / `λpq.pqp` with javascript `p && q = p => q => p(q)(F)` / `p => q => p(q)(p)`
- Disjunction: `OR = λpq.pTq` / `λpq.ppq` with javascript `p || q = p => q => p(T)(q)` / `p => q => p(p)(q)`
- Exclusive or: `XOR = M = λpq.p(qTF)(qFT)` with javascript `p XOR q = p => q => p(qTF)(qFT)`
- Boolean equality: `BEQ = λpq.pq(NOT q)` with javascript `p == q = p => q => p(q)(!q)`
