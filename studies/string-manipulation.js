/*
 * STRING-MANIPULTION:
 *
 * 0. We can alter and manipulate strings to change their values 
 * using operators and string methods.
 */

// 1. With operators //  

// We can use the + and += operator to concatenate strings 
var stringOne = "Hello";
console.log(stringOne + " " + "there!");  // prints ==> Hello there

// 2. With string methods // 

/* String methods are built-in methods that can be performed on string data,  
 * such as finding the length of a text string, joining or splitting strings.
 */
// The slice() method extracts or cuts off part of a string
var greeting = "hellothere";
console.log(greeting.slice(0, 3));   // prints ==> hel 
var myNumber = "12345678";
console.log(myNumber.slice(4));      // prints ==> 5678

// The concat() method can be used instead of the + operator to join strings.
var stringOne = "Hello";
var stringTwo = "my Friend!";
stringOne.concat(" ", stringTwo);  // returns ==> Hello my friend!

/* The toLowerCase() and toUpperCase() methods take a string and
 * convert the characters to lower- or uppercase, respectively.
 */
stringOne.toUpperCase(); // returns ==> "HELLO"
stringOne.toLowerCase(); // returns ==> "hello"

/* The indexOf() method returns the index of the element 
 * or -1 if not present and it is case-sensitive.
 */
stringOne.indexOf("o"); // returns ==> 4

// The replace() method can be used to swap characters inside of a string
stringOne.replace('H','Y');  // returns ==> Yello
