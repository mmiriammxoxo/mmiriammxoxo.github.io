/**
 * Part 2
 *
 * In this file, we're going to create some
 * Functions to work with our data created in
 * data.js.
 *
 * See the README for detailed instructions,
 * and read every instruction carefully.
 */

//////////////////////////////////////////////////////////////////////
// Step 1 - Search ///////////////////////////////////////////////////
//////////////////////////////////////////////////////////////////////

// function called search, take in animals/array and name of animal/string
function search(animals, name) {
    // loop to look through animal array and return object name/animal if there
    for (var i = 0; i < animals.length; i++) {
        if (animals[i].name === name) {
            return animals[i];
        } 
    }  // return null if not found
      return null;
};


//////////////////////////////////////////////////////////////////////
// Step 2 - Replace //////////////////////////////////////////////////
//////////////////////////////////////////////////////////////////////

// function named replace that takes in 3 parameters: animals(array),
// name (name of animal), replacement object/replacement animal
function replace(animals, name, replacement) {
    // for-loop to access each element in animals array
  for (var i = 0; i < animals.length; i++) {
      // if name is there replace it's entire object with replacement object
      if (animals[i].name === name) {
          // remove and replace
          animals.splice(i, 1, replacement);
       }
  }
}

//If an animal with that name exists within the `animals` 
// Array, replace it's entire Object with the replacement Object.

//////////////////////////////////////////////////////////////////////
// Step 3 - Remove ///////////////////////////////////////////////////
//////////////////////////////////////////////////////////////////////
function remove(animals, name) {
    // for-loop to loop though each array element
    for (var i = 0; i < animals.length; i++) {
      // loop through animals array to find name
      if (animals[i].name === name) {
          // remove name
          animals.splice(i, 1);
       }
  }
}

//////////////////////////////////////////////////////////////////////
// Step 4 - Create ///////////////////////////////////////////////////
//////////////////////////////////////////////////////////////////////

// declare function called add, animals/array animal/object
function add(animals, animal) {
    // check name/ species has value input animal opject
    if (animal.name.length > 0 && animal.species.length > 0) {
        // check if name is unique within animals array
        for (var i = 0; i < animals.length; i++) {
            //if name already exists exit 
          if (animal.name === animals[i].name)  {
              return;
            } 
            // if name unique add animal to animals array
          } animals.push(animal);
        }
    } 
 
//////////////////////////////////////////////////////////////////////
// DON'T REMOVE THIS CODE ////////////////////////////////////////////
//////////////////////////////////////////////////////////////////////
var search, replace, remove, add;
if((typeof process !== 'undefined') &&
   (typeof process.versions.node !== 'undefined')) {
    module.exports.search = search || null;
    module.exports.replace = replace || null;
    module.exports.remove = remove || null;
    module.exports.add = add || null;
}
