const getRandomHexColor = () => {
  return `#${Math.floor(Math.random() * 16777215)
    .toString(16)
    .padStart(6, 0)}`;
};

const bodyEl = document.querySelector('body');
const color = document.querySelector('.color');
const changeColorBtn = document.querySelector('.change-color');

changeColorBtn.addEventListener('click', changeBgColor);

function changeBgColor() {
  const colorName = getRandomHexColor();
  bodyEl.style.backgroundColor = colorName;
  color.textContent = colorName;
};

