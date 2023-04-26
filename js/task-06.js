const inputField = document.querySelector('#validation-input');

inputField.addEventListener('blur', checkValidity);

function checkValidity() {
    console.log(Number(inputField.dataset.length));
    console.log(event.currentTarget.value.length)
    if (Number(inputField.dataset.length) === event.currentTarget.value.length) {
        inputField.classList.remove('invalid');
        inputField.classList.add('valid');
    }

    else {
        inputField.classList.remove('valid');
        inputField.classList.add('invalid');
    }
};
