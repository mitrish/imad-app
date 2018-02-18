var button = document.getElementById('counter');
var counter =0;
button.onclick = function () {
  // make a request to the counter variable
  
  // Capture the response and store it in a variable
  
  // render the value of the counter variable in the span element of the html code
  counter += 1;
  var span = document.getElementById('count');
  span.innerHTML = counter.toString();
};