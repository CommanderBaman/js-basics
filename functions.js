/**
 * FUNCTIONS
 * Contains how to declare functions and some common functions on arrays, objects, etc.
 */


/**
 * ------- COMMON FUNCTIONS -------
 */
/**
 * Common functions in Arrays
 *      filter -> filter outputs according to function given to it
 */
const nameArray = ["John", "Alice", "Bob", "Jane"]

const filteredArray = nameArray.filter((name) => name.length === 4)
console.log({ nameArray, filteredArray })
