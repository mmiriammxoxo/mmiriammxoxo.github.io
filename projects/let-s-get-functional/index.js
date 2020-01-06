// #!/usr/bin/env node

'use strict';

var customers = require('./data/customers.json');
var _ = require("lodown-mmiriammxoxo");

/**
 * 1. Import your lodown module using the require() method,
 *    using the string 'lodown-<my-username>', or whatever
 *    name with which you published your npm lodown project.
 *
 * 2. Solve all problems as outlined in the README.
 *
 * 3. We started the first one for you as an example! Make the rest in that style.
 *
 * 4. To test your work, run the following command in your terminal:
 *
 *    npm start --prefix ./projects/let-s-get-functional 
 *    (//to Test our code!!!!!!)
 *
 *    IMPORTANT: Make sure you replace <YOUR_GITHUB_FOLDER with your actual github folder name that is in your workspace.
 */
// find the number of male customers with use of filter function
var maleCount = function(array) {
   // use filter function, find number of male customers
  let arrayOfMales = _.filter(array, function(customerObject, i , a) {
       return customerObject.gender === "male";
   });
   return arrayOfMales.length;
};

// find the number of female customers with use of reduce function
var femaleCount = function(array){
    // use reduce function, find number of female customers 
      return _.reduce(array, function(prevVal, currentObj, i){
          // if customer obj female
         if (currentObj.gender === "female"){
           // increase counter by one and return
           return prevVal = prevVal +1;   
         } 
         // if not female, return counter variable unchanged
         return prevVal;
        },0);
};

// find the oldest customer's name
var oldestCustomer = function(array) {
    // declare empty output array
    var oldest =[];
    // each-function to access each customer object
    _.each(array, function(e, i, arr) {
        // add each name and age  
        oldest[i] = ([e.age, e.name]);
}); // sort the array with names and ages by age
   oldest.sort(function(a, b){return b[0] - a[0]});
   // return oldest customers name
   return(oldest[0][1]);
};
  
// find the youngest customer's name 
var youngestCustomer = function(array) {
    // declare empty output array
    var youngest =[];
    // each-function to access each customer object
    _.each(array, function(e, i, arr) {
        // add each name and age  
        youngest[i] = ([e.age, e.name]);
}); // sort the array with names and ages by age
   youngest.sort(function(a, b){return a[0] - b[0]});
   // return youngest customers name
   return(youngest[0][1]);
};

// find the average balance of all customers
var averageBalance = function(array){
    // declare variables
    var bal;
    var add;
    var total =[];
    // each-function to access each customer object
   _.each(array, function(e, i, arr) {
         // assign customers balance 
         bal = e.balance;
         // remove $ and comma characters from the balance amount
         bal =bal.replace('$', '').replace(',', '');
         // parseFloat to convert balance from string value to number
         add = parseFloat(bal);   ///Number.parseFloat ??
         // add balance to array
         total.push(add);
   });
    // declare sum variable
    var sum = 0;
    // for-loop to access each balance value
    for (var y = 0; y < total.length; y++){
        // add balance to sum total
        sum = sum + total[y];
    }
    // return average balance
    return (sum / total.length);
};

// find how many customer names begin with a given letter
var firstLetterCount = function(array, letter){
    // convert provided letter to lower case
    letter =letter.toLowerCase();
    // declare and assign variables
    var firstLs = [];
    var count = 0;
    // each-function to access each customer object
    _.each(array, function(e, i, arr) {
        // add to-lowercase converted name first-letter to first letters array
        firstLs.push(e.name[0].toLowerCase());
    });
    // if first letters array includes the provided letter to match
    if (firstLs.includes(letter)){
       // each-function to access each letter in array 
       _.each(firstLs, function(e, i, arr){
           // if letter is a match increase counter by one
           if(e === letter) {
               count++;
           }
       });
    }
    // return letter count
    return count;
};

// find how many same letter friends a given customer has
var friendFirstLetterCount = function(array, customer, letter) {
    // turn given letter to lower case and declare first letters array
    letter =letter.toLowerCase();
    let firstLs =[];
    // each-function to access each customer in array
    _.each(array, function(e, i , arr){
        // if customer is required customer
        if (e.name === customer) {
           // for-loop to extract all customer friend's first letters, 
           // switch them to lower case and add them to firstLs array
           for (var y=0; y < e.friends.length; y++) {
             firstLs.push(e.friends[y].name[0].toLowerCase());
           }
        }
    });
    // declare counter var
    let count = 0;
    // if firstLs array contains provided letter
    if (firstLs.includes(letter)){
      // each-function to access each letter, increase counter if its a match 
       _.each(firstLs, function(e, i, arr){
          if(e === letter) {
            count++;
           }
       });
    }
    // return matching letter count
    return count;
};

// find the customers that are friends with given customer
var friendsCount = function(array, name) {
    // declare and assign customer name and output variable
    var customerName = name;
    let areFriends=[];
    // each-function to access each customer obj
    _.each(array, function(e, i, arr) {
        // if customer-obj is not same as given customer
        if (e.name !== customerName) {
           // for-loop to extract all of the customers friends
           for (var y = 0; y <e.friends.length; y++){
               // if friendlist includes given customers name
               if (customerName === e.friends[y].name){
                 // add customer to friendslist
                 areFriends.push(e.name)
               }
           }
        } 
    });
    // return friends-array
    return areFriends;
};

// find the three most common tags among all customers associated tags
var topThreeTags = function(array){
    var allTags =[];
    var tagCount = {};
    // each function to push all tags of all customers in allTags array
    _.each(array, function(cust, i, arr) {
        for (var n = 0; n < cust.tags.length; n++){
        allTags.push(cust.tags[n]); 
        }
    }); 
    // for-loop to assign and count tags
    for(var y = 0; y < allTags.length; y++){
           var el = allTags[y];
           if(tagCount[el] == undefined){
               tagCount[el] = 1;
           } else {
              tagCount[el]++;
           } 
    }
    // filter highest occurence tag
    var maxCount = 1;
    var maxTag;
    // for-in loop to access each tag in tagCount object
    for (var key in tagCount){
    // if specific tags counter is bigger than max-counter
    if (tagCount[key] > maxCount){
                   // assign key to maxTag
                   maxTag = key;
                   // update max counter
                   maxCount = tagCount[key];
                }
      // declare top tag variable          
    } var maxTag1 = maxTag;
      // delete top tag from tagCount object
      delete tagCount[maxTag];
    
    // filter second highest occurence tag  
    maxCount = 1;
    maxTag ='';
    // for-in loop to access each key value
    for (var key in tagCount){
    if (tagCount[key] > maxCount){
                   maxTag = key;
                   maxCount = tagCount[key];
                }
    } var maxTag2 = maxTag;
      delete tagCount[maxTag];
    
    // filter third highest occurence tag
    maxCount = 1;
    maxTag ='';
    // for-in loop to access each key value
    for (var key in tagCount){
    if (tagCount[key] > maxCount){
                   maxTag = key;
                   maxCount = tagCount[key];
                }
    } var maxTag3 = maxTag;
    
    // declare top tag variable and return 
    var topTags =[maxTag1, maxTag2, maxTag3];
    return topTags; 
};
    

// gender count, output: male/female/non-binary object using reduce
var genderCount = function(array){
    // declare genders-object and prevVal variable
    let genders={};
    var prevVal = [0, 0, 0];
    // reduce function to iterate through each customer-object 
    _.reduce(array, function(prevVal, e, i){
        // if female, increase fem counter return updated gender-count variable
        if (e.gender === "female"){
            prevVal[0] += 1;
            // return updated gender-counter variable
            return prevVal;
          // if male increase counter and return
        } else if (e.gender === "male") {
            prevVal[1] = prevVal[1] +1;
            return prevVal;
          // in non-binary increase counter and return
        } else if (e.gender === "non-binary") {
            prevVal[2]= prevVal[2]+1;
            return prevVal;
        }
        // return completed gender counter variable
        return prevVal;
       // pre-set to 0, gender-counter variable
    }, prevVal);
    // assign counter values and return
    genders.female=prevVal[0];  
    genders.male = prevVal[1];
    genders["non-binary"] = prevVal[2];
    return genders;
};

//////////////////////////////////////////////////////////////////////
// DON'T REMOVE THIS CODE ////////////////////////////////////////////
//////////////////////////////////////////////////////////////////////

// here, export any references you need for tests //
module.exports.maleCount = maleCount;
module.exports.femaleCount = femaleCount;
module.exports.oldestCustomer = oldestCustomer;
module.exports.youngestCustomer = youngestCustomer;
module.exports.averageBalance = averageBalance;
module.exports.firstLetterCount = firstLetterCount;
module.exports.friendFirstLetterCount = friendFirstLetterCount;
module.exports.friendsCount = friendsCount;
module.exports.topThreeTags = topThreeTags;
module.exports.genderCount = genderCount;
