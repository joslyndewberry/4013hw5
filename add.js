function Add() {
  let val1 = document.getElementById('num1').value;
  let val2 = document.getElementById('num2').value;

  Number(val1);
  Number(val2);
  
  document.getElementById('userTextOutput').innerHTML = val1 + val2;
}
