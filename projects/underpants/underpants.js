// This makes the arguments variable behave the way we want it to and a few
// other things. For more info:
// https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Strict_mode
'use strict';

var _ = {};


/**
* START OF OUR LIBRARY!
* Implement each function below it's instructions
*/

/** _.identity
* Arguments:
*   1) Any value
* Objectives:
*   1) Returns <value> unchanged
* Examples:
*   _.identity(5) === 5
*   _.identity({a: "b"}) === {a: "b"}
*/
// declare function expression that takes one parameter
_.identity = function(value) {
    // return given value
    return value;
};

/** _.typeOf
* Arguments:
*   1) Any value
* Objectives:
*   1) Return the type of <value> as a string
*       Types are one of:
*          - "string"
*          - "array"
*          - "object"
*          - "undefined"
*          - "number"
*          - "boolean"
*          - "null"
*          - "function"
* Examples:
* _.typeOf(134) -> "number"
* _.typeOf("javascript") -> "string"
* _.typeOf([1,2,3]) -> "array"
*/
// declare function that takes one parameter
_.typeOf = function(value) {
   // check if given value is an array, then return "array"
   if (Array.isArray(value) === true) {
       return "array";
    // check if value is undefined
    } else if ( value === undefined) {
        return "undefined";
    // check if value is null
    } else if (value === null) {
        return "null";
    // return value data type
    } else {
      return typeof value;
    }
};

/** _.first
* Arguments:
*   1) An array
*   2) A number
* Objectives:
*   1) If <array> is not an array, return []
*   2) If <number> is not given or not a number, return just the first element in <array>.
*   3) Otherwise, return the first <number> items of <array>
* Edge Cases:
*   1) What if <number> is negative?
*   2) What if <number> is greater than <array>.length?
* Examples:
*   _.first("ponies", 1) -> []
*   _.first(["a", "b", "c"], "ponies") -> "a"
*   _.first(["a", "b", "c"], 1) -> "a"
*   _.first(["a", "b", "c"], 2) -> ["a", "b"]
*/
// declare function expression with two parameters
_.first = function(array, number) {
    // check if array is an array and whether number is negative
    if (Array.isArray(array) === false || number < 0 ) {
        return [];
    // check if number parameter was provided and whether its a number datatype
    } else if (number === undefined || typeof number !== "number") {
        // if not return first element 
        return array[0];
     // if number greater than array length return entire array
    } else if ( array.length < number) {
        return array;
    } else {
        // declare output array
        var resultArr = [];
        // for loop to loop through array and extract given number of elements
        for (var i = 0; i < number; i++) {
           // add elements to output array
           resultArr.push(array[i]);
          // return output array
        } return resultArr;
    } 
    };

/** _.last
* Arguments:
*   1) An array
*   2) A number
* Objectives:
*   1) If <array> is not an array, return []
*   2) If <number> is not given or not a number, return just the last element in <array>.
*   3) Otherwise, return the last <number> items of <array>
* Edge Cases:
*   1) What if <number> is negative?
*   2) What if <number> is greater than <array>.length?
* Examples:
*   _.last("ponies", 2) -> []
*   _.last(["a", "b", "c"], "ponies") -> "c"
*   _.last(["a", "b", "c"], 1) -> "c"
*   _.last(["a", "b", "c"], 2) -> ["b", "c"]
*/
// declare last function with two parameters
_.last = function(array, number){
    // check if array is an array and if number is negative
    if (Array.isArray(array) === false || number < 0 ) {
        return [];
    // check if number is not provided or not number data type
    } else if (number === undefined || typeof number !== "number") {
        // if so return -1
        return array[array.length-1];
      // if number is greater than array length then return entire array
    } else if ( array.length < number) {
        return array;
    } else {
        // declare result array
        var resultArr = [];
        // for-loop through array elements starting from the back 
        for (var i = array.length - number; i < array.length ; i++) {
           // add elements to result array
           resultArr.push(array[i]);
          // return result
        } return resultArr;
    } 
    };

/** _.indexOf
* Arguments:
*   1) An array
*   2) A value
* Objectives:
*   1) Return the index of <array> that is the first occurrance of <value>
*   2) Return -1 if <value> is not in <array>
*   3) Do not use [].indexOf()!
* Edge Cases:
*   1) What if <array> has multiple occurances of val?
*   2) What if <val> isn't in <array>?
* Examples:
*   _.indexOf(["a","b","c"], "c") -> 2
*   _.indexOf(["a","b","c"], "d") -> -1
*/
// declare index function with 2 parameters
_.indexOf = function(array, value){
    // for-loop to check each array element for a match with given value
    for (var i = 0; i < array.length; i++) {
        if (array[i] === value ) {
            // if theres a match return the value
            return i;
        } 
     // if no match return -1
    }return -1;
};

/** _.contains
* Arguments:
*   1) An array
*   2) A value
* Objectives:
*   1) Return true if <array> contains <value>
*   2) Return false otherwise
*   3) You must use the ternary operator in your implementation.
* Edge Cases:
*   1) did you use === ?
*   2) what if no <value> is given?
* Examples:
*   _.contains([1,"two", 3.14], "two") -> true
*/
// declare contains function with two parameters
_.contains = function(array, value){
   // use include method and ternary operator to check if array contains the
   // given value, return true or fale
   return (array.includes(value)) ? true : false;
}

/** _.each
* Arguments:
*   1) A collection
*   2) A function
* Objectives:
*   1) if <collection> is an array, call <function> once for each element
*      with the arguments:
*         the element, it's index, <collection>
*   2) if <collection> is an object, call <function> once for each property
*      with the arguments:
*         the property's value, it's key, <collection>
* Examples:
*   _.each(["a","b","c"], function(e,i,a){ console.log(e)});
*      -> should log "a" "b" "c" to the console
*/
// declare each function with two parameters
_.each = function(collection, functn) {
    //check if array is array
    if (Array.isArray(collection)) {
        // for-loop to run provided function on each element
        for( var i= 0; i < collection.length; i++) {
            functn(collection[i], i, collection);
        } 
      // check if collection is object
    } else if (typeof collection === "object") {
        // for-loop to run provided function on each object value
        for (var key in collection) {
            functn(collection[key], key, collection);
        }
    }
};

/** _.unique
* Arguments:
*   1) An array
* Objectives:
*   1) Return a new array of all elements from <array> with duplicates removed
*   2) Use _.indexOf() from above
* Examples:
*   _.unique([1,2,2,4,5,6,5,2]) -> [1,2,4,5,6]
*/
_.unique = function(inputArray) {
    // declare output array with first element from input array added
    var noDoubles = [inputArray[0]];
    // for loop to loop through array values
    for (var i = 1; i < inputArray.length; i++) {
        // use indexOf function to check if current element is already in output array
        if((_.indexOf(noDoubles, inputArray[i])) === -1) {
            // add elements to output array
            noDoubles.push(inputArray[i]);
        }
    } return noDoubles;
};


/** _.filter
* Arguments:
*   1) An array
*   2) A function
* Objectives:
*   1) call <function> for each element in <array> passing the arguments:
*      the element, it's index, <array>
*   2) return a new array of elements for which calling <function> returned true
* Edge Cases:
*   1) What if <function> returns something other than true or false?
* Examples:
*   _.filter([1,2,3,4,5], function(x){return x%2 === 0}) -> [2,4]
* Extra Credit:
*   use _.each in your implementation
*/
_.filter = function(arr, funcn){
   var outP=[];
   // use each function with param= arr and param = function
  _.each(arr, function(e, i, array) {
      // if extracted element passes the test function add it to outP array
      if (funcn(e, i, array) === true) {
          // add elements to output array
           outP.push(e);
        } 
});
  return outP;
}; 

/** _.reject
* Arguments:
*   1) An array
*   2) A function
* Objectives:
*   1) call <function> for each element in <array> passing the arguments:
*      the element, it's index, <array>
*   2) return a new array of elements for which calling <function> returned false
*   3) This is the logical inverse if _.filter(), you must use _.filter() in your implementation
* Examples:
*   _.reject([1,2,3,4,5], function(e){return e%2 === 0}) -> [1,3,5]
*/
// declare reject function with two parameters
_.reject = function(arr, func) {
    // declare and assign output array
    var rejArr = [];
    // call filter function to invoke anonymous function to check each array element
    _.filter(arr, function(e, i, array) {
        // if condition to check each element
        if (func(e, i, array) === false) {
            // add element to output array
            rejArr.push(e);
        }
    });
    // return output array
    return rejArr;
};    
    
/** _.partition
* Arguments:
*   1) An array
*   2) A function
* Objectives:
*   1) Call <function> for each element in <array> passing it the arguments:
*       element, key, <array>
*   2) Return an array that is made up of 2 sub arrays:
*       0) An array that contains all the values for which <function> returned something truthy
*       1) An array that contains all the values for which <function> returned something falsy
* Edge Cases:
*   1) This is going to return an array of arrays.
* Examples:
*   _.partition([1,2,3,4,5], function(element,index,arr){
*     return element % 2 === 0;
*   }); -> [[2,4],[1,3,5]]
* 
*/
// declare partition function
_.partition = function(array, fun) {
    //declare empty array with two nested empty arrays to hold outputs
    var results = [[],[]]; 
    // call each function to invoke anonymous function
    _.each(array, function(e, k, arr){
        // if statement to check each array element
        if (fun(e, k, arr) === true) {
            // add elements to the result array
            results[0].push(e);
        } else {
            results[1].push(e);
        }
    });
    // return result array
    return results;
};

/** _.map
* Arguments:
*   1) A collection
*   2) a function
* Objectives:
*   1) call <function> for each element in <collection> passing the arguments:
*        if <collection> is an array:
*            the element, it's index, <collection>
*        if <collection> is an object:
*            the value, it's key, <collection>
*   2) save the return value of each <function> call in a new array
*   3) return the new array
* Examples:
*   _.map([1,2,3,4], function(e){return e * 2}) -> [2,4,6,8]
*/
// declare map function with two parameters
_.map = function(collection, fun) {
    // declare output array
     var alteredArr = [];
     // invoke each function to access each element of the collection
      _.each(collection, function(val, index, collect){
         // call provided function to execute on each element and add the
         // output to the output array
         alteredArr.push(fun(val, index, collect));
      }); 
      // return array of altered elements
      return alteredArr;
};

/** _.pluck
* Arguments:
*   1) An array of objects
*   2) A property
* Objectives:
*   1) Return an array containing the value of <property> for every element in <array>
*   2) You must use _.map() in your implementation.
* Examples:
*   _.pluck([{a: "one"}, {a: "two"}], "a") -> ["one", "two"]
*/
// declare map function with two parameters
_.pluck = function(objArr, prop) {
    // declare output variable
    var values =[];
    // call map function to access each key value
    _.map(objArr, function(val, index, collec){
      //add values to output array
      values.push(val[prop]);  
    });
    // return output array
    return values;
}; 

/** _.every
* Arguments:
*   1) A collection
*   2) A function
* Objectives:
*   1) Call <function> for every element of <collection> with the paramaters:
*      if <collection> is an array:
*          current element, it's index, <collection>
*      if <collection> is an object:
*          current value, current key, <collection>
*   2) If the return value of calling <function> for every element is true, return true
*   3) If even one of them returns false, return false
*   4) If <function> is not provided, return true if every element is truthy, otherwise return false
* Edge Cases:
*   1) what if <function> doesn't return a boolean
*   2) What if <function> is not given?
* Examples:
*   _.every([2,4,6], function(e){return e % 2 === 0}) -> true
*   _.every([1,2,3], function(e){return e % 2 === 0}) -> false
*/
// declare every function with two parameters
_.every = function(collection, fun) {
    // declare array for return results
    var results=[];
    // if function parameter was not provided
    if (fun === undefined ) {
       // use each function to iterate over each element
        _.each(collection, function(e, i, coll) {
            // if boolean value of element is falsey
            if (e === false) {
               // add false to result array
               results.push(false);
            } 
        }); 
        // if result array empty return true
        return (results.length === 0);
    }
     // use each function to iterate over each element 
     _.each(collection, function(e, i, coll) {
        // call function on each element and add result to results array
        results.push(fun(e, i, collection))
    });
    // if results array includes false return false
    if (results.includes(false)){
        return false;
    // otherwise return true
    } else {
        return true;
    }
};

/** _.some
* Arguments:
*   1) A collection
*   2) A function
* Objectives:
*   1) Call <function> for every element of <collection> with the paramaters:
*       if <collection> is an array:
*        current element, it's index, <collection>
*       if <collection> is an object:
*        current value, current key, <collection>
*   2) If the return value of calling <function> is true for at least one element, return true
*   3) If it is false for all elements, return false
*   4) If <function> is not provided return true if at least one element is truthy, otherwise return false
* Edge Cases:
*   1) what if <function> doesn't return a boolean
*   2) What if <function> is not given?
* Examples:
*   _.some([1,3,5], function(e){return e % 2 === 0}) -> false
*   _.some([1,2,3], function(e){return e % 2 === 0}) -> true
*/
_.some = function(collection, fun)  {
    // declare array for return results
    var results=[];
    // if function parameter was not provided
    if (fun === undefined ) {
       // use each function to iterate over each element
        _.each(collection, function(e, i, coll) {
            // if boolean value of element is falsey
            if (e === true) {
               // add true to result array
               results.push(true);
            } 
        }); 
        // if result array includes true
        if (results.includes(true)){
            return true;
          // otherwise return false
        } else {
            return false;
       }
    }
     // use each function to iterate over each element 
     _.each(collection, function(e, i, coll) {
        // call function on each element and add result to results array
        results.push(fun(e, i, collection))
    });
    // if results array includes false return false
    if (results.includes(true)){
        return true;
    // otherwise return true
    } else {
        return false;
    }
};

/** _.reduce
* Arguments:
*   1) An array
*   2) A function
*   3) A seed
* Objectives:
*   1) Call <function> for every element in <collection> passing the arguments:
*         previous result, element, index
*   2) Use the return value of <function> as the "previous result"
*      for the next iteration
*   3) On the very first iteration, use <seed> as the "previous result"
*   4) If no <seed> was given, use the first element/value of <collection> as <seed> and continue to the next element
*   5) After the last iteration, return the return value of the final <function> call
* Edge Cases:
*   1) What if <seed> is not given?
* Examples:
*   _.reduce([1,2,3], function(previousSum, currentValue, currentIndex){ return previousSum + currentValue }, 0) -> 6
*/
// declare reduce function with 3 parameters
_.reduce = function(array, fun, seed) {
    // if seed parameter was not provided
    if ( seed === undefined) {
       // seed set to first element of array
       seed = array[0];
       // loop through array starting at second element
       for (var i = 1; i < array.length; i++) {
           // call function with each element and update seed value to returned value
           seed = fun(seed, array[i], i);
       }
    // return seed
    return seed;
    // if seed parameter was provided
    } else {
    // call each function to access each element of the array
    _.each(array, function(e, i , coll) {
        // call function with each element and update seed value to returned value
        seed = fun(seed, e, i);
    });
}
 // return seed
 return seed;   
}; 

/*
_.reduce = function(array, fun, seed) {
    if ( seed === undefined) {
       seed = array[0];
       let array1 =array.slice(1);
        _.each(array1, function(e, i , coll) {
        seed = fun(seed, e, i+1);
    });
    } else {
    _.each(array, function(e, i , coll) {
        seed = fun(seed, e, i);
    });
}
 return seed;   
};  */

/** _.extend
* Arguments:
*   1) An Object
*   2) An Object
*   ...Possibly more objects
* Objectives:
*   1) Copy properties from <object 2> to <object 1>
*   2) If more objects are passed in, copy their properties to <object 1> as well, in the order they are passed in.
*   3) Return the update <object 1>
* Examples:
*   var data = {a:"one"};
*   _.extend(data, {b:"two"}); -> data now equals {a:"one",b:"two"}
*   _.extend(data, {a:"two"}); -> data now equals {a:"two"}
*/
// declare extend function with unknown amount of arguments
_.extend = function(...objects){
    // declare array of objects from arguments
    var objsArr = Array.from(arguments);
    // each function to access each object
    _.each(objsArr, function(e, i, arr) {
        // copy values from all objects to first object
        Object.assign(objsArr[0], e);
    });
    //return updated object
    return objsArr[0];
} 

//////////////////////////////////////////////////////////////////////
// DON'T REMOVE THIS CODE ////////////////////////////////////////////
//////////////////////////////////////////////////////////////////////

if((typeof process !== 'undefined') &&
   (typeof process.versions.node !== 'undefined')) {
    // here, export any references you need for tests //
    module.exports = _;
}
