function check() {
    console.log('test');
}



function minus() {
    if (outputInt > 0) {
    outputInt -=1;
    output.textContent = outputInt; }
    
}

function plus() {
    if (outputInt < 100) {
    outputInt +=1;
    output.textContent = outputInt;
    }
}

function random() {
    outputInt = randomNumber(0, 100);
    output.textContent = outputInt;
}

function randomNumber(min, max) {
    const num = Math.floor(Math.random() * (max - min + 1)) + min;
    return num;
  }



const output = document.querySelector('.output');
let outputInt = parseInt(output.textContent);
console.log(outputInt);


var slider = document.getElementById("myRange");
var sliderOutput = document.querySelector(".slider-output");
const Output = document.getElementById(".output");
const incrementButton = document.getElementById("increment-button");
const decrementButton = document.getElementById("decrement-button");


let incrementTimer;
let decrementTimer;
let incrementVelocity = 1;
let decrementVelocity = 1;

// Update the current slider value (each time you drag the slider handle)

function update() {
  sliderOutput.textContent = "Volume: " + slider.value;
}

slider.addEventListener("input", () => {
  output.innerHTML = "Volume: " + slider.value;
});

// Generate and set random value when slider is clicked
slider.addEventListener("input", () => {
    const randomValue = Math.floor(Math.random() * 101);
    slider.value = randomValue;
    output.innerHTML = "Volume: " + randomValue;
  });
  

 // Increase increment velocity and update slider value and output element
function increment() {
    slider.value = parseInt(slider.value) + incrementVelocity;
    output.innerHTML = "Volume: " + slider.value;
    incrementVelocity++;
    incrementTimer = setTimeout(increment, 50);
    }

// Increase decrement velocity and update slider value and output element
function decrement() {
    slider.value = parseInt(slider.value) - decrementVelocity;
    output.innerHTML = "Volume: " + slider.value;
    decrementVelocity++;
    decrementTimer = setTimeout(decrement, 50);
  }

// Add event listeners to increment and decrement buttons
incrementButton.addEventListener("mousedown", () => {
    incrementVelocity = 1;
    increment();
    });

    decrementButton.addEventListener("mousedown", () => {
        decrementVelocity = 1;
        decrement();
      });


         // Stop timer when space bar is pressed
         window.addEventListener("keydown", (event) => {
            if (event.code === "Space") {
              clearTimeout(incrementTimer);
              clearTimeout(decrementTimer);
              incrementVelocity = 1;
              decrementVelocity = 1;
            }
          });