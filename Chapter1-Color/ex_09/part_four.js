'use strict';

var colorCount = 20;
var hueValues = [];
var saturationValues = [];
var brightnessValues = [];
var actRandomSeed = 0;
var alphaValue = 27;

function setup() {
  createCanvas(windowWidth, windowHeight);
  colorMode(HSB, 360, 100, 100, 100);
  noStroke();
}

function draw() {
  noLoop();
  background(0);
  randomSeed(actRandomSeed);

  for (var i = 0; i < colorCount; i++) {
    if (i % 2 == 0) {
      hueValues[i] = random(360);
      saturationValues[i] = 100;
      brightnessValues[i] = random(100);
    } else {
      hueValues[i] = 195;
      saturationValues[i] = random(20);
      brightnessValues[i] = 100;
    }
  }

  var counter = 0;
  var rowCount = int(random(5, 30));
  var rowHeight = height / rowCount;

  for (var i = rowCount; i >= 0; i--) {
    var partCount = i + 1;
    var parts = [];

    for (var ii = 0; ii < partCount; ii++) {
      if (random() < 0.075) {
        var fragments = int(random(2, 20));
        partCount = partCount + fragments;
        for (var iii = 0; iii < fragments; iii++) {
          parts.push(random(2));
        }
      } else {
        parts.push(random(2, 20));
      }
    }

    var sumPartsTotal = 0;
    for (var ii = 0; ii < partCount; ii++) {
      sumPartsTotal += parts[ii];
    }

    var sumPartsNow = 0;
    for (var ii = 0; ii < parts.length; ii++) {
      sumPartsNow += parts[ii];

      if (random() < 0.45) {
        var x = map(sumPartsNow, 0, sumPartsTotal, 0, width);
        var y = rowHeight * i;
        var w = -map(parts[ii], 0, sumPartsTotal, 0, width);
        var h = rowHeight * 1.5;

        var index = counter % colorCount;
        var col1 = color(0);
        var col2 = color(hueValues[index], saturationValues[index], brightnessValues[index], alphaValue);
        gradient(x, y, w, h, col1, col2);
      }

      counter++;
    }
  }
}

function gradient(x, y, w, h, c1, c2) {
  var ctx = drawingContext; // global canvas context p5.js var
  var grd = ctx.createLinearGradient(x, y, x, y + h);
  // addColorStop() method specifies the color stops, and its position along the gradient
  grd.addColorStop(0, c1.toString());
  grd.addColorStop(1, c2.toString());
  // fillStyle property sets or returns the color, gradient, or pattern used to fill the drawing
	ctx.fillStyle = grd;
	ctx.fillRect(x, y, w, h);
}

function mouseReleased() {
  // sets seed value to random
  actRandomSeed = random(100000);
  // loops
  loop();
}

function keyPressed() {
  // save canvas as PNG and name it with timestamp - does this using generative design library
  if (key == 's' || key == 'S') saveCanvas(gd.timestamp(), 'png');
  if (key == 'c' || key == 'C') {
    // -- save an ase file (adobe swatch export) --
    var colors = []; // colors array
    // for loop goes through saturation, hue and brightness values
    for (var i = 0; i < hueValues.length; i++) {
      colors.push(color(hueValues[i], saturationValues[i], brightnessValues[i]));
    }
    // write new file using generative design library as an ase file (adobe swatch export)
    writeFile([gd.ase.encode(colors)], gd.timestamp(), 'ase');
  }
}
