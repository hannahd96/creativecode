'use strict';

var stepX;
var stepY;

function setup() {
  createCanvas(800, 400);
  noStroke();
  colorMode(HSB, width, height, 100);
}

function draw() {
	// stepX is equal to x-position of mouse + 2
  stepX = mouseX + 2;
  // stepY is equal to y-position of mouse + 2
  stepY = mouseY + 2;

  // for loop : min of loop is 0, max is grid Y less than height and ??
  for (var gridY = 0; gridY < height; gridY += stepY) {
	  // for loop : min of loop is 0, max is grid X less than width and ??
    for (var gridX = 0; gridX < width; gridX += stepX) {
		// fill rectangle 
      fill(gridX, height - gridY, 100);
      rect(gridX, gridY, stepX, stepY);
    }
  }
}
