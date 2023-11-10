const numbers = document.querySelectorAll('.number');
const screen = document.querySelector('.screen');

let number1 = '';
let operation;
let number2;


const makeNumber = (numbers, numberIndex) =>{
    numbers.forEach(number =>{
        number.addEventListener('click', (e) =>{
            console.log(e.target.textContent);
                numberIndex += e.target.textContent;
                console.log(numberIndex)
            screen.textContent =  numberIndex;
            return numberIndex
        })
    })
}


makeNumber(numbers, number1);

console.log(number1)





