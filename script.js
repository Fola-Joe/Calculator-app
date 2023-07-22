//toggle function
const styleLink = document.querySelector('#theme-stylesheet');

let buttons = document.querySelectorAll(".button");
let arr = [...buttons];

// array is created where one can store non-live version of htmlCollection using the spread operator.
// a click event listener is added to each of the radio button such 
// that the opacity of any button clicked will be changed to “1”. 
// Then the array is filtered (the elements that were not clicked are picked out) 
// then their opacity is set to “0”
arr.forEach((element, index) => {
  element.addEventListener("click", () => {
    element.style.opacity = "1";
    if (index == 0) {
        styleLink.href = 'theme1.css';
    } else if (index == 1) {
        styleLink.href = 'theme2.css';
    } else {
        styleLink.href = 'theme3.css';
    }
    arr
      .filter(function (item) {
        return item != element;
      })
      .forEach((item) => {
        item.style.opacity = "0";
      });
  });
});


//calculation operations

const numButtons = document.querySelectorAll('.btn-1');
const operationBtns = document.querySelectorAll('.btn-1-2');
const equalBtn = document.querySelector('.btn-3');
const deleteBtn = document.querySelector('.btn-2-1');
const resetBtn = document.querySelector('.btn-2-2');

const displayScreen = document.querySelector('#screen');

function appendToDisplay(value) {
  displayScreen.value += value;
}

function calculate() {
  const result = displayScreen.value;
  try {
    const total = eval(result);
    displayScreen.value = total;
  } catch (error) {
    displayScreen.value = '';
  }
}

function clearDisplay() {
  displayScreen.value = '';
}


function deleteLastCharacter() {
  const result = displayScreen.value;
  displayScreen.value = result.slice(0, -1);
}