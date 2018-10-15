//  throws more errors and disables some features in an effort to make your 
//	code more readable and accurate
'use strict';

function setup() {
	// sets canvas width & height
  createCanvas(720, 720);
  noCursor();

  // sets color mode to HSB, followed by color values
  colorMode(HSB, 360, 100, 100);
  // location from where the rectangle is drawn
  rectMode(CENTER);
  // no outline around rectangle
  noStroke();
}
