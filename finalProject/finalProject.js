//Global variables
var a = 1.4, b = -2.1, c = 2.8, d = -2.5;
var aSlider, bSlider, cSlider, dSlider;
var R = 255, G = 0, B = 255;
var redSlider, greenSlider, blueSlider;
var aSliderLabel, bSliderLabel, cSliderLabel, dSliderLabel;
var redSliderLabel, greenSliderLabel, blueSliderLabel;
var resetButton = document.getElementById("reset-button");
var x = 1, y = 1;
let isPaused = false; // initialize the pause state to false

function setup() {
  // Get slider elements from the DOM
  aSlider = document.getElementById("a-slider");
  bSlider = document.getElementById("b-slider");
  cSlider = document.getElementById("c-slider");
  dSlider = document.getElementById("d-slider");
  redSlider = document.getElementById("red-slider");
  greenSlider = document.getElementById("green-slider");
  blueSlider = document.getElementById("blue-slider");

  // Set initial slider values
  aSlider.value = a;
  bSlider.value = b;
  cSlider.value = c;
  dSlider.value = d;
  redSlider.value = R;
  greenSlider.value = G;
  blueSlider.value = B;

  // Bind slider change events to update functions
  aSlider.addEventListener("input", updateDraw);
  bSlider.addEventListener("input", updateDraw);
  cSlider.addEventListener("input", updateDraw);
  dSlider.addEventListener("input", updateDraw);
  redSlider.addEventListener("input", updateColors);
  greenSlider.addEventListener("input", updateColors);
  blueSlider.addEventListener("input", updateColors);

  updateColors();
  updateDraw();

  createCanvas(windowWidth, windowHeight);
  background(0);
  stroke(R, G, B, 50);
}

function draw() {
  if (!isPaused){
    for (var i = 0; i < 1000; i++) {
      var ogX = x;
      var ogY = y;
      x = sin(a * ogY) - cos(b * ogX);
      y = sin(c * ogX) - cos(d * ogY);
      var scaledX = map(x, -2, 2, 0, width);
      var scaledY = map(y, -2, 2, 0, height);
      point(scaledX, scaledY)
    }
  }
}

function updateDraw() {
  a = parseFloat(aSlider.value);
  b = parseFloat(bSlider.value);
  c = parseFloat(cSlider.value);
  d = parseFloat(dSlider.value);
 
}

function updateColors() {
  R = parseInt(redSlider.value);
  G = parseInt(greenSlider.value);
  B = parseInt(blueSlider.value);
  stroke(R, G, B, 50);
}

resetButton.addEventListener("click", function() {
background(0);
});

const pauseResumeBtn = document.getElementById("pause-resume-button");
pauseResumeBtn.addEventListener("click", function() {
  isPaused = !isPaused; // toggle the pause state
  if (isPaused) {
    pauseResumeBtn.textContent = "Resume"; // update the button text
  } else {
    pauseResumeBtn.textContent = "Pause"; // update the button text
  }
});
