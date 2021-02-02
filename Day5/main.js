
//OOP with class

// class Myclass {
//     constructor(param1, param2, ...) {
//         this.property1 = param1;
//         this.property2 = param2;
//     }
//     method1(){

//     }

//     method2() {

//     }
// }

// const myObject = new MyClass(arg1, arg2, ...)

// const myObject = object.create(myPrototypeObject)

const aurora = {
    name: 'Aurora',
    health: 150,
    strength: 25,
    xp:0,

    //return the character description
    describe() {
        return `${this.name} has ${this.health} health points, ${this.strength} as strength and ${this.xp} xp points`
    }
};