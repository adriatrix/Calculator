var expression = "";
var reset = false
var notclicked = true;
console.log(reset);

function updateDisplay(val) {
  if (notclicked) {
    expression = expression + val;
    document.getElementById("display").innerHTML = expression;
    notclicked = false;
  }
  reset = false;
}

function updateDisplayNumber(val) {
	// console.log(val);
  if (reset) {
    // console.log(reset);
    expression = val;
    reset = false;
  } else {
    expression = expression + val;
    // console.log(reset);
  }
  document.getElementById("display").innerHTML = expression;
  notclicked = true;
}

function computeExpression () {
	var result = eval(expression);
  // console.log(result)
  if (result.toString().length > 15) result = result.toFixed(15);
	document.getElementById("display").innerHTML = result;
	expression = result;
  reset = true;
  notclicked = true;
}

function clearDisplay() {
	expression = "";
  reset = false;
  notclicked = true;
	document.getElementById("display").innerHTML = "0";
}

function deleteChar() {
	if (expression.length > 1) {
		expression = expression.substr(0, expression.length-1)
		document.getElementById("display").innerHTML = expression;
	} else {
		document.getElementById("display").innerHTML = "0";
	}
}

function computePercent() {
}

// Get the modal
var modal = document.getElementById('myModal');

// Get the button that opens the modal
var btn = document.getElementById("myBtn");

// Get the <span> element that closes the modal
var span = document.getElementsByClassName("close")[0];

// When the user clicks on the button, open the modal
btn.onclick = function() {
    modal.style.display = "block";
}

// When the user clicks on <span> (x), close the modal
span.onclick = function() {
    modal.style.display = "none";
}

// When the user clicks anywhere outside of the modal, close it
window.onclick = function(event) {
    if (event.target == modal) {
        modal.style.display = "none";
    }
}
