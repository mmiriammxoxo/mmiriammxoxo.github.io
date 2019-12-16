/*
 * VARIABLES:
 *
 * 0. To hold things in memory during the life-cycle of a program, we can use variables.  Variables
 * are named identifiers that can point to values of a particular type, like a Number, String,
 * Boolean, Array, Object or another data-type.  Variables are called so because once created, we
 * can CHANGE the value (and type of value) to which they point.
 *
 * 1. To create a variable we use the keyword, var, followed by a name (id or alias) for our
 * variable.
 *
 * 2. There are 2 phases of using variables: declaration and initialization (or assignment).
 */

// 1. declaration //
var myName;

/*
 * At the declaration phase, the variable myName is undefined because we have NOT initialized
 * it to anything
 */
console.log(myName); // prints => undefined

// 2. initialization or assignment //
myName = 'john';
console.log(myName); // prints => john

// 3. re-assignment //
myName = 'bob';
console.log(myName); // prints => bob

// NOTE: We can assign and re-assign anything to a variable //
var myVariable = 1;
var myVariable = true;
myVariable = "someString";

// 4. let //

/* 0. We can also declare and assign values to variables with the 
 * keyword let, just like we would declare and assign variables with
 * the keyword var. But we can not re-assign a var variable as a let
 * let variable and vice versa. 
 *
 * 1. Unlike var variables, which are function scoped, let variables 
 * are block scoped.  
 *
 * 2. Let and const are a new addition of the updated JavaScript 1.7 (ES6). 
 */
let myPet; 
myPet = 'cat';
let myPetName = "Fluffy";

// 5. const //

/* 0. Variables delared with const have to be assigned a value within the
 * same statement and can not be re-assigned nor re-declared with var or let.
 * 
 * 1. Just like let variables, constants are block scoped. 
 */
const myLastName = "Miller";

// 6. Hoisting //

/* 0. Before JavaScript executes a program, the code interpreter moves
 * function and variable declarations to the top and adds them into memory. 
 * Variables get hoisted but only by their names and not their value. Named  
 * functions get hoisted in their entirety, whereas anonymous functions 
 * that have been assigned to a variable do not get hoisted but only their
 * variable assignment.
 *  
 * 1. Because of hoisting a variable can be used before it has been declared and  
 * if we reference it before it's declaration, it will compute as undefined 
 * since it's value did not get added into memory yet.
 *
 * 2. Variables declared with let and const also get hoisted into memory but
 * enter a so-called 'temporary dead zone' and are therefore not visible before 
 * code execution. If we refer to them before their declaration in our code, 
 * then we will get a reference error.
 */
console.log(name);    // prints ==> undefined
// console.log(hisName);  // returns ref error
// console.log(herName);  // returns ref error
var name = "Mary";
let hisName = "Michael";
const herName = "Lisa"; 
