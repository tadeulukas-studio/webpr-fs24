## Week 2 - Lesson

### JS Goodie Part I 

**Strings**: writing strings with `''` or `""`

- /\b\w+\b/: Regular expression for words
- String(/\b\w+\b/): Convert regular expression to string - "/\\b\\w+\\b/"
- `` - backtick: Template string, can include variables and expressions. Can send multi-line strings
- ${expression}: Include expression in string


### Variable and functions

**Scope**: What kind of references can I see, use it and to what points to. It is Visibility area of initialized variables

- global: window or Browser from initialization on
- function: no matter where defined, variables are local to the enclosing function (lambda) 
- hoisted: In the same way as function scope, but variables are hoisted to the top of the function
- locale: inside a block, like if, for, while, etc.

```javascript
x = 5; // global scope, mutable (changeable) => not recommended
var x = 5; // hoisted scope , mutable => not recommended
let x = 5; // locale scope, mutable
const x = 5; // locale scope, immutable
```

**IIFE**: Immediately invoked function expression. Function is defined and called at the same time. It is used to create a new scope for variables

```javascript
// function definition and call
function foo() {...}; foo();

// named function definition with direct call
(function foo() {...})();

// unnamed function definition with direct call
(function () {...})();

// lambda definition with direct call
(() => {...})();
```

### Lambda calculus

**α (alpha)**: Rename parameter - translation

```javascript
const x => x; //instead const id = x => x;
// or
const y => y;  //instead const id = y => y;
```

**β (beta)**: Apply argument - reduction, from left to right

```javascript
((f) => (x) => f(x))(id)(1)
        // replace f on the left with id from first argument
         ((x) => id(x))(1)
        // replace x on the left with 1 from first (next) argument
        id(1)
        // replace id with its definition
        (x => x) (1);
        // replace x on the left with 1 from first argument
        1;
```

**η (eta)**: Cancel parameter - reduction, from right to left

```javascript
(x) => (y) => both(x)(y);
// remove y as most right parameter
(x) => both(x);
// remove x as next right parameter
both;
```

## Further Input - Video Lambda Calculus Part II

### Lambda Calculus II

**Combinator**: lambda functions

- Bluebird: `B = f => g => f(g(a)` with lambda `λƒga.ƒ(ga)` for composition
- Thrush: `Th = CI = a => f => f(a)` with lambda `λaƒ.ƒa`
- Vireo: `V = BCT = a => b => f => f(a)(b)` with lambda `λabƒ.ƒab`
- Blackbird: `Bl = BBB = f => g => a => b => f(g(a)(b))` with lambda `λƒgab.ƒ(gab)`

**Numbers**: defined as folds

- 0 / ZERO: `N0 = F = λƒa.a` with javascript `f => a => a`
- 1 / ONCE: `N1 = I = λƒa.ƒa` with javascript `f => a => f(a)`
- 2 / TWICE: `N2 = λƒa.ƒ(ƒa)` with javascript `f => a => f(f(a))`
- 3 / THRICE: `N3 = λƒa.ƒ(ƒ(ƒa))` with javascript `f => a => f(f(f(a)))`
- 4 / FOURFOLD: `N4 = λƒa.ƒ(ƒ(ƒ(ƒa)))` with javascript `f => a => f(f(f(f(a))))`

**Operations**:

- Successor: `SUCC = λnƒa.ƒ(nƒa)` with javascript `n => f => a f(n(f)(a))` for '$number+1$' (`number++`)
- Addition: `ADD = λnk.n SUCC k` with javascript `n => k => n(SUCC(k))` for $n + k$
- Multiplication: `MULT = B = λnkƒ.n(kƒ)` with javascript `n => k => n(k(f))` for $n * k$
- Power: `POW = λnk.kn` with javascript `n => k => k(n)` for $n^k$
- Predecessor: `PRED = λn.FST(nΦ(PAIR N0 N0))` with javascript `n => FST(n(PHI)(PAIR(N0)(N0)))` for
  $number-1$ (`number--`)
- Subtraction: `SUB = λnk.k PRED n` with javascript `n => k => k(PRED)(n)` for $n - k$

**Equality functions**:

- Is 0: `IS0 = λn.n(KF)T` with javascript `n => n(K(F))(T)` for $n == 0$
- Less equal: `LEQ = λnk.IS0(SUB n k)` with javascript `n => k => IS0(SUB(n)(k))` for $n ≤ k$
- Equal: `EQ = λnk.AND((LEQ n k)(LEQ k n))` with javascript `n => k => IS0(SUB(n)(k))` for $n == k$
- Greater than: `GT = Bl NOT LEQ = λnk.NOT(LEQ n k)` with javascript `n => k => NOT(LEQ(n)(k))` for $n > k$

**Divers**:

- Pair: `PAIR = V = λabƒ.ƒab` with javascript `a => b => f => f(a)(b)`
- First: `FST = λp.pK` with javascript `p => p(K)`
- Second: `SND = λp.pKI` with javascript `n => p(KI)`
- Phi / Φ: `Φ = λp.V(SND p)(SUCC (SND p))` with javascript `p => PAIR(SND(p)(SUCC(SND(p))))`

---