import { square, cube } from './math.js'

console.log('Square of 5:', square(5));
console.log('Cube of 5:', cube(5));

class Animal {
    constructor(name) {
        this.name;
    }
    speak() {
        console.log(this.name + ' makes a sound.');
    }
}

class Dog extends Animal {
      contructor(name) {
       super(name);
 }

 speak() {
    console.log(this.name + ' barks.');
 }
}

const dog = new Dog('buddy');
dog.speak();


