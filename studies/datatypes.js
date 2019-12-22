/*
 * DATATYPES:
 *
 * 0. Data types are an important quality to properly process different data
 * like numbers, letters, symbols and more in our software applications. For
 * example it would be a problem to perform arithmetic operations on  
 * non-numeric data and for that reason JavaScript offers different data types
 * to manage them and even mix and match them together.
 *
 * 1. Data types are grouped into primitive and complex data types.
 */

// 1. Numbers //

/* Numbers are numeric data, positive, negative and decimal. Extremely large or  
 * small numbers can be written with scientific (exponent) notation. We can
 * perform arithmetic operations on numbers or use them as character values.
 */
console.log(11 + 2);         // prints ==> 13
console.log(30 / 3);         // prints ==> 10
console.log(4 * 2.5);        // prints ==> 10
console.log(30 - 1 + 3);     // prints ==> 32
console.log(123e-5);         // prints ==> 0.00123

// 2. String //

/* Strings are character data and are used to store and manipulate text.
 * They must be enclosed in single '' or double quotes "". Strings can be
 * concatenated into longer strings using the + operator and we can access 
 * and manipulate their values through bracket notation. The length property
 * returns the total number of characters of a string.
 */
var firstName = "Mary ";
var lastName = "Miller";
console.log(firstName);               // prints ==> Mary
console.log(firstName + lastName);    // prints ==> Mary Miller
console.log(firstName.length);        // prints ==> 5
console.log(firstName[2]);            // prints ==> r

// 3. Boolean //

/* A Boolean represents one of two values: true or false.
 * It is often used as a yes/no, off/on switch in conditional statements 
 * and derived from a comparison but can also be assigned or inherit.
 */
 console.log(2 === 2);     // prints ==> true
 console.log(3 > 5);       // prints ==> false
 console.log("M" === "m"); // prints ==> false
 
// 4. Array //

/* Arrays are used to store or collect multiple values of different data types 
 * in a single variable and are therefore also called collections. Arrays are 
 * complex data type since they can hold an indefinite amount of data. An array
 * is a zero-indexed list of values and is stored within brackets. Individual  
 * elements of an array can be accessed with bracket notation. Arrays have 
 * properties, like a length property and many built-in methods like push, pop, 
 * shift and unshift.
 */
var veggies = ["peas", "green beans", "carrots"];
console.log(veggies[0]);      // prints ==> peas
console.log(veggies.length);  // prints ==> 3
veggies.push("squash");
console.log(veggies); // prints ==> ["peas", "green beans", "carrots", "squash"]

// 5. Object //

/* Objects are a complex data type that store collections of related data in 
 * form of 'key: value' pairs wrapped in curly braces. The content of objects, 
 * called properties are not indexed by position but can be accessed by their 
 * keys or property-names with dot and bracket notation. The keys are strings
 * and the assigned values can be of any data type. 
 */
var school = {name: "Op Spark", location: "Atlanta"};
console.log(school.location);   // prints ==> Atlanta
console.log(school["name"]);    // prints ==> Op Spark
delete school.location;
console.log(school);            // prints ==> {name: "Op Spark"}
school.location = "New Orleans";
console.log(school);      // {name: "Op Spark", location: "New Orleans"}

// 6. Function //

/* A function is a block of code designed to perform a particular
 * task that can be reused and called into action whenever needed. 
 * Functions are complex data since they can encapsulate any number
 * of statements and do not have a fixed size. They are copied by
 * reference like arrays and objects.
 */
function add(a, b) {
  return a + b;             // returns ==> sum of a + b
}
 
// 7. undefined //

/* An undefined value, uninitialized and of no value is undefined data.
 * A variable that has not been assigned a value is of type undefined. 
 */
var x; 
console.log(x);    // prints ==> undefined

// 8. null //

/* The value null represents the intentional absence of 
 * any object value and has been defined by the programmer.
 * Null is a special value meaning "no value".
 */
var y = null;
console.log(y);     // prints ==> null

// 9. NaN //

/* The NaN property is a non-configurable, non-writable property representing 
 * Not-A-Number. NaN indicates that a value is not a legal number.
 */

// 10. Infinity and -Infinity //

/* Infinity is a numeric value that represents positive infinity,
 * -Infinity is a numeric value that represents negative infinity.
 * Infinity is displayed when a number exceeds the upper/ lower limit of the 
 * floating point numbers, which is 1.797693134862315E+308/
 * -1.797693134862316E+308.
 */
 console.log(1 / 0);     // prints ==> Infinity  
 console.log(-1 / 0);    // prints ==> -Infinity 

// 11. Primitive and complex data types //

/* 0. Data of primitive data type is immutable or atomic, which means that it 
 * can not hold or aggregate other types of values. Strings, numbers, boolean,  
 * null, undefined, and symbol are primitive data. They have a fixed size in 
 * memory, up to eight bytes. A boolean is the smallest primitive data type and
 * takes up only one bit, zero or one. For that reason variables can directly 
 * store primitive data. Primitive data is copied by value when being assigned
 * to variable or passed in our code.
 * 
 * 1. Data of complex data type can hold and aggregate different types of values
 * of unlimited amount and therefore are of indefinite size. Objects, arrays
 * and functions are complex types. For that reason variables can not hold their 
 * values directly but get assigned to them by reference, as to where in memory 
 * the data is stored. Complex data is copied by reference, a memory address and 
 * not the value itself.
 */
 
 /* Copy by value
 * Looking at the following example you might assume that logging firstName 
 * would log Claire, since var firstName was set to hold var name, which then 
 * was changed to Claire, but since primitive data is copied by value, var 
 * firstName actually was never changed and still holds the value it was given 
 * originally which is Maria.
 */
var name = "Maria";                
var firstName = name;
name = "Claire";
console.log(name);           // "Claire"
console.log(firstName);      // "Maria" 

/* Copy by reference
 * Complex data types store data by a memory address, for that reason in the
 * following example the herName variable now also holds the name Carol, since
 * the data at the memory address to which its reference points was changed.
 */
var herName = {  firstName: "Gina" };
var person = herName;
herName.firstName = "Carol";
console.log(herName.firstName); // "Carol"
console.log(person.firstName);  // "Carol"
