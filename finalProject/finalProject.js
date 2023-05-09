//Global variables
var a = 1.4, b = -2.1, c = 2.8, d = -2.5;
var aSlider, bSlider, cSlider, dSlider;
var R = 255, G = 0, B = 255;
var redSlider, greenSlider, blueSlider;
var aSliderLabel, bSliderLabel, cSliderLabel, dSliderLabel;
var redSliderLabel, greenSliderLabel, blueSliderLabel;
//calls reset button from HTML
var resetButton = document.getElementById("reset-button");
var x = 1, y = 1;
//sets the boolean to false and allows draw function to execute when loaded or refreshed
let isPaused = false; 

function setup() {
 //fetches sliders from my HTML document
  aSlider = document.getElementById("a-slider");
  bSlider = document.getElementById("b-slider");
  cSlider = document.getElementById("c-slider");
  dSlider = document.getElementById("d-slider");
  redSlider = document.getElementById("red-slider");
  greenSlider = document.getElementById("green-slider");
  blueSlider = document.getElementById("blue-slider");

  // Set slider values to those of the global variables
  aSlider.value = a;
  bSlider.value = b;
  cSlider.value = c;
  dSlider.value = d;
  redSlider.value = R;
  greenSlider.value = G;
  blueSlider.value = B;

  // implaments slider input into updatedraw() and updatecolor() functions
  aSlider.addEventListener("input", updateDraw);
  bSlider.addEventListener("input", updateDraw);
  cSlider.addEventListener("input", updateDraw);
  dSlider.addEventListener("input", updateDraw);
  redSlider.addEventListener("input", updateColors);
  greenSlider.addEventListener("input", updateColors);
  blueSlider.addEventListener("input", updateColors);

  //calls functions
  updateColors();
  updateDraw();

  //creates a canvas to plot points on
  createCanvas(windowWidth, windowHeight);
  //sets my background as black
  background(0);
  //sets RGB values = to those of the global variables, and uses the argument of alpha to help create more depth
  stroke(R, G, B, 50);
}

//draw function plots the points using the de Jong attractor equations
function draw() {
    //if statment checks the pause button has been clicked or not from the event listener below
  if (!isPaused){
    //plots 1,000 points per second, equations for drawing the attractor
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

//updates the variable values based off of the slider input, and parsefloat converts the string values into floats
function updateDraw() {
  a = parseFloat(aSlider.value);
  b = parseFloat(bSlider.value);
  c = parseFloat(cSlider.value);
  d = parseFloat(dSlider.value);
 
}
//updates colors baseed off of slider input, parseint converts string values into intiger values
function updateColors() {
  R = parseInt(redSlider.value);
  G = parseInt(greenSlider.value);
  B = parseInt(blueSlider.value);
  stroke(R, G, B, 50);
}

//reset button clears background by making it black
resetButton.addEventListener("click", function() {
background(0);
});

//fetches button from html
const pauseResumeBtn = document.getElementById("pause-resume-button");
//adds functionality with a click event listener, which check the boolean to see if isPaused is ture or false
pauseResumeBtn.addEventListener("click", function() {
  isPaused = !isPaused; //switches between being paused and resumed
  if (isPaused) {
    pauseResumeBtn.textContent = "Resume"; // update the button text
  } else {
    pauseResumeBtn.textContent = "Pause"; // update the button text
  }
});
