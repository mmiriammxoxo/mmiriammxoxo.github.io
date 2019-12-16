/*
 * CONTROL FLOW:
 *
 * Conditional statements are used to control the flow of our code. 
 * Instead of executing line to line they allow our application, depending on 
 * the input data, to branch into different directions. Conditional statements
 * work based on comparisons that boil down to boolean true or false values 
 * that result into choices as of which way to go. 
 * The conditional statements provided in JavaScript are if-, else-if-, else- 
 * and switch statements.
 */
 
// 1. If //

/* If-, else if-, and else- statements are structured, that they provide a 
 * test condition in parenthesis and a body enclosed in curly brackets, which 
 * executes if the condition holds true.
 * 
 * Syntax:
 *
 *    if (condition) {
 *      block of code to be executed if condition is true
 *    }
 */
var time = 10;
if (time < 12) {
 console.log("Good morning!");
}                   // prints ==> Good morning!

// 2. Else-if //

/* Else-if statements are used to specify a new condition if previous
 * conditions are false. 
 *
 * Syntax:
 *
 *   if (condition1) {
 *      block of code to be executed if condition1 is true
 *   } else if (condition2) {
 *      block of code to be executed if condition2 is true
 *   } else {
 *      block of code to be executed if previous conditions were false
 *   }
 */
time = 21;
if (time < 10) {
 console.log("Good morning");
} else if (time < 20) {
   console.log("Good day");
} else {
   console.log("Good evening");
}                     // prints ==> Good evening!


// 3. Else //

/* The else statement activates a block of code to run  
 * if previous conditions were not met.
 *
 * Syntax:
 *
 *    if (condition) {
 *      block of code to be executed if the condition is true
 *    } else {
 *      block of code to be executed if the condition is false
 *    }
 */
time = 11;
if (time < 17) {
 console.log("Good day!");
} else {
 console.log("Good evening!");
}                   // prints ==> Good day!

// 4. Switch //

/* Switch statements are generally used to select one of many code blocks
 * to be executed. It takes in one value which is compared with the values 
 * of each switch case and if there is a match, the associated block of code 
 * is executed. The break statement associated with each case ensures makes the 
 * program break out of the switch case once the statement is executed, and 
 * continues. A switch statement can also be set to run the same block of code  
 * for multiple cases.
 *
 * Syntax:
 *
 *    switch(expression) {
 *      case x:
 *       code block
 *       break;
 *      case y:
 *       code block
 *       break;
 *      default:
 *       code block
 *    }
 */
var expression = 'peas';
switch (expression) {
  case 'bananas':
   console.log("It's are fruit!");
   break;
  case 'peas':
  case 'potatoes':
   console.log("It's a vegetable!");
   break;
  default:
   console.log("I don't know!");
}         // prints ==> It's a vegetable!
