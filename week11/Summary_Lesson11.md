
## Week 11 - Lesson

### JS Goodie -  Slice and Splice

**Slice**: creating a new array from the current array by copying elements from the start index until the end index

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

**Splice**: changing the array by adding, removing or updating elements at the start index for number elements

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

## Week 11 - Data Flow

### Coordination schemata - similiar to concurrency
1. No coordination needed
2. Sequence (of side effects)
3. Dependency on former results

### No Coordination - nothing to do 
- Execution model: confined
- All actions run independently


### Modules

**Modules**: to organize code, clear dependencies

- Avoiding errors: globals, scoping, namespace
- Distinction: packet manager, build tool
    - Legacy: Module systems, module loader/ bundler
- Properties: use of `import` or `export`
- Include: async, transitive, with URI format recommended

```html
<!-- defer by default due to type module -->
<script src="relativePath/file.js" type="module"></script>
<!-- or -->
<script>
    // promise value
    import("relativePath/file.js").then(mod =>
    ... )
    ;
</script>
```

**Imports variants**:

```javascript
import "module-name";
import defaultExport from "module-name";
import * as name from "module-name";
import {export} from "module-name";
import {export as alias} from "module-name";
import {export1, export2} from "module-name";

var promise = import("module-name");
```

**Export variants**: all read-only and singletons

```javascript
export {name1, name2,
...,
nameN
}
;

export function FunctionName() {...
}

export const name1, name2, ..., nameN;
export default expression;
export {name1 as default,
...
}
;
export * from
...
;
export {name1, name2,
...,
nameN
}
from
...
;
```

**Implicit `use strict`**: exports are read-only, no global objects/this/ hoisting\
**Implicit `defer`**: `document.writeln()` no more useful\
**SOP**: Same origin policy, file system as a `null` origin, all js files should come from the same project directory
path.

- Possible ways to avoid: browsers dev mode, local webserver, bundler to execute sync, browser in debug mode