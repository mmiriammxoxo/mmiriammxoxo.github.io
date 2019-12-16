/*
 * FUNCTIONS:
 *
 * 0. Functions allow us to encapsulate blocks of code that can be executed  
 * whenever we want and how ever many times we want. They basically are a list
 * of instructions or logical data that lets our application work more 
 * efficiently. There are two phases for using functions, the declaration and
 * the execution of a function.
 */

// 1. Declaration //

/* The proper syntax to define a function starts with the function keyword, 
 * followed by the name assigned to the function, followed by parentheses ()  
 * in which we place placeholders called parameters. The parameters receive 
 * replaceable values called arguments, which will be inserted into the block  
 * of code to be executed by the function. The block of code or function body  
 * is placed inside curly brackets {} and completes the setup.
 *
 * Syntax: 
 *      
 *        function name(parameter1, parameter2, parameter3) {
 *                function body, statements to be executed
 *        }    
 */
function multiply(num1, num2) {
  console.log(num1 * num2);             
}

// 2. Invocation //
 
/* To execute, call, apply or invoke a function it requires a function call
 * which consists of the function name and the arguments in parenthesis that 
 * will be passed to the function. The parameters are the placeholders to 
 * receive the input arguments that are provided for the function body
 * to act upon.
 */
 multiply(3,9);   // ==> prints 27

// 3. Function expressions //
 
/* A function expression is formed when an anonymous function is assigned to 
 * a variable or a constant. Functions stored in variables do not need a
 * function name since they are called using the variable name.
 */
const addNum = function(num) { 
  console.log(num + num);
};
addNum(3);    // prints => 6

// 4. Input and output of a function //

/* 0. When designing a function inputs and outputs are optional. We can requests 
 * any number of inputs, called parameters, to be passed into the function or we 
 * could not require any input values at all.
 *
 * 1. We can design a function to return a single value or chose not to return
 * any value and hold other functionality. If we chose to return a value
 * then the return statement completes the function body and no further code
 * from inside the function will run. Like in the example below, the console log
 * statement after the return statement could never run.
 */
var numA = 3;
var numB = 7;
function added() { 
  console.log(numA + numB);
  return numA+numB;
 // console.log(numA++);     // this statement could never run!
}
added(); // ==> 10
         // ==> 10

// 5. Scope //

/* 0. Scope defines the lifetime, accessibility and visibility of a variable. 
 * The root scope, also called global or parent scope is the default scope of
 * our code. Local or child scope is found within functions, called function  
 * scope and within conditional statements if, switch, for- and while- loops, 
 * called block scope.
 *
 * 1. Variables are not accessible outside the scope they are declared. 
 * Variables declared within function scope are NOT visible in it's parent 
 * scope but vice versa, variables declared in parent scope are accessible
 * in child scope. Which means that functions or any nested functions can  
 * access and modify variables in parent or global scope.
 */
var dog = "Snoopy";
function myPets() {
  var cat = "Ninja";
  console.log(dog);   // prints ==> Snoopy, var dog is visible in child scope
}
myPets();
// console.log(cat);  // ==> ref error! var cat is not visible in parent scope

// 6. Closures //

/* Functions form closures around the data they house. If an object 
 * returned from the Function and is held in memory somewhere (referenced), that 
 * closure stays ALIVE, and data can continue to exist in these closures! 
 * A closure is the combination of a function nested within another function and
 * it's lexical environment, the scopes it is surrounded by. A closure allows
 * access to an outer function's scope from an inner function. The closure has 
 * three scope chains, it's own local scope, it also has access to the outer 
 * function scope variables and the global scope variables.
 */

/* The example shows a case of closure. Even after the add function has already 
 * closed, the nested function is able to access it's parent function scopes
 * variable
 */ 
var count =0;
function add(x) {
   return function inner(y) {
     return x+y;
   };
}
var addValues = add(5)(2);
console.log(addValues);  //  prints ==> 7
