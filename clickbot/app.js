window.onload = function() {
  var bDiv = document.getElementById("holder");
  var b = document.createElement("button");
  b.classList.add("clickbot-button");
  b.id = "clickbot";
  var bText = document.createTextNode("Click Me!");
  b.appendChild(bText);
  bDiv.appendChild(b);

  var clickCount = 0;

  document.getElementById("clickbot").addEventListener("click", function() {
    ++clickCount;
    document.getElementById("score").innerHTML = "Score: " + clickCount;
  });
};

function viewport() {
  var myHeight = window.innerHeight;
  var myWidth = window.innerWidth;
}
