const styleLink = document.querySelector('#theme-stylesheet');

let buttons = document.getElementsByClassName("button");
let arr = [...buttons];

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