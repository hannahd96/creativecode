'use strict';

var tileCountX = 2;
var tileCountY = 10;

var colorsLeft = []
var colorsRight = [];
var colors = [];

var interpolateShortest = true;

function setup() {
  createCanvas(800, 800);
  colorMode(HSB);
  noStroke();
  shakeColors();
}

function draw() {
// number of tiles on x-axis
// The map() method creates a new array with the results of calling a function for every array element.
// The map() method calls the provided function once for each element in an array, in order.
  tileCountX = int(map(mouseX, 0, width, 2, 100));
// number of tiles on y-axis 
  tileCountY = int(map(mouseY, 0, height, 2, 10));
  // width of the tile is equal to the canvas width divided by the number of tiles on the x-axis
  var tileWidth = width / tileCountX;
  // height of the tile is equal to the canvas height divided by the number of tiles on the y-axis
  var tileHeight = height / tileCountY;
  var interCol;
  colors = [];

  // for loop; y-axis grid has tile count less than max tile count for y-axis declared at top of document
  for (var gridY = 0; gridY < tileCountY; gridY++) {
    var col1 = colorsLeft[gridY];
    var col2 = colorsRight[gridY];
	// for loop; x-axis grid has tile count less than max tile count for x-axis declared at top of document
    for (var gridX = 0; gridX < tileCountX; gridX++) {
		// The map() method creates a new array with the results of calling a function for every array element.
		// The map() method calls the provided function once for each element in an array, in order.
      var amount = map(gridX, 0, tileCountX - 1, 0, 1);

      if (interpolateShortest) {
        // switch to rgb
        colorMode(RGB);
        interCol = lerpColor(col1, col2, amount);
        // switch back
        colorMode(HSB);
      } else {
		// Calculates a color between two colors at a specific increment	
		interCol = lerpColor(col1, col2, amount);
      }

      fill(interCol);

      var posX = tileWidth * gridX;
      var posY = tileHeight * gridY;
	  // rectangle position
      rect(posX, posY, tileWidth, tileHeight);

      // save color for potential ase export
      colors.push(interCol);
    }
  }
}
// chooses random colors from array 
function shakeColors() {
  for (var i = 0; i < tileCountY; i++) {
    colorsLeft[i] = color(random(0, 60), random(0, 100), 100);
    colorsRight[i] = color(random(160, 190), 100, random(0, 100));
  }
}

