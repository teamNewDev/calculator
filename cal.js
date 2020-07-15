const value_1 = document.querySelector('.num1');
const value_2 = document.querySelector('.num2');
const value_3 = document.querySelector('.num3');
const value_4 = document.querySelector('.num4');
const value_5 = document.querySelector('.num5');
const value_6 = document.querySelector('.num6');
const value_7 = document.querySelector('.num7');
const value_8 = document.querySelector('.num8');
const value_9 = document.querySelector('.num9');
const value_0 = document.querySelector('.num0');
const addOperator = document.querySelector('.addition');
const minusOperator = document.querySelector('.subtraction');
const divisionOperator = document.querySelector('.division');
const productOperator = document.querySelector('.product');
const clear = document.querySelector('.clear');
const equalOperator = document.querySelector('.equalSign');
const display = document.querySelector('.display');

//Event listeners for each button

value_0.addEventListener('click', () => {
  display.append(0);
});

value_1.addEventListener('click', () => {
  display.append(1);
});

value_2.addEventListener('click', () => {
  display.append(2);
});

value_3.addEventListener('click', () => {
  display.append(3);
});

value_4.addEventListener("click", () => {
  display.append(4);
});

value_5.addEventListener('click', () => {
  display.append(5);
});

value_6.addEventListener('click', () => {
  display.append(6);
});

value_7.addEventListener('click', () => {
  display.append(7);
});

value_8.addEventListener('click', () => {
  display.append(8);
});

value_9.addEventListener('click', () => {
  display.append(9);
});

/**
 * Event listener for operators
 */

addOperator.addEventListener('click', () => {
  display.append('+');
});

minusOperator.addEventListener('click', () => {
  display.append('-');
});

productOperator.addEventListener('click', () => {
    display.append('*');
})

divisionOperator.addEventListener('click', () => {
  display.append('/');
});

/**
 * 
 * Event listener for clear button
 */

clear.addEventListener('click', () => {
  display.textContent = '';
});

equalOperator.addEventListener('click', () => {
  
});

/**
 * 
 * function to Add values
 */
const appendToDomElement = (value, element) =>{
  display.append(value + element)
}
