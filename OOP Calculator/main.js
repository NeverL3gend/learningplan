// I want to create an object called Calculator
// In the object I want it to have methods which are going to calculate things using each operations

/* 
 I want to use the queryselector and event listenier. 
 Every time I hit one of the operator then hit the 
 equal button I want to see the results, shown
*/

let opBtn = document.querySelector('#op')
let numBtn = document.querySelector('#num')
let equalBtn = document.querySelector('#equal')
let clrBtn = document.querySelector('#clear') //clear button
let input = document.querySelector('#input')


const calculator = {
    add(x,y) {
        let solution = x + y
        return solution
    },

    sub(x,y) {
        let solution = x - y
        return solution
    },

    mul(x,y) {
        let solution = x * y
        return solution
    },

    div(x,y) {
        let solution = x / y
        return solution
    }
}




































