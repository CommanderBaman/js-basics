/**
 * VARIABLES
 * variables in javascript are dynamically typed
 * Primitive data types - string, bigint, etc.
 *
 * Three types of variable declarations
 * Errors are uncommented. Uncomment these lines to check the errors. Such comments start with ERROR
 */

/**
 * ------- VARIABLE DECLARATIONS -------
 * How to declare variable
 */

/**
 * #1 -> var
 * variable can change values
 * nobody uses it due to some problems with the scope
 */
var r;
r = 3; // can change values
var r = 6; // can redeclare

/**
 * #2 -> const
 * variable has a constant value -> assigned when initialized
 * cannot change values
 */
const y = 0; // const declarations must be initialized
// y = 3 // ERROR: cannot change the variable value -> TypeError

/**
 * #3 -> let
 * similar to var but no issues
 */
let z;
z = 5;
// let z = 3 // ERROR: cannot redeclare -> SyntaxError

/**
 * ------- VARIABLE TYPES -------
 * What is the type of variable and how to check it
 * uncomment the lines you want to check
 */

/**
 * Primitive Data Types
 */
let x; // undefined
// x = '1' // string
// x = 1 // number
// x = true // boolean

// check type of variable via the `typeof` function
console.log(typeof x);


/**
 * Arrays
 * ordered collection of variables
 */
const nameArray = ['John', 'Alice', 'Bob'] // declare with const but can still change the constituents

console.log(nameArray)
console.log(typeof nameArray) // object

/**
 * CONCLUSION
 * Dynamically typed variables
 *  Primitive Datatypes -> string, number, etc.
 * Three type of variable declaration
 *  `let` and `const` are the recommended way to declare variables
 */
