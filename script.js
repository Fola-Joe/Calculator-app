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
const displayScreen = document.querySelector('#screen');

//appending values as buttons are clicked
function appendToDisplay(value) {
  displayScreen.value += value;
}

//calculation function
function calculate() {
  const result = displayScreen.value;
  try {
    const total = eval(result);

    // Check if the result is Infinity or -Infinity (division by zero)
    if (!isFinite(total)) {
      displayScreen.value = 'Invalid input';
    }  
    // Check if the result is an integer (whole number)
    else if (Number.isInteger(total)) {
      displayScreen.value = total;
    } else {
      displayScreen.value = total.toFixed(7);
    }
  } catch (error) {
    displayScreen.value = '';
  }
}

//clear screen function
function clearDisplay() {
  displayScreen.value = '';
}

//deleting last character function
function deleteLastCharacter() {
  const result = displayScreen.value;
  displayScreen.value = result.slice(0, -1);
}