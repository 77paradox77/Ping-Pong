


// BUSINESS LOGIC
var dividingInput = function(pingPong) {
var listItems = '';

var results;
for (i=1; i <= pingPong; i++) {
  listItems += "<li>";
  if ((i % 3 === 0) && (i % 5 === 0)) {
    listItems += "<b>Ping-Pong</b>";
  } else if (i % 5 === 0) {
    listItems += "Pong"
  } else if (i % 3 === 0) {
    listItems += "Ping";
  } else {
    listItems += i;
  }


  return listItems
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
