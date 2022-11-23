/**
 * ERROR HANDLING
 * handle exceptions using the try - catch block
 * Different types of error are mentioned in the comments. Uncomment to try them out
 */

try {
    /**
     * ReferenceError
     * Cause - variable not defined
     */
    // lsdjs 
    
    /**
     * TypeError
     * Cause - Doing something not applicable to that type
     */
    const x = 0
    // x = 4 // cannot reassign constant variables
    
    
    /**
     * Throw 
     * Define your own exceptions
     */
    throw('My New Exception')
    
} catch (errorVariable) {
    console.error(errorVariable) // console.error prints it like an error
}