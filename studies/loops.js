/*
 * LOOPS:
 *
 * 0. Loops are built-in constructs that allow us to repeat tasks efficiently.
 * A block of code can be executed as many times as desired with the help of
 * counter variables that are being incremented and different input values can
 * be inserted. 
 *
 * 1. JavaScript supports different types of loops. The most often used loops 
 * are the for loop, while loop and the for-in loop but there also are for-of 
 * and the do-while loops.
 */

// 1. while loop //

/* The while-loop loops through a block of code as long as the test condition 
 * is true. The block of code is executed over and over again until the defined
 * condition is false. For that reason it is very important to increment the 
 * counter variable to break out of the loop when the task is finished 
 * otherwise the loop will go on forever and crash!
 */
var countUp = -1;
while (countUp < 20) {
  countUp++;
  console.log(countUp);
}         // prints ==> numbers 0 through 20

var countDown = 20;
while (countDown >=1) {
  console.log(countDown);
  --countDown;
  }         // prints ==> numbers 20 through 0
 
// 2. for-loop //

/* 0. For-loops are best used when we have access to the number of times a block
 * of code must be executed. For-loops declare 3 input statements in parenthesis
 * which are followed by the code block wrapped in curly braces, which the loop 
 * will iterate over until the stop condition is met. For-loops are often used 
 * to loop over arrays, to access array elements in forward or backwards mode.
 * 
 * 1. The three statements of for-loop configuration are:
 *    1. var index, the initialize/ start condition
 *    2. index = x, defines the stop condition
 *    3. index++, defines increasing or decreasing of the counter variable
 */
// loop over an array forwards
var pets = ["cat", "rabbit", "turtle"];
   for (var i = 0; i < pets.length; i++){
       console.log(pets[i]);
   }    // prints ==> cat rabbit turtle
   
// loop over an array backwards        
var fruits = ["banana", "grapes", "orange"];
   for (var i = fruits.length- 1; i >= 0; i--){
       console.log(fruits[i]);
   }    // prints ==> orange grapes banana

// 3. for-in loop //

/* For-in loops are used to loop through the properties of an object. The 
 * for-in loop pulls out the keys of an object one by one and the keys can be
 * used to access the values of the object. The block of code inside the loop 
 * will be executed once for each property. The for-in loop is most practically 
 * used for debugging purposes, being an easy way to check the properties of an 
 * object (by outputting to the console or otherwise).
 */
var myDreamCar = {type: "Honda", model: "CRV", color: "pink", year: 2020};
  for (var key in myDreamCar) {
   console.log(key);             // prints ==> type model color year
   console.log(myDreamCar[key]); // prints ==> Honda CRV pink 2020
  }  
