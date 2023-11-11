const numbers = document.querySelectorAll('.number');
const screen = document.querySelector('.screen');
const operation = document.querySelectorAll('.operation');
const equal = document.querySelector('.equal');
const numbersArray = Array.from(numbers);

let screenView = '';
let numSave = '';
let operationSave= '';
let nums = []
let num1 = '';
let num2 = '';
let click = 0;
let result =''
let punctLocation = ''

const getNumbers = (array =>{
  array.forEach(element =>{
    element.addEventListener('click', (e) =>{
      screenView += e.target.textContent;
      numSave += e.target.textContent;
      screen.textContent = screenView;
    })
  })
})

getNumbers(numbersArray);

const saveWhenOp = (e) =>{

  operationSave = e.target.textContent;
  const stepOne = screenView.split('');
  num1= numSave;
  punctLocation = stepOne.length-1;
  if(stepOne[stepOne.length-1] === '+'||stepOne[stepOne.length-1] === '-'||stepOne[stepOne.length-1] === 'X'||stepOne[stepOne.length-1] === '/'){
    const stepTwo = stepOne.splice(stepOne.length-1, 1, operationSave)
    screenView = stepTwo.join('');
    console.log(screenView);
    screen.textContent = screenView
  }else
  stepOne.push(operationSave);
  screenView = stepOne.join('');
  console.log(screenView);
  screen.textContent = screenView;
}


operation.forEach(element =>{
  element.addEventListener('click', saveWhenOp)

})

equal.addEventListener('click', () =>{
  const stepOne = numSave.split('');
  console.log(stepOne)
  const stepTwo = stepOne.splice(punctLocation+1, stepOne.length)
  console.log(punctLocation+1, stepOne.length-punctLocation+1)
  console.log(stepTwo)
  num2 = stepTwo.join('');
  console.log(num2)
  
  if(operationSave === '+'){
    result = Number(num1) + Number(num2);
  } else if(operationSave === '-'){
    result = Number(num1) - Number(num2);
  } else if(operationSave === 'X'){
    result = Number(num1) * Number(num2);
  } else result = Number(num1) / Number(num2);
  screen.textContent = result;
})
















