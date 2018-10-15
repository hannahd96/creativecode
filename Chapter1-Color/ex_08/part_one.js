//  throws more errors and disables some features in an effort to make code more readable and accurate
'use strict';

// global variables
'use strict';

// global arrays and variables
var colorCount = 20;
var hueValues = [];
var saturationValues = [];
var brightnessValues = [];
var actRandomSeed = 0;
var alphaValue = 27;

// 
function setup() {
	// create canvas; sets width to full width of window
	// sets height to full height of window
  createCanvas(windowWidth, windowHeight);
  // color mode is HSB; hue, saturation and brightness followed by aplha
  colorMode(HSB, 360, 100, 100, 100);
  // no outline on canvas
  noStroke();
}


