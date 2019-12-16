// #!/usr/bin/env node

'use strict';

/**
 * 4: Contact List
 * 
 *  a. Create a factory Function called makeContact(id, nameFirst, nameLast) 
 *     that returns a contact object.
 *     
 *          ex: makeContact(1, 'Max', 'Gaudin'); // => {id: 1, nameFirst: 'Max', nameLast: 'Gaudin'}
 *     
 *  b. Create a factory Function called makeContactList that returns an Object 
 *     that manages contacts. The contact-list object should have the following API:
 *       
 *      1. length(): returns the number of contacts within the list.
 *      2. addContact(contact): takes a contact object to be added to the 
 *         contact-list.
 *      3. findContact(fullName): takes a full-name String, like 'Max Gaudin', and 
 *         returns the contact object if found in the contacts-list, or, 
 *         undefined if the fullName does not match any contacts in the list.
 *      4. removeContact(contact): takes a contact object to be removed from 
 *         the contact-list.
 * 
 * BONUS : add a printAllContactNames() Function to your makeContactList() factory, so that the 
 *         contact-list returned has an all() API. The printAllContactNames() Function should 
 *         return a String formated with all the full-names of the separated 
 *         with a line-break, like so:
 *          
 *         myContacts.printAllContactNames(); // => Max Gaudin
 *                                                  John Fraboni
 *                                                  Your Mom
 *          
 *          WARNING: To pass the bonus test, the LAST full name should have NO
 *          new-line character added after it!
 */

// YOUR CODE GOES BELOW HERE //
function makeContact(id, nameFirst, nameLast) {
    // add values to assign contact object and return it
    // declare contact object
    var newContact = {};
    newContact['id'] = id;
    newContact['nameFirst'] = nameFirst;
    newContact['nameLast'] = nameLast;
    return newContact;
} 

function makeContactList() {
    // You need something here to hold contacts. See length api for a hint:
     var contacts =[];
      // return function that adds contact
    return { 
        addContact: function(contact) {
            contacts.push(contact);
        },
        // we implemented the length api for you //
        // return function that returns number of contacts
        length: function() {
            return contacts.length;
        },
        // return function that returns a contact 
        findContact: function(fullName) {
            // for loop to find contact and return it or if absent undefined
            for ( var i=0; i < contacts.length; i++) {
                if (fullName === contacts[i].nameFirst + " " + contacts[i].nameLast){
                return contacts[i];
            } 
            }
            return undefined;
        },
        // return function that removes a contact
        removeContact: function(contact) {
            // for loop to loop through contact list and remove the contact
            for (var i=0; i<contacts.length; i++) {
                if (contacts[i] === contact) {
                    return contacts.splice(i,1);
                }
                
            }
            
        },
        // function to print all contacts
        printAllContactNames: function() {
            // loop through each contact to add to output string including space and line break
            var allContacts = "";     // use var for var= i so it is available outside the loop block scope
            for (var i=0; i < contacts.length-1; i++) {
                // add allContacts to the output variable except the last one
                
                allContacts = allContacts + contacts[i].nameFirst + " " + contacts[i].nameLast + "\n";
            }
            // add last contact but without line break and return completed output string
            // another option would be to slice() off linebreak from completed string then return
            return allContacts = allContacts + contacts[i].nameFirst + " " + contacts[i].nameLast;
        }
     
        
    }
}




// DON'T REMOVE THIS CODE //////////////////////////////////////////////////////
if((typeof process !== 'undefined') &&
(typeof process.versions.node !== 'undefined')) {
    // here, export any references you need for tests //
    module.exports.makeContact = makeContact;
    module.exports.makeContactList = makeContactList;
}
