//////////////////////////////////////////////////////////////////////
// Function 1 - Object Values ////////////////////////////////////////
//////////////////////////////////////////////////////////////////////

function objectValues(object) {
       // declare output array variable
       var objVal = []; 
        // for-in loop to access all keys
        for(var key in object) {
            // add key value to output array
            objVal.push(object[key]);
          // return output array
        } return objVal;            
} 
// Should take an object and return its values in an array
//////////////////////////////////////////////////////////////////////
// Function 2 - Keys to String ///////////////////////////////////////
//////////////////////////////////////////////////////////////////////

function keysToString(object) {
    // declare output variable
    var keyString = "";    
        // for-in loop to extract keys
        for(var key in object) {
           // add key to output string with added space
           keyString = keyString + key + " ";
          // trim and return output string
        } return keyString.trim();   

}

//keysToString() : Should take an object and return all its keys in a 
// string each separated with a space 
//////////////////////////////////////////////////////////////////////
// Function 3 - Values to String /////////////////////////////////////
//////////////////////////////////////////////////////////////////////

function valuesToString(object) {
     // declare output variable
     var stringVal = "";   
        // for-in loop to loop through keys
        for(var key in object) {
            // check if value is a string
            if (typeof object[key] === "string") {
            // add value to output variable with added space
            stringVal = stringVal + object[key] + " ";
        } 
         // return string trimmed of extra space
        }return stringVal.trim(); 
    
}
//valuesToString() : Should take an object and return all its string 
// values in a string each separated with a space
//////////////////////////////////////////////////////////////////////
// Function 4 - Array or Object //////////////////////////////////////
//////////////////////////////////////////////////////////////////////

function arrayOrObject(collection) {
    // check if collection is an array and return 'array' if so
    if (Array.isArray(collection) === true) {
        return "array";
      // check if collection is a date or null value if so exit out
    } else if (collection instanceof Date || collection === null) {
        return;
      // check if collection is an object, if so return 'object'
    } if ( typeof collection === "object") {
        return "object";
    }
    
    
}
//: Should take one argument and return 'array' if its an array and 
// 'object' if its an object
//////////////////////////////////////////////////////////////////////
// Function 5 - Capitalize Word //////////////////////////////////////
//////////////////////////////////////////////////////////////////////

function capitalizeWord(string) {
    // take first char of string and convert to uppercase then
    // concat+ string (minus first character sliced off) and return
    return string.charAt(0).toUpperCase() + string.slice(1);
}
//  Should take a string of one word, and return the word 
// with its first letter capitalized
//////////////////////////////////////////////////////////////////////
// Function 6 - Capitalize All Words /////////////////////////////////
//////////////////////////////////////////////////////////////////////

function capitalizeAllWords(string) {
    // split string into array with all words 
    var outputStr = "";
    var wordsArr = string.split(' ');
    // for-loop to switch all words first letters to caps
    for (var i = 0; i <wordsArr.length; i++) {
       wordsArr[i] = wordsArr[i].charAt(0).toUpperCase() + wordsArr[i].slice(1);
       // concatenate output string with added space
       outputStr = outputStr + wordsArr[i] + " ";
       // trim and return output string 
    } return outputStr.trim();
       
}

// Should take a string of words and return a string 
// with all the words capitalized
//////////////////////////////////////////////////////////////////////
// Function 7 - Welcome Message //////////////////////////////////////
//////////////////////////////////////////////////////////////////////

function welcomeMessage(object) {
       
     // return welcome message with capitalized name and exclamation mark
     return ("Welcome " + object.name[0].toUpperCase() + object.name.slice(1) +"!");
        

}
//welcomeMessage() : Should take an object with a name 
// property and return 'Welcome <Name>!'
//////////////////////////////////////////////////////////////////////
// Function 8 - Profile Info /////////////////////////////////////////
//////////////////////////////////////////////////////////////////////

function profileInfo(object) {
    // return name capitalized + is a + species capitalized - message
    return object.name[0].toUpperCase() + object.name.slice(1) +" is a " + object.species[0].toUpperCase() + object.species.slice(1);

}
//ProfileInfo() : Should take an object with a name and a species 
// and return '<Name> is a <Species>'
//////////////////////////////////////////////////////////////////////
// Function 9 - Maybe Noises /////////////////////////////////////////
//////////////////////////////////////////////////////////////////////

function maybeNoises(object) {
    // if object has no noises property or no noises values
    if (object.noises === undefined || object.noises.length ===0) {
        // return no noises message
        return "there are no noises";
        // otherwise return noises list separated by a space
    } else {
        return object.noises.join(" ");
    }
}        
   

//maybeNoises() : Should take an object, if this object has a noises array 
//return them as a string separated by a space, if there are no noises return 
//'there are no noises' 
//////////////////////////////////////////////////////////////////////
// Function 10 - Has Words ///////////////////////////////////////////
//////////////////////////////////////////////////////////////////////

function hasWord(string, word) {
             //use .includes() method to find out if word included
             if (string.includes(word)){
               //if word included return true
               return true;
               // otherwise return false
             } return false;
}

//hasWord() : Should take a string of words and a word and return true  
//if <word> is in <string of words>, otherwise return false.
//////////////////////////////////////////////////////////////////////
// Function 11 - Add Friend //////////////////////////////////////////
//////////////////////////////////////////////////////////////////////

function addFriend (name, object) {
    // add given name to given objects friends list
    object.friends.push(name);
    // return the updates object
    return object;
}
//Should take a name and an object and add the name to the object's 
// friends array then return the object
//////////////////////////////////////////////////////////////////////
// Function 12 - Is Friend ///////////////////////////////////////////
//////////////////////////////////////////////////////////////////////

function isFriend(name, object) {
    // if object has no friends property or object has no friends return false
    if (object.friends === undefined || object.friends === 0) {
        return false;
    // if name is included in object friendslist return true
    } else if (object.friends.includes(name)) {
        return true;
    // all other cases return false
    } else {
        return false;
    }
}
//Should take a name and an object and return true if <name> is a friend 
// of <object> and false otherwise

//////////////////////////////////////////////////////////////////////
// Function 13 - Non-Friends /////////////////////////////////////////
//////////////////////////////////////////////////////////////////////

function nonFriends(name, array) {
    // declare output array for non friends
    var friendsArray =[];
            // for loop to loop through array to compare each name
            for (var i =0; i <array.length; i++) {
            // declare var person to hold name to be compared
            var person = array[i];
            // if that persons friendslist does not include the name and it is 
            // not his name then push the name into the output list
            if (!person.friends.includes(name) && person.name !== name ){
          friendsArray.push(person.name);
      } 
    } 
// return list of people <name> isnt friends with
return friendsArray;
    
}
// Should take a name and a list of people, and return a list of all the 
// names that <name> is not friends with   [friend1, friend2]
//////////////////////////////////////////////////////////////////////
// Function 14 - Update Object ///////////////////////////////////////
//////////////////////////////////////////////////////////////////////

function updateObject(object, key, value) {
      // add /update given key/value pair
      object[key] = value;   // use [] if dont know the exact key name 
      // return updated object
      return object;
   
}

//Should take an object, a key and a value. Should update the property <key> 
//on <object> with new <value>. If <key> does not exist on <object> create it
//////////////////////////////////////////////////////////////////////
// Function 15 - Remove Properties ///////////////////////////////////
//////////////////////////////////////////////////////////////////////

function removeProperties(object, array) {
    // for loop to delete each property of object that's listed in input array
    for (var i=0; i < array.length; i++) {
        delete object[array[i]];
    }

}

//removeProperties() : Should take an object and an array of strings. 
//Should remove any properties on <object> that are listed in <array> 
//////////////////////////////////////////////////////////////////////
// Function 16 - Dedup ///////////////////////////////////////////////
//////////////////////////////////////////////////////////////////////

function dedup(array) {
     // array with all doubles removed
     let noDoubles = [...new Set(array)];  
     // return output array
     return noDoubles;
        
           
}
//Should take an array and return an array with all the duplicates removed

//////////////////////////////////////////////////////////////////////
// DON'T REMOVE THIS CODE ////////////////////////////////////////////
//////////////////////////////////////////////////////////////////////

if((typeof process !== 'undefined') &&
   (typeof process.versions.node !== 'undefined')) {
    // here, export any references you need for tests //
    module.exports.objectValues = objectValues;
    module.exports.keysToString = keysToString;
    module.exports.valuesToString = valuesToString;
    module.exports.arrayOrObject = arrayOrObject;
    module.exports.capitalizeWord = capitalizeWord;
    module.exports.capitalizeAllWords = capitalizeAllWords;
    module.exports.welcomeMessage = welcomeMessage;
    module.exports.profileInfo = profileInfo;
    module.exports.maybeNoises = maybeNoises;
    module.exports.hasWord = hasWord;
    module.exports.addFriend = addFriend;
    module.exports.isFriend = isFriend;
    module.exports.nonFriends = nonFriends;
    module.exports.updateObject = updateObject;
    module.exports.removeProperties = removeProperties;
    module.exports.dedup = dedup;
}