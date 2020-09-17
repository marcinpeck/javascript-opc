'use strict';
(function () {

    class Person {
        constructor(firstName, lastName, age) {
            this.firstName = firstName;
            this.lastName = lastName;
            this.age = age;
        }

        static adultAge = 18;

        get fullName() {
            return this.firstName + ' ' + this.lastName
        }

        set fullName(fullName) {
            let nameParts = fullName.split(' ')
            this.firstName = nameParts[0]
            this.lastName = nameParts[1]
        }

        isAdult() {
            return this.age > 18;
        }
    }

    class Student extends Person {
        constructor(firstName, lastName, age) {
            super(firstName, lastName, age)
            this._enrolledCourses = []
        }


        enroll(courseId) {
            this._enrolledCourses.push(courseId);

        };

        getCourses() {
            return this.fullName + " on courses: " + this._enrolledCourses.join(', ');
        };

        static fromPerson(person){
            return new Student(person.firstName, person.lastName, person.age)
        };
    }

    Object.defineProperty(Person.prototype, 'fullName', {enumerable: true})

    let marcin = new Student('Marcin', 'Peck', 30);

    marcin.enroll('math');
    marcin.enroll('english');

    display(marcin);
    display(marcin.fullName);
    marcin.fullName = 'Marcin Pecku';
    display(marcin.fullName);
    display(marcin.isAdult());
    display(marcin.getCourses());

    let pawel = new Person('Pawel', 'Peck', '35')

    let studentPawel = Student.fromPerson(pawel)
    display(studentPawel);

    display(Person.adultAge);




})();