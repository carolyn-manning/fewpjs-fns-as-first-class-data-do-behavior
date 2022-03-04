/* Given Code, don't edit */

document.querySelector("button").addEventListener("click", handleClick);

function handleClick(e) {
  const timeString = document.getElementById('time').value
  displayMessage(greet(timeString))
}

function greet(timeString) {
  const time = parseInt(timeString)
  if ( time < 12) return "Good Morning"
  if ( time > 17) return "Good Evening"
  if ( time >= 12 && time <= 17) return "Good Afternoon"
}

function displayMessage(message) {
  document.getElementById("greeting").innerHTML = message;
}

/* End Given Code, don't edit above here...*/

/* Write your implementation of greet() */
/* Write your implementation of displayMessage() */
