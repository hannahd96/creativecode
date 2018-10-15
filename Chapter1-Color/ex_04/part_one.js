//  throws more errors and disables some features in an effort to make code more readable and accurate
'use strict';

// global variables
var tileCountX = 2;
var tileCountY = 10;

// global arrays
var colorsLeft = []
var colorsRight = [];
var colors = [];

// global boolean value
var interpolateShortest = true;

function setup() {
// sets up canvas width and height
  createCanvas(800, 800);
  colorMode(HSB);
// no shape outline
  noStroke();
 // selects random color between a range
  shakeColors();
}
