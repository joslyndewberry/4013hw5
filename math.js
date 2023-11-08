form.addEventListener('Add', (e) => {
  let val1 = document.getElementById('num1').value;
  let val2 = document.getElementById('num2').value;
  
  let messages []
  if (isNaN(Number(val1)) {
    messages.push('Please Enter a Valid Number')
  }
}

function Add() {
  let val1 = document.getElementById('num1').value;
  let val2 = document.getElementById('num2').value;

  let sum = Number(val1) + Number(val2);
  
  document.getElementById('userTextOutput').innerHTML = sum;
}

function Subtract() {
  let val1 = document.getElementById('num1').value;
  let val2 = document.getElementById('num2').value;

  let diff = Number(val1) - Number(val2);
  
  document.getElementById('userTextOutput').innerHTML = diff;
}

function Multiply() {
  let val1 = document.getElementById('num1').value;
  let val2 = document.getElementById('num2').value;

  let num = Number(val1) * Number(val2);
  
  document.getElementById('userTextOutput').innerHTML = num;
}

function Divide() {
  let val1 = document.getElementById('num1').value;
  let val2 = document.getElementById('num2').value;

  let division = Number(val1) / Number(val2);
  
  document.getElementById('userTextOutput').innerHTML = division;
}
