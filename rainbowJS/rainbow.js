var myRainbow2 = new Rainbow(["yellow", "blue"]);
var myRainbow = new Rainbow(["red", "blue", "green", "orange", "black"]);

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
    let ele = document.getElementById($id);
    if (ele.style.opacity == "0.3" || ele.style.background == "#111") {
      ele.style.opacity = "0";
      ele.style.background = "#e0f9fd";
    }
    const myInterval = setInterval(function() {
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

    this.intervalRef = myInterval;

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
    clearInterval(this.intervalRef);
    document.getElementById($id).style.background = "#111";
    document.getElementById($id).style.opacity = "0.2";
  };

  Rainbow.prototype.update = function(extra) {
    if (extra instanceof Array) {
      extra.forEach(element => {
        _colors.push(element);
        console.log(element);
      });
    }
  };

  //   this.update = function() {};
}
// myRainbow.startOn("rb1", 1000);

window.onload = function() {
  document.getElementById("b1").addEventListener("click", function() {
    myRainbow.startOn("rb1", 1000);
    console.log(myRainbow);
    alert("Wait :/");
  });

  document.getElementById("b2").addEventListener("click", function() {
    myRainbow.stopOn("rb1");
  });

  document.getElementById("update1").addEventListener("click", function() {
    myRainbow.update(["aqua", "coral"]);
  });

  document.getElementById("b3").addEventListener("click", function() {
    myRainbow2.startOn("rb2", 500);
    console.log(myRainbow2);
  });

  document.getElementById("b4").addEventListener("click", function() {
    myRainbow2.stopOn("rb2");
  });

  document.getElementById("update2").addEventListener("click", function() {
    myRainbow2.update(["aqua", "coral"]);
  });
};
