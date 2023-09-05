/*JavaScript Classes are templates for JavaScript Objects.*/


class Person {
    name = 'Srajal';
}

const person = new Person();
console.log(person.name);


/*
class Person {
    name = 'Max';
    printMyName = () => {
    console.log(this.name);
    }
 }

const person = new Person();
person.printMyName();

*/

/*

class Human {
    species = 'human';
}

class Person extends Human {
    name = 'srajal';
    printMyName = () => {
        console.log(this.name);
    }
}

const person = new Person()
person.printMyName();
console.log(person.species);

*/