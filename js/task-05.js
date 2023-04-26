const inputText = document.querySelector('#name-input');
const outputText = document.querySelector('#name-output');
console.log(outputText.textContent);


inputText.addEventListener('input', onTextInput);

function onTextInput(event) {
    const inputData = event.currentTarget.value;
    if (inputData.length === 0 || inputData.trim() === '') {
        outputText.textContent = 'Anonymous';
    }
    else {
        outputText.textContent = inputData;
    };
}
