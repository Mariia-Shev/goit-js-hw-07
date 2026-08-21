const userInput = document.querySelector('#name-input');
const userTitle = document.querySelector('#name-output');

userInput.classList.add('user-input');
userTitle.classList.add('user-title');

// function swapLetters(event) {
//   userTitle.textContent = event.currentTarget.value;

//   if (event.currentTarget.value === '') {
//     userTitle.textContent = 'Anonymous';
//   }
// }

function swapLetters(event) {
  const trimmedValue = event.currentTarget.value.trim();

  if (trimmedValue === '') {
    userTitle.textContent = 'Anonymous';
  } else {
    userTitle.textContent = trimmedValue;
  }
}

userInput.addEventListener('input', swapLetters);
