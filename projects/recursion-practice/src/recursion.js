// Solve all of the following prompts using recursion.

// 1. Calculate the factorial of a number.  The factorial of a non-negative integer n,
// denoted by n!, is the product of all positive integers less than or equal to n.
// Example:  5! = 5 x 4 x 3 x 2 x 1 = 120
// factorial(5);  // 120
var factorial = function(n) {
  // if n a negative return null
  if (n < 0) {
    return null;
    // if n is zero return 1 and the recursive stack
  } else if (n === 0) {
    return 1;
    // return n multiplied by recursive call
  } return n * factorial(n-1) ;
};

// 2. Compute the sum of an array of integers.
// Example:  sum([1, 2, 3, 4, 5, 6]);  // 21
var sum = function(array) {
  // if length of array is 0 return 0
  if (array.length === 0) {
    return 0;
    // if length of array is 1 return first element plus recursive stack
  } else if (array.length === 1) {
       return array[0];
  } // return first element plus recursive call
  return array[0] + sum(array.slice(1));

};

// 3. Sum all numbers in an array containing nested arrays.
// Example: arraySum([1,[2,3],[[4]],5]); // 15
var arraySum = function(array) {
};

// 4. Check if a number is even.
var isEven = function(n) {
  // if n is negative convert n to positive
  if (n < 0) {
   n = Math.abs(n);
   // if n is 1 return false
  } else if (n === 1){
    return false;
    // if n is 0 return true
  } else if (n === 0){
    return true;
  }
  // recursive call 
  return isEven(n-2);
};

// 5. Sum all integers below a given integer.
// sumBelow(10); // 45
// sumBelow(7); // 21
var sumBelow = function(n) {
    // if n is 0 return 0 plus the recursive stack
    if (n === 0) {
      return 0;
      // if n is negative return n+1 plus recursive call
    } else if (n < 0) {
    return (n+1) + sumBelow(n+1);
    // return n-1 plus recursive call
  } else {
   return (n-1) + sumBelow(n-1);
  }
};

// 6. Get the integers in range (x, y).
// Example:  range(2, 9);  // [3, 4, 5, 6, 7, 8]

var range = function(x, y) {
     // if x equal y-1 or x equals y+1 return empty array and recursive stack
     if (x === y-1 || x === y+1) {
     return [];
     // if x equals y return empty array
   } else if (x === y) {
     return [];
     // if x greater than y return [x-1] concatted with recursive call
   } else if (x > y) {
     return [(x-1)].concat(range((x-1), y));
     // return [x+1] concatted with recursive call
   } else {
     return [(x+1)].concat(range((x+1), y)); 
   }
};

// 7. Compute the exponent of a number.
// The exponent of a number says how many times the base number is used as a factor.
// 8^2 = 8 x 8 = 64.  Here, 8 is the base and 2 is the exponent.
// Example:  exponent(4,3);  // 64
// https://www.khanacademy.org/computing/computer-science/algorithms/recursive-algorithms/a/computing-powers-of-a-number
var exponent = function(base, exp) {
    // if exp is 0 return 1
    if (exp === 0) {
      return 1;
      // if exponent is negative return recursive call divided by base
    } else if (exp < 0) {
      return ( exponent(base, exp+1)/base);
      // return base multiplied by recursive call
    } else {
      return base * exponent(base, exp-1);
    }
};

// 8. Determine if a number is a power of two.
// powerOfTwo(1); // true
// powerOfTwo(16); // true
// powerOfTwo(10); // false
var powerOfTwo = function(n) {
  // if n equals 1 return true
  if ( n === 1 ) {
    return true;
    //if n equals 2 return true
  } else if ( n === 2 ) {
    return true;
    // if n negative return false
  } else if (n < 1) {
    return false;
    // return recursive call with n divided by 2
  } else {
    return powerOfTwo(n / 2);
  }
};

// 9. Write a function that accepts a string a reverses it.
var reverse = function(string) {
  // if length of string is 1 return first string character plus recursive stack
  if( string.length === 1 ){
    return string[0];
  } else {
  // return last string character plus recursive call 
  return string[string.length-1] + reverse(string.slice(0, string.length-1));
}
};

// 10. Write a function that determines if a string is a palindrome.
var palindrome = function(string) {
      // remove spaces from front or end of string
      string = string.trim();
      // convert string to lowerCase
      string = string.toLowerCase();
      // if length of string is 0 return true
      if (string.length === 1){
         return true;
      // if length of string is 2 and first character equals second character
    } else if (string.length === 2 && string[0] == string[1]){
         return true; 
      //if length of string is 2 and first character does not equal second character
    } else if (string.length === 2 && string[0] != string[1]){
         return false; 
      // if length of string is greater than 2 and first character equals last character
    } else if (string.length > 2 && string[0] === string[string.length-1]){
         // return recursive call with first and last character of string removed
         return palindrome(string.slice(1, string.length-1));
      // if length of string greater than 2 and first character different than last character
    } else if (string.length > 2 && string[0] !== string[string.length-1]){
         return false;
}};

// 11. Write a function that returns the remainder of x divided by y without using the
// modulo (%) operator.
// modulo(5,2) // 1
// modulo(17,5) // 2
// modulo(22,6) // 4
var modulo = function(x, y) {
 // if (x/y === 1) {
 //   return 0;
 // } else if ( y * 1 === x){
//    return 1;
//  }
}; 

// 12. Write a function that multiplies two numbers without using the * operator  or
// JavaScript's Math object.

// pseudocode below!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!
var multiply = function(x, y){
   if (x < 0 && y < 0){
    x = -x;
    y = -y;
   } if(x===0 || y===0 || x===0 && y===0){
     return 0;
   } else if( x < 0 && y === 1){
    return x;
   } else if ( x > 0 && y === -1){
    return -x;
   } else if( x < 0 && y > 0){
   return x + multiply(x, y-1);
   } else if( y < 0 && x > 0){
    return x - multiply(x, y + 1);
  } else {
    return x + multiply(x, y - 1);
  }
};

/*
var multiply = function(x, y){
  // if both arguments are negative convert them to positives
  if (x < 0 && y < 0){
    x = -x;
    y = -y;
     // if one or both arguments are 0... return 0
   } if(x===0 || y===0 || x===0 && y===0){
       return 0;
     // if counter y is 1 return x
   } else if( x<0 && y===1){
       return x;
     // if counter y is -1 return -x
   } else if ( x>0 && y===-1){
       return -x;
     // if counter y is positive and x is negative
   } else if( x<0 && y>0){
       // return x added to recursive call 
       return x + multiply(x, y-1);
     // if counter y is positive and x is negative
   } else if( y<0 && x>0){
        // return x subtracted by recursive call
        return x - multiply(x, y+1);
  } else {
      // if both numbers positive return x added to recursive call
      return x + multiply(x, y-1);
  }
};  */

// 13. Write a function that divides two numbers without using the / operator  or
// JavaScript's Math object.
var divide = function(x, y) {
};

// 14. Find the greatest common divisor (gcd) of two positive numbers.  The GCD of two
// integers is the greatest integer that divides both x and y with no remainder.
// Example:  gcd(4,36);  // 4
// http://www.cse.wustl.edu/~kjg/cse131/Notes/Recursion/recursion.html
// https://www.khanacademy.org/computing/computer-science/cryptography/modarithmetic/a/the-euclidean-algorithm
var gcd = function(x, y) {
};

// 15. Write a function that compares each character of two strings and returns true if
// both are identical.
// compareStr('house', 'houses') // false
// compareStr('', '') // true
// compareStr('tomato', 'tomato') // true

var compareStr = function(str1, str2) {
  // if both strings are empty strings
  if (str1.length === 0 && str2.length === 0){
    return true;
  // if only 1 character left and they are the same return true
  } else if (str1 === str2 && str1.length === 1 && str2.length === 1) {
    return true;
    // if first characters are the same
  } else if (str1[0] === str2[0]) {
      // recursive call with first character removed
      return compareStr(str1.slice(1), str2.slice(1));
    } else {
      // else return false
      return false;     
    }
  };
  
// 16. Write a function that accepts a string and creates an array where each letter
// occupies an index of the array.

var createArray = function(str){
  // if string length 1 return first char plus recursive stack
  if(str.length === 1){
    return [str[0]];
  } else {
    // concat recursive call string to first char
    return [str[0]].concat(createArray(str.slice(1)));
  }                  
  
};

// 17. Reverse the order of an array
var reverseArr = function (array) {
  // if array.length is 1 return last element + recursive stack
  if(array.length === 1){
    return array[0];
  } else {
    // concat recursive call to last element of array
    return [array[array.length-1]].concat(reverseArr(array.slice(0, -1)));
  }
  
};

// 18. Create a new array with a given value and length.
// buildList(0,5) // [0,0,0,0,0]
// buildList(7,3) // [7,7,7]
var buildList = function(value, length) {
  // if length is 1 return value plus recursive stack
  if(length === 1){
    return [value];
  } else {
    // concat value with recursive call 
    return [value].concat(buildList(value, length-1));
  }
};

// 19. Count the occurence of a value inside a list.
// countOccurrence([2,7,4,4,1,4], 4) // 3
// countOccurrence([2,'banana',4,4,1,'banana'], 'banana') // 2
var countOccurrence = function(array, value) {
  // if array length is 1 and value is a match return 1 plus recursive stack
  if(array.length === 1 && array[0] === value){
    return 1;
    // if array length is 1 and not a match return 0 plus recursive stack
  } else if(array.length === 1 && array[0] !== value){
    return 0;
    // first element is match return 1 + recursive call
  } else if (array[0] === value) {
    return 1 + countOccurrence(array.slice(1), value);
    // if first element not a match then return 0 + recursive call
  } else {
    return 0 + countOccurrence(array.slice(1), value);
  }
};

// 20. Write a recursive version of map.
// rMap([1,2,3], timesTwo); // [2,4,6]
var rMap = function(array, callback) {
  // if array length is 1 return first element modified with callback function
  if(array.length === 1) {
    return callback(array[0]);
  } else {
    // return first element modified with callback function concatted with
    // recursive call
    return [callback(array[0])].concat(rMap(array.slice(1), callback));
  }
  
  
};

// 21. Write a function that counts the number of times a key occurs in an object.
// var testobj = {'e': {'x':'y'}, 't':{'r': {'e':'r'}, 'p': {'y':'r'}},'y':'e'};
// countKeysInObj(testobj, 'r') // 1
// countKeysInObj(testobj, 'e') // 2
var countKeysInObj = function(obj, key) {
};

// 22. Write a function that counts the number of times a value occurs in an object.
// var testobj = {'e': {'x':'y'}, 't':{'r': {'e':'r'}, 'p': {'y':'r'}},'y':'e'};
// countValuesInObj(testobj, 'r') // 2
// countValuesInObj(testobj, 'e') // 1
var countValuesInObj = function(obj, value) {
};

// 23. Find all keys in an object (and nested objects) by a provided name and rename
// them to a provided new name while preserving the value stored at that key.
var replaceKeysInObj = function(obj, key, newKey) {
};

// 24. Get the first n Fibonacci numbers.  In the Fibonacci Sequence, each subsequent
// number is the sum of the previous two.
// Example:  0, 1, 1, 2, 3, 5, 8, 13, 21, 34.....
// fibonacci(5);  // [0, 1, 1, 2, 3, 5]
// Note:  The 0 is not counted.
var fibonacci = function(n) {
};

// 25. Return the Fibonacci number located at index n of the Fibonacci sequence.
// [0,1,1,2,3,5,8,13,21]
// nthFibo(5); // 5
// nthFibo(7); // 13
// nthFibo(3); // 2
var nthFibo = function(n) {
  // if n is negative
  if (n < 0){
    return null;
    // if n smaller than 2 return n
  } else if (n < 2){           
    return n;
    // return added rescursive calls for n-1 and n-2
  } else {
    return nthFibo(n-1) + nthFibo(n-2);
  }
};
 
// [0, 1, 1, 2, 3, 5, 8, 13, 21, 34, 55, 89, 144, 233] 
// Fibonacci number 
//Each number  ===  sum of the two numbers that precede it 
//So, the sequence goes: 0, 1, 1, 2, 3, 5, 8, 13, 21, 34, and so on. 
//The mathematical equation describing it is Xn+2= Xn+1 + Xn

// 26. Given an array of words, return a new array containing each word capitalized.
// var words = ['i', 'am', 'learning', 'recursion'];
// capitalizedWords(words); // ['I', 'AM', 'LEARNING', 'RECURSION']
var capitalizeWords = function(input) {
  // if array length is 1 return element converted to upper case + recursive stack
  if(input.length === 1){
    return input[0].toUpperCase();
    // return first element converted to upper case concatted with recursive call
  } else {
    return [input[0].toUpperCase()].concat(capitalizeWords(input.slice(1)));
  }
};

// 27. Given an array of strings, capitalize the first letter of each index.
// capitalizeFirst(['car', 'poop', 'banana']); // ['Car', 'Poop', 'Banana']
var capitalizeFirst = function(array) {
     // if array length is 1 return first letter capitalized element
     if(array.length === 1){
       return (array[0][0].toUpperCase().concat(array[0].slice(1)));
     } else {
       // return first element with first letter capitalized concatted with recursive call
       return [array[0][0].toUpperCase().concat(array[0].slice(1))].concat(capitalizeFirst(array.slice(1)));
     }
  
  
};

// 28. Return the sum of all even numbers in an object containing nested objects.
// var obj1 = {
//   a: 2,
//   b: {b: 2, bb: {b: 3, bb: {b: 2}}},
//   c: {c: {c: 2}, cc: 'ball', ccc: 5},
//   d: 1,
//   e: {e: {e: 2}, ee: 'car'}
// };
// nestedEvenSum(obj1); // 10
var nestedEvenSum = function(obj) {
};

// 29. Flatten an array containing nested arrays.
// Example: flatten([1,[2],[3,[[4]]],5]); // [1,2,3,4,5]
var flatten = function(arrays) {
};

// 30. Given a string, return an object containing tallies of each letter.
// letterTally('potato'); // {'p':1, 'o':2, 't':2, 'a':1}
var letterTally = function(str, obj) {
  // if object undefined declare empty object
  if(obj === undefined){
    obj = {};
    // if string length is 1 and letter key present 
    // increase letter-key value by 1 and return object
  } if (str.length === 1 && obj[str[0]]) {
    obj[str[0]]++;
    return obj;
    // if string length 1 and letter-key not present, 
    // add letter-key with value 1 and return object
  } else if(str.length === 1 && !obj[str[0]]){
    obj[str[0]] = 1;
    return obj;
    // if letter key present increase value by 1 and return recursive call
  } else if (obj[str[0]]) {
    obj[str[0]]++;
    return letterTally(str.slice(1), obj);
    // if letter key not present add letter key with value of 1 to object
    // and return recursive call
  } else if (!obj[str[0]]){
    obj[str[0]] = 1;
    return letterTally(str.slice(1), obj);
  }
};

// 31. Eliminate consecutive duplicates in a list.  If the list contains repeated
// elements they should be replaced with a single copy of the element. The order of the
// elements should not be changed.
// Example: compress([1, 2, 2, 3, 4, 4, 5, 5, 5]) // [1, 2, 3, 4, 5]
// Example: compress([1, 2, 2, 3, 4, 4, 2, 5, 5, 5, 4, 4]) // [1, 2, 3, 4, 2, 5, 4]
var compress = function(list) {
      // if length of list is 2 and both elements are the same 
      // return first element and recursive stack
      if(list.length === 2 && list[0] === list[1]){
          return [list[0]];
        // if length of list is 1 return element and recursive stack 
      } else if (list.length === 1) {
        return [list[0]];
        // if first and second element are the same return empty array 
        // concatted with recursive call
      } else if (list[0] === list[1]) {
          return [].concat(compress(list.slice(1)));
      } else {
        // return first element concatted with recursive call
        return [list[0]].concat(compress(list.slice(1)));
      }
        

        
};

// 32. Augment every element in a list with a new value where each element is an array
// itself.
// Example: augmentElements([[],[3],[7]], 5); // [[5],[3,5],[7,5]]
var augmentElements = function(array, aug) {
};

// 33. Reduce a series of zeroes to a single 0.
// minimizeZeroes([2,0,0,0,1,4]) // [2,0,1,4]
// minimizeZeroes([2,0,0,0,1,0,0,4]) // [2,0,1,0,4]
var minimizeZeroes = function(array) {
      // if length of array is 2 and both elements are the same 
        if(array.length === 2 && array[0] === 0 && array[1] === 0){
          // return first element and recursive stack
          return [array[0]];
          // if length of array is 1 return element and recursive stack
        } else if (array.length === 1) {
        return [array[0]];
          // if first and second element are both 0
        } else if (array[0] === 0 && array[1] === 0) {
          // return empty array concatted with recursive call
          return [].concat(minimizeZeroes(array.slice(1)));
        } else {
        // return first element concatted with recursive call
        return [array[0]].concat(minimizeZeroes(array.slice(1)));
        }
};

// 34. Alternate the numbers in an array between positive and negative regardless of
// their original sign.  The first number in the index always needs to be positive.
// alternateSign([2,7,8,3,1,4]) // [2,-7,8,-3,1,-4]
// alternateSign([-2,-7,8,3,-1,4]) // [2,-7,8,-3,1,-4]


var alternateSign = function(array) {
  // if length of array is 1 return value converted to positive and recursive stack
  if (array.length === 1) {
    return Math.abs(array[0]);
    // if length of array is 2 
  } else if (array.length === 2) {
    // return first value converted to positive concatted 
    // with second value converted to positive and the recursive stack
    return [Math.abs(array[0])].concat(-(Math.abs(array[1])));
  } else {
  // return first value converted to positive concatted 
  // with second element converted to negative concatted with recursive call
   return [Math.abs(array[0])].concat(-(Math.abs(array[1]))).concat(alternateSign(array.slice(2)));
  }
};

// 35. Given a string, return a string with digits converted to their word equivalent.
// Assume all numbers are single digits (less than 10).
// numToText("I have 5 dogs and 6 ponies"); // "I have five dogs and six ponies"
var numToText = function(str) {
  // declare array holding digits converted to their word equivalent
  var numWords = ["one", "two", "three", "four", "five", "six", "seven", "eight", "nine"];
  // declare numerical digit array
  var num = ["1", "2", "3", "4", "5", "6", "7", "8", "9"];
  // if length of string is 1 use for-loop to check if its a digit
  if (str.length === 1) {
    for(let i = 0; i <= 9; i++){
      // if character equals selected digit return value 
      // converted to its word equivalent and recursive stack
      if (str[0] === num[i]){
        return numWords[i];
      }
    } 
    // if character is not a digit then return unaltered character and recursive stack
    return str[0];
  // if length of string is greater than 1 use for-loop 
  // to check whether first character is one of the compared to digits
  } else {
    for(let i = 0; i <= 9; i++){
      // if first character of string is a match then return character-digit 
      // converted to its word equivalent added with recursive call
      if (str[0] === num[i]){
        return numWords[i] + (numToText(str.slice(1)));
      }
    }
    // if first string character did not turn out to be a match then 
    // return first string character added with recursive call
    return str[0] + (numToText(str.slice(1)));
  }
};

// *** EXTRA CREDIT ***

// 36. Return the number of times a tag occurs in the DOM.
var tagCount = function(tag, node) {
};



// 37. Write a function for binary search.
// Sample array:  [0,1,2,3,4,5,6,7,8,9,10,11,12,13,14,15]
// console.log(binarySearch(5)) will return '5'

var binarySearch = function(array, target, min, max) {
/*    if( array.length === 1){
      return array[min];
    } else if(array.length === 1){
      return array[max];
    } else if(array[Math.floor(array.length/2) < target]) {
      return binarySearch(array, target, 0, Math.floor(array.length/2));
    } else if(array[Math.floor(array.length/2) > target]){
      return binarySearch(array, target, Math.floor(array.length/2), array.length);
    }  */
};






// 38. Write a merge sort function.
// Sample array:  [34,7,23,32,5,62]
// Sample output: [5,7,23,32,34,62]
var mergeSort = function(array) {
    var double = array.slice();
    if (double.length === 1){
    return [double[0]];
  }
  for (var y = 1; y < double.length; y++){   
  for(var i = 1; i < double.length; i++){
    if (double[0] > double[i]){
      double.push(double[0]);
      double.shift();
    }
  }
  }
  return [double[0]].concat(mergeSort(double.slice(1)));
};



//-----------------------------------
// DON'T REMOVE THIS CODE -----------
//-----------------------------------

if ((typeof process !== 'undefined') &&
  (typeof process.versions.node !== 'undefined')) {

  /**
   * Due to some node-related issues with spying on recursive functions,
   * it isn't possible to test them with sinon spies like so:
   *
   *   var originalSum = sum;
   *   sum = sinon.spy(sum);
   *
   *   sum([1, 2, 3, 4, 5, 6]);
   *
   *   // callCount will always 1 causing, this test to always fail in node :(
   *   expect(sum.callCount).to.be.above(1);
   *
   *   sum = originalSum;
   *
   * However, we can work around this by using proxies!
   * If you reassign the function to a proxy and use the `apply` trap,
   * you can make a `proxyCallCount` property on the function,
   * increment it each time it's called, and then test that instead.
   *
   *   sum.proxyCallCount = 0;
   *   sum([1, 2, 3, 4, 5, 6]);
   *   expect(sum.proxyCallCount).to.be.above(1);
   *
   * MDN Proxies: https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Proxy
   * MDN Proxy Apply Trap: https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Proxy/handler/apply
   */
  const createSpyProxy = (func) => {
    func.toString = func.toString.bind(func);

    const recursiveFunctionCallCounterHandler = {
      apply(target, thisArg, args) {
        target.proxyCallCount = target.proxyCallCount ? target.proxyCallCount + 1 : 1;
        return target.apply(thisArg, args);
      },
    };

    return new Proxy(func, recursiveFunctionCallCounterHandler);
  };

  factorial = createSpyProxy(factorial);
  sum = createSpyProxy(sum);
  arraySum = createSpyProxy(arraySum);
  isEven = createSpyProxy(isEven);
  sumBelow = createSpyProxy(sumBelow);
  range = createSpyProxy(range);
  exponent = createSpyProxy(exponent);
  powerOfTwo = createSpyProxy(powerOfTwo);
  reverse = createSpyProxy(reverse);
  palindrome = createSpyProxy(palindrome);
  modulo = createSpyProxy(modulo);
  multiply = createSpyProxy(multiply);
  divide = createSpyProxy(divide);
  gcd = createSpyProxy(gcd);
  compareStr = createSpyProxy(compareStr);
  createArray = createSpyProxy(createArray);
  reverseArr = createSpyProxy(reverseArr);
  buildList = createSpyProxy(buildList);
  countOccurrence = createSpyProxy(countOccurrence);
  rMap = createSpyProxy(rMap);
  countKeysInObj = createSpyProxy(countKeysInObj);
  countValuesInObj = createSpyProxy(countValuesInObj);
  replaceKeysInObj = createSpyProxy(replaceKeysInObj);
  fibonacci = createSpyProxy(fibonacci);
  nthFibo = createSpyProxy(nthFibo);
  capitalizeWords = createSpyProxy(capitalizeWords);
  capitalizeFirst = createSpyProxy(capitalizeFirst);
  nestedEvenSum = createSpyProxy(nestedEvenSum);
  flatten = createSpyProxy(flatten);
  letterTally = createSpyProxy(letterTally);
  compress = createSpyProxy(compress);
  augmentElements = createSpyProxy(augmentElements);
  minimizeZeroes = createSpyProxy(minimizeZeroes);
  alternateSign = createSpyProxy(alternateSign);
  numToText = createSpyProxy(numToText);
  tagCount = createSpyProxy(tagCount);
  binarySearch = createSpyProxy(binarySearch);
  mergeSort = createSpyProxy(mergeSort);

  module.exports = {
    factorial,
    sum,
    arraySum,
    isEven,
    sumBelow,
    range,
    exponent,
    powerOfTwo,
    reverse,
    palindrome,
    modulo,
    multiply,
    divide,
    gcd,
    compareStr,
    createArray,
    reverseArr,
    buildList,
    countOccurrence,
    rMap,
    countKeysInObj,
    countValuesInObj,
    replaceKeysInObj,
    fibonacci,
    nthFibo,
    capitalizeWords,
    capitalizeFirst,
    nestedEvenSum,
    flatten,
    letterTally,
    compress,
    augmentElements,
    minimizeZeroes,
    alternateSign,
    numToText,
    tagCount,
    binarySearch,
    mergeSort,
  };
}

//-----------------------------------
