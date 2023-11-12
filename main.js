const numbers = document.querySelectorAll('.number');
const screen = document.querySelector('.screen');
const operation = document.querySelectorAll('.operation');
const equal = document.querySelector('.equal');
const numbersArray = Array.from(numbers);

let screenView = '';
let numSave = '';
let operationSave= '';
let operatorArray = [];
let nums = []
let num1 = '';
let num2 = '';
let click = 0;
let result =''
let opCounter = 0;

const getNumbers = (array =>{
  array.forEach(element =>{
    element.addEventListener('click', (e) =>{
      screenView += e.target.textContent;
      numSave += e.target.textContent;
      screen.textContent = screenView;
      opCounter = nums.length;
      if(operatorArray.length !== opCounter){
        operatorArray.push(operationSave);
      }
    })
  })
})

getNumbers(numbersArray);

const saveWhenOp = (e) =>{

  operationSave = e.target.textContent;
  const stepOne = screenView.split('');
  nums.push(numSave);
  numSave = '';
  nums = nums.filter(e => e !== '');
  console.log(nums)
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

  nums.push(numSave);

  console.log(operatorArray)
console.log(opCounter)
  for(let i = 0; i < operatorArray.length;i++){
    console.log(operatorArray[i])
    if(operatorArray[i] === '+'){
      result = Number(nums[i])  + Number(nums[i+1]);
      console.log('plus')
    } else if(operatorArray[i] === '-'){
      result = Number(nums[i]) - Number(nums[i+1]);
      console.log('minus')
    } else if(operatorArray[i] === 'X'){
      console.log('puta')
      result = Number(nums[i]) * Number(nums[i+1]);
    } else {
      console.log('deli')
      result = Number(nums[i]) / Number(nums[i+1]);
    }
    console.log(nums)
    nums.splice(i,2,'',result)
    console.log(nums)
  }
  

  screen.textContent = Math.round(result * 10000) / 10000;
})
















