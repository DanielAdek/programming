/** write a program that accept a character, if the character is the same as the previous one
    then increase the mode of that character, if it's not the same as the previous on then store it.
    You should be able to clear the store and when it is cleared, then all mode should be reset to 0.
    Return value as a single string of characters with their mode in front of each chars
      example: 1. func("a"); func("a") func("a"); func("b"); func("b"); func("b"); func("b"); // returns "a3b4"
      example: 2. func("z"); func("z"); func("b"); func("x") func("b"); func("b"); func("k"); func("L");
                  func("l") // return "z2bxb2kLl"
 */


// SOLUTION BREAK DOWN
/**
 * We can have a memoized function to keep track of values received
 * we can have a function to receive a value to be passed to the memoized function
 * We can have a function to clear the storage in memoized function
 *
 * In the memoized function
 *      - we want it to accept a function as parameter
 *      - we want to have a cache of data-set
 *      - we want to check if the current argument in the passed function is the same as the last element
 *        in the cached then increment the mode otherwise create a new last element
 *      - then loop over all and return a single string as requested
 * In the clear function
 *      - we want to reset the memoized cache
 */
const combination = (char) => {
  // create a store for the chars

}