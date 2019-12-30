// /////////////////////////////////////////////////////////////////////////////
// flatten /////////////////////////////////////////////////////////////////////
// /////////////////////////////////////////////////////////////////////////////

function flatten(arr) {
  // apply reduce method to concat the elements of the given array and return
  return arr.reduce((acc, current) => acc.concat(current));
}


// /////////////////////////////////////////////////////////////////////////////
// loop ////////////////////////////////////////////////////////////////////////
// /////////////////////////////////////////////////////////////////////////////

function loop(value, test, update, body) {
  // if value fails test exit 
  if (test(value) === false) {
    return;
  }
  // for each iteration test the value with test function, execute body function
  // then update value with update function until test fails
  for (let i = value; test(i); i=update(i)) {
     body(i);
  }
}

// /////////////////////////////////////////////////////////////////////////////
// every ///////////////////////////////////////////////////////////////////////
// /////////////////////////////////////////////////////////////////////////////


function every(array, test) {
     // for loop to acces each array element
     for (var i=0; i< array.length; i++ ) {
       // check if array element passes test given test function
       if (test(array[i]) === false) {
         // if test failed return false
         return false; 
       }
        // return true if all elements passed test
      } return true;
}

/*
function every2(array, predicate) {
  return !array.some(element => !predicate(element));
} */

// /////////////////////////////////////////////////////////////////////////////
// dominantDirection ///////////////////////////////////////////////////////////
// /////////////////////////////////////////////////////////////////////////////


function dominantDirection(string) {
 let scriptsArr = countBy(string, function(char) {
  // find the asscociative script for each char
  // charcetrScript function will look thorugh the ranges specified in the scripts.js 
  // file to find matching script object and will return the entire object
  let script = characterScript(char.codePointAt(0))
  //check if the script is an actual script and not not a symbol
  // the countBy function will return an array of objects w/ dominate direction and count
  if(script){
    return script.direction;
  }
  return null;
});
// using array sort methof, sort each object by its count property
scriptsArr.sort(function(a, b) {
  return b.count - a.count;
})
return scriptsArr[0].name;
}
  //
  



function countBy(items, groupName) {
  let counts = [];
  for (let item of items) {
    let name = groupName(item);
    let known = counts.findIndex(c => c.name == name);
    if (known == -1) {
      counts.push({
        name,
        count: 1
      });
    } else {
      counts[known].count++;
    }
  }
  return counts;
}

function characterScript(code) {
  for (let script of SCRIPTS) {
    if (script.ranges.some(([from, to]) => {
        return code >= from && code < to;
      })) {
      return script;
    }
  }
  return null;
}

// /////////////////////////////////////////////////////////////////////////////
//  //////////////////////////////////////////////////////
// /////////////////////////////////////////////////////////////////////////////

if ((typeof process !== 'undefined') &&
  (typeof process.versions.node !== 'undefined')) {
  module.exports = {
    flatten,
    loop,
    every,
    dominantDirection,
  };
};
