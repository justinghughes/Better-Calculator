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
let signKey = 'first';
const displayPara = document.createElement('p');

function check() {
    if (key === 'end') {
        return true;
    } else {
        return false;
    }
}

function operate() {
    console.log(typeof(numOne))
    if (typeof numOne == 'number') {
      numTwo = Number(numTwo.join(""));
      result = numOne + numTwo;
      numOne = result;
      numTwo = [];
      console.log('numOne result: ' + numOne)
    } else {
      numOne = Number(numOne.join(""));
      numTwo = Number(numTwo.join(""));
      result = numOne + numTwo;
      numOne = result;
      numTwo = [];
      console.log('numOne result: ' + numOne)
    }
    equalsBtn.addEventListener('click', () => {
        displayPara.textContent = result;
        displayContainer.appendChild(displayPara);
      })
}

function clickAdd() {
    addBtn.addEventListener('click', () => {
        if (signKey === 'first') {
          operator = '+'
          key = 'end';
          input.push('+');
          displayInput();
          console.log(operator);
          signKey = 'notfirst';
        } else {
          operate();
          input.push('+');
          displayInput();
          console.log('+we');
        }
      }
    )
  }
  clickAdd();

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
    }
  })
  