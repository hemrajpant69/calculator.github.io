let historyValueElement = document.getElementById('history-value');
let outputValueElement = document.getElementById('output-value');

let calculationHistory = '';
let currentOutputValue = '';

let calculate = () => {
    return eval(calculationHistory);
};

let renderOutput = () => {
    outputValueElement.innerText = currentOutputValue;
    historyValueElement.innerText = calculationHistory;
};

let numberButtons = document.querySelectorAll('.number');
numberButtons.forEach(numberButton => {
    numberButton.addEventListener('click', (event) => {
        currentOutputValue += event.target.getAttribute('data-input');
        renderOutput();
    });
});

let operatorButtons = document.querySelectorAll('.operator');
operatorButtons.forEach(operatorButton => {
    operatorButton.addEventListener('click', (event) => {
        if (currentOutputValue !== '') {
            calculationHistory += currentOutputValue;
            currentOutputValue = '';
        }
        if (event.target.getAttribute('data-input') !== '=') {
            calculationHistory += ` ${event.target.getAttribute('data-input')} `;
        } else {
            currentOutputValue = calculate();
            calculationHistory = '';
        }
        renderOutput();
    });
});

document.getElementById('clear').addEventListener('click', () => {
    calculationHistory = '';
    currentOutputValue = '';
    renderOutput();
});

document.getElementById('backspace').addEventListener('click', () => {
    currentOutputValue = currentOutputValue.slice(0, -1);
    renderOutput();
});
