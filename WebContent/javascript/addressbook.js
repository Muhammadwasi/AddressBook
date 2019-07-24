var AddressBook = function(){
    var init =function(){
        ko.applyBindings(AddressBook);
    }
    //call the init once jquery loaded
    $(init);

    //array to holds contact objects
    var contacts =ko.observableArray();

    //declaring contact object
    var contact ={
        name: ko.observable(),
        phoneNumber : ko.observable()
    }

    //Adding contact object(name, phoneNumber) to Contacts array
    var addContact =function(){
        contacts.push({name: contact.name(),phoneNumber: contact.phoneNumber()})
        console.log("Adding contact with "+contact.name() +" and "+contact.phoneNumber());
        clearContact()
    }

    //Clearing the input fields of UI
    var clearContact=function(){
        contact.name(null);
        contact.phoneNumber(null)
    }

    var removeContact=function(contact){
        contacts.remove(contact);
    }
    return {
        contact: contact,
        addContact: addContact,
        removeContact: removeContact,
        contacts: contacts
    };
}();