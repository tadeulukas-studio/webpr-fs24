## Week 5 - Lesson

### JS GOODIE

**Giving an extra Line in the console **: Shift + Enter
**Auto semicolon insert**: if the situation is clear, the semicolon is inserted automatically

```javascript
console
    .log() // no ;
    [(1, 2, 3)].map((x) => console.log(x));
// outputs error undefined not an object
// This is because the JavaScript interpreter will try to treat the two lines as one due to the absence of a semicolon at the end of the first line.
```

[5,6,7,8][1,2,3] //The comma operator , evaluates each of its operands (from left to right) and returns the value of the last operand. So, [1,2,3] is evaluated to 3. 
// The expression [5,6,7,8][3] is then evaluated. This is an array access operation, where 3 is the index. In JavaScript, array indices start at 0, so 3 refers to the fourth element of the array [5,6,7,8], which is 8.


### Scripting

**Scripting**: evaluating text from file, url, database or user input, text can be modified, amended, etc.\

**:Why scripting?**:
- Command line, Automation, Build System, Templating, Code Distribution, Formuale, Business Rules, Smart Configuration, Product Lines, DSL, Self-Modifying Code,...\
- Browser prevents access to file system, but can be used to evaluate scripts\

**:Script execution**: in the browser it can be modified but caution it can harm the system\
**Characteristics**: interpreted without compiler with best effort approach\
**Dynamic file addition**: add scripts by writing strings to body tag with another script


```javascript
// important spit </script> with string concat to not close current script tag
["function"].forEach((name) => {
    document.writeln(`<script src="${name}.js"><` + `/script>"`);
    document.writeln(`<script src="${name}Test.js"><` + `/script>"`);
});
```

**Code evaluation**: execute code as written in the function at current position

eval() works as if the code was copied verbatim in the place of th eval, i.e. you share the scope - side effecting code

```javascript
// functionVar contains string of executable function
eval(functionVar);
```

**Functions**: literal `parameters => codeBlock`, functional `Function(parameters, codeBlock)`\

Function() is like eval() but declared parameters and executed in the global scope. it creates a reference.

```javascript
const ass = Function("x", "y", "return x+ y");

add(1, 2);
add(2, 3);  // no need to re-parse
```
**Side effects**: Function()v change values of (global) variables, visible that Function() was called => should not
happen\

**Sandbox**: secure evaluating scripts only in browsers given\

**Usage for: **:

- Automation
- Business rules
- Code distribution
- Text evaluation

## Week 5 - Video

### this decisions

- functions with 'new'
    - yes -> a new empty object
    - 
    - no -> function with dot (object.func()) is called
        - yes -> object before dot (.)
        - no -> global object window

### this in JS

- Object methods use object attributes: function do() { this.attribute }
    - functions cannot access attribute without this. prefix
    - this refers to object name when calling objectName.attribute or objectName.func()
- Problem when using these functions as callback
    - 'this' information is getting lost
- Solve callback issue with binding this
    - other style: func.call(obj) / func.apply(obj) to pass object for non dot functions
    - new style: () => this.func; (fat arrow function automatic bind)