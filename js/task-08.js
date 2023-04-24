const form = document.querySelector('.login-form');


form.addEventListener('submit', (event) => {
    event.preventDefault();

    const formEl = event.currentTarget.elements;
    const email = formEl.email.value;
    const pass = formEl.password.value;

    if (email === '' || pass === '') {
        alert('Fill out the required field');
    }
    else {
        const userData = {
            email: email,
            password: pass,
        };

        console.log(userData);
        form.reset();
    };
});





