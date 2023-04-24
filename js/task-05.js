const inputText = document.querySelector('#name-input');
const outputText = document.querySelector('#name-output');
console.log(outputText.textContent);


inputText.addEventListener('input', onTextInput);

function onTextInput(event) {
    const inputData = event.currentTarget.value;
    if (inputData.length >= 1) {
        outputText.textContent = inputData;
    }
    else {
        outputText.textContent = 'Anonymous';
    };
}
