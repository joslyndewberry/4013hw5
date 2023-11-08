function Valid(val1, val2) {
  if (isNaN(val1) || isNaN(val2)) {
    return false;
  }
  else {
    return true;
  }
}

function Add() {
  let val1 = document.getElementById('num1').value;
  let val2 = document.getElementById('num2').value;

  if (Valid(val1, val2)) {
  let sum = Number(val1) + Number(val2);
  document.getElementById('userTextOutput').innerHTML = sum;
  }
  else {
    document.getElementById('userTextOutput').innerHTML = "Enter Valid Numbers";
  }
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
