////////////////////////////////////////////////////////////////////////////////
// min /////////////////////////////////////////////////////////////////////////
////////////////////////////////////////////////////////////////////////////////
// function to find smaller number

function min(num1, num2) {
  // return smaller number
  return  Math.min(num1, num2);
}

////////////////////////////////////////////////////////////////////////////////
// isEven //////////////////////////////////////////////////////////////////////
////////////////////////////////////////////////////////////////////////////////

function isEven(number) {
       // check if number is negative, turn to positive
       if  (number < 0 ) {
           number = -number;
       }
       // if number is a zero return true
       if (number === 0) {
         return true;
         //if number is 1 return false
       } else if (number === 1) {
         return false;
         // otherwise recursive function to deduct 2 until number 1 or 0 
       } else {
        return isEven(number-2);
       }

}

////////////////////////////////////////////////////////////////////////////////
// countChars //////////////////////////////////////////////////////////////////
////////////////////////////////////////////////////////////////////////////////

function countChars(string, char) {
    // declare output counter variable
    var outputNumber = 0;
    // for-loop to loop through all characters of string
    for (var i = 0; i < string.length; i++){
        // if string-char is same as given char then add 1 to counter variable
        if (string.charAt(i) === char ) {
            outputNumber = outputNumber +1;
        } 
    } return outputNumber;

}
// should count number of specific character occurrences in string
////////////////////////////////////////////////////////////////////////////////
// countBs /////////////////////////////////////////////////////////////////////
////////////////////////////////////////////////////////////////////////////////

function countBs(string) {
    // declare counter variable
    var outputNumber = 0;
    // for-loop to compare each string character 
    for (var i = 0; i < string.length; i++){
        // if character is lowercase or uppercase 'b' then add 1 to counter 
        if (string.charAt(i) === "b" || string.charAt(i) === "B" ) {
            outputNumber = outputNumber +1;
        } 
      // return number of counted b's
    } return outputNumber;
}



////////////////////////////////////////////////////////////////////////////////
// DON'T REMOVE THIS CODE //////////////////////////////////////////////////////
////////////////////////////////////////////////////////////////////////////////

if ((typeof process !== 'undefined') &&
  (typeof process.versions.node !== 'undefined')) {
  module.exports = {
    min,
    isEven,
    countBs,
    countChars,
  };
};
