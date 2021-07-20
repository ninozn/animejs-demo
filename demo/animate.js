// DOM element
var circle = anime({
  targets: ".circle",
  translateX: 200,
  autoplay: false
});

// JS object
var logEl = document.querySelector(".battery-log");

var battery = {
  charged: "0%",
  cycles: 120
};

console.log(battery);

var fillBattery = anime({
  targets: battery,
  charged: "100%",
  cycles: 130,
  round: 1,
  easing: "linear",
  autoplay: false,
  update: function() {
    logEl.innerHTML = JSON.stringify(battery);
  }
});

// Onlick buttons
document.querySelector("#animate-circle").onclick = circle.restart;
document.querySelector("#animate-battery").onclick = fillBattery.restart;
