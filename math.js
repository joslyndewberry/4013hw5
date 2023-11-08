function Valid(val1, val2) {
  let messages [];
  if (isNaN(val1) || isNaN(val2)) {
    messages.push('Enter Valid Numbers');
  }
}

function Add() {
  let val1 = document.getElementById('num1').value;
  let val2 = document.getElementById('num2').value;

  Valid(val1, val2);

  let sum = Number(val1) + Number(val2);
  
  document.getElementById('userTextOutput').innerHTML = sum;
}

function Subtract() {
  let val1 = document.getElementById('num1').value;
  let val2 = document.getElementById('num2').value;

  Valid(val1, val2);

  let diff = Number(val1) - Number(val2);
  
  document.getElementById('userTextOutput').innerHTML = diff;
}

function Multiply() {
  let val1 = document.getElementById('num1').value;
  let val2 = document.getElementById('num2').value;
  
  Valid(val1, val2);

  let num = Number(val1) * Number(val2);
  
  document.getElementById('userTextOutput').innerHTML = num;
}

function Divide() {
  let val1 = document.getElementById('num1').value;
  let val2 = document.getElementById('num2').value;

  Valid(val1, val2);

  let division = Number(val1) / Number(val2);
  
  document.getElementById('userTextOutput').innerHTML = division;
}
