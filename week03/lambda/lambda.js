
// atoms
const id    = x =>      x;
const konst = x => y => x;

//kite test
const snd = x=> y => y; // = konst(id);

// derived true, false, and, or, equals,....
const  T = trueExpr  => falseExpr => trueExpr; // = konst;
const  F = trueExpr  => falseExpr => falseExpr; // = snd;

//const and = a => b => a(b(T)(F)) (b(F)(F));
const and = a => b => a (b) (a);

//const or = a => b => a(b(T)(T)) (b(T)(F));
//const or = a => b => a(a) (b);
//const or = a => a(a);
const or  = a => b => a (a) (b);

(1 === 8) // conditional
    ? 1 // if true
    : 0; // else

const Pair = fn => ln => f => f(fn)(ln);
const firstname = konst; // =fn => ln => fn;
const lastname  = snd;   // = fn => ln => ln;

const triple = x => y => z => (f => f(x)(y)(z));
const firstnameTriple = x => y => z => x;
const lastnameTriple = x => y => z => y;
const berufTriple = x => y => z => z;

const Left = x => f => g => f(x);
const Right = x => f => g=> g(x);
//const either = e => f => g => e(f)(g);
//const either = e => f =>  e(f);
//const either = e => e;
const either = id;


//const [Person, firstname, lastname, age] = Tuple(3);
//const dieter = Person("Dieter")("Holz")(53);
//dieter(firstname);


// ----- special -----

const Tuple = n => [
    parmStore (n + 1) ( [] ) (parms => parms.reduce( (accu, it) => accu(it), parms.pop() ) ), // ctor
    ...Array.from( {length:n}, (it, idx) => iOfN (n) (idx) () )                    // selectors
];

const iOfN = n => i => value => // from n curried params, take argument at position i,
    n === 0
    ? value
    : x => iOfN (n-1) (i-1) ( i === 0 ? x : value );


const parmStore = n => args => onDone =>  // n args to come
    n === 0
    ? onDone(args)
    : arg => parmStore(n - 1)([...args, arg]) (onDone); // store parms in array

const Choice = n => [
    ...Array.from( {length:n}, (it, idx) => parmStore(n+1) ([]) (parms => parms[idx+1] (parms[0]) ) ), // ctors
    id
];




