<?php
$pageTitle = "Add";
include "view-header.php";
include "add.js";
?>     

    <p id="output">Add Two Values</p>
    <input type="text" id="num1">
    <input type="text" id="num2">
    <br>
    <button onclick="Add()">Add</button>
    <p id="userTextOutput"></p>

<?php
include "view-footer.php"
?>
