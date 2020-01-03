/**
 * Part 1
 *
 * In this file, we're going to practice
 * creating and accessing data structues.
 *
 * See the README for detailed instructions,
 * and read every instruction carefully.
 */

//////////////////////////////////////////////////////////////////////
// Step 1 - Object Creation //////////////////////////////////////////
//////////////////////////////////////////////////////////////////////
// declare object variable
var animal = {};
// add species key/value pair 
animal.species = "rabbit";
// add name key/value pair
animal["name"] = "bunny";
// noises key
animal.noises = [];
// print object
console.log(animal);




//////////////////////////////////////////////////////////////////////
// Step 2 - Array Creation ///////////////////////////////////////////
//////////////////////////////////////////////////////////////////////
// declare empty array variable
var noises = [];
// add value to noises-array with bracket notation
noises[0] = ("rrarrr");
// add value with push
noises.push("shhshhh");
// add value to beginning of array
noises.unshift("mmemmmemm");
// add another value to end of array
noises[noises.length] = ("yarrar");
// print length of noises array
console.log(noises.length);
// print last noises element
console.log(noises[noises.length-1]);
// print noises array
console.log(noises);


//////////////////////////////////////////////////////////////////////
// Step 3 - Combining Step 1 and 2 ///////////////////////////////////
//////////////////////////////////////////////////////////////////////
// assign noises arr to animal noises key
animal["noises"] =noises;
// add another value to noises property
noises.push("yeeeyaah");

/* *******************************************************************
 * Step 4 - Review
 *
 * 1. What are the different ways you can access properties on objects?
 *
 * 2. What are the different ways of accessing elements on arrays?
 *
 * *******************************************************************
 */

/* *******************************************************************
 * Step 5 - Take a Break!
 *
 * It's super important to give your brain and yourself
 * a rest when you can! Grab a drink and have a think!
 * For like 10 minutes, then, BACK TO WORK! :)
 * *******************************************************************
 */

//////////////////////////////////////////////////////////////////////
// Step 6 - A Collection of Animals //////////////////////////////////
//////////////////////////////////////////////////////////////////////
// declare and assign empty array
animals =[];
// add animal object to animals array
animals.push(animal);
// print animals array
console.log(animals);
// declare duck variable and assign given key /values
var duck = {species: 'duck', 
           name: 'Jerome', 
           noises: ['quack', 'honk', 'sneeze', 'woosh']};
// add duck object to animals collection           
animals.push(duck);
// print animals collection
console.log(animals);
// declare and assign 2 more animals with required key value pairs
var dog = {species: 'dog',
           name: 'Snoopy',
           noises: ['ggrrrr', 'wooof']};
var cat = {species: 'cat',
           name: 'Jelly',
           noises: ['rrrrr', 'meeow']
};
// add dog/ cat objects to animals array
animals.push(dog, cat);


//////////////////////////////////////////////////////////////////////
// Step 7 - Making Friends ///////////////////////////////////////////
//////////////////////////////////////////////////////////////////////
// var friends data type array, to hold all friends names
var friends = [];
function getRandom(animals) {
   // returns random friend array index
  return Math.floor((Math.random() * animals.length));


}
// add random animal to friends array
friends.push(animals[getRandom(animals)].name);
console.log(friends);
// assign var friends as a property called 'friends' to one of the animals
dog["friends"] = friends;
console.log(animals);


/**
 * Nice work! You're done Part 1. Pat yourself on the back and
 * move onto Part 2 in the file called "functions.js"
 */



//////////////////////////////////////////////////////////////////////
// DON'T REMOVE THIS CODE ////////////////////////////////////////////
//////////////////////////////////////////////////////////////////////
var animal, noises, animals, friends, getRandom;
if((typeof process !== 'undefined') &&
   (typeof process.versions.node !== 'undefined')) {
     module.exports.animal = animal || null;
     module.exports.noises = noises || null;
     module.exports.animals = animals || null;
     module.exports.friends = friends || null;
     module.exports.getRandom = getRandom || null;
}
