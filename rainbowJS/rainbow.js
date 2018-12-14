function Rainbow(params) {
  var _colors = new Array();
  var checker = true;
  var color;

  if (params instanceof Array && params.length !== 0) {
    for (let i = 0; i < params.length; i++) {
      const element = params[i];
      _colors.push(element);
    }
  } else alert("Specify some colors for your rainbow");

  Rainbow.prototype.startOn = function timerFunc($id, timeout = 1000) {
    setInterval(function() {
      //   console.log("Hell0");
      for (var i = 0; i < _colors.length; i++) {
        (function(index) {
          setTimeout(function() {
            let color = _colors[index];
            console.log(_colors[index]);
            showColor(color);
          }, index * timeout);
        })(i);
      }
    }, _colors.length * timeout);

    function showColor(e) {
      var thatDiv = document.getElementById($id);
      thatDiv.style.backgroundColor = e;
    }

    //   color = _colors[i];
    //   console.log(color);
    //   setTimeout(function(i) {
    //     myRainbowWatch(_colors[i]);
    //   }, 1000);

    // function myRainbowWatch(t) {
    //   setInterval(function() {
    //     console.log(t);
    //   }, 1000);
    // }

    //   setInterval(function showColor(e) {
    //     var thatDiv = document.getElementById($id);
    //     thatDiv.style.backgroundColor = e;
    //   }, timeout);

    //   setInterval(function() {
    //     for (let i = 0; i < _colors.length; i++) {
    //       var e = _colors[i];
    //       setInterval(() => {
    //         var thatDiv = document.getElementById($id);
    //         thatDiv.style.backgroundColor = e;
    //       });
    //       console.log(e);
    //     }
    //   }, timeout);
    // }
  };

  Rainbow.prototype.stopOn = function($id) {
    console.log("hello");
  };

  //   this.update = function() {};
}

// myRainbow.startOn("rb1", 1000);

window.onload = function() {
  document.getElementById("b1").addEventListener("click", function() {
    var myRainbow = new Rainbow(["red", "blue", "green", "orange", "black"]);
    myRainbow.startOn("rb1", 1000);
  });

  document.getElementById("b2").addEventListener("click", function() {
    myRainbow.stopOn();
  });

  document.getElementById("b3").addEventListener("click", function() {
    var myRainbow = new Rainbow(["yellow", "blue"]);
    myRainbow.startOn("rb2", 1000);
  });

  document.getElementById("b4").addEventListener("click", function() {
    myRainbow.stopOn();
  });
};
