//iterate over an array

// for (let i = 0; i < myArray.length; i++) {
//     //use myArray[i] to access each array element one by one
// }

// myArray.array.forEach(myElement => {
//     //use myElement to access each array element one by one
// });

// for (const myElement of myarray ) {
//     //use myElement to access each array element one by one
// }

// const movies = ['the world of wall street', 'zootopia', 'babysitting']

//for loop

// for(let i = 0; i < movies.length; i++){
//     console.log(movies[i]);
// }

//forEach()

// movies.forEach(movie => {
//     console.log(movie);
// })

//for of loop

// for(const movie of movies){
//     console.log(movie);
// }

///Adding elements to the array
// movies.push('pacific rim')
// console.log(movies[3]);
// movies.unshift('ghost busters')
// console.log(movies[0]);

// Removing elements from the array
// movies.pop()
// console.log(movies.length);
// console.log(movies[2]);

// movies.splice(0,1)
// console.log(movies.length);
// console.log(movies[0]);
// console.log(movies[1]);



//Coding Time

//Musketeers
/*

Creates an array named musketeers containing values "Athos", "Porthos" and "Aramis".
Shows each array element using a for loop.
Adds the "D'Artagnan" value to the array.
Shows each array element using the forEach() method.
Remove poor Aramis.
Shows each array element using a for-of loop.

*/

// const musketeers = ['athos', 'porthos', 'aramis']
// // for(i = 0; i < musketeers.length; i++){
// //     console.log(musketeers[i]);
// // }

// // musketeers.push('d artagnan')
// // console.log(musketeers);
// // musketeers.forEach(musketeer => {
// //     console.log(musketeer);
// // })
// // musketeers.splice(2,2)

// // console.log(musketeers)


// for(const musketeer of musketeers) {
//     console.log(musketeer);
// }


//String Methods

// for(let  i= 0; i < myString.length; i++) {
//     //use mystring[i] to each access each character one by one
// }


//turning a string into an array

const name = 'alex';
const nameArray = Array.from(name);
nameArray.forEach(letter => {
    console.log(letter);
})