const bodyBackground = document.querySelector('body');
const colorButton = document.querySelector('.change-color');
const colorSpan = document.querySelector('.color');

function getRandomHexColor() {
  return `#${Math.floor(Math.random() * 16777215)
    .toString(16)
    .padStart(6, 0)}`;
}

function changeToRandomColor(event) {
  let randomColor = getRandomHexColor();
  bodyBackground.style.backgroundColor = randomColor;
  colorSpan.textContent = randomColor;
}

colorButton.addEventListener('click', changeToRandomColor);
