////////////////////////////////////////////////////////////////////////////////
// range ///////////////////////////////////////////////////////////////////////
////////////////////////////////////////////////////////////////////////////////
// if step not provided step assigned through ternary conditional statement
function range(start, end, step = (start < end) ? 1 : -1){
let array = [];
   // if start/end same, return empty[]
    if (start === end) {  
        return array; 
    // if end not provided return empty array
    } // if step is positive
    else if (step > 0) {
         // for-loop to add range numbers into array
         for (let i = start; i <= end; i += step) {
           // add i to end of array
           array.push(i);
         }
    // if step is negative
    } else {
    for (let i = start; i >= end; i += step) {
      // add i to end of array
      array.push(i);
    }
    }
return array;
}


////////////////////////////////////////////////////////////////////////////////
// sum /////////////////////////////////////////////////////////////////////////
////////////////////////////////////////////////////////////////////////////////


function sum(array) {
    //declare output variable
    var result =0;
    // for-loop to iterate through array 
    for (var i=0; i< array.length; i++) {
      // add array value
      result= result + array[i];
      // return result
    } return result;
}

////////////////////////////////////////////////////////////////////////////////
// reverseArray ////////////////////////////////////////////////////////////////
////////////////////////////////////////////////////////////////////////////////

function reverseArray(array) {
  // declare output variable
  var reversed =[];
    // for-loop to iterate through given array elements backwards
    for(var i=array.length-1; i >=0; i--) {
     // add each value to output array one by one
     reversed.push(array[i]);
  } return reversed;

}

////////////////////////////////////////////////////////////////////////////////
// reverseArrayInPlace /////////////////////////////////////////////////////////
////////////////////////////////////////////////////////////////////////////////

function reverseArrayInPlace(array) {
      
    // for-loop to swop around last element
    for (var i = 0; i < array.length; i++) {
        // insert at index i,  last element removed/array.pop() 
        array.splice(i, 0, array.pop());
      // return modified array
    } return array;

}

////////////////////////////////////////////////////////////////////////////////
// arrayToList /////////////////////////////////////////////////////////////////
////////////////////////////////////////////////////////////////////////////////

function arrayToList(array) { 
  // declare last element of list
  let list = null;
  // for-loop to loop backwards through given values  
  for (let i = array.length - 1; i >= 0; i--) {
    // build up list object backwards
    list = {value: array[i], rest: list};
  }  
  return list;
}

////////////////////////////////////////////////////////////////////////////////
// listToArray /////////////////////////////////////////////////////////////////
////////////////////////////////////////////////////////////////////////////////

function listToArray(list) {
  // declare empty output array
  let array = [];
  // loop through top and sub-list to get values 
  for (let node = list; node; node = node.rest) {
    // add value to output array
    array.push(node.value);
  }
  // return output array
  return array;
}

////////////////////////////////////////////////////////////////////////////////
// prepend /////////////////////////////////////////////////////////////////////
////////////////////////////////////////////////////////////////////////////////

function prepend(value, list) {
  // add value to list and return updated list
  return {"value": value, rest: list};
}


////////////////////////////////////////////////////////////////////////////////
// nth /////////////////////////////////////////////////////////////////////////
////////////////////////////////////////////////////////////////////////////////

function nth(list, n) {
   // declare variable to keep track of sublists
   var i = 0;
   // if n equals 0 return top list value
   if (n === i) {
     return list.value;
     // otherwise loop through sublists
   } else {
       for (let node = list; node; node = node.rest) {
          // if nth sublist is reached return sublist value
          if (i === n) {
            return node.value;
            // add one to sublist counter
          } i++;
       } 
   }
}

/*function nth(list, n) {
 if(!list) {
   return undefined;
 } else if(n===0) {
   return list.value;
 } else {
   return nth(list.rest, n-1);
 }
}*/

////////////////////////////////////////////////////////////////////////////////
// deepEqual ///////////////////////////////////////////////////////////////////
////////////////////////////////////////////////////////////////////////////////
function deepEqual(a, b) {
 // if input values are strictly equal then return true
 if (a === b) return true;
  // if input values are null or not objects then return false
  if (a === null || typeof a != "object" ||
      b === null || typeof b != "object") return false;
  // assign object keys to separate variables
  let keysA = Object.keys(a), keysB = Object.keys(b);
  // if keys of the objects do not have same length return false
  if (keysA.length != keysB.length) return false;
  // for loop to compare key values, if they are not strictly equal return false
  for (let key of keysA) {
    if (!keysB.includes(key) || !deepEqual(a[key], b[key])) return false;
  }
  // if the input values passed all the tests then return true 
  return true;
}


 
////////////////////////////////////////////////////////////////////////////////
// DON'T REMOVE THIS CODE //////////////////////////////////////////////////////
////////////////////////////////////////////////////////////////////////////////

if ((typeof process !== 'undefined') &&
  (typeof process.versions.node !== 'undefined')) {
  module.exports = {
    range,
    sum,
    reverseArray,
    reverseArrayInPlace,
    arrayToList,
    listToArray,
    prepend,
    nth,
    deepEqual,
  };
};
