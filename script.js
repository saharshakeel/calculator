let displayValue = '0';

function updateDisplay() {
    document.getElementById('display').innerText = displayValue;
}

function appendTodisplay(value){
    if(displayvalue === '0') {
        displayvalue = value;
    } else{
        displayValue += value;
    }
    updateDisplay();
}
   

function clearDisplay() {
    displayValue = 0;
    updateDisplay();
}
function calculate() {
    try {
        displayValue = eval(displayValue). tostring();
    } catch(error) {
        displayValue = 'error';
    }
    updateDisplay();
}
document.addEventListener('DOMContentLoaded', () => {
    updateDisplay();
})