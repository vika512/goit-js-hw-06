const font = document.querySelector('#font-size-control');
const text = document.querySelector('#text');

font.addEventListener('input', changeFontSize);

function changeFontSize() {
    text.style.fontSize = `${font.value}px`;
}