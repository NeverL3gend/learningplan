// I want to create an object called Calculator
// In the object I want it to have methods which are going to calculate things using each operations

/* 
 I want to use the queryselector and event listenier. 
 Every time I hit one of the operator then hit the 
 equal button I want to see the results, shown
*/

const calculator = {
    button: document.querySelectorAll('#button'),
    equalBtn: document.querySelector('#equal'),
    clrBtn:  document.querySelector('#clear'), 
    show:  document.querySelector('#input'),

    click () {
        this.button.forEach(button  => {
            button.addEventListener('click', () => {
                let number = button.getAttribute('data-num')
                this.show.textContent = number
            })
        });
    },

    // evaluation () {
    //     this.equalBtn.addEventListener('click', () => {
    //         let solution  = this.show.textContent;
    //         this.show.textContent = eval(solution)
    //     })
    // },

    // clear () {
    //     this.clrBtn.addEventListener('click', () =>{
    //         show.textContent = ' '
    //     })
    // }

}

calculator.click()
calculator.evaluation()
calculator.clear()
  



































