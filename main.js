const numbers = document.querySelectorAll('.number');
const screen = document.querySelector('.screen');
const operation = document.querySelectorAll('.operation');
const equal = document.querySelector('.equal');
const numbersArray = Array.from(numbers);

let numberIndex ='';
let number1 = '';
let number2 = ''
let whatOperation ='';
let result
let num1;
let num2;
let whatLength = '';

const makeNumber = (numbers) => {
    numbers.forEach(number => {
      number.addEventListener('click', (e) => {
        numberIndex = screen.textContent
        numberIndex += e.target.textContent;
        screen.textContent = numberIndex;
            number1 = numberIndex;
            console.log(number1)
      });
    });
  };
  
  makeNumber(numbersArray);



    operation.forEach(element =>{
        element.addEventListener('click', (e) =>{
            num1 = Number(number1);
            whatLength = number1.length;
            number1 = ''
            numberIndex = ''
            whatOperation = e.target.textContent;
            numberIndex += e.target.textContent
            screen.textContent += numberIndex; 
            console.log(numberIndex)
            
                  
        })
})

equal.addEventListener('click', () =>{
   num2 = Number(number1.slice(whatLength+1, number1.length));
   console.log(whatLength)
   console.log(num1 ,num2)
   console.log(whatOperation)
   if(whatOperation === '+'){
      result = num1 + num2
   } else if(whatOperation === '-'){
    result = num1 - num2
   } else if(whatOperation === 'X'){
    result = num1 * num2
   } else result = num1 / num2;


    // switch(whatOperation){
    //     case'+': result = num1 + num2;break;
    //     case'-': result = num1 - num2;break;
    //     case'*': result = num1 * num2;break;
    //     case'/': result = num1 / num2;break;
    // }
    screen.textContent = result;
    num1 = result;
})










