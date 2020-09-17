'use strict';
(function () {


    let person = {
        firstName: 'Marcin',
        lastName: 'Peck',
        age: 30
    };

    display(person.firstName);

    //Object.defineProperty(person,'firstName', {writable: false});
    //Object.freeze(person)
    // person.firstName = 'Ala'; // fail

   //Object.defineProperty(person, 'firstName', {configurable: false});
  // Object.defineProperty(person,'firstName', {enumerable: false});  // fail

  Object.defineProperty(person, 'fullName',
      {
        get() {
          return this.firstName + ' ' + this.lastName
        },
        set(v) {
          let nameParts = v.split(' ');
          this.firstName = nameParts[0];
          this.lastName = nameParts[1];
        }
      });

  display(person.fullName);
  person.fullName = "Ala Kotecka";
  display(person.fullName)


  //this will not work if configurable set to false
  delete person.firstName;

  display(person)

})();