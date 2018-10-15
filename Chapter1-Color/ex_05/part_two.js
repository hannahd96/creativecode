'use strict';

var img;
var colors = [];
var sortMode = null;

function preload() {
  img = loadImage('data/pictures/pic1.jpg');
}

function setup() {
  createCanvas(600, 600);
  noCursor(); 
  noStroke(); 
}

function draw() {
	// floor(): calculates the closest int value that is less than or equal to the value of the parameter
  var tileCount = floor(width / max(mouseX, 5));
  var rectSize = width / tileCount;
	// loads pixels from image into colors array
  img.loadPixels();
  colors = [];
	// for loop printing out tiles into canvas accross x and y axis
  for (var gridY = 0; gridY < tileCount; gridY++) {
    for (var gridX = 0; gridX < tileCount; gridX++) {
      var px = int(gridX * rectSize);
      var py = int(gridY * rectSize);
      var i = (py * img.width + px) * 4;
	  // Creates colors for storing in variables of the color datatype.
	  // The parameters are interpreted as RGB or HSB values depending on the current colorMode().
      var c = color(img.pixels[i], img.pixels[i + 1], img.pixels[i + 2], img.pixels[i + 3]);
      // push() method adds new items to the end of an array, and returns the new length
	  colors.push(c);
    }
  }
// gd = generative design library
  gd.sortColors(colors, sortMode);

  var i = 0;
  for (var gridY = 0; gridY < tileCount; gridY++) {
    for (var gridX = 0; gridX < tileCount; gridX++) {
		// fils rectangles by going through colors array - this contains each pixel image
      fill(colors[i]);
      rect(gridX * rectSize, gridY * rectSize, rectSize, rectSize);
      i++;
    }
  }
}

