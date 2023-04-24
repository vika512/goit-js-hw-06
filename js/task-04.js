let counterValue = 0;

const refs = {
    increaseBtn: document.querySelector('[data-action="increment"]'),
    decreaseBtn: document.querySelector('[data-action="decrement"]'),
    value: document.querySelector('#value'),
};

console.log(refs.value)

refs.increaseBtn.addEventListener('click', onIncrease);
refs.decreaseBtn.addEventListener('click', onDecrease);

function onIncrease() {
    counterValue += 1;
    refs.value.textContent = counterValue;
}

function onDecrease() {
    counterValue -= 1;
    refs.value.textContent = counterValue;
    return counterValue;
}

