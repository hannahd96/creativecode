//  throws more errors and disables some features in an effort to make code more readable and accurate
'use strict';

// global variables
var tileCountX = 50;
var tileCountY = 10;

// global arrays
var hueValues = [];
var saturationValues = [];
var brightnessValues = [];

// sets canvas width and height
function setup() {
  createCanvas(windowWidth, windowHeight);
  // color mode is HSB; 
  // then range for red or hue; 
  // range for green or saturation; 
  // range for blue or brightness; 
  // range for alpha
  colorMode(HSB, 360, 100, 100, 100);
  // no canvas outline
  noStroke();

  // init with random values
  for (var i = 0; i < tileCountX; i++) {
    hueValues[i] = random(360);
    saturationValues[i] = random(100);
    brightnessValues[i] = random(100);
  }
}

