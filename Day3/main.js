
/*
Object example

const myObject = {
    property1: value1,
    property2: value2,

    method1() {
        
    },

    method2() {

    }
}


myObject.property1 = newValue;    set the new value of property1 for myObject
console.log(myObject.property1);  show the value of property1 for myObject
myObject.method1()   call method1 on myObject
 
 */

 //Create an object

//  const pen = {
//      type: 'ballpoint',
//      color: 'blue',
//      brand: 'bic'
//  };


// accessing object property

//  console.log(pen.type); //shows the value of type
//  console.log(pen.color); // shows the value of color
//  console.log(pen.brand); //shows the value of brand


// const pen = {
//     type: 'ballpoint',
//     color: 'blue',
//     brand: 'bic'
// };
// console.log(`I write with a ${pen.color} ${pen.brand} ${pen.type} pen`);


//modifying an object
// const pen = {
//     type: 'ballpoint',
//     color: 'blue',
//     brand: 'bic'
// };

// //objectname.property = set new  value
// pen.color = 'red'; //modify the pen color property

// console.log(`i write with a ${pen.color} ${pen.brand} ${pen.type} pen`);


// const alex = {
//     name: 'Alex',
//     health: 150,
//     strength: 25
// };

// console.log(`${alex.name} has ${alex.health} health points and ${alex.strength} as strength`);

// alex.health -= 20;

// alex.strength += 10

// console.log(`${alex.name} has ${alex.health} health points and ${alex.strength} as strength`);


//Introducing methods

// const alex = {
//     name: 'Alex',
//     health: 150,
//     strength: 25,
// //returns character description within the object
//     describe() {
//         return `${this.name} has ${this.health} health points and ${this.strength} as strength`
//     }
// };

// console.log(alex.describe());
//one way to do it
// const describe = (character) => {
//     return `${character.name} has ${character.health} health points and ${character.strength} as strength`
// }


//Coding time

// Additional Character experience

// const alex = {
//     name: 'alex',
//     health: 150,
//     strength:200,
//     xp: 0
// }

// alex.health -= 20;
// alex.strength += 10;
// alex.xp += 15;
// console.log(`Alex has ${alex.health} health points, ${alex.strength} as strength and ${alex.xp}`);

// //modeling a dog

// const dog = {
//     name: 'fido',
//     species: 'german shepard',
//     size: 'big',

//     bark() {
//         return 'bark'
//     }
// }
// console.log(`${dog.name} is a ${dog.species} dog measuring ${dog.size}`);
// console.log(`look, a cat ${dog.name} barks: ${dog.bark()}`);


// //modeling a circle

// const r = Number(prompt('enter a circle radius'))

// const circle = {
//     circumference: 0,
//     are: 0,

//     circumference () {
//         let solution = 2 * 3.14 * r
//         return solution
//     },

//     area () {
//       let solution = 3.14 * (r * r)
//       return solution
//     }
// }


// console.log(`its circumference ${circle.circumference()}`);
// console.log(`its area ${circle.area()}`);

// Modeling a bank account

const account = {
    name: 'alex',
    balance: 0,
    
    credit(amount) {
       let value = amount + balance
       return value
    },
    
    describe () {
        return `owner: ${account.name}, ${account.credit()}`
    }
}

console.log(``);