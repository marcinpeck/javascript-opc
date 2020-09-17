'use strict';
(function () {

    /** prototypes
     function Person(firstName,lastName){
        this.firstName = firstName;
        this.lastName = lastName;
    }

     Person.prototype.age = 29;

     let marcin = new Person('Marcin', 'Peck')


     display(marcin.firstName)

     display(Person.prototype)
     display(marcin.__proto__);
     display(Person.prototype === marcin.__proto__)

     marcin.__proto__.age = 19;

     display('has property? ' + marcin.hasOwnProperty('age'))

     marcin.age = 30;

     display('has property? ' + marcin.hasOwnProperty('age'))

     display(marcin.age)
     display(marcin.__proto__.age)
     **/

    /**inheritance **/

    function Person(firstName, lastName, age) {
        this.firstName = firstName;
        this.lastName = lastName;
        this.age = age;

        Object.defineProperty(this, 'fullName', {

            get: function () {
                return this.firstName + ' ' +this.lastName

            }, enumerable: true


        });
    }

    function Student(firstName, lastName, age) {
        Person.call(this, firstName, lastName, age)
        this._enrolledCourses = []
        this.enroll = function (courseId) {
            this._enrolledCourses.push(courseId);

        };

        this.getCourses = function () {
            return this.fullName + " on courses: " + this._enrolledCourses.join(', ');
        };
    }

    Student.prototype = Object.create(Person.prototype);
    Student.prototype.constructor = Student;

    let marcin = new Student('Marcin', 'Peck', 30);
    marcin.enroll('MATH')

    display(marcin.__proto__);
    display(marcin.__proto__.__proto__);
    display(marcin.__proto__.__proto__.__proto__);

    display(marcin.getCourses());

})();