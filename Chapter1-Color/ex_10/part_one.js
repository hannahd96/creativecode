//  throws more errors and disables some features in an effort to make code more readable and accurate
'use strict';

var colorCount = 20;
// creates an array for each HSB value
var hueValues = [];
var saturationValues = [];
var brightnessValues = [];
var actRandomSeed = 0;
// alpha value / opacity value / transparency value
var alphaValue = 100;

function setup() {
  // canvas is full width and height of window
  createCanvas(windowWidth, windowHeight);
  // using HSB color mode
  // color mode changes the way JS interprets color data
  colorMode(HSB, 360, 100, 100, 100);
  // no outline on the canvas
  noStroke();
}
