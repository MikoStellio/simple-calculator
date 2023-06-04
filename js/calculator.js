let screenInput = document.getElementById("screenInput");
let inputDisplay = '';

function addInput(value) {
    let inputValue = screenInput.value;

    if (inputValue === '0') {
        screenInput.value = value;
    } else {
        screenInput.value += value;
    }
}

function addNoPeriod(value) {
    let inputValue = screenInput.value;

    if (!inputValue.includes(value)) {
        screenInput.value += value;
    }
}

function addNoZero(value) {
    let inputValue = screenInput.value;

    if (inputValue === value) {
        screenInput.value = value;
    } else {
        screenInput.value += value;
    }
}

function addOperators(value) {
    let inputValue = screenInput.value;
    const comparisonValues = ['+', '-', '*', '/'];

    if (!comparisonValues.some(comparisonValue => inputValue.endsWith(comparisonValue))) {
        screenInput.value += value;
    }
}

function equalInput() {
    let inputValue = screenInput.value;

    inputValue = eval(inputValue);
    screenInput.value = inputValue;
}

function clearInput() {
    let inputValue = screenInput.value;

    screenInput.value = '';
}