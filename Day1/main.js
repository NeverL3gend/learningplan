

console.log('hello from javascript!');
console.log('lets do some math');
console.log(4 + 7);
console.log(12 /0 );
console.log('goodbye');


//Coding time
console.log('Baptisete');
console.log(20 * 2);

//9
console.log(6 + 3);
//3
console.log(6 - 3);
//18
console.log(6 * 3);
//2
console.log(6 / 3);


/* Variable scope */

let num1 = 0;
{
    num1 = 1;
    // const num2 = 0;
}

console.log(num1); //num1 is dec;ared in the current block
// console.log(num2); //error num2 is not visible here


/* Expressions */
//3 is an expression whose value is 3
const c = 3;
//C is an expression whose value is the value of c (3 here)
let d = c
// (d + 1) is an expression whose value is D's + 1 (4 here)
console.log(d);

const country = 'france'
console.log(`I live in ${country}`);
const x = 3;
const y = 7;
console.log(`${x} + ${y} = ${x + y}`);

/*Type conversions */

const f = 100;
console.log('variable f contains the value ' + f);

const g = "five" * 2 
console.log(g)

const h = '5'
console.log(h + 1); //this is going to concatinate into 51
const i = Number("5")
console.log(i + 1); //this is going to return us a value of 6


/* User interactions */

const name = prompt("Enter your first name:")
alert(`Hello, ${name}`)

/* */