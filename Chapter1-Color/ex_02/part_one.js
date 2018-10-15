//  throws more errors and disables some features in an effort to make your 
//	code more readable and accurate
'use strict';

// declare global variables
var stepX;
var stepY;

function setup() {
	// sets canvas width & height
  createCanvas(800, 400);
  // no outline
  noStroke();
  // sets color mode to HSB, followed by color values
  colorMode(HSB, width, height, 100);
}
