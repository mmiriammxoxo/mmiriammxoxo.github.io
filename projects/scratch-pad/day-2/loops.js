// #!/usr/bin/env node

'use strict';

/**
 * IN CLASS EXERCISE: LOOPS
 */

/** 
 * Given an input Array, loop forward over the Array and print its values 
 * using console.log().
 */
function printArrayValues(array) {
  // YOUR CODE BELOW HERE //
  // set for loop conditions to loop over array
   for (var x=0; x < array.length; x++) {
     // print each array value
     console.log(array[x]);
   }
  
  
  
  // YOUR CODE ABOVE HERE //
}

/** 
 * Given an input Array, loop backwards over the Array and print its values 
 * using console.log().
 */
function printArrayValuesInReverse(array) {
  // YOUR CODE BELOW HERE //
  // set for loop conditions to loop backwards over array
  for (var x= array.length-1; x >=0; x--) {
    // print each array value
    console.log(array[x]);
  }
  
  
  // YOUR CODE ABOVE HERE //
}

/** 
 * Given an input Object, return an Array containing the Object keys.
 */
function getObjectKeys(object) {
  // YOUR CODE BELOW HERE //
  // declare output variable to hold object key array
  var objectKeys =[];
  // declare loop conditions to loop over object keys and push keys into array
  for (var key in object) {
       objectKeys.push(key);
    }
    // return output array 
    return objectKeys;
  
  
  
  // YOUR CODE ABOVE HERE //
}

/** 
 * Given an input Object, loop over the Object and print its keys 
 * using console.log().
 */
function printObjectKeys(object) {
  // YOUR CODE BELOW HERE //
  // declare for-in loop to loop over object keys
  for ( var key in object) {
    // print each key to console
    console.log(key);
  }
  
  
  // YOUR CODE ABOVE HERE //
}

/** 
 * Given an input Object, return an Array containing the Object's values.
 */
function getObjectValues(object) {
  // YOUR CODE BELOW HERE //
  // declare variable to hold output array
  var values =[];
  // declare for-in loop to access object keys
  for (var key in object) {
  // use key to access key-value and add it to the output array
    values.push(object[key]);
  }
  // return output array
  return values;
  
  
  // YOUR CODE ABOVE HERE //
}

/** 
 * Given an input Object, loop over the Object and print its values 
 * using console.log().
 */
function printObjectValues(object) {
  // YOUR CODE BELOW HERE //
  // declare for in loop to loop over given object and get keys
  for (var key in object) {
    // print key values one by one
    console.log(object[key]);
  }
  
  
  
  // YOUR CODE ABOVE HERE //
}

/** 
 * Given an input Object, return the length of its key/value pairs
 */
function getObjectLength(object) {
  // YOUR CODE BELOW HERE //
  // declare counter variable
  var counter = 0;
  // declare for-in loop to loop over object keys
  for (var key in object) {
    // for each key add 1 to counter
    counter ++;
  }
  // return counted number of keys 
  return counter;
  
  
  // YOUR CODE ABOVE HERE //
}

/** 
 * Given an input Object, how might we loop over the Object IN REVERSE and 
 * print its values using console.log()?
 */
function printObjectValuesInReverse(object) {
  // YOUR CODE BELOW HERE //
  // declare variable to hold object keys
  var values=[];
  // declare for-in loop to get keys from object
  for (var key in object) {
    // add key-values to array
    values.push(object[key]);
  }
  // use for loop to print array values in reverse, one by one
  for ( var x = values.length-1; x >=0; x-- ) {
    console.log(values[x]);
  }
  
  
  // YOUR CODE ABOVE HERE //
}





// DON'T REMOVE THIS CODE //////////////////////////////////////////////////////
if((typeof process !== 'undefined') &&
    (typeof process.versions.node !== 'undefined')) {
    // here, export any references you need for tests //
    module.exports.printArrayValues = printArrayValues;
    module.exports.printArrayValuesInReverse = printArrayValuesInReverse;
    module.exports.printObjectValues = printObjectValues;
    module.exports.getObjectValues = getObjectValues;
    module.exports.getObjectKeys = getObjectKeys;
    module.exports.printObjectKeys = printObjectKeys;
    module.exports.getObjectLength = getObjectLength;
    module.exports.printObjectValuesInReverse = printObjectValuesInReverse;
}
