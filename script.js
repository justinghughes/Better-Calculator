const displayContainer = document.querySelector('#display-container')
const numBtn0 = document.querySelector('#num-btn0');
const numBtn1 = document.querySelector('#num-btn1');
const numBtn2 = document.querySelector('#num-btn2');
const numBtn3 = document.querySelector('#num-btn3');
const numBtn4 = document.querySelector('#num-btn4');
const numBtn5 = document.querySelector('#num-btn5');
const numBtn6 = document.querySelector('#num-btn6');
const numBtn7 = document.querySelector('#num-btn7');
const numBtn8 = document.querySelector('#num-btn8');
const numBtn9 = document.querySelector('#num-btn9');
const addBtn = document.querySelector('#add-btn');
const subtractBtn = document.querySelector('#subtract-btn');
const multiplyBtn = document.querySelector('#multiply-btn');
const divideBtn = document.querySelector('#divide-btn');
const equalsBtn = document.querySelector('#equals-btn');
const clearBtn = document.querySelector('#clear-btn');
let numOne = [];
let numTwo = [];
let input = [];
let operator = '';
let result;
let key = 'start';
const displayPara = document.createElement('p');

function displayInput() {
    displayPara.textContent = input.join('');
    displayContainer.appendChild(displayPara);
  }

function check() {
    if (key === 'end') {
        return true;
    } else {
        return false;
    }
}

equalsBtn.addEventListener('click', () => {
    operate();
    result = Array.from(String(result), Number)
    input = result;
    addBtn.disabled = false;
    subtractBtn.disabled = false;
    multiplyBtn.disabled = false;
    divideBtn.disabled = false;
})

clearBtn.addEventListener('click', () => {
  input = [];
  numOne = [];
  numTwo = [];
  result = null;
  key = 'start';
  displayPara.textContent = null;
  displayContainer.appendChild(displayPara);
})

let operators = {
  '+': function(numOne, numTwo) { return numOne + numTwo },
  '-': function(numOne, numTwo) { return numOne - numTwo },
  '*': function(numOne, numTwo) { return numOne * numTwo },
  '/': function(numOne, numTwo) { return numOne / numTwo }
}

function operate() {
  console.log(typeof(numOne))
  if (operator === '+') {
    if (typeof numOne == 'number') {
      numTwo = Number(numTwo.join(""));
      operator = '';
      result = operators[plus](parseFloat(numOne),parseFloat(numTwo));
      numOne = result;
      numTwo = [];
      console.log('numOne result: ' + result);
    } else {
      numOne = Number(numOne.join(""));
      numTwo = Number(numTwo.join(""));
      operator = '';
      result = operators[plus](parseFloat(numOne),parseFloat(numTwo));
      numOne = result;
      numTwo = [];
      console.log('numOne result: ' + result)
    }
  } else if (operator === '-') {
    if (typeof numOne == 'number') {
      numTwo = Number(numTwo.join(""));
      operator = '';
      result = operators[minus](parseFloat(numOne),parseFloat(numTwo));
      numOne = result;
      numTwo = [];
      console.log('numOne result: ' + result)
    } else {
      numOne = Number(numOne.join(""));
      numTwo = Number(numTwo.join(""));
      operator = '';
      result = operators[minus](parseFloat(numOne),parseFloat(numTwo));
      numOne = result;
      numTwo = [];
      console.log('numOne result: ' + result)
    }
  } else if (operator === '*') {
    if (typeof numOne == 'number') {
      numTwo = Number(numTwo.join(""));
      operator = '';
      result = operators[times](parseFloat(numOne),parseFloat(numTwo));
      numOne = result;
      numTwo = [];
      console.log('numOne result: ' + result)
    } else {
      numOne = Number(numOne.join(""));
      numTwo = Number(numTwo.join(""));
      operator = '';
      result = operators[times](parseFloat(numOne),parseFloat(numTwo));
      numOne = result;
      numTwo = [];
      console.log('numOne result: ' + result)
    }
  } else if (operator === '/') {
    if (typeof numOne == 'number') {
      numTwo = Number(numTwo.join(""));
      operator = '';
      result = operators[divide](parseFloat(numOne),parseFloat(numTwo));
      numOne = result;
      numTwo = [];
      console.log('numOne result: ' + result)
    } else {
      numOne = Number(numOne.join(""));
      numTwo = Number(numTwo.join(""));
      operator = '';
      result = operators[divide](parseFloat(numOne),parseFloat(numTwo));
      numOne = result;
      numTwo = [];
      console.log('numOne result: ' + result)
    }
  }
    displayPara.textContent = result;
    displayContainer.appendChild(displayPara);
}

function clickAdd() {
  addBtn.addEventListener('click', () => {
      if (key === 'start') {
        operator = '+';
        key = 'end';
        input.push('+');
        displayInput();
        console.log(operator);
        key = 'end';
      } else if (key === 'end') {
        operator = '+';
        input.push('+');
        displayInput();
        console.log(operator);
    }}
  )
}
clickAdd();

function clickSubtract() {
  subtractBtn.addEventListener('click', () => {
      if (key === 'start') {
        operator = '-';
        key = 'end';
        input.push('-');
        displayInput();
        console.log(operator);
      } else if (key === 'end') {
        operator = '-';
        input.push('-');
        displayInput();
        console.log('-');
      }
    }
  )
}
clickSubtract();

function clickMultiply() {
  multiplyBtn.addEventListener('click', () => {
      if (key === 'start') {
        operator = '*';
        key = 'end';
        input.push('*');
        displayInput();
        console.log(operator);
      } else {
        operator = '*';
        input.push('*');
        displayInput();
        console.log('*');
      }
    }
  )
}
clickMultiply();

function clickDivide() {
  divideBtn.addEventListener('click', () => {
      if (key === 'start') {
        operator = '/';
        key = 'end';
        input.push('/');
        displayInput();
        console.log(operator);
      } else {
        operator = '/';
        input.push('/');
        displayInput();
        console.log('/');
      }
    }
  )
}
clickDivide();

numBtn0.addEventListener('click', () => {
  if (check() === false) {
  numOne.push(0);
  input.push(0);
  displayInput();
  console.log('numOne: ' + numOne)
  } else if (check() === true) {
    numTwo.push(0);
    input.push(0);
    displayInput();
    console.log('numTwo: ' + numTwo)
    addBtn.disabled = true;
    subtractBtn.disabled = true;
    multiplyBtn.disabled = true;
    divideBtn.disabled = true;
  }
})

numBtn1.addEventListener('click', () => {
  if (check() === false) {
  numOne.push(1);
  input.push(1);
  displayInput();
  console.log('numOne: ' + numOne)
  } else if (check() === true) {
    numTwo.push(1);
    input.push(1);
  displayInput();
    console.log('numTwo: ' + numTwo)
    addBtn.disabled = true;
    subtractBtn.disabled = true;
    multiplyBtn.disabled = true;
    divideBtn.disabled = true;
  }
})
numBtn2.addEventListener('click', () => {
  if (check() === false) {
  numOne.push(2);
  input.push(2);
  displayInput();
  console.log('numOne: ' + numOne)
  } else if (check() === true) {
    numTwo.push(2);
    input.push(2);
  displayInput();
    console.log('numTwo: ' + numTwo)
    addBtn.disabled = true;
    subtractBtn.disabled = true;
    multiplyBtn.disabled = true;
    divideBtn.disabled = true;
  }
})
numBtn3.addEventListener('click', () => {
  if (check() === false) {
  numOne.push(3);
  input.push(3);
  displayInput();
  console.log('numOne: ' + numOne)
  } else if (check() === true) {
    numTwo.push(3);
    input.push(3);
  displayInput();
    console.log('numTwo: ' + numTwo)
    addBtn.disabled = true;
    subtractBtn.disabled = true;
    multiplyBtn.disabled = true;
    divideBtn.disabled = true;
  }
})
numBtn4.addEventListener('click', () => {
  if (check() === false) {
  numOne.push(4);
  input.push(4);
  displayInput();
  console.log('numOne: ' + numOne)
  } else if (check() === true) {
    numTwo.push(4);
    input.push(4);
  displayInput();
    console.log('numTwo: ' + numTwo)
    addBtn.disabled = true;
    subtractBtn.disabled = true;
    multiplyBtn.disabled = true;
    divideBtn.disabled = true;
  }
})
numBtn5.addEventListener('click', () => {
  if (check() === false) {
  numOne.push(5);
  input.push(5);
  displayInput();
  console.log('numOne: ' + numOne)
  } else if (check() === true) {
    numTwo.push(5);
    input.push(5);
  displayInput();
    console.log('numTwo: ' + numTwo)
    addBtn.disabled = true;
    subtractBtn.disabled = true;
    multiplyBtn.disabled = true;
    divideBtn.disabled = true;
  }
})
numBtn6.addEventListener('click', () => {
  if (check() === false) {
  numOne.push(6);
  input.push(6);
  displayInput();
  console.log('numOne: ' + numOne)
  } else if (check() === true) {
    numTwo.push(6);
    input.push(6);
  displayInput();
    console.log('numTwo: ' + numTwo)
    addBtn.disabled = true;
    subtractBtn.disabled = true;
    multiplyBtn.disabled = true;
    divideBtn.disabled = true;
  }
})
numBtn7.addEventListener('click', () => {
  if (check() === false) {
  numOne.push(7);
  input.push(7);
  displayInput();
  console.log('numOne: ' + numOne)
  } else if (check() === true) {
    numTwo.push(7);
    input.push(7);
  displayInput();
    console.log('numTwo: ' + numTwo)
    addBtn.disabled = true;
    subtractBtn.disabled = true;
    multiplyBtn.disabled = true;
    divideBtn.disabled = true;
  }
})
numBtn8.addEventListener('click', () => {
  if (check() === false) {
  numOne.push(8);
  input.push(8);
  displayInput();
  console.log('numOne: ' + numOne)
  } else if (check() === true) {
    numTwo.push(8);
    input.push(8);
  displayInput();
    console.log('numTwo: ' + numTwo)
    addBtn.disabled = true;
    subtractBtn.disabled = true;
    multiplyBtn.disabled = true;
    divideBtn.disabled = true;
  }
})
numBtn9.addEventListener('click', () => {
  if (check() === false) {
  numOne.push(9);
  input.push(9);
  displayInput();
  console.log('numOne: ' + numOne)
  } else if (check() === true) {
    numTwo.push(9);
    input.push(9);
  displayInput();
    console.log('numTwo: ' + numTwo)
    addBtn.disabled = true;
    subtractBtn.disabled = true;
    multiplyBtn.disabled = true;
    divideBtn.disabled = true;
  }
  })
  