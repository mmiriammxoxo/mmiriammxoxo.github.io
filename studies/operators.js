/*
 * OPERATORS:
 *
 * 0. Operators are used to perform actions on our data, like assign values,  
 * compare values or perform arithmetic operations. Operators are classed by 
 * what they do and how many operands or values they act on. There are unary,
 * binary and ternary operators, requiring one, two or three operands.
 */

// 1. Assignment operators // 

/* An assignment operator is a binary operator that assigns a value to its 
 * left operand based on the value of its right operand. 
 */
 var x = 3;  // assigns 3 to variable x
 
 /* Compound assignment operators like *= , /= , %= , += , -= perform   
 * an arithmetic operation and then assign the new value directly. 
 */
 x = 3; 
 x += 1;     //   returns ==> x = 4
 
// 2. Arithmetic operators //

/* An arithmetic operator takes numerical values and variables as their operands
 * and performs an arithmetic operation to return a single numerical value.
 */
var y = x + 3; // + addition operator
var z = y - 1; // - subtraction operator
z = x / 1;     // / division operator
y = z * 5;     // * multiplication operator
var remain = 11 % 2; // % remainder operator, returns integer remainder
console.log(remain); //  prints ==> 1

// 3. Comparison operators //

/* A comparison operator compares its operands and returns a logical value 
 * based on whether the comparison is true. The operands can be numerical, string,
 * logical, or object values. 
 * Strict comparison operators compare value and type of operands, non-strict 
 * comparison operators only check equality.
 */ 
3 < 5;     // ==> true
3 >= 3;    // ==> true
3 === 3;   // ==> true, strict comparison operator
3 === "3"; // ==> false
3 == "3";  // ==> true, non-strict comparison operator
3 !== 3;   // ==> false, strict not-equal comparison operator
3 != "3"   // ==> false, 

// 4. Logical operators //

/* Logical operators are typically used with boolean values to determine the 
 * logic between variables or values. There are three logical operators && 'and', 
 * || 'or' and ! 'not'.
 */
true && true;   // ==> true, since both values are true
true && false;  // ==> false, since only one of the values is true
true || false;  // ==> true
false || false; // ==> false since none of the compared values is true
!(3 === 1);     // ==> true, since comparison does not hold true

// 5. Unary operators //

/* Unary operators require only one operand to act upon. For example,  
 * the logical (!) 'not' operator negates the boolean value of the operand, 
 * the 'typeof' operator returns the data type of the given value and 
 * the unary negation operator (-) returns the negation of the operands value.
 */
console.log(!(1 === 3));   // ==> true
console.log(typeof "MM");  // ==> string
console.log(typeof (1<2)); // ==> boolean
x=7;
console.log(-x);   // ==> -7

// 6. Ternary operator //

/*
 * Ternary operators require three operands to act upon.  
 * The conditional ternary operator assigns a value to a variable based 
 * on a condition. 
 * Syntax: variable = (condition) ? valIfTrue : valIfFalse
 */
var smaller;
smaller = (1 < 18) ? "it is true" : "not true";  // ==> it is true