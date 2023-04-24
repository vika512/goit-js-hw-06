const inputField = document.querySelector('#validation-input');

inputField.addEventListener('blur', checkValidity);

function checkValidity() {
    if (event.currentTarget.value.length < 6) {
        inputField.classList.remove('valid');
        inputField.classList.add('invalid');
    }

    else {
        inputField.classList.remove('invalid');
        inputField.classList.add('valid');
    }
};
