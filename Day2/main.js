//Conditional

// if (condition) {
//     //code to run when the condition is true
// }

// if (condition) {
//     //code to run whe the condition is true
// } else {
//     //code to run when the condition is false
// }

//The if statement
// const number = Number(prompt('enter a number'));
// if (number > 0 ) {
//     console.log(`${number} is positive`);
// }

// const number = Number(prompt('enter a number'))
// if (number >= 0) {
//     console.log(`${number} is positive or zero`);
// }

// const number = Number(prompt('enter a number:'));
// if(number > 0){
//     console.log(`${number} is positive`);
// } else {
//     console.log(`${number} is negative or zero`);
// }

//Nesting condition
// const number = Number(prompt('enter a number:'))
// if (number > 0) {
//     console.log(`${number} is positive`);
// } else{
//     // number <= 0
//     if (number < 0 ){
//         console.log(`${number} is negative`);
//     } else {
//         //number === 0
//         console.log(`${number} is zero`);
//     }
// }

// const number = Number(prompt('enter a number:'))
// if (number > 0) {
//     console.log(`${number} is positive`);
// } else if (number < 0 ) {
//     console.log(`${number} is negative`);
// } else {
//     console.log(`${number} is zero`);
// }

// const number = Number(prompt('enter a number:'))
// if ((number >= 0) && (number <= 100)){
//     console.log(`${number} is between 0 and 100, both included`);
// } else {
//     console.log('its not between 0 and 100');
// }
// const number = Number(prompt('enter a number:'))
// if((number < 0 ) || (number > 100)){
//     console.log(`${number} is not in between 0 and 100`);
// }


//Coding Time
// let day = String(prompt('enter a day'))
// if (day === 'monday'){
//     console.log('happy monday');
// } else if (day === 'tuesday') {
//     console.log('taco tuesday');
// } else if (day === 'wednesday') {
//     console.log('hump day!');
// } else if ( day === 'thursday') {
//     console.log('thirsty thursday');
// } else if ( day === 'friday')  {
//     console.log('weekend');
// } else {
//     console.log('not a day');
// }



//Repeat statements

/* 

While loop 

while (condition) {
    //code to run while condition is true
}

*/

/*

For loop

for (initialization; condition; final expression) {
    code to run while the condition is true
}

*/


// let number = 1;

// while (number <= 5) {
//     console.log(number);
//     number++
// }

// let number;

// for (number = 1; number <= 5; number++) {
//     console.log(number);
    
// }


// let carousel; 

// for (carousel = 0; carousel <= 10; carousel ++){
//     console.log(carousel);
// }

// let carousel2 = 0
// while (carousel2 <= 10){
//     console.log(carousel2);
//     carousel2++
// }

let question = Number(prompt('give me a number that is less than or equal to 100'))

for (let i = 0 ; i <= 100; i++) {
    if ( i <= 100) {
        console.log('its a 100 or less!')
    }
    else {
        console.log('its ok')
    }
    
} 

