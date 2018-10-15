//  throws more errors and disables some features in an effort to make code more readable and accurate
'use strict';
// global variables
var img;
var colors = []; // array
var sortMode = null;
// preloads image using path in the brackets
function preload() {
  img = loadImage('data/pictures/pic1.jpg');
}
// sets up canvas, its width and height
function setup() {
  createCanvas(600, 600);
  noCursor(); // cursor disappears when canvas is hovered over
  noStroke(); // no canvas outline
}

