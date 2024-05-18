// calculator functions

const display = document.getElementById('result');

//display function
const appendToDisplay = (input) => {
    display.value += input;
}

//clear display
const clearDisplay = () => {
    display.value = '';
}

//calculating function
const calculate = () => {
    try{
        display.value = eval(display.value)
    }
    catch(e) {
        display.value = 'Error';
    }
};