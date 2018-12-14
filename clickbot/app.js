window.onload = function() {
  alert(window.innerHeight + ", " + window.innerWidth);
  // button holder div
  var bDiv = document.getElementById("holder");

  // create button with class id and text
  var b = document.createElement("button");
  b.classList.add("clickbot-button");
  b.id = "clickbot";
  var bText = document.createTextNode("Click Me!");

  b.appendChild(bText);
  bDiv.appendChild(b);

  // assigning the click count to 0 on start
  var clickCount = 0;

  // on button click function
  document.getElementById("clickbot").addEventListener("click", function() {
    ++clickCount;
    document.getElementById("score").innerHTML = "Score: " + clickCount;
    viewportLocate();
  });
};

// w3
function getRndInteger(min, max) {
  return Math.floor(Math.random() * (max - min + 1)) + min;
}

// viewport to get height & width to manipulate button position
function viewportLocate() {
  let newLocation = {
    x: getRndInteger(1, window.innerWidth),
    y: getRndInteger(1, window.innerHeight)
  };

  document.getElementById("clickbot").style.top = newLocation.y + "px";
  document.getElementById("clickbot").style.left = newLocation.x + "px";
  console.log(newLocation);
}
