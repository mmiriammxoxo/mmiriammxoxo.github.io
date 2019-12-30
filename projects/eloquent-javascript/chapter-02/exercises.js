
////////////////////////////////////////////////////////////////////////////////
// triangles ///////////////////////////////////////////////////////////////////
////////////////////////////////////////////////////////////////////////////////

function triangles(number) {
  // declare output variable
  var print;
  // loop to loop through each line
  for (var i = 1; i <= number; i++) {
     // reset output variable to empty
     print="";
     // loop to add characters to print variable
     for (var y = 1; y <= i ; y++) {
         print=print + "#";
     // print each line one by one
     } console.log(print);
  }
}

////////////////////////////////////////////////////////////////////////////////
// fizzBuzz ////////////////////////////////////////////////////////////////////
////////////////////////////////////////////////////////////////////////////////

function fizzBuzz() {
 // for loop to check each number one by one
  for (var i = 1; i <= 15; i++) {
    //print fizzbuzz if number dividable by 3 & 2
  if (i % 3 === 0 && i % 5 === 0) {
    console.log("fizzbuzz");
    // print fizz if number divideable by 3
  } else if (i % 3 === 0 ) {
    console.log("fizz");
    // print fizz if number divideable by 5
  } else if (i % 5 === 0 ) {
    console.log("buzz");
    // print number 
  } else {
    console.log(i);
  }
}
}

////////////////////////////////////////////////////////////////////////////////
// drawChessboard //////////////////////////////////////////////////////////////
////////////////////////////////////////////////////////////////////////////////

function drawChessboard(size) {
// define string variable for board output
var chessB = "";
//for loop to loop through rows
for (var y = 0; y <size; y++) {
  // for loop to add line of characters
  for (var x =0; x <size; x++) {
    // if even add/concatenate space
    if ((x+y) % 2 === 0)  {
      chessB = chessB + " ";
      // if uneven add #
    } else {
      chessB = chessB + "#";
    }
  }
  chessB += "\n";
  // print chessB
} console.log(chessB);
  
} 



////////////////////////////////////////////////////////////////////////////////
// DON'T REMOVE THIS CODE //////////////////////////////////////////////////////
////////////////////////////////////////////////////////////////////////////////

if ((typeof process !== 'undefined') &&
  (typeof process.versions.node !== 'undefined')) {
  module.exports = {
    triangles,
    fizzBuzz,
    drawChessboard,
  };
}
