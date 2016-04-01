


// BUSINESS LOGIC
var dividingInput = function(pingPong) {
var listItems = [];

var index;
for (index=1; index <= pingPong; index++) {
  listItems += "<li>";
  if ((index % 3 === 0) && (index % 5 === 0)) {
    listItems += "<b>Ping-Pong</b>";
  }
  else if (index % 5 === 0) {
    listItems += "Pong";
  }
  else if (index % 3 === 0) {
    listItems += "Ping";
  }
  else {
    listItems += index;
  }

  document.getElementById("results").innerHTML = listItems;
}
}

// USER INTERFACE LOGIC
$(document).ready(function() {
  $("form#ping-pong").submit(function(event) {
    var userInput = parseInt($("#input").val());
    var results = dividingInput(userInput);
    event.preventDefault();
    console.log(userInput);

  });
});


// Reference a lot of different works from github and other sources and compiled several sources into
// this project to make it work. In the future I will try my best to make things work from more of, and only, my raw code. scratch and be more thorough.
